import styles from './orariContatti.module.css'
import Image from 'next/image'
import Link from 'next/link'
import OrariClient from './orariClient/OrariClient';

function OrariContatti() {

    return (
        <div className={`mainContent`}>
            <div className={`${styles.containerOrari}`}>
                <OrariClient />

                <div className={styles.contattiContainer}>
                    <div>
                        <h6>Contatti</h6>
                        <ul>
                            <li><Link href='#maps'><Image src='/position.svg' width='30' height='30' alt='icona posizione' />CORSO ROMA, 26 24068 - SERIATE (BG)</Link></li>
                            <li><Link href='tel:3297342685'><Image src='/phone.svg' width='30' height='30' alt='icona telefono/cellulare' />3297342685 / 035 4536671</Link></li>
                            <li><Link href='mailto:lartedannodare.tappeti@gmail.com'><Image src='/emailicon.svg' width='30' height='30' alt='icona email' />lartedannodare.tappeti@gmail.com</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className={styles.hr} />
        </div>
    )
}

export default OrariContatti