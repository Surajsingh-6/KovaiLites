import { Bad_Script } from 'next/font/google';
import { Bruno_Ace_SC } from 'next/font/google';
import { Bruno_Ace } from 'next/font/google';
import "./globals.css";
import Navbar from './Navbar/page';

export const meta = {
  title: 'My App',
  description: 'My app description',
  keywords: 'app, myapp',
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
      </body>
    </html>
  );
};

export default RootLayout;
