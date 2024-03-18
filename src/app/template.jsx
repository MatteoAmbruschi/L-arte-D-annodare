'use client'
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactLenis } from '@studio-freight/react-lenis';
import { useState, useEffect } from 'react'

export default function Template({ children }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0.05 }}
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
            
            </m.div>
        </LazyMotion>
    );
}
