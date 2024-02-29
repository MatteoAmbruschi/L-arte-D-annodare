import Header from "@/componens/header/Header"

function Contatti() {
    const textHead = <strong>Parcheggio retro negozio</strong>
 
    return (
        <div>
             <Header imgHead={"/negozio.jpg"} title={"CONTATTAMI"} subTitle={"L'ARTE D'ANNODARE"} text={textHead} />
        </div>
    )
}

export default Contatti