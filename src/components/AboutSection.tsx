'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from './LanguageSwitcher';

const certifications = [
    { name: 'Junior Web Programmer', org: 'BNSP', year: '2025' },
    { name: 'Backend Pemula', org: 'Dicoding', year: '2024' },
    { name: 'React Dasar', org: 'SkillVul', year: '2024' },
];

export default function AboutSection() {
    const { t } = useLanguage();
    return (
        <section className="about section" id="about">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="about-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="section-label">{t('about.label')}</span>
                    <h2 className="about-headline">
                        {t('about.headline')}
                    </h2>
                </motion.div>

                {/* Main Grid */}
                <div className="about-grid">
                    {/* Left - Photo & Info */}
                    <motion.div
                        className="about-left"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-image-wrapper">
                            <div className="about-image">
                                <Image
                                    src="/profile.jpg"
                                    alt="Yogi Kautsar Alnandeta"
                                    width={400}
                                    height={500}
                                    priority
                                />
                            </div>
                            <div className="about-image-overlay">
                                <span className="about-location">
                                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    Bogor, Indonesia
                                </span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="about-stats">
                            <div className="stat-item">
                                <span className="stat-number">2024</span>
                                <span className="stat-label">{t('about.started')}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">6+</span>
                                <span className="stat-label">{t('about.experience')}</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3</span>
                                <span className="stat-label">{t('about.certifications')}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Content */}
                    <motion.div
                        className="about-right"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        <div className="about-content">
                            <p className="about-text-large">
                                {t('about.text1')}
                            </p>

                            <p className="about-text">
                                {t('about.text2')}
                            </p>

                            {/* Certifications */}
                            <div className="about-certs">
                                <h3 className="about-certs-title">{t('about.certs')}</h3>
                                <div className="about-certs-list">
                                    {certifications.map((cert, index) => (
                                        <motion.div
                                            key={cert.name}
                                            className="cert-item"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.4, delay: 0.1 * index }}
                                            viewport={{ once: true }}
                                        >
                                            <div className="cert-info">
                                                <span className="cert-name">{cert.name}</span>
                                                <span className="cert-org">{cert.org}</span>
                                            </div>
                                            <span className="cert-year">{cert.year}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Marquee Text */}
                <div className="about-marquee">
                    <div className="marquee-track">
                        <span> Backend Developer</span>
                        <span>•</span>
                        <span>Java</span>
                        <span>•</span>
                        <span>Spring Boot</span>
                        <span>•</span>
                        <span>Laravel</span>
                        <span>•</span>
                        <span>API Development</span>
                        <span>•</span>
                        <span>Microservices</span>
                        <span>•</span>
                    </div>
                    <div className="marquee-track" aria-hidden="true">
                        <span> Backend Developer</span>
                        <span>•</span>
                        <span>Java</span>
                        <span>•</span>
                        <span>Spring Boot</span>
                        <span>•</span>
                        <span>Laravel</span>
                        <span>•</span>
                        <span>API Development</span>
                        <span>•</span>
                        <span>Microservices</span>
                        <span>•</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
