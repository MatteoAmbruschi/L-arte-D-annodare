"use client"
import { useEffect, useState } from 'react';

function NumbersCache() {
    const [anniSettore, setAnniSettore] = useState('39');

    useEffect(() => {
            const date = new Date();
            const year = date.getFullYear();
            setAnniSettore(year - 1985);
    }, []);

    return <p>{anniSettore}</p>;
}

export default NumbersCache;
