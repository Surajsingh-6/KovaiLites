import { Bad_Script, Bruno_Ace_SC } from 'next/font/google';
import "./globals.css";

const meta = {
  title: 'My App',
  description: 'My app description',
  keywords: 'app, myapp',
} 

const badScript = Bad_Script({ subsets: ['latin'], weight: '400' });
const brunoAceSC = Bruno_Ace_SC({ subsets: ['latin'], weight: '400' });

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${badScript.className} ${brunoAceSC.className}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;