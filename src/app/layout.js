import "./globals.css";

import Menu from "@/componens/menu/Menu";
import Footer from "@/componens/footer/Footer"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';
import Lenis from "../componens/lenis";

export const metadata = {
  title: {
    default: "L'arte D'annodare | Tappeti orientali Bergamo, lavaggio e restauro a Seriate (Bergamo)",
    template: "%s | L'arte D'annodare"
  },
  description: "Punto di riferimento a Bergamo e provincia per chi ama il tappeto orientale. Offriamo vendita, restauro e lavaggio tappeti. Servizio di consulenza e preventivi gratuiti.",
  metadataBase: new URL("https://lartedannodare.it"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="it-IT">
      <body>
        <Menu />
            <Lenis>
              {children}
            </Lenis>  
          <Footer />
              <Analytics />
              <SpeedInsights />
        </body>
    </html>
  );
}
