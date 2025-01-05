import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.css'

function Footer (){

    return (
    <>
        <div className={`mainContent ${styles.footer}`}>
            <meta
                name="format-detection"
                content="telephone=no, date=no, email=no, address=no"
            />

            <div className={styles.info}>
                <p><strong>Telefono:</strong> 3297342685</p>
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
                <Link target='blank' href='https://www.facebook.com/ArteDiAnnodare'><Image src='/facebook.svg' width='40' height='40' alt='icon facebook' /></Link>
            </div>

            <div className={styles.contact}>
                <p>lartedannodare.tappeti@gmail.com</p>
                <Link target='blank' href="mailto:lartedannodare.tappeti@gmail.com"><Image src='/email.svg' width='40' height='40' alt='icon email' /></Link>
            </div>
        </div>

        
            <div className={styles.copyright}>
               <p>Copyrihgt© 2025 L&apos;arte D&apos;annodare</p>
                <p><i>Site by Matteo Ambruschi</i></p>
            </div>
     </>
    )
}

export default Footer