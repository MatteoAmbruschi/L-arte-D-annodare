import styles from './mapsSections.module.css'

function MapsSection() {

    return(
        <div className={`mainContent ${styles.containerMapTxt}`}>

        <div className={styles.maps}>
          <iframe 
          loading="lazy" frameBorder="0" scrolling="no"
          title="Via: Corso Roma, 26 24068 - Seriate (BG)" aria-label="Via: Corso Roma, 26 24068 - Seriate (BG)" 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89177.34947416173!2d9.693071963854118!3d45.695142621738505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4781573830e6c0bf%3A0x46e3a9c3ea8dbc1e!2sL&#39;Arte%20D&#39;Annodare!5e0!3m2!1sit!2sit!4v1709548559450!5m2!1sit!2sit" 
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