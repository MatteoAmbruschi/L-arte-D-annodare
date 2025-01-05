import Button from '@/components/button/Button'
import InfoShop from '../infoShop/InfoShop'
import styles from './infoBackground.module.css'
import { getImageProps } from 'next/image'
import getBackgroundImage from '../../getBackgroundImage'

function InfoBackground() {
    const textRestauro= <>All&apos;interno del laboratorio <strong>disponiamo di oltre 200 kg di lana orientale tinte anche con colori vegetali.</strong> Quando ci viene fatto visionare un tappeto cerchiamo di consigliare il lavoro più appropriato considerandone il valore, la condizione, la tipologia ecc, <strong>senza mai dimenticarci</strong> che qualsiasi tappeto, anche il più umile, <strong>può rivestire una grande importanza affettiva per chi lo possiede.</strong> I preventivi sono immediati, chiari e <strong>senza rischio di sgradite “sorprese” finali.</strong></>
    const textLavaggio= <><strong>Il lavaggio del tappeto</strong> è un operazione delicata che <strong>non si può improvvisare, anche perché non tutti i tappeti sono uguali,</strong> noi garantiamo <strong>il miglior lavaggio.</strong> Offriamo gratuitamente il controllo e l&apos;eventuale intervento di piccoli restauri atti ad evitare spese gravose in futuro. Naturalmente per il ritiro e la consegna ci pensiamo noi.</>
    const textVendita = <>Offriamo sempre dei tappeti selezionati, di qualità con prezzi di occasione.</>
    
    const {
      props: { srcSet },
    } = getImageProps({ alt: "negozio di tappeti all'interno", width: 1080, height: 720, src: '/negozio-tappeti-bergamo.webp' })
    const backgroundImage = getBackgroundImage(srcSet)
    const style = { height: '100%', width: '100%', backgroundImage }

    return (
        <section className={styles.containerBackground}>

        <div className={styles.backgroundOverlay} style={style} />
          <div className={styles.shapeTop}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path className='fill' d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </div>
          <div className={styles.shapeBottom}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
              <path className='fill' d="M0,6V0h1000v100L0,6z"></path>
            </svg>
          </div>
        
        <div className={`mainContent ${styles.flexContent}`}>
    
            <InfoShop restauro={textRestauro} lavaggio={textLavaggio} vendita={textVendita} />
          
              <div className={styles.contattami}>
                <h3>LABORATORIO DI TAPPETI</h3>
                <h2>CONTATTAMI</h2>
                <hr />
                <Button />
              </div>
          </div>
    
      </section>
    )
}

export default InfoBackground