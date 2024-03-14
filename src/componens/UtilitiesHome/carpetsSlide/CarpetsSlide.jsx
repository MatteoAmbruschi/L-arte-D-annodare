import styles from './carpetsSlide.module.css'
import Image from 'next/image';

function CarpetsSlide() {

    return (
    <div className={styles.container}>
        <div className={styles.sectionCarpets}>
            <div className={styles.img}><Image src='/tappeto-turco.jpg' fill="true" sizes='100%' alt='tappeto turco' /></div>
            <div className={styles.img}><Image src='/tappeto-persiano.webp' fill="true" sizes='100%' alt='tappeto persiano' /></div>
            <div className={styles.img}><Image src='/tappeto-caucausico.webp' fill="true" sizes='100%' alt='tappeto caucausico' /></div>
            <div className={styles.img}><Image src='/lavaggio-restauro-tappeti-bergamo.jpg' fill="true" sizes='100%' alt='lavaggio restauro tappeti bergamo' /></div>
            <div className={styles.img}><Image src='/tre-tappeti.jpg' fill="true" sizes='100%' alt='tre tappeti' /></div>
        </div>
    </div>
    )
}

export default CarpetsSlide