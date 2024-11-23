// app/components/FeatureSection.js
'use client';
import React, { useState } from 'react';
import { analytics } from '@/utils/firebase';
import { logEvent } from 'firebase/analytics';

const FeatureSection = () => {
  const [activeTab, setActiveTab] = useState('pazarlama');

  const tabs = [
    { id: 'pazarlama', label: 'Pazarlama' },
    { id: 'satis', label: 'Satış' },
    { id: 'finans', label: 'Finans' },
    { id: 'ik', label: 'İnsan Kaynakları' },
    { id: 'operasyon', label: 'Operasyon' },
    { id: 'musteri', label: 'Müşteri İlişkileri' }
  ];
  
  const features = {
    pazarlama: {
      title: "Pazarlama Süreçlerinizi Otomatikleştirin",
      description: "Yapay zeka asistanınız ile pazarlama taleplerinizi yönetin, içerik üretin ve kampanyalarınızı optimize edin.",
      details: [
        "Sosyal medya içerik üretimi ve planlaması",
        "SEO uyumlu blog yazıları ve metinler",
        "Hedef kitle analizi ve segmentasyon",
        "Kampanya performans takibi",
        "Email marketing otomasyonu",
        "A/B test optimizasyonu"
      ]
    },
    satis: {
      title: "Satış Performansınızı Artırın",
      description: "Müşteri görüşmelerinden tahsilata kadar tüm satış süreçlerinizi yapay zeka ile güçlendirin.",
      details: [
        "Potansiyel müşteri skorlaması",
        "Otomatik teklif hazırlama",
        "Satış tahminleme ve raporlama",
        "Müşteri iletişim optimizasyonu",
        "Satış fırsatı analizi",
        "Müşteri yolculuğu takibi"
      ]
    },
    finans: {
      title: "Finansal Süreçleri Kolaylaştırın",
      description: "Fatura işlemlerinden bütçe planlamasına kadar finansal operasyonlarınızı otomatikleştirin.",
      details: [
        "Otomatik fatura işleme ve kategorizasyon",
        "Nakit akışı tahminleme",
        "Gider analizi ve optimizasyonu",
        "Finansal raporlama otomasyonu",
        "Risk analizi ve yönetimi",
        "Bütçe planlama ve takibi"
      ]
    },
    ik: {
      title: "İK Süreçlerinizi Hızlandırın",
      description: "Aday değerlendirmeden çalışan gelişimine kadar İK süreçlerinizi yapay zeka ile optimize edin.",
      details: [
        "Özgeçmiş tarama ve değerlendirme",
        "Aday mülakat asistanı",
        "Çalışan performans analizi",
        "Eğitim ihtiyaç analizi",
        "İşe alım süreci otomasyonu",
        "Çalışan memnuniyeti takibi"
      ]
    },
    operasyon: {
      title: "Operasyonel Süreçleri Optimize Edin",
      description: "Tedarik zincirinden stok yönetimine kadar operasyonel süreçlerinizi yapay zeka ile geliştirin.",
      details: [
        "Stok optimizasyonu",
        "Tedarik zinciri yönetimi",
        "Kalite kontrol otomasyonu",
        "Üretim planlama",
        "Lojistik optimizasyonu",
        "Bakım planlama ve takibi"
      ]
    },
    musteri: {
      title: "Müşteri İlişkilerini Güçlendirin",
      description: "Müşteri hizmetlerinden sadakat programlarına kadar müşteri ilişkilerinizi yapay zeka ile geliştirin.",
      details: [
        "7/24 chatbot desteği",
        "Müşteri talep analizi",
        "Sadakat programı yönetimi",
        "Müşteri segmentasyonu",
        "Otomatik ticket yönetimi",
        "Müşteri geri bildirim analizi"
      ]
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    
    // Log feature interest
    if (analytics) {
      logEvent(analytics, 'feature_view', {
        feature_name: tabId,
        previous_tab: activeTab
      });
    }
  };

  const handleLearnMoreClick = () => {
    if (analytics) {
      logEvent(analytics, 'learn_more_click', {
        feature: activeTab
      });
    }
  };

  return (
    <section id="ozellikler" className="py-24 px-6 bg-dark/50 scroll-mt-24">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16">
          Keşfedin: AI sizin için neler yapabilir?
        </h2>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white/5 text-secondary hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">{features[activeTab].title}</h3>
            <p className="text-secondary text-lg">{features[activeTab].description}</p>
            <ul className="space-y-4">
              {features[activeTab].details.map((detail, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <button 
                onClick={handleLearnMoreClick}
                className="bg-primary text-white px-8 py-3 rounded-lg 
                         hover:bg-primary/90 transition-colors"
              >
                Daha Fazla Bilgi
              </button>
            </div>
          </div>

          <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 
                         rounded-2xl flex items-center justify-center">
            <div className="w-3/4 h-3/4 bg-white/5 rounded-xl backdrop-blur-sm" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;