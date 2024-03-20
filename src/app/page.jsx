import Header from '@/components/header/Header';
import CarpetsSlide from '@/components/UtilitiesHome/carpetsSlide/CarpetsSlide';
import CtaNegozio from '@/components/UtilitiesHome/ctaNegozio/CtaNegozio';
import Reviews from '@/components/UtilitiesHome/reviews/Reviews';
import MapsSection from '@/components/UtilitiesHome/mapsSection/MapsSection';
import InfoBackground from '@/components/UtilitiesHome/infoBackground/InfoBackground';
import Numbers from '@/components/UtilitiesHome/numbers/Numbers';
import Servizi from '@/components/UtilitiesHome/servizi/Servizi';

export const metadata = {
  title: "L'arte D'annodare | Tappeti orientali a Bergamo, lavaggio e restauro a Seriate (Bergamo)",
  description: "Punto di riferimento a Bergamo e provincia per chi ama il tappeto orientale. Offriamo vendita, restauro e lavaggio tappeti. Servizio di consulenza e preventivi gratuiti.",
};

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