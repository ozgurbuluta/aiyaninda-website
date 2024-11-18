'use client';

import React, { useState } from 'react';
import { X } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import dynamic from 'next/dynamic';

const EmailCaptureModalContent = ({ isOpen, onClose, email }) => {
  const { db } = require('../firebase');
  const [consent, setConsent] = useState({
    newsletter: false,
    kvkk: false
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit started with email:', email);
    
    if (!consent.kvkk) {
      alert('KVKK aydınlatma metnini kabul etmeniz gerekmektedir.');
      return;
    }

    setLoading(true);

    try {
      const docRef = await addDoc(collection(db, "subscribers"), {
        email,
        newsletter: consent.newsletter,
        kvkkAccepted: consent.kvkk,
        timestamp: serverTimestamp(),
        source: 'hero_section'
      });

      console.log('Document written with ID:', docRef.id);
      setStatus('success');
      
      // Close after success
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error('Error adding document:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-dark border border-white/10 rounded-2xl p-6 max-w-md w-full relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {status === 'success' ? (
          <div className="text-center py-8">
            <h3 className="text-xl font-bold text-primary mb-4">
              Teşekkür Ederiz!
            </h3>
            <p className="text-gray-300">
              Bizden mail almaya karar verdiğiniz için teşekkür ederiz, en kısa zamanda iletişime geçeceğiz.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-xl font-bold mb-4">Son Bir Adım</h3>
            
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consent.newsletter}
                  onChange={(e) => setConsent(prev => ({
                    ...prev,
                    newsletter: e.target.checked
                  }))}
                  className="mt-1 text-primary rounded border-gray-600 
                           focus:ring-primary focus:ring-offset-dark"
                />
                <span className="text-sm text-gray-300 group-hover:text-white">
                  AI Yanında'dan güncel yapay zeka haberleri ve özel teklifler almak istiyorum.
                </span>
              </label>

              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={consent.kvkk}
                  onChange={(e) => setConsent(prev => ({
                    ...prev,
                    kvkk: e.target.checked
                  }))}
                  className="mt-1 text-primary rounded border-gray-600 
                           focus:ring-primary focus:ring-offset-dark"
                />
                <span className="text-sm text-gray-300 group-hover:text-white">
                  KVKK Aydınlatma Metni'ni okudum ve kabul ediyorum.
                </span>
              </label>
            </div>

            <button
              type="submit"
              disabled={loading || !consent.kvkk}
              className="w-full bg-primary text-white px-6 py-3 rounded-lg
                       hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Gönderiliyor...' : 'Onayla'}
            </button>

            {status === 'error' && (
              <p className="text-red-500 text-sm text-center">
                Bir hata oluştu. Lütfen tekrar deneyin.
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

const EmailCaptureModal = dynamic(() => Promise.resolve(EmailCaptureModalContent), {
    ssr: false
  });
  

export default EmailCaptureModal;