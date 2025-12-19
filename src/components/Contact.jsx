import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { staggerContainer, staggerItem } from '../utils/animations';

const Contact = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    const contactInfo = [
        {
            icon: Mail,
            label: 'Email',
            value: 'sanjay7183637@gmail.com',
            href: 'mailto:sanjay7183637@gmail.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Phone,
            label: 'Phone',
            value: '+91 9751903637',
            href: 'tel:+919751903637',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: MapPin,
            label: 'Location',
            value: 'Coimbatore, India',
            href: null,
            color: 'from-purple-500 to-pink-500'
        },
    ];

    const socialLinks = [
        {
            icon: Github,
            label: 'GitHub',
            href: 'https://github.com/Sanjay3637',
            color: 'hover:text-primary-500'
        },
        {
            icon: Linkedin,
            label: 'LinkedIn',
            href: 'https://www.linkedin.com/in/sanjay-r-736b17276/',
            color: 'hover:text-primary-500'
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
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
                        <Send className="w-4 h-4 text-primary-500" />
                        <span className="text-sm text-gray-300">Get In Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Let's <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {/* Contact Info Cards */}
                    <div className="grid md:grid-cols-3 gap-6 mb-12">
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={staggerItem}
                                whileHover={{ scale: 1.05, y: -5 }}
                            >
                                {info.href ? (
                                    <a
                                        href={info.href}
                                        className="card group block text-center"
                                    >
                                        <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <info.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <p className="text-sm text-gray-400 mb-2">{info.label}</p>
                                        <p className="text-gray-100 font-medium group-hover:text-primary-500 transition-colors">
                                            {info.value}
                                        </p>
                                    </a>
                                ) : (
                                    <div className="card group text-center">
                                        <div className={`w-14 h-14 mx-auto rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                            <info.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <p className="text-sm text-gray-400 mb-2">{info.label}</p>
                                        <p className="text-gray-100 font-medium">
                                            {info.value}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                        variants={staggerItem}
                        className="text-center"
                    >
                        <p className="text-gray-400 mb-6">Follow me on social media</p>
                        <div className="flex items-center justify-center gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`p-4 glass rounded-full ${social.color} transition-colors`}
                                    aria-label={social.label}
                                >
                                    <social.icon className="w-6 h-6" />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            {/* Footer */}
            <motion.footer
                variants={staggerItem}
                className="mt-20 pt-8 border-t border-gray-800 text-center"
            >
                <div className="container mx-auto px-6">
                    <p className="text-gray-400 text-sm">
                        © 2025 Sanjay R. Built with React & Tailwind CSS
                    </p>
                </div>
            </motion.footer>
        </section>
    );
};

export default Contact;
