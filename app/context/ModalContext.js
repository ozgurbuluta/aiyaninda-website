// app/context/ModalContext.js
'use client';

import React, { createContext, useContext, useState } from 'react';
import EmailCaptureModal from '../components/EmailCaptureModal';

const ModalContext = createContext({
  openModal: () => {},
  closeModal: () => {},
  isModalOpen: false,
  email: '',
  setEmail: () => {}
});

export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const openModal = (initialEmail = '') => {
    setEmail(initialEmail);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEmail('');
  };

  return (
    <ModalContext.Provider 
      value={{ 
        isModalOpen, 
        openModal, 
        closeModal, 
        email, 
        setEmail 
      }}
    >
      {children}
      {isModalOpen && (
        <EmailCaptureModal
          isOpen={isModalOpen}
          onClose={closeModal}
          email={email}
        />
      )}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};