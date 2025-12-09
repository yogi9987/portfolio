'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TextRevealProps {
    children: string;
    className?: string;
    delay?: number;
}

export default function TextReveal({ children, className = '', delay = 0 }: TextRevealProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const words = children.split(' ');

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
                delayChildren: delay,
            },
        },
    };

    const wordVariants = {
        hidden: {
            y: '100%',
            opacity: 0,
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1] as const,
            },
        },
    };

    return (
        <motion.span
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            style={{ display: 'inline' }}
        >
            {words.map((word, index) => (
                <span key={index} style={{ display: 'inline-block', overflow: 'hidden' }}>
                    <motion.span
                        variants={wordVariants}
                        style={{ display: 'inline-block' }}
                    >
                        {word}
                    </motion.span>
                    {index < words.length - 1 && '\u00A0'}
                </span>
            ))}
        </motion.span>
    );
}
