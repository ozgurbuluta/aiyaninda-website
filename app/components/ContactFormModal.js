'use client';
import { useState } from 'react';
import { X, Loader } from 'lucide-react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

export default function ContactFormModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('idle');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "contacts"), {
        ...formData,
        timestamp: serverTimestamp()
      });
      setStatus('success');
      setTimeout(onClose, 2000);
    } catch (error) {
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9999]" />
      <div className="fixed inset-0 z-[10000] overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="bg-dark border border-white/10 rounded-2xl p-6 max-w-md w-full relative">
            <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white">
              <X className="w-5 h-5" />
            </button>

            {status === 'success' ? (
              <div className="text-center py-8">
                <h3 className="text-xl font-bold text-primary mb-4">Teşekkürler!</h3>
                <p className="text-gray-300">En kısa sürede size ulaşacağız.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold mb-4">İletişime Geçin</h3>
                
                <div>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Şirket"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Mesajınız"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 rounded-lg px-4 py-2 text-white border border-white/10 min-h-[100px]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {loading ? <Loader className="w-5 h-5 animate-spin mx-auto" /> : 'Gönder'}
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
      </div>
    </>
  );
}