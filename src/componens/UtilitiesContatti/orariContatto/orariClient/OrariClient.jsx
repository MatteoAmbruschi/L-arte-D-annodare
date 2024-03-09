"use client"
import { useEffect, useState } from 'react';
import styles from './numbersCache.module.css'

function OrariClient() {

    const [day, setDay] = useState(0);

    useEffect(() => {
            const date = new Date();
            setDay(date.getDay())
    }, []);

    return (
        <div className={styles.iconText}>
        <svg width="60px" height="60px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 7V12L10.5 14.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
            <h6>Orari</h6>
            <ul>
                <li className={day === 1 ? styles.colorDay : ''}><b>LUNEDÌ:</b> CHIUSO</li>
                <li className={day === 2 ? styles.colorDay : ''}><b>MARTEDÌ:</b> 9:00 - 12:30 / 16:00 - 19:00</li>
                <li className={day === 3 ? styles.colorDay : ''}><b>MERCOLEDÌ:</b> 9:00 - 12:30 / 16:00 - 19:00</li>
                <li className={day === 4 ? styles.colorDay : ''}><b>GIOVEDÌ:</b> 9:00 - 12:30 / 16:00 - 19:00</li>
                <li className={day === 5 ? styles.colorDay : ''}><b>VENERDÌ:</b> 9:00 - 12:30 / 16:00 - 19:00</li>
                <li className={day === 6 ? styles.colorDay : ''}><b>SABATO:</b> 9.00 - 12.30 / 16:00 - 18:00</li>
            </ul>
            </div>
        </div>
    )
}

export default OrariClient