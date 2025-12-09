'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const projects = [
    {
        id: 1,
        number: '01',
        title: 'Protokol ATM (NDC)',
        category: 'Intern Backend Developer',
        year: '2025',
        description: 'Mengimplementasikan dan memelihara protokol komunikasi ATM berbasis standar NDC menggunakan Java Socket (TCP/IP) untuk memastikan stabilitas transaksi real-time.',
        fullDescription: 'Mengembangkan protokol ATM (NDC) yang robust dan scalable. Implementasi menggunakan Java Socket untuk komunikasi TCP/IP, memastikan stabilitas transaksi real-time dengan latency minimal. Sistem ini menangani ribuan transaksi per hari dengan uptime 99.9%.',
        tags: ['Java', 'TCP/IP', 'Socket Programming', 'NDC Protocol'],
        image: 'https://images.unsplash.com/photo-1601597111158-2fceff292cdc?w=800&h=600&fit=crop',
        color: '#E84545',
    },
    {
        id: 2,
        number: '02',
        title: 'Message Parser & ESB Routing',
        category: 'Intern Backend Developer',
        year: '2025',
        description: 'Merancang modul parser berkinerja tinggi untuk mentranslasikan raw message NDC menjadi format data terstruktur.',
        fullDescription: 'Merancang modul parser berkinerja tinggi untuk mentranslasikan raw message NDC menjadi format data terstruktur (JSON/ISO8583) agar kompatibel dengan sistem client/host. Membangun mekanisme dynamic routing pada arsitektur Enterprise Service Bus (ESB) untuk mendistribusikan lalu lintas transaksi secara efisien.',
        tags: ['Java', 'JSON', 'ISO8583', 'Enterprise Service Bus'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop',
        color: '#FF6B6B',
    },
    {
        id: 3,
        number: '03',
        title: 'Aplikasi Pelaporan Masyarakat',
        category: 'Key Project',
        year: '2024',
        description: 'Platform pelaporan warga yang interaktif dan real-time (SPA-like experience) tanpa reload halaman.',
        fullDescription: 'Membuat platform pelaporan warga yang interaktif dan real-time (SPA-like experience) tanpa reload halaman. Memastikan keamanan data pelapor dan efisiensi alur disposisi laporan ke petugas terkait. Built with Laravel Livewire for reactive components and MySQL for data persistence.',
        tags: ['Laravel Livewire', 'MySQL', 'SPA', 'Real-time'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
        color: '#4A2040',
    },
];

export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="projects section">
            <div className="container">
                <motion.div
                    className="projects-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <div>
                        <span className="section-label">Pengalaman & Proyek</span>
                        <h2 className="section-title">Selected Work</h2>
                    </div>
                    <p className="projects-count">
                        {String(projects.length).padStart(2, '0')} Projects
                    </p>
                </motion.div>

                {/* File Folder Style Projects */}
                <div className="projects-folders">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-folder"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            onMouseEnter={() => setHoveredId(project.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            onClick={() => setSelectedProject(project)}
                            style={{ '--folder-color': project.color } as React.CSSProperties}
                        >
                            {/* Folder Tab */}
                            <div className="folder-tab">
                                <span className="folder-number">{project.number}</span>
                            </div>

                            {/* Folder Content */}
                            <div className="folder-content">
                                <div className="folder-header">
                                    <span className="folder-category">{project.category}</span>
                                    <span className="folder-year">{project.year}</span>
                                </div>

                                <h3 className="folder-title">{project.title}</h3>

                                <p className="folder-description">{project.description}</p>

                                <div className="folder-tags">
                                    {project.tags.slice(0, 3).map((tag) => (
                                        <span key={tag} className="folder-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="folder-cta">
                                    <span>View Details</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover Preview Image */}
                            <AnimatePresence>
                                {hoveredId === project.id && (
                                    <motion.div
                                        className="folder-preview"
                                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img src={project.image} alt={project.title} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Project Detail Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        className="project-modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="project-modal"
                            initial={{ opacity: 0, scale: 0.9, y: 50 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 50 }}
                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                className="modal-close"
                                onClick={() => setSelectedProject(null)}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="modal-image">
                                <img src={selectedProject.image} alt={selectedProject.title} />
                            </div>

                            <div className="modal-content">
                                <div className="modal-header">
                                    <span className="modal-number">{selectedProject.number}</span>
                                    <div>
                                        <span className="modal-category">{selectedProject.category}</span>
                                        <span className="modal-year">{selectedProject.year}</span>
                                    </div>
                                </div>

                                <h2 className="modal-title">{selectedProject.title}</h2>

                                <p className="modal-description">{selectedProject.fullDescription}</p>

                                <div className="modal-tags">
                                    {selectedProject.tags.map((tag) => (
                                        <span key={tag} className="modal-tag">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
