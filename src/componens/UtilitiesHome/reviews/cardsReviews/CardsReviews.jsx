'use client'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import styles from './cardReviews.module.css'
import Image from 'next/image'
import NumberStars from './numberStarts/NumberStars';

import '@splidejs/react-splide/css';


function CardsReviews() {

    const reviews = [
        {
            id: 1,
            name: "Monica Gallosi",
            stars: 5,
            message: "Se ci fosse la possibilità di dare 10stelke..le darei. Il titolare serio estremamente professionale corretto, ed i prezzi sono estremamente onesti. Ho portato un tris di tappeti stile cinese con il fiori, rotti, aggiustati e lavati sono perfetti come nuovi super super consigliato"
        },
        {
            id: 2,
            name: "ivana rossi",
            stars: 5,
            message: "Persona molto preparata, una passione per i tappeti enorme, racconta di ogni tappeto la storia. Fantastico"
        },
        {
            id: 3,
            name: "Adriano Rota",
            stars: 5,
            message: "Negozio perfetto x gli amanti di tappeti orientali, annodati,  vasta scelta di tappeti d'epoca e altro, proprietario persona molto competente in materia, disponibile  x suggerimenti e molto competente in maniera di restauro, prezzi buoni"
        },
        {
            id: 4,
            name: "Roberto Maffeis",
            stars: 5,
            message: "Bravo e professionale"
        },
        {
            id: 5,
            name: "Paolo",
            stars: 5,
            message: "Li conosco ormai da anni. Professionali, competenti, gentilissimi e con prezzi più che onesti."
        },
        {
            id: 6,
            name: "Luca Bersini",
            stars: 5,
            message: "Super affidabili e professionali"
        },
        {
            id: 7,
            name: "bruno ravasio",
            stars: 4,
            message: "Ho portato un tappeto in condizioni penose (da gettare)! Il tappezziere  mi ha detto se scherzavo; non è un grand tappeto di pregio ma bello e di fattura rustica che non ne fanno più. Lo ha lavato e riparato quando lo ho visto mi sono meravigliato e ringraziato. Sicuramente porterò altri tappeti da lavare."
        },
        {
            id: 8,
            name: "Patrizia Rizza",
            stars: 5,
            message: "Molto gentili e professionali. Il mio tappeto è rinato."
        },
    ]

    
    const options = {
        type         : 'loop',
        autoplay     : true,
        pauseOnHover : true,
        resetProgress: false,
        rewind: true,
        interval: 4000,
        perPage  : 3,
        focus: 'center',
        pagination: false,

        height: 'auto',
      };


    return (
        <>

        <Splide hasTrack={ false } aria-label="reviews l'arte d'annodare negozio di tappeti a bergamo"  options={ options } className={styles.splider}>
            
        <SplideTrack>
            {reviews.map((review) => (
                    <SplideSlide key={review.id} className={styles.splideSlide}>
                   <div className={styles.backgroundContainer}>
                    <Image className={styles.backgroundImg} src='/quotation-marks.svg' width='390' height='390' alt='icon quotation marks' />
                        <div className={styles.txtStars}><h6>{review.name}</h6><NumberStars number={review.stars} /></div>
                        <hr />
                        <p>{review.message}</p>
                   </div>
                </SplideSlide>
           
            ))}
        </SplideTrack>
        
        <div className="splide__progress">
            <div className="splide__progress__bar" />
        </div>

        </Splide>
        </>
    )
}

export default CardsReviews