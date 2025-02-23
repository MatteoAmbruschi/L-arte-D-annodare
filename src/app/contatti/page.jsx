import CtaMaps from "@/components/UtilitiesContatti/ctaMaps/CtaMaps"
import FormContatto from "@/components/UtilitiesContatti/formContatto/FormContatto"
import OrariContatti from "@/components/UtilitiesContatti/orariContatto/OrariContatti"
import Header from "@/components/header/Header"
import CookieBanner from "@/components/cookieBanner/CookieBanner"


export const metadata = {
    title: "Tappeti Orientali Bergamo | Contatti",
    description: "Scopri i tappeti persiani dei tuoi sogni Bergamo! Visita il nostro laboratorio per il restauro e il lavaggio dei tappeti.",
  };

function Contatti() {
    const textHead = <strong>{/* Parcheggio retro negozio */}</strong>
 
    return (
        <div>
             <Header imgHead={"/laboratorio_tappeti.webp"} title={"CONTATTAMI"} subTitle={"L'ARTE D'ANNODARE"} text={textHead} />

            <OrariContatti />

            <FormContatto />

            <CtaMaps />
            <CookieBanner /> 
        </div>
    )
}

export default Contatti