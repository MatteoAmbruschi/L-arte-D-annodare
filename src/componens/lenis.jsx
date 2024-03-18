'use client'
import { ReactLenis } from '@studio-freight/react-lenis';
import { useState, useEffect } from 'react'

export default function Lenis({children}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth <= 768);
    }, []);

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