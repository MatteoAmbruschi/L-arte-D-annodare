import styles from './servizi.module.css'

function Servizi() {

    return (
        <div className='mainContent'>
            <h2>I nostri servizi</h2>
            <hr></hr>
            <div className={styles.serviziTitles}>
                <div className={styles.section}>
                    <h3>CONSEGNA E RITIRO GRATUITI</h3>
                    <p>Per evitarvi <strong>viaggi dispendiosi</strong> in termini di denaro, tempo e stress.</p>
                </div>
                <div className={styles.section}>
                    <h3>CONSULENZA E PREVENTIVI</h3>
                    <p>Prima di procedere a qualsiasi tipo di intervento è nostra premura consigliarvi sull&apos;operazione più idonea formulandovi un preventivo preciso e definitivo. Possiamo passare a <strong>casa vostra senza impegno.</strong></p>
                </div>
                <div className={styles.section}>
                    <h3>LA NOSTRA LANA</h3>
                    <p>Presso il nostro laboratorio disponiamo di <strong>oltre 200 kg di lana anche antica</strong> e con colori vegetali acquistati direttamente in Turchia.</p>
                </div>
            </div>
        </div>
    )
}

export default Servizi