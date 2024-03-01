import Header from '@/componens/header/Header';
import Head from 'next/head'
import Image from 'next/image';
import styles from './page.module.css'
import CarpetsSlide from '@/componens/carpetsSlide/CarpetsSlide';
import Button from '@/componens/button/Button';

export default function Home() {
  const textHead = <> <strong>L&apos;arte d&apos;annodare di Giampietro Ambruschi a Seriate (Bergamo),</strong> è un punto di riferimento a <strong>Bergamo e provincia per chi ama il tappeto orientale.</strong> Offriamo nel nostro negozio/laboratorio un&apos;accurato <strong>servizio di vendita, restauro e lavaggio tappeti.</strong> </>;
  return (
    <>
      <Header imgHead={"/tappetiBergamo.webp"} title={"L'ARTE D'ANNODARE"} subTitle={'NEGOZIO DI TAPPETI'} text={textHead} button={true} />
      <div className='mainContent'>
          <h2>I nostri servizi</h2>
          <hr></hr>
          <div className={styles.serviziTitles}>
            <div className={styles.section}>
              <h3>CONSEGNA E RITIRO GRATUITI</h3>
                <p><strong>È un servizio che offriamo</strong> nel caso abbiate difficoltà a venire in negozio o i vostri tappeti siano voluminosi.</p>
              </div>
            <div className={styles.section}>
              <h3>CONSULENZA E PREVENTIVI</h3>
                <p>Prima di procedere a qualsiasi tipo di intervento è nostra premura consigliarvi sull&apos;operazione più idonea formulandovi un preventivo preciso e definitivo. Possiamo passare anche a <strong>casa vostra senza impegno.</strong></p>
              </div>
            <div className={styles.section}>
              <h3>LA NOSTRA LANA</h3>
                <p>Presso il punto vendita de L&apos;arte d&apos;annodare <strong>i clienti potranno visionare gli oltre 200 kg di lana anche antica</strong> e con colori vegetali importata dalla <strong>Turchia</strong> che utilizziamo nel nostro laboratorio.</p>
              </div>
          </div>
      </div>

      <CarpetsSlide />

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
              <p>35</p>
            </div>
          </div>
        </div>
      </div>


      <div className='mainContent'>

      <div>
        
      </div>

          <div className={styles.contattami}>
            <h3>VIENI A TROVARCI</h3>
            <h2>CONTATTAMI</h2>
            <hr />
            <p>NEGOZIO IN: Via: Corso Roma, 26 24068 - Seriate (BG)</p>
            <Button />
          </div>

          
      </div>

    </>
  );
}