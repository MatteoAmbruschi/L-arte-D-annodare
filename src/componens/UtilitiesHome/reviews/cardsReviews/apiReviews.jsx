'use client'
import { useEffect, useState } from 'react';

export async function getStaticProps() {
    const apiKey = 'AIzaSyCIdnqck9F1laYdu4JQt1V3Mk_CVxSwoj8';
    const placeID = 'ChIJv8DmMDhXgUcRHryN6sOp40Y';
  

    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJv8DmMDhXgUcRHryN6sOp40Y&fields=reviews&language=it&key=AIzaSyCIdnqck9F1laYdu4JQt1V3Mk_CVxSwoj8`)
    const json = await response.json();

    console.log(json); 
    return {
      props: { json }
    };
  }


  function MyReview({ json }) {
    useEffect(() => {
      console.log(getStaticProps());  
    }, [json]);
  
    return (
      <div>
        funziona?
      </div>
    );
  }

export default MyReview;
