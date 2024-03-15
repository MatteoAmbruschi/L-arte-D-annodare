import CtaMaps from "@/componens/UtilitiesContatti/ctaMaps/CtaMaps"
import FormContatto from "@/componens/UtilitiesContatti/formContatto/FormContatto"
import OrariContatti from "@/componens/UtilitiesContatti/orariContatto/OrariContatti"
import Header from "@/componens/header/Header"


export const metadata = {
    title: "Tappeti Orientali a Seriate, Bergamo | Contatti, Orari e Parcheggio",
    description: "Scopri i tappeti persiani dei tuoi sogni nel nostro negozio a Seriate, Bergamo! Visita il nostro laboratorio per il restauro e il lavaggio dei tappeti.",
  };

function Contatti() {
    const textHead = <strong>Parcheggio retro negozio</strong>
 
    return (
        <div>
             <Header imgHead={"/negozio.jpg"} title={"CONTATTAMI"} subTitle={"L'ARTE D'ANNODARE"} text={textHead} />

            <OrariContatti />

            <FormContatto />

            <CtaMaps />
        </div>
    )
}

export default Contatti