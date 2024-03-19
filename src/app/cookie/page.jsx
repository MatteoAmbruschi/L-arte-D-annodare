import Link from 'next/link'
import styles from './cookies.module.css'

function Cookie (){

    return (
    <div className={`mainContent ${styles.titleCookie}`}>
            <h1>Cookies</h1>
        
        <div className={styles.containerCookies}>
            <p>I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. Sono ampiamente utilizzati per far funzionare i siti web in modo efficiente e per fornire informazioni ai proprietari del sito.</p>

            <h4>Tipi di Cookie Utilizzati</h4>
            <ul>
            <li><p><strong>Cookie Necessari:</strong> Questi cookie sono essenziali per il corretto funzionamento del sito e non possono essere disabilitati nei nostri sistemi. Solitamente vengono impostati solo in risposta ad azioni da te effettuate che comportano una richiesta di servizi, come l&apos;impostazione delle tue preferenze sulla privacy, l&apos;accesso o la compilazione di moduli.</p></li>
            <li><p><strong>Cookie di Analisi:</strong> Utilizziamo i cookie di terze parti, come Vercel Analytics, per raccogliere informazioni anonime sull&apos;utilizzo del nostro sito da parte dei visitatori. Questi cookie ci aiutano a capire come interagisci con il sito web, a migliorare la sua funzionalità e a personalizzare la tua esperienza di navigazione. Tra questi, utilizziamo Vercel Analytics per monitorare le prestazioni del sito e l&apos;utilizzo dei servizi offerti.</p></li>
            <li><p><strong>Cookie di Marketing e Pubblicitari:</strong>Questi cookie vengono utilizzati per tracciare i visitatori attraverso i siti web. L&apos;intento è quello di visualizzare annunci pertinenti e coinvolgenti per l&apos;utente individuale e quindi quelli più preziosi per gli editori e gli inserzionisti di terze parti.</p></li>
            </ul>

            <h4>Gestione dei Cookie</h4>
            <p>Puoi accettare o rifiutare l&apos;uso dei cookie attraverso le impostazioni del tuo browser. Puoi anche impostare le tue preferenze sui cookie tramite il banner apposito che compare durante la tua visita al nostro sito. Tuttavia, la disabilitazione dei cookie potrebbe influenzare la tua esperienza di navigazione e alcune funzionalità del sito potrebbero non essere disponibili.</p>

            <p>Per maggiori informazioni sui cookie e sulle pratiche di privacy, consulta la nostra <Link href="Informativa-privacy-ai-sensi-degli-artt.pdf" target='_blank'>Informativa sulla Privacy</Link>.</p>
        </div>         
    </div>
    )
}

export default Cookie