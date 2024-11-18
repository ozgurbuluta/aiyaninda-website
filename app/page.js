// app/page.js
'use client';

import React, { useState } from 'react';
import FeatureSection from './components/FeatureSection';
import EmailCaptureModal from './components/EmailCaptureModal';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const blogPosts = [
    {
      title: "Yapay Zeka ile Müşteri Deneyimini Nasıl İyileştirebilirsiniz?",
      excerpt: "Modern işletmelerde yapay zeka kullanarak müşteri memnuniyetini artırmanın 5 etkili yolu ve sektör lideri şirketlerden başarı hikayeleri...",
      date: "15 Mart 2024",
      readTime: "5 dk",
      category: "Müşteri Deneyimi"
    },
    {
      title: "KOBİ'ler için Chatbot Çözümleri",
      excerpt: "Küçük ve orta ölçekli işletmeler için uygun maliyetli chatbot çözümleri ve implementasyon stratejileri. Başarılı KOBİ örnekleri...",
      date: "12 Mart 2024",
      readTime: "4 dk",
      category: "Teknoloji"
    },
    {
      title: "İşe Alım Süreçlerinde Yapay Zeka Kullanımı",
      excerpt: "İK departmanlarının verimliliğini artıran yapay zeka destekli işe alım stratejileri ve başarı hikayeleri. Örnek vaka analizleri...",
      date: "10 Mart 2024",
      readTime: "6 dk",
      category: "İK & İşe Alım"
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-dark to-gray-900 text-light">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-b from-dark via-dark/95 to-gray-900/90 border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,74,87,0.1),transparent_60%)] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 py-32 md:py-40 text-center relative">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              İşletmeniz için
              <div className="text-primary relative inline-block mx-3">
                Yapay Zeka
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-primary/20 rounded-full" />
              </div>
              Çözümleri
            </h1>
            
            <p className="text-xl md:text-2xl text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
              Şirket içi süreçleri otomatikleştirin, müşteri deneyimini iyileştirin ve işe alım 
              süreçlerinizi hızlandırın.
            </p>

            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleEmailSubmit} className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail Adresinizi Girin"
                  required
                  className="flex-1 p-4 rounded-xl bg-white/5 border border-white/10 
                            text-light placeholder-gray-400 focus:outline-none focus:ring-2 
                            focus:ring-primary/50"
                />
                <button 
                  type="submit"
                  className="md:w-auto px-8 py-4 bg-primary text-white font-medium 
                           rounded-xl hover:bg-primary/90 transition-colors"
                >
                  Şimdi Kaydol
                </button>
              </form>
            </div>
          </div>

          {/* Added decorative elements */}
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
            <div className="w-0.5 h-32 bg-gradient-to-b from-primary/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <FeatureSection />

      {/* Blog Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Blog
            </h2>
            <p className="text-secondary text-lg">
              Yapay zeka ve iş dünyasından güncel içerikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article 
                key={index}
                className="group bg-white/5 rounded-xl overflow-hidden hover:bg-white/10 
                         transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 
                              group-hover:from-primary/30 group-hover:to-primary/10 
                              transition-all duration-300"
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-secondary mb-4">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime} okuma</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary 
                               transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-secondary mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm px-3 py-1 rounded-full bg-primary/10 text-primary">
                      {post.category}
                    </span>
                    
                    <span className="text-primary group-hover:translate-x-2 transition-transform 
                                   duration-300">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <a 
              href="/blog" 
              className="inline-block px-6 py-3 border border-primary/20 rounded-lg
                       text-primary hover:bg-primary hover:text-white 
                       transition-all duration-300"
            >
              Tüm Yazıları Gör
            </a>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <EmailCaptureModal 
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          email={email}
        />
      )}
    </main>
  );
}