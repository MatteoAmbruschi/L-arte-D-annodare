import "./globals.css";

import Menu from "@/componens/menu/Menu";;


export const metadata = {
  title: "L'arte D'annodare",
  description: "Vuoi il tappeto persiano dei tuoi sogni? Vieni a trovarci a Seriate (Bergamo)! - Abbiamo inoltre un laboratorio di restauro e lavaggio tappeti.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Menu />
            {children}
        </body>
    </html>
  );
}
