import "./globals.css";

import Menu from "@/components/menu/Menu";
import Footer from "@/components/footer/Footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Lenis from "../components/lenis";
import { BannerClose } from "@/components/bannerClose/BannerClose";

export const metadata = {
  title: {
    default:
      "L'arte D'annodare | Tappeti orientali Bergamo, lavaggio e restauro tappeti",
    template: "%s | L'arte D'annodare",
  },
  description:
    "Punto di riferimento a Bergamo e provincia per chi ama il tappeto orientale. Offriamo vendita, restauro e lavaggio tappeti. Servizio di consulenza e preventivi gratuiti.",
  metadataBase: new URL("https://lartedannodare.it"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="it-IT">
      <body>
        <Menu />
        <Lenis>{children}</Lenis>
        <BannerClose />
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
