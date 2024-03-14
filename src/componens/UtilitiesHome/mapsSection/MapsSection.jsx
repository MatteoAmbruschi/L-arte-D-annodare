import styles from './mapsSections.module.css'
import { GoogleMapsEmbed } from '@next/third-parties/google'
const GOOGLE_MAPS = process.env.GOOGLE_MAPS;

function MapsSection() {
console.log(GOOGLE_MAPS)
    return(
        <div className={`mainContent ${styles.containerMapTxt}`}>

        <div className={styles.maps}>
              <GoogleMapsEmbed
              apiKey={GOOGLE_MAPS}
              height="100%"
              width="100%"
              mode="place"
              language='it'
              zoom='12'
              q="L&#39;Arte%20D&#39;Annodare"
              title="Via: Corso Roma, 26 24068 - Seriate (BG)" aria-label="Via: Corso Roma, 26 24068 - Seriate (BG)"
            />
          </div>
  
        <div className={styles.containerPercorso}>
  
          <h3>IL NOSTRO PERCORSO</h3>
          <hr />
          <p>Dopo una lunga esperienza maturata da parte mia in un prestigioso negozio in <strong>Bergamo</strong> e da parte del mio collega <strong>da generazioni di restauratori  in Turchia,</strong> decidiamo di affrontare il grande passo ed <strong>aprire nel 2006</strong> la nostra attività con il preciso focus di garantire al meglio la conservazione del tappeto (<strong>Restauro, Riparazione, Lavaggio ecc..</strong>). 
              Convinti da sempre che il lavoro nobiliti l&apos;uomo de svolto con passione ed onestà, la nostra maggiore gratificazione è quella di <strong>soddisfare pienamente il cliente</strong> cercando anche di chiarire e “svelarne” questo meraviglioso mondo.</p>
        </div>
    </div>
    )
}

export default MapsSection