'use client'
import styles from './formContatto.module.css'

function FormContatto() {

    function handleSubmit(e){
        e.preventDefault();
    }

    return (
        <section className='mainContent'>
            <h3>DAI VITA AL TUO TAPPETO</h3>
            <h2 className={styles.h2Cell}>Compila il modulo qua sotto, ti risponderemo il prima possibile</h2>
            <hr />
            <form method="POST" className={styles.contactForm} type="submit">
                <input type="text" name="nome" id="nome" placeholder="NOME" maxLength="85" required />
                <input type="text" name="cognome" id="cognome" placeholder="COGNOME" maxLength="85" required />
                <input type="email" name="email" id="email" placeholder="EMAIL" maxLength="85" required />
                <textarea name="message" id="message" rows="4" placeholder="MESSAGGIO" maxLength="1250" required></textarea>
                <input type="file" name="img" id="img" accept="image/png, image/jpeg" placeholder="Inserisci Immagini" multiple className={styles.file} />
                <button onClick={handleSubmit}>INVIA</button>
            </form>
        </section>
    )
}

export default FormContatto