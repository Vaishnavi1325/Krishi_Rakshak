const emailService = require('./emailService');

// Configurable batching options
const BATCH_SIZE = parseInt(process.env.EMAIL_BATCH_SIZE, 10) || 10;
const BATCH_INTERVAL_MS = parseInt(process.env.EMAIL_BATCH_INTERVAL_MS, 10) || 5000; // 5s
const MAX_RETRIES = 2;

let queue = [];
let timer = null;

function sendBatch() {
  if (timer) {
    clearTimeout(timer);
    timer = null;
  }

  const batch = queue.splice(0, BATCH_SIZE);
  if (batch.length === 0) return;

  // Send all messages in parallel (but batched)
  Promise.all(batch.map(item => trySend(item))).catch(err => {
    console.error('Error sending batch:', err);
  });
}

async function trySend(item) {
  let attempts = 0;
  while (attempts <= MAX_RETRIES) {
    try {
      await emailService.sendEmail(item.to, item.subject, item.text, item.html);
      return;
    } catch (err) {
      attempts += 1;
      console.error(`Email send failed (attempt ${attempts}) for ${item.to}:`, err.message);
      if (attempts > MAX_RETRIES) {
        console.error('Max retries reached for', item.to);
      } else {
        // small backoff
        await new Promise(r => setTimeout(r, 1000 * attempts));
      }
    }
  }
}

function schedule() {
  if (timer) return;
  timer = setTimeout(() => {
    sendBatch();
  }, BATCH_INTERVAL_MS);
}

function enqueue(to, subject, text, html) {
  queue.push({ to, subject, text, html });
  if (queue.length >= BATCH_SIZE) {
    sendBatch();
  } else {
    schedule();
  }
}

module.exports = { enqueue, sendBatch };
