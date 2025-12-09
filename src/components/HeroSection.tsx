'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ThreeBackground = dynamic(() => import('./ThreeBackground'), {
    ssr: false,
    loading: () => <div className="hero-globe" />,
});

const roles = ['Backend Developer', 'Java Developer'];

export default function HeroSection() {
    const [roleIndex, setRoleIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero">
            <div className="hero-layout">
                {/* Left side - Content */}
                <div className="hero-content">
                    <motion.div
                        className="hero-intro"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className="hero-available">
                            <span className="hero-dot"></span>
                            Available for work
                        </span>
                    </motion.div>

                    <motion.h1
                        className="hero-name"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Yogi Kautsar
                        <span className="hero-name-outline">Alnandeta</span>
                    </motion.h1>

                    <motion.div
                        className="hero-role-animated"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <span className="hero-role-label">I am a</span>
                        <motion.span
                            key={roleIndex}
                            className="hero-role-text"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                        >
                            {roles[roleIndex]}
                        </motion.span>
                    </motion.div>

                    <motion.p
                        className="hero-description"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        Fokus pada Java Backend Development dengan pengalaman dalam routing ESB dan komunikasi socket TCP/IP.
                    </motion.p>

                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <a href="/projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                <path d="M7 17L17 7M17 7H7M17 7V17" />
                            </svg>
                        </a>
                        <a href="/contact" className="btn btn-ghost">
                            Get in Touch
                        </a>
                    </motion.div>
                </div>

                {/* Right side - 3D Backend Visualization */}
                <motion.div
                    className="hero-globe-wrapper"
                    initial={{ opacity: 0, scale: 0.8, x: 50 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <ThreeBackground />
                </motion.div>
            </div>

            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <span>Scroll to explore</span>
                <div className="scroll-indicator-line"></div>
            </motion.div>

            {/* Decorative elements */}
            <div className="hero-decoration">
                <span className="hero-year">© 2024</span>
                <span className="hero-location">Based in Indonesia</span>
            </div>
        </section>
    );
}
