'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const [currentTime, setCurrentTime] = useState<string>('--:--');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeString = now.toLocaleTimeString('id-ID', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false,
            });
            setCurrentTime(timeString);
        };

        // Update immediately
        updateTime();

        // Update every second
        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="footer">
            <div className="container">
                {/* Big CTA Section */}
                <motion.div
                    className="footer-cta"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="footer-cta-title">Let&apos;s work together</h2>
                    <a href="mailto:yogikautsa@gmail.com" className="footer-cta-email">
                        yogikautsa@gmail.com
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="32" height="32">
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </a>
                </motion.div>

                {/* Footer Main */}
                <div className="footer-main">
                    <div className="footer-col">
                        <span className="footer-label">Navigation</span>
                        <nav className="footer-nav">
                            <a href="#hero">Home</a>
                            <a href="#about">About</a>
                            <a href="#projects">Projects</a>
                            <a href="#skills">Skills</a>
                            <a href="#contact">Contact</a>
                        </nav>
                    </div>

                    <div className="footer-col">
                        <span className="footer-label">Socials</span>
                        <nav className="footer-nav">
                            <a href="https://www.linkedin.com/in/alndta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            <a href="https://instagram.com/alndta_" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://github.com/yogikautsa112" target="_blank" rel="noopener noreferrer">GitHub</a>
                        </nav>
                    </div>

                    <div className="footer-col">
                        <span className="footer-label">Contact</span>
                        <nav className="footer-nav">
                            <a href="mailto:yogikautsa@gmail.com">yogikautsa@gmail.com</a>
                            <a href="tel:+6285161351277">0851-6135-1277</a>
                        </nav>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} Yogi Kautsar Alnandeta
                    </p>
                    <div className="footer-time">
                        <span>Local Time</span>
                        <span className="footer-clock">{currentTime}</span>
                    </div>
                </div>
            </div>

            {/* Animated Background Line */}
            <div className="footer-line"></div>
        </footer>
    );
}
