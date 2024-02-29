import styles from './header.module.css'
import Image from 'next/image'

function Header() {

    return (

      <div className={styles.container}>
        <section className={styles.containerHeader}>
            <div className={styles.effectsOldSite}>
                <div className={styles.gradient}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className={styles.shapeFill }d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>
            </div>
        </section>
        ciao
    </div>      
    )
}

export default Header