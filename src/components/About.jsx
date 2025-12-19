import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { User } from 'lucide-react';
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

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
                    {/* Profile Image */}
                    <motion.div variants={staggerItem} className="order-2 md:order-1">
                        <div className="relative max-w-md mx-auto">
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-primary-600/30 rounded-2xl blur-3xl"></div>
                            {/* Image container */}
                            <div className="relative glass rounded-2xl p-3 hover:scale-105 transition-transform duration-300">
                                <img
                                    src="/profile.jpg"
                                    alt="Sanjay R - Software Engineer"
                                    className="w-full h-auto rounded-xl object-cover shadow-2xl"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div variants={staggerItem} className="space-y-6 order-1 md:order-2">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Motivated and detail-oriented <span className="text-primary-500 font-semibold">Software Engineer</span> with a strong foundation in Java, full-stack development, databases, and problem-solving.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Passionate about building <span className="text-primary-500 font-semibold">impactful and scalable software solutions</span> that solve real-world problems. I thrive on challenges and continuously seek to expand my technical expertise.
                        </p>
                        <p className="text-lg text-gray-300 leading-relaxed">
                            From AI-powered systems to full-stack applications, I enjoy working across the entire development spectrum to create innovative solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid - Full Width */}
                <motion.div
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ scale: 1.05 }}
                            className="card text-center"
                        >
                            <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-gray-400">
                                {stat.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default About;
