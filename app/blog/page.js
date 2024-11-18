export default function BlogPage() {
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
      },
      {
        title: "Veri Analitiği ve Yapay Zeka: KOBİ'ler İçin Rehber",
        excerpt: "Küçük işletmelerin veri odaklı kararlar almasını sağlayan yapay zeka çözümleri ve implementasyon stratejileri...",
        date: "8 Mart 2024",
        readTime: "7 dk",
        category: "Veri Analitiği"
      },
      {
        title: "Yapay Zeka Destekli Müşteri Segmentasyonu",
        excerpt: "Modern pazarlama stratejileri için yapay zeka ile müşteri segmentasyonu nasıl yapılır? Detaylı rehber ve öneriler...",
        date: "5 Mart 2024",
        readTime: "5 dk",
        category: "Pazarlama"
      },
      {
        title: "KOBİ'ler için Yapay Zeka Trendleri 2024",
        excerpt: "2024 yılında öne çıkan yapay zeka trendleri ve KOBİ'lerin bu trendlerden nasıl faydalanabileceğine dair öneriler...",
        date: "1 Mart 2024",
        readTime: "8 dk",
        category: "Trendler"
      }
    ];
  
    return (
      <main className="min-h-screen bg-gradient-to-b from-dark to-gray-900 text-light">
        {/* Hero Section */}
        <section className="relative pt-32 pb-24 px-6 bg-dark/90">
          <div className="absolute inset-0 bg-primary/10 backdrop-blur-sm"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Blog
            </h1>
            <p className="text-xl text-secondary max-w-2xl mx-auto">
              Yapay zeka, iş süreçleri ve teknoloji dünyasından güncel içerikler, 
              analizler ve uzman görüşleri.
            </p>
          </div>
        </section>
  
        {/* Blog Posts Grid */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
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
          </div>
        </section>
      </main>
    );
  }