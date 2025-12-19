import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Trophy, Users, FileText } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const Achievements = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const achievements = [
        {
            icon: FileText,
            title: 'Published Research Paper',
            description: '"Health Tracker" published in IJSREM (International Journal of Scientific Research in Engineering and Management)',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Trophy,
            title: '270+ LeetCode Problems',
            description: 'Consistently solving algorithmic challenges and improving problem-solving skills',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Users,
            title: 'Event Organizer – Tech Fest "KALAM"',
            description: 'Successfully organized and coordinated technical events for college tech fest',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Award,
            title: 'CTRL+C Coordinator',
            description: 'Led and coordinated events for junior students, fostering technical community engagement',
            color: 'from-orange-500 to-red-500'
        },
    ];

    return (
        <section id="achievements" className="py-20 md:py-32 relative overflow-hidden">
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
                        <Award className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-300">Accomplishments</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Achievements & <span className="gradient-text">Activities</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Recognition and contributions that showcase my dedication and impact
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="card group"
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <achievement.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-primary-500 transition-colors">
                                {achievement.title}
                            </h3>
                            <p className="text-gray-400 leading-relaxed">
                                {achievement.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Achievements;
