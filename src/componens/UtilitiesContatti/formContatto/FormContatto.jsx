"use client";
import { useState, useEffect } from "react";
import styles from "./formContatto.module.css";


function FormContatto() {
  const initValues = { nome: "", cognome: "", email: "", message: "", img: null, buffer: null };
  const initState = { values: initValues };

  const [state, setState] = useState(initState);
  const [loading, setLoading] = useState(false)
  const { values } = state;

  
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
  
        console.log(files);
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


    const onSubmit = async (e) => {
        e.preventDefault()

        console.log("Submitting form...");
        console.log(values);
    try {

      setLoading(true)
        const res = await fetch('/api/contact', {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
            Accept: "application/json",
          },
        })

        console.log("Response from server:", res);

        if (res.ok) {
          setState(initState);
          setTouched({})
          setLoading(false)
          /* Navigate */ //DA FARE DOMANI
        }
      } catch (error) {
        console.error("Error submitting form:", error);
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

        <button
            onClick={onSubmit}
            disabled={!values.nome || !values.email || !values.cognome || !values.message}
            className={!values.nome || !values.email || !values.cognome || !values.message || loading ? styles.buttonInactive : ''}
        >
            INVIA
        </button>
      </form>
    </section>
  );
}

export default FormContatto;
