"use client"

import Link from 'next/link'
import styles from './menu.module.css'
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Menu = () => {

    const [toggle, setToggle] = useState(false)
    const [dropDownToggle, setDropDownToggle] = useState(false)
    const [showNav, setShowNav] = useState(false)


    useEffect(() => {
        let lastScrollTop = 0;
       /*  if(window.innerWidth > window.innerHeight){ */
            window.addEventListener("scroll", function(){ 
            let st = window.scrollY || document.documentElement.scrollTop;

            if (st > lastScrollTop) {
                setShowNav(true)
            } else if (st < lastScrollTop) {
                setShowNav(false)
            }
            lastScrollTop = st <= 0 ? 0 : st;
            }, true);
      /*    }  */
    }, []);

    const pathname = usePathname();

    return (
        <nav className={`${styles.nav} ${toggle ? styles.menuOpen : ''}`} style={{ transform: showNav ? "translateY(-56px)" : "translateY(0px)" }}>
            <div className={styles.navContainer}>
            
            <Link href="/" className={styles.logoMenu} onClick={() => setToggle(false)}>
                <Image src='/logo.png' width={240.48} height={34.00} alt="logo l'arte d'annodare" />
            </Link>

                    <ul className={styles.navMenu}>
                        <li className={styles.linkMenu}>
                        <Link href="/lavaggio-tappeti-bergamo" onClick={() => setToggle(false)} className={`${styles.prospectiveText} ${pathname === "/lavaggio-tappeti-bergamo" ? styles.active : ""}`} >
                            <p>Lavaggio Tappeti</p>
                            <p>Lavaggio Tappeti</p>
                        </Link>
                        </li>

                            <li 
                            onMouseEnter={() => setDropDownToggle(true)}
                            onMouseLeave={() => setDropDownToggle(false)}
                            className={` ${styles.linkMenu} ${dropDownToggle ? styles.dropDownActive : ''}`}>
                                   <p onClick={(() => setDropDownToggle(!dropDownToggle))}>Storie di Tappeti <span><Image src='arrow-down-icon.svg' width={11} height={11} alt='freccia menu' className={styles.rotateSvg} /></span></p>
                                    <div className={styles.underMenu }>
                                        <Link href="/tappeti-persiani" onClick={() => setToggle(false)} className={`${styles.prospectiveText} ${pathname === "/tappeti-persiani" ? styles.active : ""}`}>
                                            <p>Tappeti Persiani</p>
                                            <p>Tappeti Persiani</p>
                                        </Link>
                                        <Link href="/tappeti-orientali" onClick={() => setToggle(false)} className={`${styles.prospectiveText} ${pathname === "/tappeti-orientali" ? styles.active : ""}`}>
                                            <p>Tappeti Orientali</p>
                                            <p>Tappeti Orientali</p>
                                        </Link>
                                        <Link href="/tappeti-kilim" onClick={() => setToggle(false)} className={`${styles.prospectiveText} ${pathname === "/tappeti-kilim" ? styles.active : ""}`}>
                                            <p>Tappeti Kilim</p>
                                            <p>Tappeti Kilim</p>      
                                        </Link>
                                    </div>
                            </li>

                        <li className={styles.linkMenu}>
                            <Link href="/contatti" onClick={() => setToggle(false)} className={`${styles.prospectiveText} ${pathname === "/contatti" ? styles.active : ""}`}>
                                <p>Contatti</p>
                                <p>Contatti</p>
                            </Link>
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