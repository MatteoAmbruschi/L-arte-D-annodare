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
  const textHead = <><strong style={{ fontFamily: "Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif", fontStyle: 'normal' }}>L&apos;arte d&apos;annodare si tranforma.</strong> <br />Per poter <strong>offrire sempre il meglio della qualità senza aumenti di prezzo</strong>, dal 1/1/2025 opero nel mio nuovo laboratorio dedicandomi esclusivamente alla manutenzione del tappeto; al suo <strong>restauro</strong> e <strong>lavaggio</strong>.
    Il nuovo concetto lavorativo è quello di non aprire questo spazio al pubblico per potermi dedicare esclusivamente al restauro, integrandolo con un <strong>SERVIZIO GRATUITO DI RITIRO E CONSEGNA a Bergamo</strong>, in tutta la provincia e zone limitrofe.</>;

  return (
    <>
      <Header imgHead={"/tappetiBergamo.webp"} title={"L'ARTE D'ANNODARE"} subTitle={'LABORATORIO DI TAPPETI'} text={textHead} button={true} />

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