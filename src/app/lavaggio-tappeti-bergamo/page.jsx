import Header from "@/components/header/Header"
import styles from '../textPage.module.css'
import InitialText from "@/components/LavaggioTappeti/initalText/InitialText";
import Prices from "@/components/LavaggioTappeti/prices/Prices";
import CtaEnd from "@/components/ctaEnd/CtaEnd";


export const metadata = {
    title: "Negozio di Tappeti a Bergamo | Lavaggio e Restauro | Servizio di Ritiro e Consegna Gratuito",
    description: "Scopri il nostro negozio di tappeti a Bergamo, specializzato nel lavaggio e restauro dei tappeti. Offriamo un servizio di ritiro e consegna gratuito. Conosci il nostro approccio unico e professionale al mondo dei tappeti.",
  };

const LavaggioTappeti = () => {
    const textHead = <>LAVAGGIO D&apos;ECCELLENZA EFFETTUATO CON I MIGLIORI MACCHINARI. <br></br><span style={{ fontFamily: "Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif", fontStyle: 'normal' }}>Servizio <strong>GRATUITO</strong> di ritiro e consegna.</span></>;

    return (
        <>
            <Header imgHead={"/lavaggio.webp"} title={'LAVAGGIO TAPPETI'} subTitle={"LABORATORIO DI TAPPETI"} text={textHead} button={true} />
            
            <div className={`mainContent ${styles.textPage}`}>

                <InitialText />
                
                <Prices />

            </div>

            <CtaEnd />
        </>
    )
}

export default LavaggioTappeti