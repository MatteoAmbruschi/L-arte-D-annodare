import Button from '@/componens/button/Button'
import styles from './ctaMaps.module.css'

function CtaMaps() {

    return (
        <section className={styles.containerCtaM}>
            <div className={styles.imgOverlay} />
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
                    <hr />
                    <p>Ti accoglieremo in negozio, per aiutarti al meglio nell&apos;acquisto di un nuovo tappeto, o per restaurare e lavare il tuo tappeto</p>
                    <Button />
                </div>

                <div className={styles.maps}>
                <iframe 
                    loading="lazy" frameBorder="0" scrolling="no"
                    title="Via: Corso Roma, 26 24068 - Seriate (BG)" aria-label="Via: Corso Roma, 26 24068 - Seriate (BG)" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89177.34947416173!2d9.693071963854118!3d45.695142621738505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781573830e6c0bf%3A0x46e3a9c3ea8dbc1e!2sL&#39;Arte%20D&#39;Annodare!5e0!3m2!1sit!2sit!4v1709548559450!5m2!1sit!2sit" 
                    />
                </div>

            </div>
        </section>
    )
}

export default CtaMaps