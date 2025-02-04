import Image from 'next/image';
import Link from 'next/link'
import styles from './ctaNegozio.module.css'

function CtaNegozio() {

    return (
        <section className={styles.sectionCta}>
        <div className={`mainContent ${styles.containerCta}`}>

          <Link href='/contatti' className={styles.prospectiveText}>
             <p>A disposizione con il nostro servizio</p>
             <p>A disposizione con il nostro servizio</p>
          </Link>
    
        <div className={styles.containerImgCta}>
          <Image src='/tappeto-restauro-bergamo.webp' width='500' height='300' alt='tappeto restauro bergamo' />
        </div>
        </div>
      </section>
    )
}

export default CtaNegozio