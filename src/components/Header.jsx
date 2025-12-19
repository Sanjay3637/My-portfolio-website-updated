import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, User, Code, Award, BookOpen, Mail } from 'lucide-react';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const handleScroll = () => {
            // Determine active section for highlighting
            const sections = ['hero', 'about', 'skills', 'projects', 'achievements', 'education', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top >= -300 && rect.top <= 300) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Achievements', href: '#achievements' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            const offset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMobileMenuOpen(false);
            setActiveSection(href.substring(1));
        }
    };

    return (
        <>
            {/* Desktop Crystal Navbar */}

            <motion.header
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="fixed top-6 left-1/2 z-50 hidden md:block w-[95%] max-w-5xl px-0"
            >
                <div className="nav-glass rounded-full px-6 py-3 flex items-center justify-between backdrop-blur-2xl bg-[#0a0a0a]/60 border border-white/5 shadow-2xl shadow-primary-500/5">
                    {/* Logo */}
                    <a href="#" className="text-xl font-bold font-mono tracking-tighter flex items-center gap-1 group">
                        <span className="text-gray-500 group-hover:text-gray-300 transition-colors">&lt;</span>
                        <span className="text-primary-400 group-hover:text-primary-300 transition-colors">S</span>
                        <span className="text-gray-500 group-hover:text-gray-300 transition-colors">/&gt;</span>
                    </a>

                    {/* Navigation Links */}
                    <nav className="flex items-center gap-1">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                                        }`}
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activePill"
                                            className="absolute inset-0 bg-white/10 rounded-full -z-10"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>

                    {/* CTA Button */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => scrollToSection(e, '#contact')}
                        className="bg-primary-500 hover:bg-primary-600 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg shadow-primary-500/20 transition-all"
                    >
                        Let's Talk
                    </motion.button>
                </div>
            </motion.header>

            {/* Mobile Navbar (Simplified but cohesive) */}
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 p-4">
                <div className="flex justify-between items-center nav-glass rounded-xl p-3">
                    <motion.a
                        href="#"
                        className="text-xl font-display font-bold px-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="text-gray-400">&lt;</span>
                        <span className="gradient-text">S</span>
                        <span className="text-gray-400">/&gt;</span>
                    </motion.a>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="p-2 rounded-lg hover:bg-white/10 text-white transition-colors"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-x-4 top-20 z-40 md:hidden nav-glass rounded-2xl overflow-hidden p-4"
                    >
                        <div className="flex flex-col space-y-2">
                            {navLinks.map((link, index) => {
                                const isActive = activeSection === link.href.substring(1);
                                return (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive
                                            ? 'bg-primary-500/20 text-primary-400'
                                            : 'text-gray-300 hover:bg-white/5'
                                            }`}
                                    >
                                        <span className="font-medium">{link.name}</span>
                                        {isActive && (
                                            <motion.div
                                                layoutId="mobileActiveDot"
                                                className="ml-auto w-2 h-2 rounded-full bg-primary-400"
                                            />
                                        )}
                                    </motion.a>
                                )
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Header;
