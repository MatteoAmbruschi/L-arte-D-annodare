'use client'
import { LazyMotion, domAnimation, m } from "framer-motion";
import { useEffect } from "react";

export default function Template({ children }) {
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.45 }}
            >
                    {children}
            </m.div>
        </LazyMotion>
    );
}