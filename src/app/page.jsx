import Header from '@/componens/header/Header';
import Head from 'next/head'

export default function Home() {
  const textHead = <> <strong>L&apos;arte d&apos;annodare di Giampietro Ambruschi a Seriate (Bergamo),</strong> è un punto di riferimento a <strong>Bergamo e provincia per chi ama il tappeto orientale.</strong> Offriamo nel nostro negozio/laboratorio un&apos;accurato <strong>servizio di vendita, restauro e lavaggio tappeti.</strong> </>;
  return (
    <>
      <Header imgHead={"/tappetiBergamo.webp"} title={"L'ARTE D'ANNODARE"} subTitle={'NEGOZIO DI TAPPETI'} text={textHead} button={true} />
      <div className='mainContent'>
        <h2>I nostri servizi</h2>
      </div>
    </>
  );
}