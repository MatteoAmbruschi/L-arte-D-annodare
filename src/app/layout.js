import "./globals.css";

import Menu from "@/componens/menu/Menu";
import Footer from "@/componens/footer/Footer"


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
        </body>
    </html>
  );
}
