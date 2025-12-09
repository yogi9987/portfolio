'use client';

import { motion } from 'framer-motion';

// Skills from CV
const skills = [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
    { name: 'Spring Boot', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
    { name: 'Laravel', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Apache Kafka', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg' },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Bootstrap', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
];

export default function SkillsSection() {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <motion.div
                    className="skills-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <span className="skills-label">Tech Stack</span>
                    <h2 className="skills-title">Skills & Technologies</h2>
                </motion.div>
            </div>

            {/* Auto-scrolling infinite carousel */}
            <div className="skills-carousel-wrapper">
                <div className="carousel-fade-left"></div>
                <div className="carousel-fade-right"></div>

                <div className="skills-carousel-track">
                    {/* First set */}
                    {skills.map((skill, idx) => (
                        <div key={`first-${skill.name}-${idx}`} className="skill-logo-item">
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="skill-logo-img"
                            />
                            <span className="skill-logo-name">{skill.name}</span>
                        </div>
                    ))}
                    {/* Second set (duplicate for seamless loop) */}
                    {skills.map((skill, idx) => (
                        <div key={`second-${skill.name}-${idx}`} className="skill-logo-item">
                            <img
                                src={skill.logo}
                                alt={skill.name}
                                className="skill-logo-img"
                            />
                            <span className="skill-logo-name">{skill.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

