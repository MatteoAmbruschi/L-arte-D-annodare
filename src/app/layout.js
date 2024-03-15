import "./globals.css";

import Menu from "@/componens/menu/Menu";
import Footer from "@/componens/footer/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import localFont from 'next/font/local'

const TimesNewRoman = localFont({
  src: [
    {
      path: 'TimesNewRoman/times-new-roman.ttf',
      weight: 'normal',
      style: 'normal',
    },
    {
      path: 'TimesNewRoman/times-new-roman-italic.ttf',
      weight: 'normal',
      style: 'italic',
    },
    {
      path: 'TimesNewRoman/times-new-roman-bold.ttf',
      weight: 'bold',
      style: 'normal',
    },
    {
      path: 'TimesNewRoman/times-new-roman-bold-italic.ttf',
      weight: 'bold',
      style: 'italic',
    },
  ],
})


export const metadata = {
  title: "L'arte D'annodare | Tappeti orientali Bergamo, lavaggio e restauro a Seriate (Bergamo)",
  description: "Punto di riferimento a Bergamo e provincia per chi ama il tappeto orientale. Offriamo vendita, restauro e lavaggio tappeti. Servizio di consulenza e preventivi gratuiti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body className={TimesNewRoman.className}>
        <Menu />
            {children}
          <Footer />
          <Analytics />
          <SpeedInsights />
        </body>
    </html>
  );
}
