// GET REQUEST
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer'

export async function POST(req, res) {
  const SMPT_EMAIL = process.env.EMAIL;
  const SMPT_PASSWORD = process.env.EMAIL_PASS;
  const data = await req.json();

  if (!data || !data.nome || !data.email || !data.cognome || !data.message) {
    return res.status(400).send({ message: "Bad request" });
  }

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMPT_EMAIL,
      pass: SMPT_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMPT_EMAIL,
      to: SMPT_EMAIL,
      subject: `NUOVO CONTATTO DA SITO, DA: ${data.nome} ${data.cognome}`,
      html: `<b>Nome:</b> ${data.nome} <br> <b>Congome:</b> ${data.cognome} <br> <b>Email:</b> ${data.email} <br> <b>Messaggio:</b> ${data.message}`,
      attachments: [{
        filename: `${data.img}`,
        path: __dirname + `/${data.img}`,
      }]
    });

    console.log(sendResult);
    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Errore nell'invio dell'email:", error);
    return res.status(400).json({ message: error.message });
  }
}