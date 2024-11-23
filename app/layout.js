// app/layout.js
'use client';

import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWrapper from './components/ChatWrapper';
import EmailCaptureModal from './components/EmailCaptureModal';
import ContactFormModal from './components/ContactFormModal';

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

export default function RootLayout({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [modalEmail, setModalEmail] = useState('');

  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-dark">
        <Header onSignUpClick={() => setShowModal(true)} />
        {children}
        <Footer />
        <ChatWrapper />
        {showModal && (
          <EmailCaptureModal 
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            email={modalEmail}
          />
        )}
      </body>
    </html>
  );
}