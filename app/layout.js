'use client';

import './globals.css';
import { Inter, Playfair_Display } from 'next/font/google';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ChatWrapper from './components/ChatWrapper';
import EmailCaptureModal from './components/EmailCaptureModal';
import ContactFormModal from './components/ContactFormModal';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";

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
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [modalEmail, setModalEmail] = useState('');

  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen bg-dark">
        <Header onSignUpClick={() => setShowContactModal(true)} />
        {children}
        <Footer />
        <ChatWrapper />
        {showEmailModal && (
          <EmailCaptureModal 
            isOpen={showEmailModal}
            onClose={() => setShowEmailModal(false)}
            email={modalEmail}
          />
        )}
        {showContactModal && (
          <ContactFormModal 
            isOpen={showContactModal}
            onClose={() => setShowContactModal(false)}
          />
        )}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}