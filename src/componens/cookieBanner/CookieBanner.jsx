'use client'
import CookieConsent from 'react-cookie-consent'
import styles from './cookieBanner.module.css'  

export default function CookieBanner () { 

    return ( 
        <CookieConsent 
         containerClasses={styles.banner}
         buttonClasses={styles.acceptButton}
         declineButtonClasses={styles.declineButton}
         buttonWrapperClasses={styles.buttonWrapperClasses}
         contentStyle={{flex:'1 0'}}
         buttonText='ACCETTO'
         enableDeclineButton
         declineButtonText='RIFIUTO'

         acceptOnScroll={true}
         /* acceptOnScrollPercentage={10} */
         debug={true} 
         expires={365}
        >
        <div className={styles.containerTxt}>
            <div className={styles.cookie}>🍪</div>
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito. Utilizziamo anche i cookie di terze parti per analizzare il traffico. Cliccando su &quot;Accetto&quot;, acconsenti all&apos;uso di tutti i cookie.
        </div>
        </CookieConsent>
    )
}