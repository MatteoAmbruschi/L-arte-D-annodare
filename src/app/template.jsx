'use client'
import { motion } from "framer-motion"
import { ReactLenis } from '@studio-freight/react-lenis';
import { useState, useEffect } from 'react'

export default function Template({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.45 }}
            >

            {isMobile ? (
                    children
                ) : (
                    <ReactLenis root>
                        {children}
                    </ReactLenis>
            )}
            
            </motion.div>
    );
}
