'use client'
import Image from 'next/image'
import styles from './InfoShop.module.css'
import { useState } from 'react';

function InfoShop() {

    const [toggle, setToggle] = useState(false)

    return (
    <div className={`${styles.column} ${toggle ? styles.toggleActive : ''}`}>   
        <div className={styles.containerClick} onClick={() => setToggle(!toggle)}>
            <div className={styles.rowInfo}>Restauro tappeti<span><Image src='arrow-down-icon-white.svg' width={11} height={11} alt='freccia menu' className={styles.rotateSvg} /></span></div>
            <p className={styles.open}>All’interno del laboratorio disponiamo di oltre 200 kg di lana orientale tinte anche con colori vegetali. Quando ci viene fatto visionare un tappeto cerchiamo di consigliare il lavoro più appropriato considerandone il valore, la condizione, la tipologia ecc, senza mai dimenticarci che qualsiasi tappeto, anche il più umile, può rivestire una grande importanza per chi lo possiede. I preventivi sono immediati, chiari e senza rischio di sgradite “sorprese” finali.</p>
        </div>
    </div>   
    )
}

export default InfoShop