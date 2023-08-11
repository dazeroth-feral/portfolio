import cssStyle from "./(baseCss)/baseCss.css";
import "./(baseCss)/importFonts.css";

import Footer from "./(components)/Footer/Footer";
import Header from "./(components)/Header/Header";

export const metadata = {
  title: 'Dazeroth Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="shortcut icon" href="/ico/siteIco.svg" type="image/x-icon" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};
