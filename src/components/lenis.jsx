'use client'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation';

export default function Lenis({ children }) {
    const [isMobile, setIsMobile] = useState(false);
    const pathname = usePathname();
    const lenis = useLenis()

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

    useEffect(() => {
        if (!isMobile && lenis) {
            lenis.scrollTo(0, {
                immediate: true,
            }); 
        }
    }, [pathname]);

    return (
        <>
            {isMobile ? (
                children
            ) : (
                <ReactLenis root>
                    {children}
                </ReactLenis>
            )}
        </>
    )
}