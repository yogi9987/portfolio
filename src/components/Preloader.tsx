'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 100);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="preloader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
                    }}
                >
                    <motion.div
                        className="preloader-content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.h1
                            className="preloader-logo"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            GOY
                        </motion.h1>

                        <div className="preloader-progress">
                            <motion.div
                                className="preloader-bar"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: Math.min(progress, 100) / 100 }}
                                transition={{ duration: 0.1 }}
                            />
                        </div>

                        <motion.span
                            className="preloader-counter"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            {Math.min(Math.round(progress), 100)}%
                        </motion.span>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
