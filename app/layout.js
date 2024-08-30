import { Bad_Script } from 'next/font/google';
import { Bruno_Ace_SC } from 'next/font/google';
import { Bruno_Ace } from 'next/font/google';
import "./globals.css";
import Navbar from './Navbar/page';
import Footer from './Footer/page';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const meta = {
  title: 'Kovai Lites',
  description: 'Kovai Lites is Led Wholesale and Retail Shop in Coimbatore',
  keywords: 'Led, Lights, Wholesale, Retail, Coimbatore,wall mounted',
};

const badScript = Bad_Script({ subsets: ['latin'], weight: '400' });
const brunoAceSC = Bruno_Ace_SC({ subsets: ['latin'], weight: '400' });
const brunoAce = Bruno_Ace({ subsets: ['latin'], weight: '400' });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${badScript.className} ${brunoAceSC.className} ${brunoAce.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
