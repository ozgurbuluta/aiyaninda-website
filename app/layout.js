import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWrapper from './components/ChatWrapper';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'AI Yanında - İşletmeniz için Yapay Zeka Çözümleri',
  description: 'Şirket içi süreçleri otomatikleştirin, müşteri deneyimini iyileştirin ve işe alım süreçlerinizi hızlandırın.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-dark">
        <Header />
        {children}
        <Footer />
        <ChatWrapper />
      </body>
    </html>
  );
}