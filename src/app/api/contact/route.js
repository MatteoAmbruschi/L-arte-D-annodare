// GET REQUEST
import { mailOptions, transporter } from "@/app/config/nodemailer";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  console.log('PARTITO')
  if(req.method === "POST") {
    console.log('è POST')
    const data = req.body
    if(!data.nome || !data.cognome || !data.email || !data.message) {
      return res.status(400).json({message: "CAMPO SBAGLIATO"});
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: 'Subject of the email',
        text: "prova",
        html: "<h1>Titolo test</h1><p>Prova testo</p>"
      })

      console.log("STA ANDANDO");
      return NextResponse.json({ message: 'Email sent successfully' }); 

    } catch (error) {
      console.error("Errore nell'invio dell'email:", error);
      return res.status(400).json({message: error.message});
    }
  }
  
  console.log('NON POST')
  return new Response(JSON.stringify({ error: 'Invalid request method' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json' },
  });
}


//POST REQUEST
export async function POST(req,res){
  const data = await req.json()
  console.log(data)

  return NextResponse.json(data)
}