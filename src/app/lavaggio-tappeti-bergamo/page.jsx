import Header from "@/componens/header/Header"

const LavaggioTappeti = () => {
    const textHead = <>LAVAGGIO D&apos;ECCELLENZA EFFETTUATO CON I MIGLIORI MACCHINARI. Vi ricordiamo inoltre che se aveste difficoltà a raggiungerci o a caricare i tappeti in macchina, vi offriamo un servizio <strong>GRATUITO</strong> di ritiro e consegna.</>;

    return (
        <div>
            <Header imgHead={"/lavaggio.webp"} title={'LAVAGGIO TAPPETI'} subTitle={"NEGOZIO DI TAPPETI"} text={textHead} button={true} />
            lavare!
        </div>
    )
}

export default LavaggioTappeti