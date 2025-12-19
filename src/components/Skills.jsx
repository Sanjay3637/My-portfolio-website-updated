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
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Technologies and tools I work with to build amazing software
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -5 }}
                            className="group relative h-full"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="glass-dark p-8 rounded-2xl h-full border border-white/10 relative hover:border-white/20 transition-colors duration-300">
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    <category.icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-6 text-gray-100 tracking-tight">
                                    {category.title}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <span
                                            key={skillIndex}
                                            className="px-3 py-1.5 text-sm bg-white/5 text-gray-300 rounded-lg border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Skills;
