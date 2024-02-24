"use client"

import Link from 'next/link'
import styles from './menu.module.css'
import Image from "next/image";
import { useState } from 'react';

const Menu = () => {

    const [toggle, setToggle] = useState(true)
    console.log(toggle)

    return (
        <nav className={`${styles.nav} ${toggle ? styles.menuOpen : ''}`}>
            <div className={styles.navContainer}>
            
            <Link href="/" className={styles.linkMenu}><Image src='/logo.png' width={240.48} height={34.00} alt="logo l'arte d'annodare" /></Link>
           
            <div className={styles.containerLinks}>
                    <ul className={styles.navMenu}>
                        <li>
                            <Link href="/lavaggio-tappeti-bergamo" className={styles.linkMenu}>LAVAGGIO TAPPETI</Link>
                        </li>
                        <li>
                            <Link href="/tappeti-persiani" className={styles.linkMenu}>TAPPETI PERSIANI</Link>
                        </li>
                        <li>
                            <Link href="/contatti" className={styles.linkMenu}>CONTATTI</Link>
                        </li>
                    </ul>
                </div>
                
         
                        <div className={`${styles.iconHamburger} ${toggle ? styles.menuOpen : ''}`} onClick={() => setToggle(!toggle)} >
                            <span className={styles.nthChild1}></span>
                            <span className={styles.nthChild2}></span>
                        </div>

            </div>
        </nav>

    )
}

export default Menu