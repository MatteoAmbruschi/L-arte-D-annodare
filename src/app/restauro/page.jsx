import Header from "@/components/header/Header"
import styles from '../textPage.module.css'
import InitialText from "@/components/LavaggioTappeti/initalText/InitialText";
import Prices from "@/components/LavaggioTappeti/prices/Prices";
import CtaEnd from "@/components/ctaEnd/CtaEnd";
import Image from "next/image";
import Button from "@/components/button/Button";
import Link from "next/link";


export const metadata = {
    title: "Laboratorio di Tappeti a Bergamo | Lavaggio e Restauro | Servizio di Ritiro e Consegna Gratuito",
    description: "Scopri il nostro laboratorio di tappeti a Bergamo, specializzato nel lavaggio e restauro dei tappeti. Offriamo un servizio di ritiro e consegna gratuito. Conosci il nostro approccio unico e professionale al mondo dei tappeti.",
  };

const LavaggioTappeti = () => {
    const textHead = <>PASSONE E COMPETANZA. <br></br><span style={{ fontFamily: "Tahoma, 'Segoe UI', Geneva, Verdana, sans-serif", fontStyle: 'normal' }}>Servizio <strong>GRATUITO</strong> di ritiro e consegna.</span></>;

    return (
        <>
            <Header imgHead={"/tappeto-restauro.webp"} title={'RESTAURO TAPPETI'} subTitle={"IL NOSTRO LABORATORIO DI"} text={textHead} button={true} />
            
            <div className={`mainContent ${styles.textPage}`}>
            <h3>TUTTO SUL RESTAURO</h3>
                <h2>La nostra passione per il restauro</h2>
                    <hr />
                    <p>É nel restauro che la nostra passione e competenza trovano la loro naturale espressione. Il contatto diretto con un tappeto ci coinvolge ogni volta. 
                        L&apos;emozione che esso trasmette ci parla della tessitrice che l&apos;ha creato e, attraverso i simboli da lei riprodotti, ci svela, almeno in parte,
                         il mondo di un popolo per il quale il tappeto era un elemento fondamentale della società.</p>
                    <Image src='/lavoro-restauro.webp' alt="artigiano al lavoro sul restauro di un tappeto" width='512' height='341' />
                    <hr />
                <h2>Il valore culturale e simbolico del tappeto</h2>
                <p>Un tappeto poteva esprimere molteplici significati e funzioni:</p>
                <ul>
                    <li><p><strong>Spirituali → </strong>utilizzato per la preghiera.</p></li>
                    <li><p><strong>Pratici → </strong>sacche, saliere, selle e coperte.</p></li>
                    <li><p><strong>Di prestigio → </strong>come gli asmalik, tappeti portati in dote.</p></li>
                </ul>
                <p>A questi aspetti se ne aggiungono di nuovi perché, entrati nelle nostre case, rappresentano spesso anche dei ricordi personali, oltre che essere naturalmente una componente essenziale di arredo.</p>
                <Image src='/tappeto-antico-dettagli-decorativi.webp' alt="tappeto antico con dettagli decorativi" width='528' height='396' />
                
               <Button />
                    <hr />
                    <h2>L&apos;attenzione ai dettagli nel restauro</h2>
                <p>Diverse variabili devono essere considerate nel restauro:</p>
                <ul>
                    <li><p><strong>Materiali utilizzati</strong> e loro fragilità.</p></li>
                    <li><p><strong>Colori </strong>e tecniche di tintura.</p></li>
                    <li><p><strong>Valore di mercato</strong>e valore intrinseco.</p></li>
                </ul>
                <p>Tutti questi aspetti vengono valutati attentamente per consigliare l&apos;intervento più idoneo.</p>
                <Image src='/tappeto-fase-restauro.webp' alt="particolare di un tappeto in fase di restauro" width='396' height='528' />
                <hr />
                    <h2>Esperienza e qualità garantita</h2>
                <p>A tutto questo si aggiunge una ormai lunga esperienza lavorativa e, soprattutto e per noi vanto, una provata serietà. In qualsiasi lavoro intraprendiamo, da quello più  economico a quelli più complessi, la qualità é sempre garantita e le innumerevoli testate (fermatura delle frange) e bordi che abbiamo restaurato ne sono la testimonianza.</p>
                <div style={{display: 'flex', gap: 20, flexWrap: 'wrap'}}>
                <Image src='/prima-restauro.webp' alt="prima di un restauro di tappeto" width='360' height='480' />
                <Image src='/dopo-restauro.jpg' alt="dopo un restauro di tappeto" width='360' height='480' />
                </div>
                <hr />
                    <h2>Trasparenza nei costi</h2>
                <p>Sui costi vogliamo essere sempre chiari: una volta formulato il preventivo, non ci discostiamo più da esso. In molti casi, possiamo fornire una stima immediata anche direttamente a domicilio.</p>
                

            </div>

            <CtaEnd />
        </>
    )
}

export default LavaggioTappeti