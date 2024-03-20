import CtaEnd from "@/components/ctaEnd/CtaEnd"
import Header from "@/components/header/Header"
import styles from '../textPage.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Button from "@/components/button/Button"


export const metadata = {
    title: "Guida ai Tappeti Persiani: Storia, Tessitura e Valore | Negozio di Tappeti a Bergamo",
    description: "Scopri l'incanto dei tappeti persiani con la nostra guida completa. Esplora la storia millenaria, la bellezza artigianale e i fattori che determinano il loro valore. Visita il nostro negozio a Bergamo e trova il tappeto perfetto per te!",
  };

function TappetiPersiani() {
    const textHead = <>Scopri l&apos;Incanto dei Tappeti Persiani: Una Guida dalla Tessitura Antica ai Moderni Tesori. Esplora la Storia, la Bellezza e i Fattori che Determinano il Loro Valore. Un Affascinante Viaggio nel Mondo degli Affascinanti Tappeti Iraniani.</>

    return (
        <div>
            <Header imgHead={"/tappeto-bergamo-provincia.webp"} title={"TAPPETI PERSIANI"} subTitle={"TUTTO QUELLO CHE C'È DA SAPERE"} text={textHead} button={true} />
            <div className={`mainContent ${styles.textPage}`}>
                
                <h3>TUTTO QUELLO CHE C&apos;È DA SAPERE</h3>
                <h2>Tappeti Persiani</h2>
                <hr />

                <h4 style={{textAlignLast: 'left', }}>In questo articolo sveleremo i migliori tappeti persiani.</h4>
                <p>La tessitura dei tappeti non è una prerogativa dell&apos;Asia centro-occidentale ma sicuramente è nella zona riportata dalla nostra mappa dove tale attività artigianale si è affinata a tal punto da raggiungere forme artistiche.</p>
                <p>Nella mappa troviamo le <strong>tre zone principali della produzione di tappeti: Turchia, Persia e la regione del Caucaso.</strong></p>
                <Image src='/mappa-persia.jpg' alt='persia mappa' width='500' height='363' />
                <p>Nel XVI secolo, sotto la protezione dei regnanti dell&apos;epoca, si è sviluppata l&apos;arte della tessitura dei tappeti in Persia e in India, sia da un punto di vista tecnico che artistico nelle cosiddette tessitorie di corte.</p>
                <p>A quell&apos;epoca risale il più splendido e più noto tappeto del mondo, <strong>il tappeto di Ardebil,</strong> che si trova nel Victoria and Albert Museum di Londra.
                I tappetti avevano altri utilizzi, è sempre stato tra la gente, veniva usato per il trasporto, dormirci ed in fine come complemento d&apos;arredo. Con il passare del tempo i tappeti crebbero in valore e si evolsero nei materiali, fino ad arrivare nelle case dei nobili e dei reali con quelli di seta che erano i più prestigiosi.
                Arrivando ad oggi il tappeto è diventato di uso comune nelle nostre case.</p>
                <p>Il tappeto persiano è un tappeto generalmente pesante. Si tratta molto spesso di tessuti intrecciati illustrando simboli vari, si distingue appunto per i suoi svariati disegni. Creato dall&apos;arte iraniana e si trova nel gruppo di “tappeti orientali”.</p>
                <p>In base alla qualità e le dimensioni, può richiedere da mesi ad anni per essere completato. Viene creato con la tecnica a nodi e il numero di nodi di un tappeto fatto a mano varia da 250 a 12.500 per centimetro quadrato.</p>
                    <hr />
                <h2>Le origini dei tappeti orientali</h2>
                <p>L&apos;arte del tessuto sembra sia stata praticata da antichissime popolazioni indiane trasmessa poi agli assiri. Agli <Link target='_blank' href='https://it.wikipedia.org/wiki/Egitto'>egiziani</Link> si deve l&apos;invenzione e diffusione del telaio, modesta ai suoi inizi.
                L&apos;arte del tappeto diviene l&apos;affermazione della civiltà quando al tessuto si poté dare varietà e carattere attraverso la fantasia del disegno e le varietà del colore, evoluzione che si realizzò nei tempi remoti.</p>
                <p>Si può affermare che gli etruschi conoscevano già l&apos;uso del tappeto orientale, naturalmente come oggetto di gran lusso.</p>
                <p>Di fronte alla scarsità di reperti e manufatti antichi, dobbiamo necessariamente riferirci alle testimonianze degli storici, dei poeti, dei pittori e degli scultori per sapere che il tappeto faceva parte della vita quotidiana di antiche civiltà scomparse.</p>
                    <hr />
                <h2>Tappeti Persiani moderni</h2>
                <p>I nuovi tappeti persiani moderni daranno un tocco in più in ogni stanza di casa tua, dal soggiorno alla cucina. La storia dei tappeti persiani nasce in iran, un tempo chiamato persia. La bellezza di tali tappeti sono la varietà ad elaborare molteplici disegni che distingue ognuno di essi.
                I tappeti persiani moderni riprende la tintura tradizionale con colorazione naturale centrati su disegni, colori e trame più moderni usando comunque l&apos;antica tecnica.
                I tappetti moderni hanno dei differenti tipi di colori, forme e materiali rispetto ai tappetti persiani. Le forme delle decorazioni variano da disegni geometrici molto colorati fino ad arrivare a design minimal e semplici.</p>
                <p>I materiali variano molto dalle modalità di utilizzo: <strong>Lane di Yak, di pecora ma anche Polipropilene o Poliacrile.</strong></p>
                    <hr />
                <h2>I tappeti Iraniani</h2>
                <p>Il tappetto, da semplice oggetto artistico e di uso comune divenne oggetto di culto. L&apos;uso più particolare del tappeto nella funzione religiosa resta però quello musulmano.
                I tappeti hanno diversi simboli al loro interno, molti che sono riconducibili alla religione buddista, islamica e lo sciamanismo</p>
                    <hr />
                <h2>I tappeti Persiani antichi</h2>
                <p><strong>I tappeti persiani antichi</strong> sono stati realizzate da lane filate a mano tinte con colori vegetali, animali o minerali.
                Il tappeto nacque dalla necessità delle tribù nomadi di “isolare” il pavimento delle tende in cui abitavano, per rendendolo caldo e soffice.
                I persiani si vantavano di essere nel mondo, la migliore cultura nell&apos;arte della produzione dei tappeti.</p>
                    <hr />
                <h2>Tappeti persiani usati</h2>
                <p>Tappeti persiani usati sul mercato dal più antico al più moderno di qualità ottimo
                Attenti al tipo di tappeto che si sta acquistando perché il mercato è pieno di repliche. I tappeti persiani usati variano di prezzo in base alla qualità e alla provenienza.</p>
                <p>Se sei interessato al <Link href='/contatti'>restauro e al lavaggio del tuo tappeto Persiano contattaci.</Link></p>
                <Button />
                    <hr />
                <h2>I prezzi dei tappeti Persiani</h2>
                <p>I fattori che determinano il prezzo dei tappeti generici è lo stesso per i tappeti persiani. Il primo fattore è la grandezza, dato che esso impiega più tempo per essere fabbricato.
                Un tappeto persiano di modeste dimensione lo rende più caro. La colorazione è il secondo fattore in base alla maestria per combinarli.<br/>Se i colori del tappeto persiano sono armoniosi esso aumenta di valore. La provenienza è il terzo fattore, C&apos;è molta differenza da un tappeto indiano e un tappeto persiano.
                il quarto fattore è il layout e motivo, esso è influenzato nella questione del tempo, come la grandezza.<br />Il quinto fattore sono le materie prime di alta qualità.  Come sesto fattore abbiamo la tecnica, un tappeto tessuto è notevolmente più rapito da realizzare di un tappeto annodato a mano.</p>
                <p>Settimo fattore è il nodo, quale utilizzato e la densità di essi. un tappeto persiano dalla elevata densità di nodi è più costoso,anch&apos;esso influenzato dal tempo d&apos;impiego.</p>
                <p>L&apos;età è un fattore molto importante, più antico è il tappeto persiano più il prezzo sarà elevato e arriviamo all&apos;ultimo fattore, le condizioni di conservazione I veri “principi” tra i tappeti orientali sono senza dubbio i tappeti persiani.<br />I più antichi esemplari di questo particolare manufatto a metà strada tra l&apos;opera d&apos;arte e il complemento d&apos;arredo arrivano proprio dalle zone dell&apos;odierno Iran, e nell&apos;antica Persia la lavorazione raggiunse un apice tale da stupire ancora oggi appassionati e studiosi che si dedicano all&apos;affascinante mondo dei tappeti.</p>
                    <hr />
                <h2>La storia dell&apos;Iran</h2>
                <p><Link href='https://it.wikipedia.org/wiki/Iran' target="_blank">La grande Iran,</Link> sede della più grande delle città antiche al mondo, tra il 550-330 a.C. fu creato il primo impero persiano dà il grande monarca Ciro il Grande che apparteneva alla dinastia Archemenidi.</p>
                <p>L&apos;impero persiano inizio a svilupparsi a partire dall&apos;età del ferro, con il tempo l&apos;Iran è stato influenzato da molte culture: Greca, Araba e Turca. Iran dopo molti anni di guerra divenne uno stato indipendente nel 1501 grazie alla dinastia Safevide.
                L&apos;Iran venne governata da un imperatore dal 1501 al 1976 successivamente il 1 aprile nel 1976 tutto cambio, diventando una Repubblica fino ad arrivare ai tempi nostri.</p>
                <p><strong>Una lunghissima storia intrecciata nei nodi come nei disegni colorati e moderni dei tappeti persiani ti ha accompagnato fino alla fine dell&apos;articolo, sperando di aver soddisfatto le tue curiosità e la voglia di decorare il tuo nido con uno di essi.</strong></p>

            </div>
            <CtaEnd />
        </div>
    )
}

export default TappetiPersiani