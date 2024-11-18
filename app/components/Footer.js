'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark/80 border-t border-white/10 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* First column - Address */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link 
              href="/" 
              className="text-2xl font-bold font-heading block mb-6 hover:text-primary transition-colors"
            >
              AI Yanında
            </Link>
            <div className="text-gray-400 space-y-2">
              <p className="font-medium text-white">
                Technische Universität München
              </p>
              <p>Postanschrift: Arcisstraße 21,</p>
              <p>80333 München</p>
              <p className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a 
                  href="tel:0049188234723" 
                  className="hover:text-primary transition-colors"
                >
                  +49 (0) 188 234 723
                </a>
              </p>
            </div>
          </div>

          {/* Remaining columns wrapper */}
          <div className="grid grid-cols-1 md:grid-cols-3 col-span-1 md:col-span-2 lg:col-span-3 gap-8 md:gap-12">
            {/* Product Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                ÜRÜN
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/#features" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Özellikler
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/docs" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Dokümantasyon
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/pricing" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Fiyatlandırma
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/integration" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Entegrasyon
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                ŞİRKET
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/about" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Hakkımızda
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/blog" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/careers" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Kariyer
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    İletişim
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
                YASAL
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/privacy" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Gizlilik Politikası
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/terms" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Kullanım Koşulları
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/security" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    Güvenlik
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/gdpr" 
                    className="text-gray-300 hover:text-white transition-colors inline-block"
                  >
                    KVKK
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AI Yanında. Tüm hakları saklıdır.
            </p>
            
            <div className="flex items-center space-x-6">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                </svg>
              </a>

              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}