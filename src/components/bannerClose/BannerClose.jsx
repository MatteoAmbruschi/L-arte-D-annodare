import Link from 'next/link'
import styles from './bannerClose.module.css'
import Image from 'next/image'

export const BannerClose = () => {

    return (
        <section className={styles.container}>
            {/* <p>Dal 4/8 al 26/8 chiusura estiva del NEGOZIO ma prosegue l&apos;attività di LABORATORIO.</p>
            <p className={styles.call}>Per appuntamento:&nbsp;<i><Link href='tel:3297342685'>3297342685</Link></i></p> */}

            <p className={styles.call}>DAL 2025 OPERIAMO NEL NOSTRO NUOVO LABORATORIO:&nbsp;<i><Link href='tel:3297342685'>3297342685</Link></i>&nbsp;
            </p>
        </section>
    )
}