import Image from 'next/image';
import styles from './mapsSections.module.css';

export default function MapsSection() {
    return(
      <div className={`mainContent ${styles.containerMapTxt}`}>

          <div className={styles.maps}>
            <Image src="/laboratorio_tappeti.webp" alt="maps" width={628.80} height={419.40} />
          </div>
  
        <div className={styles.containerPercorso}>
  
          <h3>LE MOTIVAZIONI DI QUESTA SCELTA</h3>
          <hr />
          <p>Dopo anni di provata professionalità e serietà, ho ritenuto che non fosse più necessario gestire un negozio con orari fissi e con relativi costi che vanno ad incidere pesantemente sul <strong>prezzo finale.</strong> Inoltre, la “nuova libertà” di poter sfruttare al meglio il mio tempo, mi permette di venire pienamente incontro alle esigenze della clientela <strong>evitandole viaggi dispendiosi in termini di denaro, tempo e stress.</strong> Per avere solo un preventivo, <strong>per il ritiro di uno o più tappeti da lavare e/o restaurare</strong>, non esitare a contattarmi, per e-mail o per telefono.</p>
        </div>
    </div>
    )
}
