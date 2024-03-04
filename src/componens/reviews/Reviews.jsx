import styles from './reviews.module.css'
import Button from '../button/Button'

function Reviews () {
    const svg = './star.svg'

    return (
        <section className={styles.sectionReviews}>
            <div className={styles.backgroundOverlay}></div>
            <div className={styles.shapeBottom}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                <path className='fill' d="M0,6V0h1000v100L0,6z"></path>
            </svg>
            </div>

            <div className={`mainContent ${styles.containerReviews}`}>
                <h3>L&apos;ARTE D&apos;ANNODARE</h3>
                <h2>LE RECENSIONI DEI NOSTRI CLIENTI</h2>

                <div className={styles.cards}>  </div>

                <Button text={'LASCIA UNA RECENSIONE'} imgUrl={svg} />
            </div>

        </section>
    )
}

export default Reviews