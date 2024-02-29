import Header from '@/componens/header/Header';
import Head from 'next/head'

export default function Home() {
  const textHead= "<strong>L'arte d'annodare di Giampietro Ambruschi a Seriate (Bergamo),</strong> è un punto di riferimento a <strong>Bergamo e provincia per chi ama il tappeto orientale.</strong>Offriamo nel nostro negozio/laboratorio un'accurato <strong>servizio di vendita, restauro e lavaggio tappeti.</strong>"

  return (
    <>
      <Header imgHead={"/tappetiBergamo.jpg"} subTitle={'NEGOZIO DI TAPPETI'} title={"L'ARTE D'ANNODARE"} text={textHead} />
      <div className='mainContent'>
        <h2>I nostri servizi</h2>
      </div>
    </>
  );
}