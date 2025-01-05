import Button from '@/components/button/Button'
import styles from './ctaMaps.module.css'
import Image, { getImageProps } from 'next/image'
import getBackgroundImage from '@/components/getBackgroundImage'

function CtaMaps() {
    const {
        props: { srcSet },
      } = getImageProps({ alt: "tappeto da salotto e comodino", width: 1080, height: 720, src: '/tappeto-salotto.webp' })
      const backgroundImage = getBackgroundImage(srcSet)
      const style = { height: '100%', width: '100%', backgroundImage }

    return (
        <section className={styles.containerCtaM}>
            <div className={styles.imgOverlay} style={style} />
            <div className={styles.shapeTop}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className={styles.shapeBottom}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className="fill" d="M0,6V0h1000v100L0,6z"></path>
            </svg>
            </div>


            <div className={`mainContent ${styles.textContainer}`}>
                <div className={styles.containerText}>
                    <h2>A DISPOSIZIONE CON
                    IL NOSTRO SERVIZIO</h2>
                    <hr className={styles.hr} />
                    <Button imgUrl={'/up-arrow.svg'} link={'#form'} />
                </div>
                <div className={styles.maps} id='maps'>
                    <Image src="/contatti.webp" alt="maps" width={378.00} height={379.50} />
                </div>
            </div>

        </section>
    )
}

export default CtaMaps