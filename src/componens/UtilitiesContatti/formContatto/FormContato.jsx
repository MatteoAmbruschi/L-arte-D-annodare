"use client";
import { useState, useEffect } from "react";
import styles from "./formContatto.module.css";


function FormContatto() {
  const initValues = { nome: "", cognome: "", email: "", message: "" };
  const initState = { values: initValues };

  const [state, setState] = useState(initState);
  const { values } = state;

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));


    const [touched, setTouched] = useState({})
    const onBlur = ({target}) => setTouched((prev) => ({...prev,
     [target.name]: true
    }))


    const onSubmit = async (e) => {
        e.preventDefault()

        console.log("Submitting form...");
    try {
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
          accept="image/png, image/jpeg"
          placeholder="Inserisci Immagini"
          multiple
          className={styles.file}

          onChange={handleChange}
        />

        <button
            onClick={onSubmit}
        >
            INVIA
        </button>
      </form>
    </section>
  );
}

export default FormContatto;
