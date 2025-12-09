'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
    { name: 'Home', href: '/', sectionId: 'hero' },
    { name: 'About', href: '/about', sectionId: 'about' },
    { name: 'Projects', href: '/projects', sectionId: 'projects' },
    { name: 'Skills', href: '/skills', sectionId: 'skills' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const menuRef = useRef<HTMLDivElement>(null);
    const linksRef = useRef<HTMLAnchorElement[]>([]);
    const topLineRef = useRef<HTMLSpanElement>(null);
    const middleLineRef = useRef<HTMLSpanElement>(null);
    const bottomLineRef = useRef<HTMLSpanElement>(null);

    // Hide navbar on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                // Scrolling down & past threshold
                setIsVisible(false);
            } else {
                // Scrolling up
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        if (isOpen) {
            // Animate hamburger to X
            gsap.to(topLineRef.current, {
                rotation: 45,
                y: 8,
                duration: 0.3,
                ease: 'power2.inOut',
            });
            gsap.to(middleLineRef.current, {
                opacity: 0,
                scaleX: 0,
                duration: 0.2,
                ease: 'power2.inOut',
            });
            gsap.to(bottomLineRef.current, {
                rotation: -45,
                y: -8,
                duration: 0.3,
                ease: 'power2.inOut',
            });

            // Animate menu links
            gsap.fromTo(
                linksRef.current,
                { y: 80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    delay: 0.2,
                    ease: 'power3.out',
                }
            );
        } else {
            // Animate X back to hamburger
            gsap.to(topLineRef.current, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.inOut',
            });
            gsap.to(middleLineRef.current, {
                opacity: 1,
                scaleX: 1,
                duration: 0.2,
                delay: 0.1,
                ease: 'power2.inOut',
            });
            gsap.to(bottomLineRef.current, {
                rotation: 0,
                y: 0,
                duration: 0.3,
                ease: 'power2.inOut',
            });
        }
    }, [isOpen]);

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        // Scroll to section
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }

        // Update URL without # (clean URL)
        window.history.pushState({}, '', href);
    };

    const menuVariants = {
        closed: {
            clipPath: 'circle(0% at calc(100% - 40px) 40px)',
            transition: {
                duration: 0.5,
                ease: "easeInOut" as const,
            },
        },
        open: {
            clipPath: 'circle(150% at calc(100% - 40px) 40px)',
            transition: {
                duration: 0.7,
                ease: "easeInOut" as const,
            },
        },
    };

    return (
        <>
            <motion.nav
                className="navbar"
                initial={{ y: 0 }}
                animate={{ y: isVisible ? 0 : -100 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="navbar-inner">
                    <motion.a
                        href="/"
                        className="navbar-logo"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        GOY
                    </motion.a>

                    <div className="navbar-right">
                        <LanguageSwitcher />

                        <motion.button
                            className="hamburger"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span ref={topLineRef} className="hamburger-line"></span>
                            <span ref={middleLineRef} className="hamburger-line"></span>
                            <span ref={bottomLineRef} className="hamburger-line"></span>
                        </motion.button>
                    </div>
                </div>
            </motion.nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={menuRef}
                        className="fullscreen-menu"
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                    >
                        <div className="menu-content">
                            <div className="menu-links">
                                {navLinks.map((link, index) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        className="menu-link"
                                        onClick={(e) => handleLinkClick(e, link.sectionId, link.href)}
                                        ref={(el) => {
                                            if (el) linksRef.current[index] = el;
                                        }}
                                    >
                                        <span className="menu-link-number">0{index + 1}</span>
                                        <span className="menu-link-text">{link.name}</span>
                                    </a>
                                ))}
                            </div>

                            <div className="menu-footer">
                                <div className="menu-socials">
                                    <a href="https://github.com/yogikautsa112" target="_blank" rel="noopener noreferrer">GitHub</a>
                                    <a href="https://www.linkedin.com/in/alndta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                    <a href="https://instagram.com/alndta_" target="_blank" rel="noopener noreferrer">Instagram</a>
                                </div>
                                <p className="menu-email">yogikautsa@gmail.com</p>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
