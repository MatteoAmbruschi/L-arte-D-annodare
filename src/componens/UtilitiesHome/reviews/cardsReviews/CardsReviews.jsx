'use client'
import { useEffect } from 'react';
function CardsReviews({ res }) {
    useEffect(() => {
      if (res) {
        console.log(res);
      } else {
        console.log("Dati della recensione non disponibili.");
      }
    }, [res]);
  
    return (
      <div>
        funziona???
      </div>
    );
  }

export default CardsReviews;
