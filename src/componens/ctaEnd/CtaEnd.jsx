import Button from '../button/Button'
import styles from './ctaEnd.module.css'

function CtaEnd() {

    return (
        <section className={styles.containerElement}>
            <div className={styles.backgroundOverlay} />
            <div className={styles.shape}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                    <path className="fill" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className={`mainContent ${styles.containerCta}`}>
                <h3>NEGOZIO DI TAPPETI</h3>
                <h6 className={styles.ctaTitle}>VIENI A TROVARCI</h6>
                <hr />
                <Button />
            </div>
        </section>
    )
}

export default CtaEnd