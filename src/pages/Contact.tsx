import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
    ArrowRight,
    MessageCircle,
    Phone,
    Mail,
    Clock,
    Camera,
    Bell,
    Users,
    ChevronRight,
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useTranslation } from "react-i18next";

// Animation Variants
const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

const Contact = () => {
    const { t } = useTranslation();

    const aboutPoints = [
        {
            icon: Camera,
            title: t('contact.about.point1.title'),
            description: t('contact.about.point1.description'),
            color: "bg-[#B9F261]",
        },
        {
            icon: MessageCircle,
            title: t('contact.about.point2.title'),
            description: t('contact.about.point2.description'),
            color: "bg-[#FFD24A]",
        },
        {
            icon: Bell,
            title: t('contact.about.point3.title'),
            description: t('contact.about.point3.description'),
            color: "bg-[#B9F261]",
        },
        {
            icon: Users,
            title: t('contact.about.point4.title'),
            description: t('contact.about.point4.description'),
            color: "bg-[#FFD24A]",
        },
    ];

    const contactInfo = [
        {
            icon: Phone,
            title: t('contact.info.callUs'),
            details: ["+91 88406 44818"],
            color: "bg-[#B9F261]",
        },
        {
            icon: Mail,
            title: t('contact.info.emailUs'),
            details: ["vaishnavishukla9578b@gmail.com"],
            color: "bg-[#FFD24A]",
        },
        {
            icon: Clock,
            title: t('contact.info.workingHours'),
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
            color: "bg-[#FFD24A]",
        },
    ];

    return (
        <div className="min-h-screen bg-white overflow-x-hidden font-sans">
            {/* Navigation - Transparent Glassmorphic Style */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B0B0B]/80 backdrop-blur-md border-b border-white/10">
                <div className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2">
                            <div className="w-10 h-10 flex items-center justify-center relative">
                                <svg viewBox="0 0 40 40" className="w-10 h-10">
                                    <line x1="20" y1="4" x2="20" y2="10" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="32" y1="10" x2="28" y2="14" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="36" y1="22" x2="30" y2="22" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="8" y1="10" x2="12" y2="14" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                    <line x1="4" y1="22" x2="10" y2="22" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                    <circle cx="20" cy="22" r="10" fill="#FFD24A" />
                                    <path d="M16 28 Q20 20 28 22 Q24 30 16 28" fill="#4a7c4a" />
                                </svg>
                            </div>
                            <span className="font-display font-bold text-xl text-white">KrishiRakshak</span>
                        </Link>

                        {/* Center Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/" className="text-sm font-medium text-white hover:text-[#FFD24A] transition-colors">
                                {t('contact.nav.home')}
                            </Link>
                            <a href="/#about" className="text-sm font-medium text-white hover:text-[#FFD24A] transition-colors">
                                {t('contact.nav.about')}
                            </a>
                            <a href="/#features" className="text-sm font-medium text-white hover:text-[#FFD24A] transition-colors">
                                {t('contact.nav.features')}
                            </a>
                            <a href="/#how-it-works" className="text-sm font-medium text-white hover:text-[#FFD24A] transition-colors">
                                {t('contact.nav.howItWorks')}
                            </a>
                            <a href="/#team" className="text-sm font-medium text-white hover:text-[#FFD24A] transition-colors">
                                {t('contact.nav.team')}
                            </a>
                            <Link to="/contact" className="text-sm font-medium text-[#FFD24A] transition-colors">
                                {t('contact.nav.contact')}
                            </Link>
                        </div>

                        {/* Right Side - CTA */}
                        <div className="flex items-center gap-4">
                            <LanguageSwitcher />
                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#B9F261] text-[#0B0B0B] font-medium text-sm hover:bg-[#a8e050] transition-all shadow-lg"
                                >
                                    {t('contact.nav.getQuote')}
                                    <div className="w-6 h-6 rounded-full bg-[#0B0B0B] flex items-center justify-center">
                                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                                    </div>
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-[#0B0B0B] overflow-hidden">
                {/* Grid Texture */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(#FAF4EA 1px, transparent 1px), linear-gradient(90deg, #FAF4EA 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center gap-2 mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#B9F261]"></span>
                            <span className="text-sm font-medium text-[#B9F261] uppercase tracking-widest">{t('contact.hero.label')}</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-white"
                        >
                            {t('contact.hero.title')}{" "}
                            <span className="text-[#B9F261]">{t('contact.hero.titleHighlight')}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-lg text-white/70 max-w-xl leading-relaxed"
                        >
                            {t('contact.hero.description')}
                        </motion.p>
                    </div>

                    {/* Breadcrumb */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex items-center gap-2 mt-8 text-sm"
                    >
                        <Link to="/" className="text-white/60 hover:text-white transition-colors">{t('contact.hero.breadcrumbHome')}</Link>
                        <ChevronRight className="w-4 h-4 text-white/40" />
                        <span className="text-[#B9F261]">{t('contact.hero.breadcrumbContact')}</span>
                    </motion.div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-[#FAF4EA]">
                <div className="container mx-auto px-6">
                    <motion.div
                        className="grid md:grid-cols-3 gap-6 -mt-32 relative z-20"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={scaleIn}
                                whileHover={{ y: -8, scale: 1.02 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center cursor-pointer"
                            >
                                <motion.div
                                    className={`w-14 h-14 ${info.color} rounded-xl flex items-center justify-center mx-auto mb-4`}
                                    whileHover={{ rotate: 10, scale: 1.1 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <info.icon className="w-7 h-7 text-[#0B0B0B]" />
                                </motion.div>
                                <h3 className="font-display font-bold text-lg text-[#0B0B0B] mb-2">{info.title}</h3>
                                {info.details.map((detail, i) => (
                                    <p key={i} className="text-gray-600 text-sm">{detail}</p>
                                ))}
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Main Content - Form & Map */}
            <section className="py-24 bg-[#FAF4EA]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* About the Application */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-3xl p-8 md:p-10 shadow-lg border border-gray-100"
                        >
                            <h2 className="font-display text-3xl font-bold text-[#0B0B0B] mb-2">{t('contact.about.title')}</h2>
                            <p className="text-gray-600 mb-8">{t('contact.about.description')}</p>

                            <div className="space-y-6">
                                {aboutPoints.map((point, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 15 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-4"
                                    >
                                        <div className={`w-12 h-12 ${point.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                                            <point.icon className="w-6 h-6 text-[#0B0B0B]" />
                                        </div>
                                        <div>
                                            <h3 className="font-display font-bold text-[#0B0B0B] mb-1">{point.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>

                            <Link to="/register">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full mt-8 flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#B9F261] text-[#0B0B0B] font-semibold text-base hover:bg-[#a8e050] transition-all shadow-lg"
                                >
                                    {t('contact.cta.button')}
                                    <div className="w-7 h-7 rounded-full bg-[#0B0B0B] flex items-center justify-center">
                                        <ArrowRight className="w-4 h-4 text-white" />
                                    </div>
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Map Section */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 h-[400px]">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754725782!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1703380800000!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="KrishiRakshak Location"
                                />
                            </div>

                            {/* Quick Contact Card */}
                            <div className="bg-[#0B0B0B] rounded-3xl p-8 relative overflow-hidden">
                                <div
                                    className="absolute inset-0 opacity-5"
                                    style={{
                                        backgroundImage: `linear-gradient(#FAF4EA 1px, transparent 1px), linear-gradient(90deg, #FAF4EA 1px, transparent 1px)`,
                                        backgroundSize: '30px 30px'
                                    }}
                                />
                                <div className="relative z-10">
                                    <h3 className="font-display text-2xl font-bold text-white mb-4">{t('contact.quickHelp.title')}</h3>
                                    <p className="text-white/70 mb-6">{t('contact.quickHelp.description')}</p>

                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <a href="tel:+918840644818" className="flex-1">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-[#B9F261] text-[#0B0B0B]"
                                            >
                                                <Phone className="w-5 h-5" />
                                                <div>
                                                    <p className="text-xs opacity-70">{t('contact.quickHelp.callNow')}</p>
                                                    <p className="font-bold">+91 88406 44818</p>
                                                </div>
                                            </motion.div>
                                        </a>
                                        <Link to="/chat" className="flex-1">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white"
                                            >
                                                <MessageCircle className="w-5 h-5" />
                                                <div>
                                                    <p className="text-xs opacity-70">{t('contact.quickHelp.liveChat')}</p>
                                                    <p className="font-bold">{t('contact.quickHelp.startChat')}</p>
                                                </div>
                                            </motion.div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-[#0B0B0B] relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(#FAF4EA 1px, transparent 1px), linear-gradient(90deg, #FAF4EA 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight mb-6 text-white">
                        {t('contact.cta.title')}
                    </h2>
                    <p className="text-white/70 max-w-2xl mx-auto mb-8">
                        {t('contact.cta.description')}
                    </p>
                    <Link to="/register">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#B9F261] text-[#0B0B0B] font-semibold text-lg hover:bg-[#a8e050] transition-all shadow-lg"
                        >
                            {t('contact.cta.button')}
                            <div className="w-8 h-8 rounded-full bg-[#0B0B0B] flex items-center justify-center">
                                <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                        </motion.button>
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 bg-[#0B0B0B] text-white relative overflow-hidden">
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: `linear-gradient(#FAF4EA 1px, transparent 1px), linear-gradient(90deg, #FAF4EA 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
                        {/* Logo & Description */}
                        <div className="lg:col-span-1">
                            <div className="flex items-center gap-2 mb-4">
                                <div className="w-10 h-10 flex items-center justify-center">
                                    <svg viewBox="0 0 40 40" className="w-10 h-10">
                                        <line x1="20" y1="4" x2="20" y2="10" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="32" y1="10" x2="28" y2="14" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="36" y1="22" x2="30" y2="22" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="8" y1="10" x2="12" y2="14" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                        <line x1="4" y1="22" x2="10" y2="22" stroke="#FFD24A" strokeWidth="2.5" strokeLinecap="round" />
                                        <circle cx="20" cy="22" r="10" fill="#FFD24A" />
                                        <path d="M16 28 Q20 20 28 22 Q24 30 16 28" fill="#4a7c4a" />
                                    </svg>
                                </div>
                                <span className="font-display font-bold text-xl text-white">KrishiRakshak</span>
                            </div>
                            <p className="text-white/60 text-sm leading-relaxed mb-6">
                                {t('landing.footer.description')}
                            </p>
                            {/* Social Icons */}
                            <div className="flex gap-3">
                                <a href="https://www.linkedin.com/in/vaishnavi1325/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#B9F261] hover:text-[#0B0B0B] hover:border-[#B9F261] transition-all">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                                </a>
                                <a href="mailto:vaishnavishukla9578b@gmail.com" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#B9F261] hover:text-[#0B0B0B] hover:border-[#B9F261] transition-all">
                                    <Mail className="w-4 h-4" />
                                </a>
                                <a href="tel:+918840644818" className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-[#B9F261] hover:text-[#0B0B0B] hover:border-[#B9F261] transition-all">
                                    <Phone className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-display font-bold text-white mb-6">{t('landing.footer.quickLinks')}</h4>
                            <ul className="space-y-3">
                                <li><Link to="/" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.nav.home')}</Link></li>
                                <li><a href="/#about" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.footer.aboutUs')}</a></li>
                                <li><a href="/#features" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.nav.features')}</a></li>
                                <li><a href="/#how-it-works" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.nav.howItWorks')}</a></li>
                                <li><a href="/#team" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.nav.team')}</a></li>
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="font-display font-bold text-white mb-6">{t('landing.footer.services')}</h4>
                            <ul className="space-y-3">
                                <li><Link to="/identify" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.footer.pestDetection')}</Link></li>
                                <li><Link to="/chat" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.footer.aiChatAssistant')}</Link></li>
                                <li><Link to="/alerts" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.footer.weatherAlerts')}</Link></li>
                                <li><Link to="/advisory" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.footer.expertAdvisory')}</Link></li>
                                <li><Link to="/community" className="text-white/60 hover:text-[#B9F261] transition-colors flex items-center gap-2"><ChevronRight className="w-3 h-3" />{t('landing.footer.community')}</Link></li>
                            </ul>
                        </div>

                    </div>

                    {/* Bottom Bar */}
                    <div className="pt-8 border-t border-white/10">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-white/40 text-sm">
                                {t('landing.footer.copyright')}
                            </p>
                            <div className="flex gap-6 text-white/40 text-sm">
                                <a href="#" className="hover:text-white transition-colors">{t('landing.footer.privacyPolicy')}</a>
                                <a href="#" className="hover:text-white transition-colors">{t('landing.footer.termsOfService')}</a>
                                <a href="#" className="hover:text-white transition-colors">{t('landing.footer.cookiePolicy')}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Floating Chat */}
            <Link to="/chat">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#B9F261] shadow-lg flex items-center justify-center text-[#0B0B0B] z-50"
                >
                    <MessageCircle className="w-6 h-6" />
                </motion.button>
            </Link>
        </div>
    );
};

export default Contact;
