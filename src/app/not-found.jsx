import Header from "@/components/header/Header"
export default function NotFound() {
    const textHead = <strong>Errore 404, la pagina è inesistente</strong>

    return (
        <div>
             <Header imgHead={"/tappeto-restauro-bergamo.webp"} title={"PAGINA NON TROVATA"} subTitle={"L'ARTE D'ANNODARE"} text={textHead} />
                
            
        </div>
    );
}
