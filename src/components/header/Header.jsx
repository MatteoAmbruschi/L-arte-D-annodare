import styles from './header.module.css'
import Button from '../button/Button'
import { getImageProps } from 'next/image'
import getBackgroundImage from '../getBackgroundImage' 

function Header({imgHead, title, subTitle, text, button = false}) {

    const {
        props: { srcSet },
      } = getImageProps({ alt: "negozio di tappeti orientali in Bergamo", width: 1080, height: 720, src: imgHead })
      const backgroundImage = getBackgroundImage(srcSet)
      const style = { height: '100%', width: '100%', backgroundImage }
   

    return (     
        <section className={styles.containerHeader}>
            <div className={styles.img} style={style} />
                <div className={styles.gradient}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
                        <path className={styles.shapeFill}d="M0,6V0h1000v100L0,6z"></path>
                    </svg>
                </div>

                <div className={styles.containerText}>
                      <h3 className={styles.subTitle}>
                            {subTitle}
                      </h3>
                      <h1>
                        {title}
                      </h1>
                      <h4>
                        {text}
                      </h4>
                      {button ? (<><div className={styles.hr} /> <Button /></>) : ''}
                </div>
        </section>  
    )
}

export default Header