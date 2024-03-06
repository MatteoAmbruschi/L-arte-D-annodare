import Header from "@/componens/header/Header"
import styles from './lavaggioTappeti.module.css'
import InitialText from "@/componens/LavaggioTappeti/initalText/InitialText";
import Prices from "@/componens/LavaggioTappeti/prices/Prices";
import CtaEnd from "@/componens/ctaEnd/CtaEnd";

const LavaggioTappeti = () => {
    const textHead = <>LAVAGGIO D&apos;ECCELLENZA EFFETTUATO CON I MIGLIORI MACCHINARI. Vi ricordiamo inoltre che se aveste difficoltà a raggiungerci o a caricare i tappeti in macchina, vi offriamo un servizio <strong>GRATUITO</strong> di ritiro e consegna.</>;

    return (
        <>
            <Header imgHead={"/lavaggio.webp"} title={'LAVAGGIO TAPPETI'} subTitle={"NEGOZIO DI TAPPETI"} text={textHead} button={true} />
            
            <div className={`mainContent ${styles.containerLavaggio}`}>

                <InitialText />
                
                <Prices />

            </div>

            <CtaEnd />
        </>
    )
}

export default LavaggioTappeti