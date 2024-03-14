import "./globals.css";

import Menu from "@/componens/menu/Menu";
import Footer from "@/componens/footer/Footer"
import { Analytics } from "@vercel/analytics/react"
/* import { GoogleAnalytics } from '@next/third-parties/google' */


export const metadata = {
  title: "L'arte D'annodare | Tappeti orientali bergamo, lavaggio e restauro a Seriate (Bergamo)",
  description: "Punto di riferimento a Bergamo e provincia per chi ama il tappeto orientale. Offriamo vendita, restauro e lavaggio tappeti. Servizio di consulenza e preventivi gratuiti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Menu />
            {children}
          <Footer />
          <Analytics />
        </body>
        {/* <GoogleAnalytics gaId="G-C266BZ096V" /> */}
    </html>
  );
}
