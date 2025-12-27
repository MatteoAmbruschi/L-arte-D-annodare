import Header from '@/components/header/Header';
import CarpetsSlide from '@/components/UtilitiesHome/carpetsSlide/CarpetsSlide';
import CtaNegozio from '@/components/UtilitiesHome/ctaNegozio/CtaNegozio';
import Reviews from '@/components/UtilitiesHome/reviews/Reviews';
import MapsSection from '@/components/UtilitiesHome/mapsSection/MapsSection';
import InfoBackground from '@/components/UtilitiesHome/infoBackground/InfoBackground';
import Numbers from '@/components/UtilitiesHome/numbers/Numbers';
import Servizi from '@/components/UtilitiesHome/servizi/Servizi';

export const metadata = {
  title: "L'arte D'annodare | Tappeti orientali Bergamo, lavaggio e restauro tappeti",
  description: "Punto di riferimento a Bergamo e provincia per chi ama il tappeto orientale. Offriamo vendita, restauro e lavaggio tappeti. Servizio di consulenza e preventivi gratuiti.",
};

const fontTitle = "Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif"
export default function Home() {
  const textHead = <>
    <strong style={{ fontFamily: fontTitle, fontStyle: 'normal' }}>IL FOCUS DELLA NOSTRA ATTIVITÀ É DA SEMPRE  IL TAPPETO ORIENTALE RICERCANDONE L&apos;ECCELLENZA.</strong>
    <br />
    <span style={{ fontFamily: fontTitle }}>L&apos;eccellenza nel restauro,</span> con l&apos;utilizzo delle nostre magnifiche lane turche, la lunga esperienza e la provata capacità. <span style={{ fontFamily: fontTitle }}>L&apos;eccellenza nel lavaggio; </span>
    da 20 anni collaboriamo unicamente con una ditta fuori provincia che, come noi si occupa esclusivamente di tappeti e lo fa trattandoli con i migliori macchinari, profonda conoscenza ed ambienti idonei.
    <span style={{ fontFamily: fontTitle }}> L&apos;eccellenza nel servizio</span> con il ritiro e consegna di preventivi a domicilio gratuiti e senza impegno. <span style={{ fontFamily: fontTitle }}>L&apos;eccellenza nell&apos;etica, </span> il nostro punto chiave;
    cerchiamo sempre di informare, spiegare e consigliare al meglio il cliente. Ed un consiglio mi sento di darlo subito.
    Entro pochi anni la tessitura, dopo diversi millenni, andrà quasi ad estinguersi perché non più praticabile in termini economici e di abilità manuali.
    Abbiatene cura dei vostri tappeti (soprattutto trattandoli con l&apos;adeguata manutenzione) che, pregiati od umili che siano, rappresenteranno sempre più un unicum.
  </>;

  return (
    <>
      <Header imgHead={"/tappetiBergamo.webp"} title={"L'ARTE D'ANNODARE"} subTitle={'LABORATORIO DI TAPPETI'} text={textHead} button={true} homePage={true} />

      <Servizi />

      <CarpetsSlide />

      <Numbers />

      <InfoBackground />

      <MapsSection />

      <CtaNegozio />

      <Reviews />
    </>
  );
}