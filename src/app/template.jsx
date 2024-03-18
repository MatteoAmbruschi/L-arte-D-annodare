'use client'
import { LazyMotion, domAnimation, m } from "framer-motion";


export default function Template({ children }) {

    return (
        <LazyMotion features={domAnimation}>
            <m.div
                initial={{ opacity: 0.05 }}
                animate={{ opacity: 1 }}
                transition={{ ease: 'easeInOut', duration: 0.45 }}
            >

   
                    {children}
  
            
            </m.div>
        </LazyMotion>
    );
}
