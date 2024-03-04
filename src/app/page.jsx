import Header from '@/componens/header/Header';
import Head from 'next/head'
import Image from 'next/image';
import styles from './page.module.css'
import CarpetsSlide from '@/componens/carpetsSlide/CarpetsSlide';
import Button from '@/componens/button/Button';
import InfoShop from '@/componens/InfoShop/InfoShop';
import CtaNegozio from '@/componens/ctaNegozio/CtaNegozio';
import Reviews from '@/componens/reviews/Reviews';

export default function Home() {
  const textHead = <><strong>L&apos;arte d&apos;annodare di Giampietro Ambruschi a Seriate (Bergamo),</strong> è un punto di riferimento a <strong>Bergamo e provincia per chi ama il tappeto orientale.</strong> Offriamo nel nostro negozio/laboratorio un&apos;accurato <strong>servizio di vendita, restauro e lavaggio tappeti.</strong> </>;
  const textRestauro= <>All&apos;interno del laboratorio <strong>disponiamo di oltre 200 kg di lana orientale tinte anche con colori vegetali.</strong> Quando ci viene fatto visionare un tappeto cerchiamo di consigliare il lavoro più appropriato considerandone il valore, la condizione, la tipologia ecc, <strong>senza mai dimenticarci</strong> che qualsiasi tappeto, anche il più umile, <strong>può rivestire una grande importanza per chi lo possiede.</strong> I preventivi sono immediati, chiari e <strong>senza rischio di sgradite “sorprese” finali.</strong></>
  const textLavaggio= <><strong>Il lavaggio del tappeto</strong> è un operazione delicata che <strong>non si può improvvisare, anche perché non tutti i tappeti sono uguali,</strong> noi garantiamo <strong>il miglior lavaggio.</strong> Offriamo gratuitamente il controllo e l&apos;eventuale intervento di piccoli restauri atti ad evitare spese gravose in futuro. Se avete difficoltà a consegnarci i tappeti in negozio, <strong>possiamo pensarci noi al ritiro e alla consegna gratuitamente.</strong></>
  const textVendita = <><strong>In negozio si possono visionare i nostri tappeti,</strong> fare una prima cernita e posizionarne alcuni a casa: <strong>dopo averli vissuti un paio di giorni si deciderà</strong> se acquistarne uno, rivederne altri in negozio, o semplicemente riconsegnarceli perché il tutto è naturalmente <strong>senza impegno.</strong> Se si gradisse una nostra consulenza in loco saremmo felici di offrirvela.</>
  
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



  <section className={styles.containerBackground}>

    <div className={styles.backgroundOverlay} />
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


    <CtaNegozio />

    <Reviews />


    </>
  );
}