import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      // Navigation
      nav: {
        home: "Home",
        dashboard: "Dashboard",
        identify: "Identify Pest",
        alerts: "Alerts",
        sprayLog: "Spray Log",
        community: "Community",
        chat: "AI Chatbot",
        login: "Login",
        register: "Register",
        logout: "Logout",
        settings: "Settings",
      },
      // Landing Page
      landing: {
        nav: {
          home: "Home",
          about: "About",
          features: "Features",
          howItWorks: "How It Works",
          team: "Team",
          contact: "Contact",
          signIn: "Sign In",
        },
        hero: {
          rating: "100+ Reviews",
          heading: "Smart Pest Solutions for",
          headingItalic: "Homes & Farms",
          description: "KrishiRakshak delivers AI-powered pest identification and management solutions for farms and gardens. Easy setup, lasting results.",
          getStarted: "Get Started",
          viewFeatures: "View Features",
          chips: {
            warranty: "25-Year Panel Warranty",
            certified: "Certified Installers",
            consultation: "Free Energy Consultation",
          },
        },
        stats: {
          farmersHelped: "Farmers Helped",
          pestsIdentified: "Pests Identified",
          accuracyRate: "Accuracy Rate",
          aiSupport: "AI Support",
        },
        partners: {
          label: "Partners",
          title: "Trusted by Top Agriculture Leaders",
        },
        features: {
          label: "Pest & Crop Solutions",
          title: "Pest Solutions for Every Farm",
          description: "We provide complete pest management services for farms & gardens, including identification, advisories, & preventive monitoring.",
          aiDetection: {
            title: "AI Pest Detection",
            description: "Upload crop images and get instant AI-powered pest identification with 90%+ accuracy.",
          },
          smartAdvisories: {
            title: "Smart Advisories",
            description: "Receive personalized treatment plans following IPM principles for sustainable farming.",
          },
          realTimeAlerts: {
            title: "Real-time Alerts",
            description: "Weather-based pest risk alerts help you take preventive action before damage occurs.",
          },
        },
        moreFeatures: {
          label: "Platform Features",
          title: "Everything You Need",
          description: "Comprehensive tools and features to protect your crops and maximize yield.",
          pestLibrary: {
            title: "Pest Library",
            description: "Access comprehensive database of 500+ pests with detailed identification guides.",
          },
          multiLanguage: {
            title: "Multi-language Support",
            description: "Available in Hindi, English, and regional languages for all Indian farmers.",
          },
          yieldAnalytics: {
            title: "Yield Analytics",
            description: "Track your crop health and predict yield improvements with AI insights.",
          },
          expertCommunity: {
            title: "Expert Community",
            description: "Connect with agricultural experts and fellow farmers for peer support.",
          },
          certifiedSolutions: {
            title: "Certified Solutions",
            description: "All recommendations follow government-approved IPM guidelines.",
          },
          aiChat: {
            title: "24/7 AI Chat",
            description: "Get instant answers to your farming queries anytime, anywhere.",
          },
        },
        about: {
          label: "About KrishiRakshak",
          title: "A Team Focused on Clean Agriculture",
          completedProjects: "Completed Projects",
          benefits: {
            b1: "From consultation to installation, we're connected throughout the process.",
            b2: "Over a decade of agricultural AI expertise applied to every project.",
            b3: "We work with reliable technology and sustainable farming practices.",
            b4: "Our team follows strict safety and quality standards.",
          },
          moreDetails: "More Details",
        },
        howItWorks: {
          label: "Our Process",
          title: "How It Works",
          description: "Get pest identification and expert recommendations in three simple steps.",
          step1: {
            title: "Upload Image",
            description: "Take a photo of affected crops or describe symptoms using our guided wizard.",
          },
          step2: {
            title: "AI Analysis",
            description: "Our AI analyzes the image to identify pests with confidence scores and symptoms.",
          },
          step3: {
            title: "Get Advisory",
            description: "Receive detailed IPM-based treatment recommendations tailored to your crop.",
          },
        },
        team: {
          label: "The Developer",
          title: "Meet the Expert",
          description: "Combining deep agricultural expertise with cutting-edge AI technology to build KrishiRakshak.",
          member3: {
            name: "Vaishnavi Shukla",
            role: "Full Stack Developer",
            bio: "Building the complete KrishiRakshak experience — from responsive, intuitive UI to robust backend APIs for real-time pest data.",
          },
        },
        testimonials: {
          label: "Testimonials",
          title: "What Farmers Say",
          description: "Hear from farmers who have transformed their pest management with our AI solutions.",
          t1: {
            name: "Rajesh Kumar",
            role: "Wheat Farmer, Punjab",
            quote: "KrishiRakshak saved my entire wheat crop from a pest outbreak. The AI identified the problem before it spread!",
          },
          t2: {
            name: "Priya Sharma",
            role: "Cotton Farmer, Gujarat",
            quote: "The real-time alerts helped me take preventive action. My yield increased by 30% this season.",
          },
          t3: {
            name: "Amit Patel",
            role: "Rice Farmer, Bihar",
            quote: "Easy to use, accurate results. This is exactly what Indian farmers needed.",
          },
        },
        faq: {
          label: "FAQ",
          title: "Frequently Asked Questions",
          q1: {
            question: "How accurate is the AI pest detection?",
            answer: "Our AI achieves 95%+ accuracy on common agricultural pests. The system continuously learns from new data to improve detection rates.",
          },
          q2: {
            question: "What crops does KrishiRakshak support?",
            answer: "We support all major Indian crops including wheat, rice, cotton, sugarcane, vegetables, and fruits. New crops are added regularly.",
          },
          q3: {
            question: "Is there a mobile app available?",
            answer: "No, a mobile app is not available yet. KrishiRakshak is currently a web platform that works on any device, including your mobile browser.",
          },
          q4: {
            question: "How do I get started?",
            answer: "Simply register for a free account, upload an image of your affected crop, and get instant AI-powered recommendations.",
          },
        },
        cta: {
          title: "Ready to Transform Your Farm With AI?",
          button: "Get Free Assessment",
        },
        footer: {
          description: "AI-powered pest management for smarter, sustainable farming. Empowering farmers with cutting-edge technology.",
          quickLinks: "Quick Links",
          aboutUs: "About Us",
          services: "Services",
          pestDetection: "Pest Detection",
          aiChatAssistant: "AI Chat Assistant",
          weatherAlerts: "Weather Alerts",
          expertAdvisory: "Expert Advisory",
          community: "Community",
          copyright: "© 2025 KrishiRakshak. All rights reserved.",
          privacyPolicy: "Privacy Policy",
          termsOfService: "Terms of Service",
          cookiePolicy: "Cookie Policy",
        },
        selectLanguage: "Select Language",
      },
      // Contact Page
      contact: {
        nav: {
          home: "Home",
          about: "About",
          features: "Features",
          howItWorks: "How It Works",
          team: "Team",
          contact: "Contact",
          getQuote: "Get Quote",
        },
        hero: {
          label: "Get In Touch",
          title: "Let's Start a",
          titleHighlight: "Conversation",
          description: "Have questions about our AI-powered pest management solutions? We're here to help you protect your crops and maximize your yield.",
          breadcrumbHome: "Home",
          breadcrumbContact: "Contact Us",
        },
        info: {
          callUs: "Call Us",
          emailUs: "Email Us",
          workingHours: "Working Hours",
        },
        about: {
          title: "About KrishiRakshak",
          description: "KrishiRakshak is an AI-powered smart pest management platform that helps farmers detect pests early, get expert treatment advice, and protect their yield.",
          point1: {
            title: "AI Pest Detection",
            description: "Upload a photo of your affected crop and get instant pest identification with 95%+ accuracy.",
          },
          point2: {
            title: "AI Chat Assistant",
            description: "Ask farming questions anytime and get expert IPM-based guidance in your own language.",
          },
          point3: {
            title: "Real-Time Alerts",
            description: "Receive weather and pest outbreak alerts so you can take preventive action before damage spreads.",
          },
          point4: {
            title: "Farmer Community",
            description: "Connect with fellow farmers, share experiences, and learn proven treatment practices.",
          },
        },
        quickHelp: {
          title: "Need Immediate Help?",
          description: "Our agricultural experts are available 24/7 to assist you with any pest emergencies.",
          callNow: "Call Now",
          liveChat: "Live Chat",
          startChat: "Start Chat",
        },
        cta: {
          title: "Ready to Protect Your Crops?",
          description: "Join thousands of farmers who trust KrishiRakshak for AI-powered pest management solutions.",
          button: "Get Started Free",
        },
      },
      // Auth
      auth: {
        login: "Login",
        register: "Register",
        email: "Email Address",
        password: "Password",
        name: "Full Name",
        phone: "Phone Number",
        confirmPassword: "Confirm Password",
        rememberMe: "Remember me",
        forgotPassword: "Forgot password?",
        noAccount: "Don't have an account?",
        hasAccount: "Already have an account?",
        loginButton: "Login to Dashboard",
        registerButton: "Create Account",
        welcomeBack: "Welcome Back",
        createAccount: "Create Your Account",
        loginDesc: "Login to access your farming dashboard",
        registerDesc: "Join thousands of farmers using smart pest management",
      },
      // Dashboard
      dashboard: {
        greeting: "Good Morning",
        overview: "Here's your farm overview",
        weather: "Today's Weather",
        humidity: "Humidity",
        alerts: "Active Alerts",
        viewAll: "View All",
        quickActions: "Quick Actions",
        myCrops: "My Crops",
        addCrop: "Add Crop",
        identifyPests: "Identify Pests",
        active: "Active",
        stage: "Stage",
        viewPests: "View Pests",
        identify: "Identify",
      },
      // Identify Page
      identify: {
        title: "Identify Pest",
        wizard: "Symptom Wizard",
        search: "Search Database",
        aiImage: "AI Image Analysis",
        wizardDesc: "Answer questions to identify pests",
        searchDesc: "Browse pests by crop",
        aiImageDesc: "Upload photo for AI analysis",
        selectCrop: "Select Your Crop",
        selectSymptoms: "Select Symptoms",
        severity: "Severity Level",
        mild: "Mild",
        moderate: "Moderate",
        severe: "Severe",
        analyze: "Analyze Symptoms",
        uploadImage: "Upload Image",
        dragDrop: "Drag and drop or click to upload",
        analyzing: "Analyzing...",
        results: "Results",
        confidence: "Confidence",
        viewAdvisory: "View Advisory",
      },
      // Chat
      chat: {
        title: "AI Farming Assistant",
        subtitle: "Get instant help with pest management and farming advice",
        placeholder: "Ask about pests, diseases, or farming advice...",
        inputPlaceholder: "Type your question here...",
        send: "Send",
        thinking: "Thinking...",
        welcome:
          "🌾 Namaste! I am your KrishiRakshak AI assistant. I can help you with:\n\n• Pest identification and management\n• Crop disease diagnosis\n• IPM recommendations\n• Farming best practices\n\nHow can I help you with your crops today?",
        followUp1: "How do I identify aphids in my wheat crop?",
        followUp2: "What are the best organic pest control methods?",
        followUp3: "My tomato leaves are yellowing, what should I do?",
        likelyPests: "Likely Pests",
        recommendedActions: "Recommended Actions",
        safetyWarnings: "Safety Warnings",
        suggestedQuestions: "You might also ask:",
        disclaimer:
          "AI-powered advice. Always consult local agricultural experts for critical decisions.",
      },
      // Alerts
      alerts: {
        title: "Pest Alerts & Warnings",
        high: "High Risk",
        medium: "Medium Risk",
        low: "Low Risk",
        noAlerts: "No active alerts in your area",
        weatherWarning: "Weather Warning",
      },
      // Spray Log
      sprayLog: {
        title: "Spray Log",
        addEntry: "Add Entry",
        pesticideName: "Pesticide Name",
        dose: "Dose",
        date: "Date",
        crop: "Crop",
        notes: "Notes",
        save: "Save Entry",
        warning: "Warning",
        recentEntries: "Recent Entries",
        noEntries: "No spray entries yet",
        overuseWarning:
          "Same pesticide used recently. Consider rotating to prevent resistance.",
        frequentWarning:
          "Frequent spraying detected. Follow recommended intervals.",
      },
      // Community
      community: {
        title: "Farmer Community",
        newPost: "New Post",
        askQuestion: "Ask a Question",
        postTitle: "Title",
        postDescription: "Description",
        selectCrop: "Select Crop",
        addImage: "Add Image (Optional)",
        submit: "Submit",
        replies: "Replies",
        upvote: "Upvote",
        solved: "Solved",
        markSolved: "Mark as Solved",
        noPosts: "No posts yet. Be the first to ask!",
      },
      // Common
      common: {
        loading: "Loading...",
        error: "Error",
        success: "Success",
        cancel: "Cancel",
        save: "Save",
        delete: "Delete",
        edit: "Edit",
        back: "Back",
        next: "Next",
        previous: "Previous",
        submit: "Submit",
        search: "Search",
        filter: "Filter",
        sortBy: "Sort By",
        noData: "No data available",
      },
      // IPM
      ipm: {
        prevention: "Prevention",
        mechanical: "Mechanical Control",
        biological: "Biological Control",
        chemical: "Chemical Control (Last Resort)",
        safetyWarning: "Safety Warning",
        dosage: "Dosage",
        harvestInterval: "Pre-harvest Interval",
      },
    },
  },
  hi: {
    translation: {
      // Navigation
      nav: {
        home: "होम",
        dashboard: "डैशबोर्ड",
        identify: "कीट पहचान",
        alerts: "चेतावनी",
        sprayLog: "स्प्रे लॉग",
        community: "समुदाय",
        chat: "AI चैटबॉट",
        login: "लॉगिन",
        register: "रजिस्टर",
        logout: "लॉगआउट",
        settings: "सेटिंग्स",
      },
      // Landing Page
      landing: {
        nav: {
          home: "होम",
          about: "हमारे बारे में",
          features: "विशेषताएं",
          howItWorks: "कैसे काम करता है",
          team: "टीम",
          contact: "संपर्क",
          signIn: "साइन इन",
        },
        hero: {
          rating: "100+ समीक्षाएं",
          heading: "स्मार्ट कीट समाधान",
          headingItalic: "घर और खेत के लिए",
          description: "कृषिरक्षक खेतों और बगीचों के लिए AI-संचालित कीट पहचान और प्रबंधन समाधान प्रदान करता है। आसान सेटअप, स्थायी परिणाम।",
          getStarted: "शुरू करें",
          viewFeatures: "विशेषताएं देखें",
          chips: {
            warranty: "25-वर्ष पैनल वारंटी",
            certified: "प्रमाणित इंस्टॉलर",
            consultation: "मुफ्त ऊर्जा परामर्श",
          },
        },
        stats: {
          farmersHelped: "किसानों की मदद",
          pestsIdentified: "कीट पहचाने गए",
          accuracyRate: "सटीकता दर",
          aiSupport: "AI सहायता",
        },
        partners: {
          label: "साझेदार",
          title: "शीर्ष कृषि नेताओं द्वारा विश्वसनीय",
        },
        features: {
          label: "कीट और फसल समाधान",
          title: "हर खेत के लिए कीट समाधान",
          description: "हम खेतों और बगीचों के लिए पूर्ण कीट प्रबंधन सेवाएं प्रदान करते हैं, जिसमें पहचान, सलाह और निवारक निगरानी शामिल है।",
          aiDetection: {
            title: "AI कीट पहचान",
            description: "फसल की तस्वीरें अपलोड करें और 90%+ सटीकता के साथ तुरंत AI-संचालित कीट पहचान प्राप्त करें।",
          },
          smartAdvisories: {
            title: "स्मार्ट सलाह",
            description: "टिकाऊ खेती के लिए IPM सिद्धांतों का पालन करते हुए व्यक्तिगत उपचार योजनाएं प्राप्त करें।",
          },
          realTimeAlerts: {
            title: "रीयल-टाइम अलर्ट",
            description: "मौसम-आधारित कीट जोखिम अलर्ट नुकसान होने से पहले निवारक कार्रवाई करने में मदद करते हैं।",
          },
        },
        moreFeatures: {
          label: "प्लेटफॉर्म विशेषताएं",
          title: "आपको जो कुछ भी चाहिए",
          description: "अपनी फसलों की रक्षा करने और उपज को अधिकतम करने के लिए व्यापक उपकरण और सुविधाएं।",
          pestLibrary: {
            title: "कीट पुस्तकालय",
            description: "विस्तृत पहचान गाइड के साथ 500+ कीटों के व्यापक डेटाबेस तक पहुंच।",
          },
          multiLanguage: {
            title: "बहु-भाषा समर्थन",
            description: "सभी भारतीय किसानों के लिए हिंदी, अंग्रेजी और क्षेत्रीय भाषाओं में उपलब्ध।",
          },
          yieldAnalytics: {
            title: "उपज विश्लेषिकी",
            description: "AI अंतर्दृष्टि के साथ अपनी फसल स्वास्थ्य को ट्रैक करें और उपज सुधार की भविष्यवाणी करें।",
          },
          expertCommunity: {
            title: "विशेषज्ञ समुदाय",
            description: "कृषि विशेषज्ञों और साथी किसानों से जुड़ें।",
          },
          certifiedSolutions: {
            title: "प्रमाणित समाधान",
            description: "सभी सिफारिशें सरकार-अनुमोदित IPM दिशानिर्देशों का पालन करती हैं।",
          },
          aiChat: {
            title: "24/7 AI चैट",
            description: "कभी भी, कहीं भी अपने खेती के प्रश्नों के तुरंत उत्तर प्राप्त करें।",
          },
        },
        about: {
          label: "कृषिरक्षक के बारे में",
          title: "स्वच्छ कृषि पर केंद्रित टीम",
          completedProjects: "पूर्ण परियोजनाएं",
          benefits: {
            b1: "परामर्श से स्थापना तक, हम पूरी प्रक्रिया में जुड़े रहते हैं।",
            b2: "हर परियोजना में एक दशक से अधिक की कृषि AI विशेषज्ञता।",
            b3: "हम विश्वसनीय तकनीक और टिकाऊ खेती प्रथाओं के साथ काम करते हैं।",
            b4: "हमारी टीम सख्त सुरक्षा और गुणवत्ता मानकों का पालन करती है।",
          },
          moreDetails: "अधिक जानकारी",
        },
        howItWorks: {
          label: "हमारी प्रक्रिया",
          title: "यह कैसे काम करता है",
          description: "तीन सरल चरणों में कीट पहचान और विशेषज्ञ सिफारिशें प्राप्त करें।",
          step1: {
            title: "छवि अपलोड करें",
            description: "प्रभावित फसलों की फोटो लें या हमारे गाइडेड विज़ार्ड का उपयोग करके लक्षणों का वर्णन करें।",
          },
          step2: {
            title: "AI विश्लेषण",
            description: "हमारा AI विश्वास स्कोर और लक्षणों के साथ कीटों की पहचान करने के लिए छवि का विश्लेषण करता है।",
          },
          step3: {
            title: "सलाह प्राप्त करें",
            description: "अपनी फसल के अनुरूप विस्तृत IPM-आधारित उपचार सिफारिशें प्राप्त करें।",
          },
        },
        team: {
          label: "डेवलपर",
          title: "विशेषज्ञ से मिलें",
          description: "गहन कृषि विशेषज्ञता को अत्याधुनिक AI तकनीक के साथ जोड़कर कृषिरक्षक का निर्माण।",
          member3: {
            name: "वैष्णवी शुक्ला",
            role: "फुल स्टैक डेवलपर",
            bio: "रिस्पॉन्सिव, सहज UI से लेकर रीयल-टाइम कीट डेटा के लिए मजबूत बैकएंड APIs तक — संपूर्ण कृषिरक्षक अनुभव का निर्माण।",
          },
        },
        testimonials: {
          label: "प्रशंसापत्र",
          title: "किसान क्या कहते हैं",
          description: "उन किसानों की बात सुनें जिन्होंने हमारे AI समाधानों से अपने कीट प्रबंधन को बदल दिया है।",
          t1: {
            name: "राजेश कुमार",
            role: "गेहूं किसान, पंजाब",
            quote: "कृषिरक्षक ने मेरी पूरी गेहूं की फसल को कीट प्रकोप से बचाया। AI ने समस्या फैलने से पहले पहचान ली!",
          },
          t2: {
            name: "प्रिया शर्मा",
            role: "कपास किसान, गुजरात",
            quote: "रीयल-टाइम अलर्ट ने मुझे निवारक कार्रवाई करने में मदद की। इस सीजन मेरी उपज 30% बढ़ी।",
          },
          t3: {
            name: "अमित पटेल",
            role: "चावल किसान, बिहार",
            quote: "उपयोग में आसान, सटीक परिणाम। यह वही है जो भारतीय किसानों को चाहिए था।",
          },
        },
        faq: {
          label: "FAQ",
          title: "अक्सर पूछे जाने वाले प्रश्न",
          q1: {
            question: "AI कीट पहचान कितनी सटीक है?",
            answer: "हमारा AI आम कृषि कीटों पर 95%+ सटीकता प्राप्त करता है। सिस्टम पहचान दरों में सुधार के लिए नए डेटा से लगातार सीखता है।",
          },
          q2: {
            question: "कृषिरक्षक कौन सी फसलों का समर्थन करता है?",
            answer: "हम गेहूं, चावल, कपास, गन्ना, सब्जियां और फलों सहित सभी प्रमुख भारतीय फसलों का समर्थन करते हैं। नई फसलें नियमित रूप से जोड़ी जाती हैं।",
          },
          q3: {
            question: "क्या कोई मोबाइल ऐप उपलब्ध है?",
            answer: "नहीं, अभी मोबाइल ऐप उपलब्ध नहीं है। कृषिरक्षक वर्तमान में एक वेब प्लेटफॉर्म है जो मोबाइल ब्राउज़र सहित किसी भी डिवाइस पर काम करता है।",
          },
          q4: {
            question: "मैं कैसे शुरू करूं?",
            answer: "बस एक मुफ्त खाता बनाएं, अपनी प्रभावित फसल की छवि अपलोड करें, और तुरंत AI-संचालित सिफारिशें प्राप्त करें।",
          },
        },
        cta: {
          title: "AI के साथ अपने खेत को बदलने के लिए तैयार हैं?",
          button: "मुफ्त मूल्यांकन प्राप्त करें",
        },
        footer: {
          description: "स्मार्ट, टिकाऊ खेती के लिए AI-संचालित कीट प्रबंधन। अत्याधुनिक तकनीक के साथ किसानों को सशक्त बनाना।",
          quickLinks: "त्वरित लिंक",
          aboutUs: "हमारे बारे में",
          services: "सेवाएं",
          pestDetection: "कीट पहचान",
          aiChatAssistant: "AI चैट सहायक",
          weatherAlerts: "मौसम अलर्ट",
          expertAdvisory: "विशेषज्ञ सलाह",
          community: "समुदाय",
          copyright: "© 2025 कृषिरक्षक। सर्वाधिकार सुरक्षित।",
          privacyPolicy: "गोपनीयता नीति",
          termsOfService: "सेवा की शर्तें",
          cookiePolicy: "कुकी नीति",
        },
        selectLanguage: "भाषा चुनें",
      },
      // Contact Page
      contact: {
        nav: {
          home: "होम",
          about: "हमारे बारे में",
          features: "विशेषताएं",
          howItWorks: "कैसे काम करता है",
          team: "टीम",
          contact: "संपर्क",
          getQuote: "कोटेशन प्राप्त करें",
        },
        hero: {
          label: "संपर्क करें",
          title: "आइए एक",
          titleHighlight: "बातचीत शुरू करें",
          description: "हमारे AI-संचालित कीट प्रबंधन समाधानों के बारे में प्रश्न हैं? हम आपकी फसलों की रक्षा करने और उपज को अधिकतम करने में मदद करने के लिए यहां हैं।",
          breadcrumbHome: "होम",
          breadcrumbContact: "संपर्क करें",
        },
        info: {
          callUs: "हमें कॉल करें",
          emailUs: "हमें ईमेल करें",
          workingHours: "कार्य समय",
        },
        about: {
          title: "कृषिरक्षक के बारे में",
          description: "कृषिरक्षक एक AI-संचालित स्मार्ट कीट प्रबंधन प्लेटफॉर्म है जो किसानों को कीटों की जल्दी पहचान, विशेषज्ञ उपचार सलाह और उपज की सुरक्षा में मदद करता है।",
          point1: {
            title: "AI कीट पहचान",
            description: "अपनी प्रभावित फसल की फोटो अपलोड करें और 95%+ सटीकता के साथ तुरंत कीट पहचान प्राप्त करें।",
          },
          point2: {
            title: "AI चैट सहायक",
            description: "कभी भी खेती से जुड़े सवाल पूछें और अपनी भाषा में विशेषज्ञ IPM-आधारित मार्गदर्शन पाएं।",
          },
          point3: {
            title: "रीयल-टाइम अलर्ट",
            description: "मौसम और कीट प्रकोप अलर्ट प्राप्त करें ताकि नुकसान फैलने से पहले निवारक कार्रवाई कर सकें।",
          },
          point4: {
            title: "किसान समुदाय",
            description: "साथी किसानों से जुड़ें, अनुभव साझा करें और सिद्ध उपचार पद्धतियां सीखें।",
          },
        },
        quickHelp: {
          title: "तुरंत मदद चाहिए?",
          description: "हमारे कृषि विशेषज्ञ किसी भी कीट आपात स्थिति में आपकी सहायता के लिए 24/7 उपलब्ध हैं।",
          callNow: "अभी कॉल करें",
          liveChat: "लाइव चैट",
          startChat: "चैट शुरू करें",
        },
        cta: {
          title: "अपनी फसलों की रक्षा के लिए तैयार हैं?",
          description: "हजारों किसान कृषिरक्षक के AI-संचालित कीट प्रबंधन समाधानों पर भरोसा करते हैं।",
          button: "मुफ्त शुरू करें",
        },
      },
      // Auth
      auth: {
        login: "लॉगिन",
        register: "रजिस्टर",
        email: "ईमेल पता",
        password: "पासवर्ड",
        name: "पूरा नाम",
        phone: "फोन नंबर",
        confirmPassword: "पासवर्ड की पुष्टि करें",
        rememberMe: "मुझे याद रखें",
        forgotPassword: "पासवर्ड भूल गए?",
        noAccount: "खाता नहीं है?",
        hasAccount: "पहले से खाता है?",
        loginButton: "डैशबोर्ड में लॉगिन करें",
        registerButton: "खाता बनाएं",
        welcomeBack: "वापसी पर स्वागत है",
        createAccount: "अपना खाता बनाएं",
        loginDesc: "अपने कृषि डैशबोर्ड तक पहुंचने के लिए लॉगिन करें",
        registerDesc:
          "स्मार्ट कीट प्रबंधन का उपयोग करने वाले हजारों किसानों से जुड़ें",
      },
      // Dashboard
      dashboard: {
        greeting: "सुप्रभात",
        overview: "आपकी खेती का अवलोकन",
        weather: "आज का मौसम",
        humidity: "नमी",
        alerts: "सक्रिय चेतावनी",
        viewAll: "सभी देखें",
        quickActions: "त्वरित कार्य",
        myCrops: "मेरी फसलें",
        addCrop: "फसल जोड़ें",
        identifyPests: "कीट पहचानें",
        active: "सक्रिय",
        stage: "अवस्था",
        viewPests: "कीट देखें",
        identify: "पहचानें",
      },
      // Identify Page
      identify: {
        title: "कीट पहचान",
        wizard: "लक्षण विज़ार्ड",
        search: "डेटाबेस खोजें",
        aiImage: "AI छवि विश्लेषण",
        wizardDesc: "कीटों की पहचान के लिए सवालों के जवाब दें",
        searchDesc: "फसल के अनुसार कीट ब्राउज़ करें",
        aiImageDesc: "AI विश्लेषण के लिए फोटो अपलोड करें",
        selectCrop: "अपनी फसल चुनें",
        selectSymptoms: "लक्षण चुनें",
        severity: "गंभीरता स्तर",
        mild: "हल्का",
        moderate: "मध्यम",
        severe: "गंभीर",
        analyze: "लक्षणों का विश्लेषण करें",
        uploadImage: "छवि अपलोड करें",
        dragDrop: "खींचें और छोड़ें या अपलोड करने के लिए क्लिक करें",
        analyzing: "विश्लेषण हो रहा है...",
        results: "परिणाम",
        confidence: "विश्वास",
        viewAdvisory: "सलाह देखें",
      },
      // Chat
      chat: {
        title: "AI कृषि सहायक",
        subtitle: "कीट प्रबंधन और खेती की सलाह के लिए तुरंत मदद पाएं",
        placeholder: "कीटों, बीमारियों या खेती की सलाह के बारे में पूछें...",
        inputPlaceholder: "यहां अपना सवाल लिखें...",
        send: "भेजें",
        thinking: "सोच रहा हूं...",
        welcome:
          "🌾 नमस्ते! मैं आपका कृषिरक्षक AI सहायक हूं। मैं इन विषयों में मदद कर सकता हूं:\n\n• कीट पहचान और प्रबंधन\n• फसल रोग निदान\n• IPM सिफारिशें\n• खेती की सर्वोत्तम प्रथाएं\n\nआज मैं आपकी फसलों में कैसे मदद कर सकता हूं?",
        followUp1: "मैं अपनी गेहूं की फसल में माहू की पहचान कैसे करूं?",
        followUp2: "जैविक कीट नियंत्रण के सबसे अच्छे तरीके क्या हैं?",
        followUp3: "मेरे टमाटर के पत्ते पीले हो रहे हैं, मुझे क्या करना चाहिए?",
        likelyPests: "संभावित कीट",
        recommendedActions: "अनुशंसित कार्रवाई",
        safetyWarnings: "सुरक्षा चेतावनी",
        suggestedQuestions: "आप यह भी पूछ सकते हैं:",
        disclaimer:
          "AI-संचालित सलाह। महत्वपूर्ण निर्णयों के लिए हमेशा स्थानीय कृषि विशेषज्ञों से परामर्श करें।",
      },
      // Alerts
      alerts: {
        title: "कीट चेतावनी और सूचनाएं",
        high: "उच्च जोखिम",
        medium: "मध्यम जोखिम",
        low: "कम जोखिम",
        noAlerts: "आपके क्षेत्र में कोई सक्रिय चेतावनी नहीं",
        weatherWarning: "मौसम चेतावनी",
      },
      // Spray Log
      sprayLog: {
        title: "स्प्रे लॉग",
        addEntry: "प्रविष्टि जोड़ें",
        pesticideName: "कीटनाशक का नाम",
        dose: "खुराक",
        date: "तारीख",
        crop: "फसल",
        notes: "नोट्स",
        save: "प्रविष्टि सहेजें",
        warning: "चेतावनी",
        recentEntries: "हाल की प्रविष्टियां",
        noEntries: "अभी तक कोई स्प्रे प्रविष्टि नहीं",
        overuseWarning:
          "हाल ही में समान कीटनाशक का उपयोग किया गया। प्रतिरोध रोकने के लिए बदलाव पर विचार करें।",
        frequentWarning:
          "बार-बार स्प्रे का पता चला। अनुशंसित अंतराल का पालन करें।",
      },
      // Community
      community: {
        title: "किसान समुदाय",
        newPost: "नई पोस्ट",
        askQuestion: "सवाल पूछें",
        postTitle: "शीर्षक",
        postDescription: "विवरण",
        selectCrop: "फसल चुनें",
        addImage: "छवि जोड़ें (वैकल्पिक)",
        submit: "जमा करें",
        replies: "जवाब",
        upvote: "अपवोट",
        solved: "हल हो गया",
        markSolved: "हल के रूप में चिह्नित करें",
        noPosts: "अभी तक कोई पोस्ट नहीं। पहले पूछने वाले बनें!",
      },
      // Common
      common: {
        loading: "लोड हो रहा है...",
        error: "त्रुटि",
        success: "सफलता",
        cancel: "रद्द करें",
        save: "सहेजें",
        delete: "हटाएं",
        edit: "संपादित करें",
        back: "वापस",
        next: "अगला",
        previous: "पिछला",
        submit: "जमा करें",
        search: "खोजें",
        filter: "फ़िल्टर",
        sortBy: "क्रमबद्ध करें",
        noData: "कोई डेटा उपलब्ध नहीं",
      },
      // IPM
      ipm: {
        prevention: "रोकथाम",
        mechanical: "यांत्रिक नियंत्रण",
        biological: "जैविक नियंत्रण",
        chemical: "रासायनिक नियंत्रण (अंतिम उपाय)",
        safetyWarning: "सुरक्षा चेतावनी",
        dosage: "खुराक",
        harvestInterval: "कटाई पूर्व अंतराल",
      },
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
