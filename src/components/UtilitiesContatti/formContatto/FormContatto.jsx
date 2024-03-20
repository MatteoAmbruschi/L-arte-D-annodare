"use client";
import { useState } from "react";
import styles from "./formContatto.module.css";


function FormContatto() {
  const initValues = { nome: "", cognome: "", email: "", message: "", img: null, buffer: null };
  const initState = { values: initValues };

  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(false)
  const { values } = state;
  const [arrived, setArrived] = useState(false)
  const [error, setError] = useState(false)

  
  function base64Encoder(blob) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        const base64Contents = reader.result.split(',')[1];
        resolve(base64Contents);
      };
  
      reader.onerror = (error) => {
        reject(error);
      };
  
      reader.readAsDataURL(blob);
    });
  }

  const handleChange = async ({ target }) => {
    if (target.type === 'file') {
      const files = target.files;
      const base64Contents = await Promise.all(Array.from(files).map(base64Encoder));
  
      try {
        setState((prev) => ({
          ...prev,
          values: {
            ...prev.values,
            img: Array.from(files).map((file, index) =>  file.name),
            buffer: Array.from(files).map((file, index) => base64Contents[index])
          },
        }));
  
      } catch (error) {
        console.error('Errore durante la conversione in Base64:', error);
      }
    } else {
      setState((prev) => ({
        ...prev,
        values: {
          ...prev.values,
          [target.name]: target.value,
        },
      }));
    }
  };


    const [touched, setTouched] = useState({})
    const onBlur = ({target}) => setTouched((prev) => ({...prev,
     [target.name]: true
    }))


    const isValidEmail = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };

    
    const onSubmit = async (e) => {
        e.preventDefault()

        console.log("Submitting form...");
        
    if (!isValidEmail(values.email)) {
    return setError(true)
  }

    try {

      setLoading(true)
      setArrived(false)
      setError(false)

        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
          },
        })

        console.log("Response from server:", res.status);

        if (res.status === 200) {
          setState(initState);
          setTouched({})
          setLoading(false)
          setArrived(true)
        }
        else {
          setLoading(false)
          setError(true)
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setLoading(false)
        setError(true)
      }
    }

  return (
    <section
      className="mainContent"
      id="form"
    >
      <h3>DAI VITA AL TUO TAPPETO</h3>
      <h2 className={styles.h2Cell}>
        Compila il modulo qua sotto, ti risponderemo il prima possibile
      </h2>
      <hr />
      
      <form
        method="POST"
        className={styles.contactForm}
        type='submit'
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="nome"
          id="nome"
          placeholder="NOME"
          maxLength="85"
          required
          value={values.nome}
          onChange={handleChange}
          className={`${touched.nome && !values.nome ? styles.isError  : ''}`}
          onBlur={onBlur}
          
        />
        <input
          type="text"
          name="cognome"
          id="cognome"
          placeholder="COGNOME"
          maxLength="85"
          required
          value={values.cognome}
          onChange={handleChange}
          className={`${touched.cognome && !values.cognome ? styles.isError  : ''}`}
          onBlur={onBlur}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="EMAIL"
          maxLength="85"
          required
          value={values.email}
          onChange={handleChange}
          className={`${touched.email && !values.email ? styles.isError  : ''}`}
          onBlur={onBlur}
        />
        <textarea
          name="message"
          id="message"
          rows="4"
          placeholder="MESSAGGIO"
          maxLength="1250"
          required
          value={values.message}
          onChange={handleChange}
          className={`${touched.message && !values.message ? styles.isError  : ''}`}
          onBlur={onBlur}
        />
        <input
          type="file"
          name="img"
          id="img"
          accept="image/*"
          placeholder="Inserisci Immagini"
          multiple
          className={styles.file}

          onChange={handleChange}
        />

    {!loading ? 
         (<button
            onClick={onSubmit}
            disabled={!values.nome || !values.email || !values.cognome || !values.message}
            className={`${!values.nome || !values.email || !values.cognome || !values.message ? styles.buttonInactive : ''}`}
            >
              INVIA
         </button>)
        :
        (<button
          onClick={onSubmit}
          disabled={loading}
          className={`${loading ? styles.buttonLoading  : ''}`}
          >
            CARICAMENTO...
       </button>)
    }
        
            <div className={`${arrived ? styles.emailArrived : styles.noHeight}`}>
                <h6>INVIO RIUSCITO</h6>
                <p>Grazie per averci contattato, ti risponderemo il prima possibile </p>
                <div className={styles.toggleClose} onClick={() => setArrived(false)} />
            </div>


            <div className={`${error ? styles.emailFailed : styles.noHeight}`}>
              <h6>ERRORE</h6>
              <p>Verifica i campi e che il totale degli allegati non superi i 25 MB</p>
              <div className={styles.toggleClose} onClick={() => setError(false)} />
            </div>


      </form>
    </section>
  );
}

export default FormContatto;
