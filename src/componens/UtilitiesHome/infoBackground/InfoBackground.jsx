import Button from '@/componens/button/Button'
import InfoShop from '../infoShop/InfoShop'
import styles from './infoBackground.module.css'
import { getImageProps } from 'next/image'
import getBackgroundImage from '../../GetBackgroundImage'

function InfoBackground() {
    const textRestauro= <>All&apos;interno del laboratorio <strong>disponiamo di oltre 200 kg di lana orientale tinte anche con colori vegetali.</strong> Quando ci viene fatto visionare un tappeto cerchiamo di consigliare il lavoro più appropriato considerandone il valore, la condizione, la tipologia ecc, <strong>senza mai dimenticarci</strong> che qualsiasi tappeto, anche il più umile, <strong>può rivestire una grande importanza per chi lo possiede.</strong> I preventivi sono immediati, chiari e <strong>senza rischio di sgradite “sorprese” finali.</strong></>
    const textLavaggio= <><strong>Il lavaggio del tappeto</strong> è un operazione delicata che <strong>non si può improvvisare, anche perché non tutti i tappeti sono uguali,</strong> noi garantiamo <strong>il miglior lavaggio.</strong> Offriamo gratuitamente il controllo e l&apos;eventuale intervento di piccoli restauri atti ad evitare spese gravose in futuro. Se avete difficoltà a consegnarci i tappeti in negozio, <strong>possiamo pensarci noi al ritiro e alla consegna gratuitamente.</strong></>
    const textVendita = <><strong>In negozio si possono visionare i nostri tappeti,</strong> fare una prima cernita e posizionarne alcuni a casa: <strong>dopo averli vissuti un paio di giorni si deciderà</strong> se acquistarne uno, rivederne altri in negozio, o semplicemente riconsegnarceli perché il tutto è naturalmente <strong>senza impegno.</strong> Se si gradisse una nostra consulenza in loco saremmo felici di offrirvela.</>
    
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
                <h3>VIENI A TROVARCI</h3>
                <h2>CONTATTAMI</h2>
                <hr />
                <p>NEGOZIO IN: Via: Corso Roma, 26 24068 - Seriate (BG)</p>
                <Button />
              </div>
          </div>
    
      </section>
    )
}

export default InfoBackground