import styles from './prices.module.css'
import Link from 'next/link'

function Prices () {

    return (
            <>
                <hr />
                
                <h2 className={styles.pulizia}>Pulizia tappeti Bergamo:</h2>
                
                <div className={styles.table}>
                    <h4>Lavaggio tappeti standard (eccellente)</h4>
                    <p>22,00€ <span>Mq</span></p>
                </div>
                <h4>è comprensivo di:</h4> <p><strong>Lavaggio antiacaro - Lavaggio igienizzante - Lavaggio rigenerativo</strong></p>


                <h5 className={styles.margTop30}>Se il vostro amico a 4 zampe dovesse avervi combinato uno scherzetto sporcandolo con l&apos;urina o altro, si interviene immediatamente svolgendo un:</h5>
                <div className={styles.table}>
                    <h4>Lavaggio tappeti antiurina</h4>
                    <p>35,00€ <span>Mq</span></p>
                </div>
                <h4>è comprensivo di:</h4> <p><strong>Lavaggio ammorbidente - Lavaggio anti odore</strong></p>

                <h4 className={styles.margTop30}>Effettuiamo inoltre:</h4>
                <div className={styles.table}>
                    <h4>Lavaggio tappeti seta</h4>
                    <p>35,00€ <span>Mq</span></p>
                </div>
                <div className={styles.table}>
                    <h4>Lavaggio antitarmico</h4>
                    <p>35,00€ <span>Mq</span></p>
                </div>
                <div className={styles.table}>
                    <h4>Lavaggio arazzo</h4>
                    <p>50,00€ <span>Mq</span></p>
                </div>
                <div className={styles.table}>
                    <h4>Lavaggio tappeto moderno</h4>
                    <p>22,00€ <span>Mq</span></p>
                </div>
                <div className={styles.table}>
                    <h4>Lavaggio kilim</h4>
                    <p>15,00€ <span>Mq</span></p>
                </div>
                <div className={styles.table}>
                    <h4>Lavaggio stuoie</h4>
                    <p>15,00€ <span>Mq</span></p>
                </div>
                <div className={styles.table}>
                    <h4>Lavaggio nazionale (meccanico)</h4>
                    <p>22,00€ <span>Mq</span></p>
                </div>

                <h4 className={styles.margTop30}><b>IMPORTANTE</b></h4>
                <p>Dopo la pulizia il tappeto viene controllato nel <Link href='/'>nostro laboratorio</Link>, non solo per consegnarlo in perfetto ordine pareggiandone le frange, ma soprattutto per verificarne che non necessiti di piccoli interventi che eventualmente andremmo a operare onde evitare spese dispendiose in seguito, il tutto gratuitamente.</p>
            </>
    )
}

export default Prices