import cssStyle from "./baseCss/baseCss.css";
import "./baseCss/importFonts.css";

import Footer from "@/app/components/Footer/Footer";
import Header from "@/app/components/Header/Header";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/ico/siteIco.svg" type="image/x-icon" />
        <title>Dazeroth Portfolio</title>
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
