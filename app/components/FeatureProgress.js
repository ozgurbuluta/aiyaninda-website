// app/components/FeatureProgress.js
'use client';
import React from 'react';

const FeatureProgress = () => {
  const features = [
    {
      title: "Yapay Zeka Chat",
      status: 'live',
      description: 'Müşterilerinizle anında iletişim kurun'
    },
    {
      title: "Doküman Analizi",
      status: 'beta',
      description: 'Belgelerinizi yapay zeka ile analiz edin',
      progress: 80
    },
    {
      title: "Dashboard",
      status: 'development',
      description: 'Tüm verilerinizi tek yerden yönetin',
      progress: 60
    },
    {
      title: "Özel Entegrasyonlar",
      status: 'planned',
      description: 'Mevcut sistemlerinizle entegre çalışın',
      progress: 20
    }
  ];

  return (
    <section className="py-20 px-6 bg-dark/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Yakında Gelecek Özellikler
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/5 rounded-lg p-6 relative overflow-hidden">
              <div className={`absolute top-4 right-4 px-2 py-1 rounded text-sm ${
                feature.status === 'live' ? 'bg-green-500/20 text-green-400' :
                feature.status === 'beta' ? 'bg-blue-500/20 text-blue-400' :
                feature.status === 'development' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {feature.status === 'live' ? 'Yayında' :
                 feature.status === 'beta' ? 'Beta' :
                 feature.status === 'development' ? 'Geliştiriliyor' :
                 'Planlanıyor'}
              </div>

              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-secondary mb-4">{feature.description}</p>
              
              {feature.progress && (
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-500"
                    style={{ width: `${feature.progress}%` }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureProgress;