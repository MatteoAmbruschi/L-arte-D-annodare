import styles from './servizi.module.css'

function Servizi() {

    return (
        <div className='mainContent'>
            <h2>I nostri servizi</h2>
            <hr></hr>
            <div className={styles.serviziTitles}>
                <div className={styles.section}>
                    <h3>CONSEGNA E RITIRO GRATUITI</h3>
                    <p><strong>È un servizio che offriamo</strong> nel caso abbiate difficoltà a venire in negozio o i vostri tappeti siano voluminosi.</p>
                </div>
                <div className={styles.section}>
                    <h3>CONSULENZA E PREVENTIVI</h3>
                    <p>Prima di procedere a qualsiasi tipo di intervento è nostra premura consigliarvi sull&apos;operazione più idonea formulandovi un preventivo preciso e definitivo. Possiamo passare anche a <strong>casa vostra senza impegno.</strong></p>
                </div>
                <div className={styles.section}>
                    <h3>LA NOSTRA LANA</h3>
                    <p>Presso il punto vendita de L&apos;arte d&apos;annodare <strong>i clienti potranno visionare gli oltre 200 kg di lana anche antica</strong> e con colori vegetali importata dalla <strong>Turchia</strong> che utilizziamo nel nostro laboratorio.</p>
                </div>
            </div>
        </div>
    )
}

export default Servizi