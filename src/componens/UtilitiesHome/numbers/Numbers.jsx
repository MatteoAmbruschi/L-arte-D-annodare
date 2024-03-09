import styles from './numbers.module.css'
import Image from 'next/image';

function Numbers () {
  const date = new Date();
  let year = date.getSeconds()
  let anniSettore = year - 1985

    return (
        <div className='mainContent'>
        <div className={styles.containerNumbers}>
          <div className={styles.sectionNumbers}>
            <Image src='/store.svg' width='100' height='60' alt='negozio icona' />
            <div className={styles.spaceIcon}>
              <h3>Aperti Dal</h3>
              <p>2006</p>
            </div>
          </div>

          <div className={styles.sectionNumbers}>
            <Image src='/person.svg' width='100' height='60' alt='persona icona' />
            <div className={styles.spaceIcon}>
              <h3>Anni Nel Settore</h3>
              <p>{year}</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Numbers