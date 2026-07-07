const Groq = require('groq-sdk');
const NodeCache = require('node-cache');

const responseCache = new NodeCache({
    stdTTL: 3600,
    checkperiod: 600
});

const initializeGroq = () => {
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        console.warn('⚠️ GROQ_API_KEY not found.');
        return null;
    }

    return new Groq({ apiKey });
};

const groq = initializeGroq();

async function callAI(systemPrompt, userContent, options = {}) {
    if (!groq) {
        throw new Error('Groq AI is not initialized.');
    }

    const {
        model = 'llama-3.1-8b-instant',
        temperature = 0.5,
        maxOutputTokens = 1024,
        cacheKey = null
    } = options;

    if (cacheKey) {
        const cached = responseCache.get(cacheKey);
        if (cached) return cached;
    }

    try {
        let messages = [];

        if (Array.isArray(userContent)) {
            if (systemPrompt) {
                messages.push({
                    role: 'system',
                    content: systemPrompt
                });
            }

            messages.push(
                ...userContent.map(msg => ({
                    role: msg.role === 'assistant' ? 'assistant' : 'user',
                    content: msg.content
                }))
            );
        } else {
            if (systemPrompt) {
                messages.push({
                    role: 'system',
                    content: systemPrompt
                });
            }

            messages.push({
                role: 'user',
                content: userContent
            });
        }

        const completion = await groq.chat.completions.create({
            model,
            messages,
            temperature,
            max_tokens: maxOutputTokens,
            stream: false
        });

        const response = {
            choices: [{
                message: {
                    content: completion.choices?.[0]?.message?.content || ''
                }
            }],
            usage: completion.usage,
            model
        };

        if (cacheKey) {
            responseCache.set(cacheKey, response);
        }

        return response;

    } catch (error) {

        if (
            error.status === 429 ||
            error.message?.includes('rate_limit') ||
            error.message?.includes('RATE_LIMIT_EXCEEDED')
        ) {
            throw new Error('Groq rate limit exceeded. Wait 15-30 seconds.');
        }

        if (
            error.message?.includes('invalid_api_key') ||
            error.message?.includes('API_KEY_INVALID')
        ) {
            throw new Error('Invalid Groq API key.');
        }

        throw error;
    }
}
async function* callAIStream(systemPrompt, userContent, options = {}) {
    if (!groq) {
        throw new Error('Groq AI is not initialized.');
    }

    const {
        model = 'llama-3.1-8b-instant',
        temperature = 0.5,
        maxOutputTokens = 1024
    } = options;

    try {
        let messages = [];

        if (Array.isArray(userContent)) {
            if (systemPrompt) {
                messages.push({
                    role: 'system',
                    content: systemPrompt
                });
            }

            messages.push(
                ...userContent.map(msg => ({
                    role: msg.role === 'assistant' ? 'assistant' : 'user',
                    content: msg.content
                }))
            );
        } else {
            if (systemPrompt) {
                messages.push({
                    role: 'system',
                    content: systemPrompt
                });
            }

            messages.push({
                role: 'user',
                content: userContent
            });
        }

        const stream = await groq.chat.completions.create({
            model,
            messages,
            temperature,
            max_tokens: maxOutputTokens,
            stream: true
        });

        for await (const chunk of stream) {
            const text = chunk.choices?.[0]?.delta?.content;

            if (text) {
                yield text;
            }
        }

    } catch (error) {

        if (
            error.status === 429 ||
            error.message?.includes('RATE_LIMIT_EXCEEDED') ||
            error.message?.includes('rate_limit')
        ) {
            throw new Error('Groq rate limit exceeded. Wait 15-30 seconds.');
        }

        if (
            error.message?.includes('invalid_api_key') ||
            error.message?.includes('API_KEY_INVALID')
        ) {
            throw new Error('Invalid Groq API key.');
        }

        console.error('Groq Streaming Error:', error);

        throw new Error(error.message);
    }
}
async function callVisionAI(systemPrompt, imageBase64, userPrompt = 'Analyze this image', options = {}) {
    if (!groq) {
        throw new Error('Groq AI is not initialized.');
    }

    const {
        model = 'meta-llama/llama-4-scout-17b-16e-instruct',
        temperature = 0.3,
        maxOutputTokens = 1024
    } = options;

    try {
        console.log('[Vision AI] Processing image...');

        let imageUrl = imageBase64;

        if (!imageUrl.startsWith('data:')) {
            imageUrl = `data:image/jpeg;base64,${imageBase64.replace(/^data:image\/\w+;base64,/, '')}`;
        }

        const messages = [
            {
                role: 'user',
                content: [
                    {
                        type: 'text',
                        text: `${systemPrompt}\n\n${userPrompt}`
                    },
                    {
                        type: 'image_url',
                        image_url: {
                            url: imageUrl
                        }
                    }
                ]
            }
        ];

        const completion = await groq.chat.completions.create({
            model,
            messages,
            temperature,
            max_tokens: maxOutputTokens,
            stream: false
        });

        return {
            choices: [{
                message: {
                    content: completion.choices?.[0]?.message?.content || ''
                }
            }],
            usage: completion.usage,
            model
        };

    } catch (error) {

        if (
            error.message?.includes('model_not_found') ||
            error.status === 404
        ) {
            throw new Error(
                'Vision model unavailable. Check the model name in your Groq account.'
            );
        }

        if (
            error.status === 429 ||
            error.message?.includes('RATE_LIMIT_EXCEEDED') ||
            error.message?.includes('rate_limit')
        ) {
            throw new Error(
                'Groq rate limit exceeded. Wait 15-30 seconds.'
            );
        }

        console.error('[Vision AI]', error);

        throw new Error(error.message);
    }
}
/**
 * Parse AI response
 */
function parseAIResponse(aiResponse) {
    try {
        if (!aiResponse) {
            return {
                reply: '',
                likelyPests: [],
                actions: [],
                warnings: [],
                followUpQuestions: []
            };
        }

        // Remove markdown code fences
        let cleaned = aiResponse
            .replace(/```json/gi, '')
            .replace(/```/g, '')
            .trim();

        return JSON.parse(cleaned);

    } catch (err) {

        return {
            reply: aiResponse || '',
            likelyPests: [],
            actions: [],
            warnings: [],
            followUpQuestions: []
        };
    }
}

/**
 * Clear cache
 */
function clearCache() {
    responseCache.flushAll();
    console.log('✓ AI cache cleared');
}

/**
 * Cache stats
 */
function getCacheStats() {
    const stats = responseCache.getStats();

    return {
        keys: responseCache.keys().length,
        hits: stats.hits,
        misses: stats.misses,
        ksize: stats.ksize,
        vsize: stats.vsize
    };
}

module.exports = {
    callAI,
    callAIStream,
    callVisionAI,
    parseAIResponse,
    clearCache,
    getCacheStats
}