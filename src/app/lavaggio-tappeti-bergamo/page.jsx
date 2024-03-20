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
    const textHead = <>LAVAGGIO D&apos;ECCELLENZA EFFETTUATO CON I MIGLIORI MACCHINARI. Vi ricordiamo inoltre che se aveste difficoltà a raggiungerci o a caricare i tappeti in macchina, vi offriamo un servizio <strong>GRATUITO</strong> di ritiro e consegna.</>;

    return (
        <>
            <Header imgHead={"/lavaggio.webp"} title={'LAVAGGIO TAPPETI'} subTitle={"NEGOZIO DI TAPPETI"} text={textHead} button={true} />
            
            <div className={`mainContent ${styles.textPage}`}>

                <InitialText />
                
                <Prices />

            </div>

            <CtaEnd />
        </>
    )
}

export default LavaggioTappeti