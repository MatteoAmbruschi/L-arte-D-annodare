import Header from "@/components/header/Header"
import styles from '../textPage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from "@/components/button/Button"
import CtaEnd from "@/components/ctaEnd/CtaEnd"

export const metadata = {
    title: "Guida ai Tappeti Kilim: Storia, Tecnica, Prezzi e Cura | Negozio di Tappeti",
    description: "Scopri tutto quello che c'è da sapere sui tappeti kilim: dalla loro storia millenaria alla modernità dei disegni, trova prezzi e consigli per la cura. Esplora il mondo dei kilim nel nostro negozio di tappeti a Bergamo. Contattaci per saperne di più!",
  };

function Tappetikilim() {
    const textHead = <>Esplora il Mondo dei Tappeti Kilim: Tradizione Artigianale del Medio Oriente e dell&apos;Asia Centrale. Dalle Origini Antiche alla Modernità, Scopri i Segreti di Questi Tappeti Tessuti a Mano. Dal Design Tradizionale ai Kilim Moderni, Trova l&apos;Eleganza e la Durabilità in Ogni Filo. Guida ai Prezzi e Consigli per la Cura.</>

    return (
        <div>
            <Header imgHead={"/tappeto-bergamo-provincia.webp"} title={"TAPPETI KILIM"} subTitle={"TUTTO QUELLO CHE C'È DA SAPERE"} text={textHead} button={true} />
            <div className={`mainContent ${styles.textPage}`}>

                <h3>TUTTO QUELLO CHE C&apos;È DA SAPERE</h3>
                <h2>Tappeti Kilim</h2>
                    <hr />
                <p><strong>I kilim sono tappeti tessuti a mano</strong> originari del <Link href='https://it.wikipedia.org/wiki/Medio_Oriente' target="_blank">Medio Oriente</Link> e dell&apos;<Link href='https://it.wikipedia.org/wiki/Asia_centrale' target="_blank">Asia centrale.</Link> Sono caratterizzati da disegni geometrici e astratti e sono realizzati utilizzando una tecnica di tessitura chiamata “weft wrapping”, che consiste nel tessere il filo in modo che copra l&apos;ordito invece di intersecarsi con esso, come accade nella tessitura tradizionale. <strong>Ciò rende i kilim più leggeri e più sottili rispetto ai tappeti tradizionali, e li rende facili da trasportare e da pulire.</strong></p>
                <p>I <Link href='https://it.wikipedia.org/wiki/Kilim' target="_blank">kilim</Link> sono spesso realizzati con lana o cotone, ma possono anche essere fatti di altri materiali come il juta o la seta. Sono disponibili in una vasta gamma di colori e stili, e sono spesso utilizzati come tappeti da arredamento per aggiungere un tocco di stile e di eleganza a qualsiasi ambiente.</p>
                <p>La produzione è un&apos;arte antica che viene tramandata di generazione in generazione in alcune regioni del Medio Oriente e dell&apos;Asia centrale. I kilim vengono fatti a mano utilizzando telaio manuale o telaio a mano, e ci vogliono mesi, a volte anni, per completare un kilim di alta qualità.</p>
                <p>Per prendersi cura, si consiglia di aspirarli regolarmente per rimuovere la polvere e lo sporco, di usare un tappeto sul tappeto per proteggerli dall&apos;uso eccessivo e di farli pulire da un professionista se necessario. Inoltre, è importante conservarli in un luogo fresco e asciutto, lontano da fonti di calore e di luce diretta. Seguendo queste raccomandazioni, un kilim può durare per molti anni.</p>
                <Image src='/tappeto-kilim.webp' width='550' height='310' alt="foto tappeto kilim" />
                    <hr />
                <h2>Le origini del kilim</h2>
                <p>Sono <Link href='/tappeti-orientali'>tappeti orientali</Link> fatti a mano, tradizionalmente realizzati con lana tessuta a mano su un telaio senza cuciture. Sono originari dell&apos;Asia centrale, dell&apos;Anatolia e dei Balcani, ma vengono anche prodotti in altre parti del mondo.</p>
                <p>Le origini sono antiche e risalgono all&apos;epoca nomade dei popoli di queste regioni, che utilizzavano questi tappeti per coprire il pavimento delle tende e per proteggersi dal freddo durante il sonno. I kilim erano anche utilizzati per decorare le case e gli edifici pubblici, e per separare gli spazi all&apos;interno delle abitazioni.</p>
                <p>I kilim sono realizzati con una tecnica di tessitura chiamata “<Link href='https://it.wikipedia.org/wiki/Follatura' target="_blank"><strong>panno battuto</strong></Link>“, che consiste nel tessere la lana in modo da creare un disegno o un motivo. Questi disegni spesso riflettono le tradizioni culturali e le credenze dei popoli che li producono, e ogni regione ha i suoi stili e motivi caratteristici. Sono anche conosciuti per la loro varietà di colori vivaci e per la loro durabilità.</p>
                <p>Oggi i kilim sono molto apprezzati come elementi decorativi e sono diffusi in tutto il mondo. Vengono utilizzati sia come tappeti da pavimento che come elementi d&apos;arredo, come cuscini o tende. Sono anche spesso utilizzati come tappeti da esterno, perché sono resistenti all&apos;acqua e alla polvere.</p>
                    <hr />
                <h2>Tappeti kilim moderni</h2>
                <p><strong>I tappeti kilim moderni sono una variante dei tradizionali</strong>, realizzati con la stessa tecnica di tessitura a mano, ma con disegni e motivi più contemporanei. Possono essere realizzati con materiali diversi, come lana, cotone o poliestere, e spesso vengono prodotti in serie per soddisfare la domanda del mercato.</p>
                <p>Possono essere trovati in una vasta gamma di stili e colori, e spesso vengono progettati per adattarsi a una varietà di arredamenti e ambienti. Possono essere utilizzati come tappeti da pavimento o come elementi d&apos;arredo, come cuscini o tende, e sono spesso apprezzati per la loro durabilità e per la loro bellezza visiva.</p>
                <p><strong>Alcuni tappeti kilim moderni sono realizzati con disegni astratti o geometrici, mentre altri hanno motivi floreali o animali.</strong> Altri ancora sono ispirati a culture o stili di vita specifici, come il bohemien o il marocchino. Indipendentemente dallo stile, possono aggiungere un tocco di colore e personalità a qualsiasi ambiente.</p>
                    <hr />
                <h2>I tappeti kilim antichi</h2>
                <p>Sono tappeti fatti a mano realizzati con la tecnica di tessitura “<Link href='https://it.wikipedia.org/wiki/Follatura' target="_blank">panno battuto</Link>” e sono caratterizzati da disegni e motivi tradizionali. Sono originari dell&apos;Asia centrale, dell&apos;Anatolia e dei Balcani, ma vengono anche prodotti in altre parti del mondo.</p>
                <p>Spesso realizzati con lana di alta qualità, che è resistente e duratura. Sono anche noti per i loro colori vivaci e per la loro bellezza visiva, poiché i disegni spesso riflettono le tradizioni culturali e le credenze dei popoli che li producono. Ogni regione ha i suoi stili e motivi caratteristici, e i tappeti kilim antichi possono essere trovati in una vasta gamma di stili e colori.</p>
                <p><strong>I tappeti kilim antichi sono molto apprezzati come elementi d&apos;arredo</strong> e sono spesso utilizzati come tappeti da esterno, perché sono resistenti all&apos;acqua e alla polvere. Sono anche spesso utilizzati come tappeti da pavimento o come elementi d&apos;arredo, come cuscini o tende, e sono molto duraturi. Se ben curati, i tappeti kilim antichi possono durare per generazioni.</p>
                <Button />
                    <hr />
                <h2>I prezzi dei tappeti kilim</h2>
                <p>I prezzi dei kilim possono variare in base a una serie di fattori, <strong>come il materiale, la dimensione, il design, l&apos;età e la provenienza.</strong></p>
                <p>I kilim realizzati con lana di alta qualità tendono ad essere più costosi rispetto a quelli realizzati con altri materiali, come il cotone o il poliestere. Anche la dimensione del tappeto può influire sul prezzo, con i kilim più grandi che tendono ad essere più costosi rispetto a quelli più piccoli.</p>
                <p>Il design del tappeto è un altro fattore importante da considerare, poiché i kilim con disegni più elaborati o motivi più dettagliati tendono ad essere più costosi rispetto a quelli con disegni più semplici. L&apos;età del tappeto può anche influire sul prezzo, poiché i kilim antichi tendono ad essere più costosi di quelli più recenti.</p>
                <p>Infine, la provenienza del tappeto può influire sul prezzo. Ad esempio, i kilim prodotti in regioni come l&apos;Anatolia o il Caucaso tendono ad essere più costosi di quelli prodotti in altre parti del mondo.</p>
                <p>In generale, i prezzi dei kilim possono variare da poche decine di euro per i kilim più semplici a diverse migliaia di euro per i kilim antichi o di alta qualità.</p>

            </div>
            <CtaEnd />
        </div>
    )
}

export default Tappetikilim