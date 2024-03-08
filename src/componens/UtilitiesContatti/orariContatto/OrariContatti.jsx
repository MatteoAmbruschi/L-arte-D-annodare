import styles from './orariContatti.module.css'
import Image from 'next/image'
import Link from 'next/link'

function OrariContatti() {

    const date = new Date();
    let day = date.getDay()

    return (
        <div className={`mainContent`}>
            <div className={`${styles.containerOrari}`}>
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

                <div className={styles.contattiContainer}>
                    <div>
                        <h6>Contatti</h6>
                        <ul>
                            <li><Link href='#'><Image src='/position.svg' width='30' height='30' alt='icona posizione' />CORSO ROMA, 26 24068 - SERIATE (BG)</Link></li>
                            <li><Link href='tel:3297342685'><Image src='/phone.svg' width='30' height='30' alt='icona telefono/cellulare' />3297342685 / 035 4536671</Link></li>
                            <li><Link href='mailto:ambru63@katamail.com'><Image src='/emailicon.svg' width='30' height='30' alt='icona email' />AMBRU63@KATAMAIL.COM</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}

export default OrariContatti