import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { User, Download } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const stats = [
        { label: 'LeetCode Solved', value: '270+' },
        { label: 'Published Research Paper', value: '1' },
    ];

    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900"></div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className="container mx-auto px-6 relative z-10"
            >
                <motion.div variants={staggerItem} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
                        <User className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-300">About Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Get to Know <span className="gradient-text">Me</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
                    {/* Profile Image */}
                    <motion.div variants={staggerItem} className="order-2 md:order-1">
                        <div className="relative max-w-sm mx-auto">
                            {/* Glow effect */}
                            <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-[2rem] blur-2xl opacity-50"></div>
                            {/* Image container */}
                            <div className="relative glass-dark rounded-2xl p-4 border border-white/10 hover:border-white/20 transition-all duration-500 group">
                                <img
                                    src="/profile.jpg"
                                    alt="Sanjay R - Software Engineer"
                                    className="w-full h-auto rounded-xl object-cover shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div variants={staggerItem} className="space-y-6 order-1 md:order-2">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-bold text-gray-100">Full-Stack <span className="text-primary-500">Developer</span></h3>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Motivated and detail-oriented software engineer with a strong foundation in <span className="text-gray-200 font-medium">Java, React, and Full-Stack Development</span>.
                            </p>
                            <p className="text-lg text-gray-400 leading-relaxed">
                                Passionate about building <span className="text-gray-200 font-medium">impactful and scalable software solutions</span> that solve real-world problems. I thrive on technical challenges and continuous learning.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 pt-4">
                            <motion.a
                                href="/SANJAY R - 714022104130.pdf"
                                download="Sanjay_Resume.pdf"
                                whileHover={{ scale: 1.02, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                                className="inline-flex items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg shadow-primary-500/20 transition-all border border-primary-400/20"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </motion.a>
                        </div>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -5 }}
                            className="glass-dark p-8 rounded-2xl border border-white/10 relative group overflow-hidden text-center"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="text-5xl font-black gradient-text mb-3 tracking-tight">
                                    {stat.value}
                                </div>
                                <div className="text-gray-400 font-medium tracking-wide uppercase text-xs">
                                    {stat.label}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
