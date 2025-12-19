import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { fadeIn, slideUp } from '../utils/animations';

const Hero = () => {
    const scrollToProjects = () => {
        const element = document.querySelector('#projects');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const scrollToContact = () => {
        const element = document.querySelector('#contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-dark-900 to-dark-900"></div>
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-6 relative z-10 pt-32 pb-20">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={fadeIn}
                    >
                        <motion.h1
                            variants={slideUp}
                            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
                        >
                            Hi, I'm{' '}
                            <span className="gradient-text">Sanjay</span>
                            <motion.span
                                animate={{ rotate: [0, 14, -8, 14, 0] }}
                                transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                                className="inline-block origin-[70%_70%]"
                            >
                                👋
                            </motion.span>
                        </motion.h1>

                        <motion.div
                            variants={slideUp}
                            className="text-2xl md:text-3xl lg:text-4xl mb-4 font-medium min-h-[3rem] flex items-center justify-center"
                        >
                            <TypeAnimation
                                sequence={[
                                    'Software Developer',
                                    2000,
                                    'Full-Stack Developer',
                                    2000,
                                ]}
                                wrapper="span"
                                speed={50}
                                repeat={Infinity}
                                className="gradient-text"
                            />
                        </motion.div>

                        <motion.p
                            variants={slideUp}
                            className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
                        >
                            I build scalable software and intelligent systems.
                        </motion.p>

                        <motion.div
                            variants={slideUp}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToProjects}
                                className="btn-primary w-full sm:w-auto"
                            >
                                View Projects
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={scrollToContact}
                                className="btn-secondary w-full sm:w-auto"
                            >
                                Contact Me
                            </motion.button>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            variants={slideUp}
                            className="flex items-center justify-center gap-6"
                        >
                            <motion.a
                                href="https://github.com/Sanjay3637"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 glass rounded-full hover:bg-primary-500/20 transition-colors"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6 text-primary-500" />
                            </motion.a>
                            <motion.a
                                href="https://www.linkedin.com/in/sanjay-r-736b17276/"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.2, y: -5 }}
                                whileTap={{ scale: 0.9 }}
                                className="p-3 glass rounded-full hover:bg-primary-500/20 transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6 text-primary-500" />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <ArrowDown className="w-6 h-6 text-primary-500" />
            </motion.div>
        </section>
    );
};

export default Hero;
