import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Folder, Github, ExternalLink } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';
import project3 from '../assets/project3.jpg';
import project4 from '../assets/project4.jpg';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projects = [
        {
            title: 'Smart MoniterAI',
            subtitle: 'Automated Exam Proctoring System',
            description: 'AI-powered online exam proctoring system with JWT authentication, role management, exam creation, submission, and result evaluation.',
            tech: ['MERN Stack', 'TensorFlow.js', 'JWT', 'AI/ML'],
            date: 'Jun 2025',
            github: 'https://github.com/Sanjay3637/Smart-Moniter-AI',
            image: project1,
            color: 'from-purple-500/20 to-pink-500/20'
        },
        {
            title: 'ATM Machine',
            subtitle: 'Java Console Application',
            description: 'Console-based ATM system with login/signup, balance check, deposit, withdrawal, and secure fund transfers with real-time database updates.',
            tech: ['Java', 'MySQL', 'JDBC', 'XAMPP'],
            date: 'Jan 2025',
            github: 'https://github.com/Sanjay3637/Java-ATM-Console-App',
            image: project2,
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        {
            title: 'Hand Gesture Game Controller',
            subtitle: 'Computer Vision Project',
            description: 'Gesture recognition system for touch-free gaming controlling Subway Surfers and Hill Climb Racing using computer vision.',
            tech: ['OpenCV', 'Python', 'Computer Vision'],
            date: 'Aug 2023 – Dec 2023',
            github: 'https://github.com/Sanjay3637/Controller-HILL-CLIMB',
            github2: 'https://github.com/Sanjay3637/Controller-SUBWAY-SURFS',
            image: project3,
            color: 'from-green-500/20 to-emerald-500/20'
        },
        {
            title: 'Super Car Website',
            subtitle: 'Responsive Web Application',
            description: 'Responsive car-selling website optimized for smooth browsing and transactions with modern UI/UX design.',
            tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
            date: 'Mar 2023 – Jul 2023',
            github: 'https://github.com/Sanjay3637/Super-Car-Website',
            image: project4,
            color: 'from-orange-500/20 to-red-500/20'
        },
    ];

    return (
        <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-dark-800 via-dark-900 to-dark-900"></div>

            <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                variants={staggerContainer}
                className="container mx-auto px-6 relative z-10"
            >
                <motion.div variants={staggerItem} className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-full mb-4">
                        <Folder className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-300">Portfolio</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        A selection of projects showcasing my skills and passion for development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -8 }}
                            className="group relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="glass-dark rounded-2xl overflow-hidden border border-white/10 relative hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                                {/* Project Image */}
                                <div className={`relative h-56 bg-gradient-to-br ${project.color} overflow-hidden`}>
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <Folder className="w-16 h-16 text-primary-500/30" />
                                    </div>

                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        onError={(e) => e.target.style.display = 'none'}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                                </div>

                                {/* Project Info */}
                                <div className="p-8 flex-grow flex flex-col">
                                    <div className="flex items-start justify-between mb-3">
                                        <div>
                                            <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary-400 transition-colors tracking-tight">
                                                {project.title}
                                            </h3>
                                            <p className="text-primary-500/90 font-medium text-sm mt-1">{project.subtitle}</p>
                                        </div>
                                        <div className="flex gap-2">
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2.5 glass rounded-xl hover:bg-primary-500 text-primary-400 hover:text-white transition-all duration-300"
                                                title="View on GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                            {project.github2 && (
                                                <a
                                                    href={project.github2}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="p-2.5 glass rounded-xl hover:bg-primary-500 text-primary-400 hover:text-white transition-all duration-300"
                                                    title="View Alternative Repo"
                                                >
                                                    <Github className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className="text-gray-500 text-xs font-medium mb-4 uppercase tracking-widest">{project.date}</p>

                                    <p className="text-gray-400 leading-relaxed mb-6 flex-grow">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {project.tech.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 text-[11px] font-bold uppercase tracking-wider bg-white/5 text-gray-400 rounded-md border border-white/5 group-hover:border-primary-500/30 group-hover:text-primary-400 transition-colors duration-300"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Projects;
