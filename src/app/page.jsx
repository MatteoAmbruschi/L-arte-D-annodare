import Header from '@/componens/header/Header';
import Head from 'next/head'
import CarpetsSlide from '@/componens/UtilitiesHome/carpetsSlide/CarpetsSlide';
import CtaNegozio from '@/componens/UtilitiesHome/ctaNegozio/CtaNegozio';
import Reviews from '@/componens/UtilitiesHome/reviews/Reviews';
import MapsSection from '@/componens/UtilitiesHome/mapsSection/MapsSection';
import InfoBackground from '@/componens/UtilitiesHome/infoBackground/InfoBackground';
import Numbers from '@/componens/UtilitiesHome/numbers/Numbers';
import Servizi from '@/componens/UtilitiesHome/servizi/Servizi';

export default function Home() {
  const textHead = <><strong>L&apos;arte d&apos;annodare di Giampietro Ambruschi a Seriate (Bergamo),</strong> è un punto di riferimento a <strong>Bergamo e provincia per chi ama il tappeto orientale.</strong> Offriamo nel nostro negozio/laboratorio un&apos;accurato <strong>servizio di vendita, restauro e lavaggio tappeti.</strong> </>;

  return (
    <>
      <Header imgHead={"/tappetiBergamo.webp"} title={"L'ARTE D'ANNODARE"} subTitle={'NEGOZIO DI TAPPETI'} text={textHead} button={true} />

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