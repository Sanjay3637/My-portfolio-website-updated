import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const education = [
        {
            degree: 'B.E. Computer Science and Engineering',
            institution: 'Sri Shakthi Institute of Engineering and Technology',
            university: 'Anna University',
            period: '2022 – 2026',
            cgpa: '7.59*',
            type: 'Undergraduate'
        },
        {
            degree: 'Higher Secondary Certificate (HSC)',
            institution: 'Secondary School',
            period: '2021 – 2022',
            percentage: '72.6%',
            type: 'Secondary'
        },
        {
            degree: 'Secondary School Leaving Certificate (SSLC)',
            institution: 'Secondary School',
            period: '2019 – 2020',
            percentage: '81.4%',
            type: 'Secondary'
        },
    ];

    return (
        <section id="education" className="py-20 md:py-32 relative overflow-hidden">
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
                        <GraduationCap className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-300">Academic Background</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Educational <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic milestones and learning path
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ scale: 1.02, x: 10 }}
                            className="card group"
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-gray-100 mb-2 group-hover:text-primary-500 transition-colors">
                                        {edu.degree}
                                    </h3>
                                    <p className="text-primary-400 font-medium mb-1">
                                        {edu.institution}
                                    </p>
                                    {edu.university && (
                                        <p className="text-sm text-gray-500 mb-2">{edu.university}</p>
                                    )}
                                    <div className="flex items-center gap-2 text-sm text-gray-400">
                                        <Calendar className="w-4 h-4" />
                                        <span>{edu.period}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    {edu.cgpa && (
                                        <div className="flex flex-col items-center px-6 py-3 glass rounded-lg">
                                            <span className="text-2xl font-bold gradient-text">{edu.cgpa}</span>
                                            <span className="text-xs text-gray-400">CGPA</span>
                                        </div>
                                    )}
                                    {edu.percentage && (
                                        <div className="flex flex-col items-center px-6 py-3 glass rounded-lg">
                                            <span className="text-2xl font-bold gradient-text">{edu.percentage}</span>
                                            <span className="text-xs text-gray-400">Percentage</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
