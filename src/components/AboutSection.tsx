'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const certifications = [
    { name: 'Junior Web Programmer', org: 'BNSP', year: '2025' },
    { name: 'Backend Pemula', org: 'Dicoding', year: '2024' },
    { name: 'React Dasar', org: 'SkillVul', year: '2024' },
];

export default function AboutSection() {
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
                    <span className="section-label">About</span>
                    <h2 className="about-headline">
                        Saya adalah <span className="text-accent">Backend Developer</span> yang fokus
                        membangun sistem yang <span className="text-outline">stabil</span> dan
                        <span className="text-outline"> efisien</span>
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
                                <span className="stat-label">Started Coding</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">6+</span>
                                <span className="stat-label">Months Exp</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">3</span>
                                <span className="stat-label">Certifications</span>
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
                                Berpengalaman dalam menangani logika sistem yang kompleks seperti
                                <strong> routing ESB</strong> dan <strong>komunikasi socket TCP/IP</strong>.
                            </p>

                            <p className="about-text">
                                Saya adalah pekerja keras yang tekun, mampu bekerja mandiri maupun
                                memimpin tim. Saat ini saya menempuh pendidikan di SMKS Wikrama Bogor,
                                jurusan Pengembangan Perangkat Lunak dan Gim (PPLG) dengan fokus
                                pada Backend Development.
                            </p>

                            {/* Certifications */}
                            <div className="about-certs">
                                <h3 className="about-certs-title">Sertifikasi</h3>
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
                        <span>Backend Developer</span>
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
                        <span>Backend Developer</span>
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
