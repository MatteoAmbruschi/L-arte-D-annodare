'use client'
import { LazyMotion, domAnimation, m } from "framer-motion";
import { ReactLenis } from '@studio-freight/react-lenis';

export default function Template({ children }) {

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0.05 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.45 }}
            >

            {window.innerWidth <= 768 ? (
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
