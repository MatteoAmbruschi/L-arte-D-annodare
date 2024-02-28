"use client"

import Link from 'next/link'
import styles from './menu.module.css'
import Image from "next/image";
import { useState } from 'react';

const Menu = () => {

    const [toggle, setToggle] = useState(false)
    const [dropDownToggle, setDropDownToggle] = useState(false)

    return (
        <nav className={`${styles.nav} ${toggle ? styles.menuOpen : ''}`}>
            <div className={styles.navContainer}>
            
            <Link href="/" className={styles.logoMenu} onClick={() => setToggle(false)}>
                <Image src='/logo.png' width={240.48} height={34.00} alt="logo l'arte d'annodare" />
            </Link>

                    <ul className={styles.navMenu}>
                        <li className={styles.linkMenu}>
                        <div className={styles.prospectiveText}>
                            <Link href="/lavaggio-tappeti-bergamo" onClick={() => setToggle(false)}>Lavaggio Tappeti</Link>
                            <Link href="/lavaggio-tappeti-bergamo" onClick={() => setToggle(false)}>Lavaggio Tappeti</Link>
                        </div>
                        </li>

                            <li 
                            onMouseEnter={() => setDropDownToggle(true)}
                            onMouseLeave={() => setDropDownToggle(false)}
                            className={` ${styles.linkMenu} ${dropDownToggle ? styles.dropDownActive : ''}`}>
                                   <div onClick={(() => setDropDownToggle(!dropDownToggle))}>Storie di Tappeti <span><Image src='arrow-down-icon.svg' width={11} height={11} alt='freccia menu' className={styles.rotateSvg} /></span></div>
                                    <div className={styles.underMenu }>
                                        <div className={styles.prospectiveText}>
                                            <Link href="/contatti" onClick={() => setToggle(false)}>Tappeti Persiani</Link>
                                            <Link href="/contatti" onClick={() => setToggle(false)}>Tappeti Persiani</Link>
                                        </div>
                                        <div className={styles.prospectiveText}>
                                            <Link href="/contatti" onClick={() => setToggle(false)}>Tappeti Orientali</Link>
                                            <Link href="/contatti" onClick={() => setToggle(false)}>Tappeti Orientali</Link>
                                        </div>
                                        <div className={styles.prospectiveText}>
                                            <Link href="/contatti" onClick={() => setToggle(false)}>Tappeti Kilim</Link>
                                            <Link href="/contatti" onClick={() => setToggle(false)}>Tappeti Kilim</Link>      
                                        </div>
                                    </div>
                            </li>

                        <li className={styles.linkMenu}>
                            <div className={styles.prospectiveText}>
                                <Link href="/contatti" onClick={() => setToggle(false)}>Contatti</Link>
                                <Link href="/contatti" onClick={() => setToggle(false)}>Contatti</Link>
                            </div>
                        </li>
                    </ul>
                
         
                        <div className={`${styles.iconHamburger} ${toggle ? styles.menuOpen : ''}`} onClick={() => setToggle(!toggle)} >
                            <span className={styles.nthChild1}></span>
                            <span className={styles.nthChild2}></span>
                        </div>

            </div>
        </nav>

    )
}

export default Menu