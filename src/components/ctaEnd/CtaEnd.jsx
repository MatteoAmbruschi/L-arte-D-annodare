import Button from '../button/Button'
import styles from './ctaEnd.module.css'
import { getImageProps } from 'next/image'
import getBackgroundImage from '../getBackgroundImage'

function CtaEnd() {
    const {
        props: { srcSet },
      } = getImageProps({ alt: "tanti tappeti orientali antichi", width: 1080, height: 720, src: '/lavaggio-tappeto.webp' })
      const backgroundImage = getBackgroundImage(srcSet)
      const style = { height: '100%', width: '100%', backgroundImage }

    return (
        <section className={styles.containerElement}>
            <div className={styles.backgroundOverlay} style={style} />
            <div className={styles.shape}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className={`mainContent ${styles.containerCta}`}>
                <h3>LABORATORIO DI TAPPETI</h3>
                <h6 className={styles.ctaTitle}>A DISPOSIZIONE CON<br /> IL NOSTRO SERVIZIO</h6>
                <hr />
                <Button />
            </div>
        </section>
    )
}

export default CtaEnd