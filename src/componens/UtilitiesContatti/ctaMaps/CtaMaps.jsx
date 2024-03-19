import Button from '@/componens/button/Button'
import styles from './ctaMaps.module.css'
import { GoogleMapsEmbed } from '@next/third-parties/google'
import { getImageProps } from 'next/image'
import getBackgroundImage from '@/componens/GetBackgroundImage'
const GOOGLE_MAPS = process.env.GOOGLE_MAPS;

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
                    <h2>Vieni a trovarci</h2>
                    <hr className={styles.hr} />
                    <p>Ti accoglieremo in negozio, per aiutarti al meglio nell&apos;acquisto di un nuovo tappeto, o per restaurare e lavare il tuo tappeto</p>
                    <Button imgUrl={'/up-arrow.svg'} link={'#form'} />
                </div>

                <div className={styles.maps} id='maps'>
                    <GoogleMapsEmbed
                        apiKey={GOOGLE_MAPS}
                        height="100%"
                        width="100%"
                        mode="place"
                        language='it'
                        zoom='10'
                        q="L&#39;Arte%20D&#39;Annodare, Bergamo"
                        title="Via: Corso Roma, 26 24068 - Seriate (BG)" aria-label="Via: Corso Roma, 26 24068 - Seriate (BG)"
                    />
                </div>
            </div>

        </section>
    )
}

export default CtaMaps