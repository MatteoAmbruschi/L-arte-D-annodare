'use client'
import { useEffect, useState } from 'react';


  export async function getStaticProps() {
    const apiKey = 'AIzaSyCIdnqck9F1laYdu4JQt1V3Mk_CVxSwoj8';
    const placeID = 'ChIJv8DmMDhXgUcRHryN6sOp40Y';
    let res = null;
  
    const response = await fetch('/reviewsGoogle', {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
    });

    if (response.ok) {
      const res = await response.json();
      console.log(res);
    } else {
      console.log(`Errore nella richiesta: ${response.statusText}`);
    }
  }


  function MyReview({ response }) {
    useEffect(() => {
      if (response) {
        console.log(response);
      } else {
        console.log("Dati della recensione non disponibili.");
      }
    }, [response]);
  
    return (
      <div>
        funziona?
      </div>
    );
  }

export default MyReview;
