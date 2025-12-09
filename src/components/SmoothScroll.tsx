'use client';

import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        // Initialize Lenis with smoother settings
        lenisRef.current = new Lenis({
            lerp: 0.1, // Smoother lerp value
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        // Animation frame loop with proper cleanup
        function raf(time: number) {
            lenisRef.current?.raf(time);
            rafRef.current = requestAnimationFrame(raf);
        }

        rafRef.current = requestAnimationFrame(raf);

        return () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            lenisRef.current?.destroy();
        };
    }, []);

    return <>{children}</>;
}

