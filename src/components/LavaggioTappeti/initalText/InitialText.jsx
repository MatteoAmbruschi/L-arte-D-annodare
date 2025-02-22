import Image from 'next/image'
import Link from 'next/link'
function InitialText () {

    return (
        <>
            <h3>SCOPRI TUTTO</h3>
            <h2>Un Modo diverso di essere &quot;Tappetaio&quot;</h2>
            <hr />
            <video 
                src="/lavaggio.mp4" 
                controls 
                width="100%" 
                style={{maxWidth: 800}}
                poster="/video-placeholder.jpg"
                preload="metadata"
            >
                Il tuo browser non supporta il tag video.
            </video>
            <p>
                Nella concezione corrente <strong>“tappetaio”</strong> è spesso sinonimo di <strong>“venditore di tappeti”</strong>, modo di dire con connotazione spregiativa di chi, senza troppe remore morali ed etiche, cerca di trarre l&apos;immediato e maggior profitto possibile dalla vendita. Personalmente mi sento lontanissimo da tale definizione.
            </p>
            <p>
                Sin da quando ho intrapreso questa professione sono stato attratto dal fascino <strong>dei <Link href="https://it.wikipedia.org/wiki/Tappeto#:~:text=In%20Oriente%2C%20il%20tappeto%20ha,Pazyryk%20(circa%20500%20a.C.)." target="_blank">tappeti</Link> a motivo della loro storia, colori, tecnica, simbologia</strong> e spesso anche per quello che possono rammentare nel nostro ambito familiare.
            </p>
            <p>
            L&apos;origine della tessitura si perde nella notte dei tempi, infatti ritroviamo nella cultura di molti popoli il ricordo di antiche divinità che annodavano con i loro telai il destino degli umani. E un aspetto fortemente spirituale il tappeto l&apos;ha sempre mantenuto e non soltanto presso le <strong>popolazioni islamiche, ma anche presso gli Armeni, Ebrei, Cristiani, Zoroastriani ecc.</strong> che hanno tramandato per secoli, simboli e disegni non codificabili dai non iniziati.
            </p>
            <p>
            Addirittura vitale era la connotazione pratica, soprattutto presso le popolazioni nomadi dove <strong>il tappeto permeava completamente la loro vita fungendo da giaciglio, coperta, contenitore, culla, ornamento ecc.</strong>
            </p>
            <p>
            Diversi sono i materiali usati (lana di pecora, di cammello, di capra ecc., cotone, seta, canapa ecc.), diverse le tinture ( vegetali, animali, all&apos;anilina, al cromo ecc.), tutte variabili che rendono <strong>unico e caratteristico ogni singolo pezzo.</strong>
            </p>
            <p>
                Ecco perché anche nella <strong>pulizia,</strong> che è una componente essenziale per <strong>il buon mantenimento del tappeto,</strong> non possiamo agire con tutti nello stesso modo. Per fare solo un esempio, ve ne sono alcuni per cui è consigliabile un lavaggio frequente, per altri sarebbe deleterio. <strong>È essenziale quindi affidarsi a dei veri professionisti.</strong>
            </p>
            <Image src='/macchinario-lavaggio.jpg' alt="macchinario per il lavaggio di tappeti" width='346' height='446' />
        </>
    )
}

export default InitialText