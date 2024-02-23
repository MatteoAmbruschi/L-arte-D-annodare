import Link from 'next/link'
import styles from './menu.module.css'
import Image from "next/image";

const Menu = () => {

    return (
        <nav className={styles.nav}>
            <div className={styles.navContainer}>
            
            <Link href="/" className={styles.linkMenu}><Image src='/logo.png' width={240.48} height={34.00} alt="logo l'arte d'annodare" /></Link>
            
                <ul className={styles.navMenu}>
                    <div className={styles.conteinerLinks}>
                        <li>
                            <Link href="/lavaggio-tappeti-bergamo" className={styles.linkMenu}>LAVAGGIO TAPPETI</Link>
                        </li>
                        <li>
                            <Link href="/tappeti-persiani" className={styles.linkMenu}>TAPPETI PERSIANI</Link>
                        </li>
                        <li>
                            <Link href="/contatti" className={styles.linkMenu}>CONTATTI</Link>
                        </li>
                    </div>
                </ul>
                
                    <div className={styles.iconHamburger}>
                        <span></span>
                        <span></span>
                    </div>
            </div>
        </nav>

    )
}

export default Menu