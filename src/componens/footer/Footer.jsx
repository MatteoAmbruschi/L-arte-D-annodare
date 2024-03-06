import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

function Footer (){

    return (
        <div className={`mainContent ${styles.footer}`}>
            <meta
                name="format-detection"
                content="telephone=no, date=no, email=no, address=no"
            />

            <div className={styles.info}>
                <p><strong>Via:</strong> Corso Roma 26 - 24068 - Seriate (BG)</p>
                <p><strong>Telefono:</strong> 3297342685 / 035 4536671</p>
                <p><strong>Partita Iva:</strong> 04107640163</p>
            </div>

            <div className={styles.policy}>
                <p>Privacy Policy e Cookie Policy</p>
                <div className={styles.containerPolicy}>
                   <Link target='blank' href='Informativa-privacy-ai-sensi-degli-artt.pdf'><Image src='/down-arrow.svg' width='40' height='40' alt='icon arrow' /></Link>
                   <Link href='/cookie'><Image src='/cookie.svg' width='40' height='40'  alt='icon cookie' /></Link>
                </div>
            </div>
            
            <div className={styles.contact}>
                <p>L&apos;Arte d&apos;Annodare</p>
                <a target='blank' href='https://www.facebook.com/ArteDiAnnodare'><Image src='/facebook.svg' width='40' height='40' alt='icon facebook' /></a>
            </div>

            <div className={styles.contact}>
                <p>ambru63@katamail.com</p>
                <a target='blank' href="mailto:ambru63@katamail.com"><Image src='/email.svg' width='40' height='40' alt='icon email' /></a>
            </div>
        </div>
    )
}

export default Footer