export default function AboutPage() {
    const team = [
      {
        name: "Özgür Bulut Akanay",
        role: "Kurucu Ortak",
        bio: "P&G, Chess.com, Boğaziçi Üniversitesi"
      },
      {
        name: "Kağan Karabayır",
        role: "Kurucu Ortak",
        bio: "Trendyol, Allianz, İTÜ"
      }
    ];
  
    return (
      <main className="min-h-screen bg-gradient-to-b from-dark to-gray-900 text-light">
        {/* Hero Section */}
        <section className="relative pt-64 pb-40 px-6 bg-dark/90">
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Türkiye'nin öncü yapay zeka çözümleri sağlayıcısı
            </p>
          </div>
        </section>
  
        {/* Mission Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-heading font-bold">
                  Misyonumuz
                </h2>
                <p className="text-secondary text-lg">
                  Türkiye'deki KOBİ'lerin dijital dönüşümünü yapay zeka ile 
                  hızlandırarak, global pazarda rekabet güçlerini artırmak için 
                  çalışıyoruz.
                </p>
                <div className="pt-4">
                  <a href="#contact" 
                     className="inline-flex items-center gap-2 text-primary hover:text-primary/80 
                              transition-colors">
                    Bizimle İletişime Geçin →
                  </a>
                </div>
              </div>
  
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 
                             rounded-2xl"></div>
            </div>
          </div>
        </section>
  
        {/* Values Section */}
        <section className="py-20 px-6 bg-dark/50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Değerlerimiz
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'İnovasyon',
                  description: 'Sürekli gelişim ve yenilikçi çözümler üretmek için çalışıyoruz.'
                },
                {
                  title: 'Güvenilirlik',
                  description: 'Müşterilerimizin verilerini ve güvenliklerini en üst düzeyde koruyoruz.'
                },
                {
                  title: 'Müşteri Odaklılık',
                  description: 'Her müşterimizin benzersiz ihtiyaçlarına özel çözümler sunuyoruz.'
                }
              ].map((value, index) => (
                <div key={index} 
                     className="p-6 rounded-lg bg-white/5 hover:bg-white/10 
                              transition-colors">
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-secondary">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Team Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-heading font-bold text-center mb-12">
              Ekibimiz
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <div key={index} 
                     className="p-6 rounded-lg bg-white/5 hover:bg-white/10 
                              transition-all duration-300 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full 
                                bg-gradient-to-br from-primary/20 to-primary/5"></div>
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary mb-3">{member.role}</p>
                  <p className="text-secondary">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* Contact CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-primary/20 to-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-6">
              Yapay Zeka Yolculuğunuza Başlayın
            </h2>
            <p className="text-secondary mb-8">
              İşletmenizi yapay zeka ile güçlendirmek için ilk adımı atın.
            </p>
            <button className="bg-primary text-light px-8 py-3 rounded-lg 
                             hover:bg-primary/90 transition-colors">
              Ücretsiz Demo Talep Edin
            </button>
          </div>
        </section>
      </main>
    );
  }