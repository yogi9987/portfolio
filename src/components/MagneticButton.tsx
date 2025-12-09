'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface MagneticButtonProps {
    children: React.ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
}

export default function MagneticButton({ children, className = '', href, onClick }: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const distanceX = e.clientX - centerX;
        const distanceY = e.clientY - centerY;

        setPosition({
            x: distanceX * 0.3,
            y: distanceY * 0.3,
        });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const Component = href ? 'a' : 'button';

    return (
        <motion.div
            ref={ref}
            className="magnetic-wrapper"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
        >
            <Component href={href} className={className} onClick={onClick}>
                {children}
            </Component>
        </motion.div>
    );
}
