import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Wrench, Layers } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const skillCategories = [
        {
            title: 'Languages',
            icon: Code2,
            skills: ['Java', 'JavaScript', 'HTML5', 'CSS3'],
            color: 'from-blue-500 to-cyan-500'
        },
        {
            title: 'Frameworks & Libraries',
            icon: Layers,
            skills: ['React'],
            color: 'from-purple-500 to-pink-500'
        },
        {
            title: 'Databases',
            icon: Database,
            skills: ['MySQL', 'MongoDB'],
            color: 'from-green-500 to-emerald-500'
        },
        {
            title: 'Tools & Platforms',
            icon: Wrench,
            skills: ['Git', 'VS Code', 'AWS', 'OpenCV (Basics)'],
            color: 'from-orange-500 to-red-500'
        },
    ];

    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-900 to-dark-800"></div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className="container mx-auto px-6 relative z-10"
            >
                <motion.div variants={staggerItem} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
                        <Code2 className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-300">My Expertise</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Skills & <span className="gradient-text">Tech Stack</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Technologies and tools I work with to build amazing software
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ scale: 1.05, y: -10 }}
                            className="card group"
                        >
                            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 text-gray-100">
                                {category.title}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1 text-sm bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
