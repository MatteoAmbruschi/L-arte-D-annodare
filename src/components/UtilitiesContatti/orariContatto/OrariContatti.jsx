import styles from './orariContatti.module.css'
import Image from 'next/image'
import Link from 'next/link'
import OrariClient from './orariClient/OrariClient';

function OrariContatti() {

    return (
        <>
                {/* <OrariClient /> */}

                <div className={styles.contattiContainer}>
                        <h6>Contatti</h6>
                        <ul>
                            <li><Link href='tel:3297342685'><Image src='/phone.svg' width='30' height='30' alt='icona telefono/cellulare' />3297342685</Link></li>
                            <li><Link href='mailto:lartedannodare.tappeti@gmail.com'><Image src='/emailicon.svg' width='30' height='30' alt='icona email' />lartedannodare.tappeti@gmail.com</Link></li>
                        </ul>
            <hr className={styles.hr} />
                </div>
            </>
    )
}

export default OrariContatti