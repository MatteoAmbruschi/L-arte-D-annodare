import CtaMaps from "@/componens/UtilitiesContatti/ctaMaps/CtaMaps"
import FormContatto from "@/componens/UtilitiesContatti/formContatto/FormContato"
import OrariContatti from "@/componens/UtilitiesContatti/orariContatto/OrariContatti"
import Header from "@/componens/header/Header"

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