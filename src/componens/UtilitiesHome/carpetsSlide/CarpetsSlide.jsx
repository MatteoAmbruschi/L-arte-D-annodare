import styles from './carpetsSlide.module.css'
import Image from 'next/image';

function CarpetsSlide() {

    return (
    <div className={styles.container}>
        <div className={styles.sectionCarpets}>
            <div className={styles.img}><Image src='/tappeto-turco.jpg' width='588' height='881' layout="responsive" alt='tappeto turco' /></div>
            <div className={styles.img}><Image src='/tappeto-persiano.webp' width='881' height='588' layout="responsive" alt='tappeto persiano' /></div>
            <div className={styles.img}><Image src='/tappeto-caucausico.webp' width='575' height='718' layout="responsive" alt='tappeto caucausico' /></div>
            <div className={styles.img}><Image src='/lavaggio-restauro-tappeti-bergamo.jpg' width='985' height='657' layout="responsive" alt='lavaggio restauro tappeti bergamo' /></div>
            <div className={styles.img}><Image src='/tre-tappeti.jpg' width='688' height='691' layout="responsive" alt='tre tappeti' /></div>
        </div>
    </div>
    )
}

export default CarpetsSlide