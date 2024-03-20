'use client'
import Image from 'next/image'
import styles from './InfoShop.module.css'
import { useState } from 'react';

function InfoShop({restauro, lavaggio, vendita}) {

    const [toggle, setToggle] = useState(false)
    const [toggleLavaggio, setToggleLavaggio] = useState(false)
    const [toggleVendita, setToggleVendita] = useState(false)

    return (
    <div className={styles.column}>   
        <div className={`${styles.containerClick} ${toggle ? styles.toggleActive : ''}`}>
            <div onClick={() => setToggle(!toggle)} className={styles.rowInfo}>Restauro tappeti<span><Image src='arrow-down-icon-white.svg' width={18} height={11} alt='freccia menu' className={styles.rotateSvg} /></span></div>
            <p className={styles.open}>{restauro}</p>
        </div>

        <div className={`${styles.containerClick} ${toggleLavaggio ? styles.toggleActiveLavaggio : ''}`}>
            <div onClick={() => setToggleLavaggio(!toggleLavaggio)} className={styles.rowInfo}>Lavaggio tappeti<span><Image src='arrow-down-icon-white.svg' width={18} height={11} alt='freccia menu' className={styles.rotateSvg} /></span></div>
            <p className={styles.open}>{lavaggio}</p>
        </div>

        <div className={`${styles.containerClick} ${toggleVendita ? styles.toggleActiveVendita : ''}`}>
            <div onClick={() => setToggleVendita(!toggleVendita)} className={styles.rowInfo}>Vendita tappeti<span><Image src='arrow-down-icon-white.svg' width={18} height={11} alt='freccia menu' className={styles.rotateSvg} /></span></div>
            <p className={styles.open}>{vendita}</p>
        </div>
    </div>   
    )
}

export default InfoShop