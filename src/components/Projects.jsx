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
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A selection of projects showcasing my skills and passion for development
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={staggerItem}
                            whileHover={{ y: -10 }}
                            className="group card overflow-hidden"
                        >
                            {/* Project Image */}
                            <div className={`relative h-48 bg-gradient-to-br ${project.color} rounded-lg mb-6 overflow-hidden`}>
                                {/* Placeholder (visible if image fails) */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <Folder className="w-16 h-16 text-primary-500/30" />
                                </div>

                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => e.target.style.display = 'none'}
                                />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Info */}
                            <div className="space-y-4">
                                <div>
                                    <div className="flex items-start justify-between mb-2">
                                        <h3 className="text-2xl font-bold text-gray-100 group-hover:text-primary-500 transition-colors">
                                            {project.title}
                                        </h3>
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-2 glass rounded-lg hover:bg-primary-500/20 transition-colors"
                                            aria-label="View on GitHub"
                                        >
                                            <Github className="w-5 h-5 text-primary-500" />
                                        </a>
                                        {project.github2 && (
                                            <a
                                                href={project.github2}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 glass rounded-lg hover:bg-primary-500/20 transition-colors"
                                                aria-label="View on GitHub"
                                            >
                                                <Github className="w-5 h-5 text-primary-500" />
                                            </a>
                                        )}

                                    </div>
                                    <p className="text-sm text-primary-400 mb-2">{project.subtitle}</p>
                                    <p className="text-sm text-gray-500 mb-3">{project.date}</p>
                                </div>

                                <p className="text-gray-400 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 text-xs bg-primary-500/10 text-primary-400 rounded-full border border-primary-500/20"
                                        >
                                            {tech}
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

export default Projects;
