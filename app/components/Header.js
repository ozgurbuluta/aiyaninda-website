'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleFeaturesClick = (e) => {
    e.preventDefault();
    const featuresSection = document.getElementById('ozellikler');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const isActivePath = (path) => {
    if (path === '/') return pathname === '/';
    return pathname.startsWith(path);
  };

  const navLinks = [
    {
      name: 'Özellikler',
      path: '/#ozellikler',
      isFeatures: true
    },
    {
      name: 'Hakkımızda',
      path: '/about'
    },
    {
      name: 'Blog',
      path: '/blog'
    }
  ];

  return (
    <header className="fixed top-0 w-full bg-dark/80 backdrop-blur-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="relative z-50 hover:opacity-90 transition-opacity flex items-center"
          >
            <Image
              src="/images/aiyaninda_logo_white1.svg"
              alt="AI Yanında Logo"
              width={600}
              height={150}
              className="h-16 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={link.isFeatures && isHome ? handleFeaturesClick : undefined}
                className={`transition-colors ${
                  isActivePath(link.path) 
                    ? 'text-primary font-medium' 
                    : 'text-secondary hover:text-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button className="bg-primary text-light px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors">
              Hemen Kaydolun
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white relative z-50"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex items-center justify-center">
              <div className={`w-6 flex flex-col items-end space-y-1.5 transition-all ${
                isMobileMenuOpen ? 'space-y-0' : ''
              }`}>
                <span className={`block h-0.5 bg-current transition-all ${
                  isMobileMenuOpen 
                    ? 'w-6 rotate-45 translate-y-0.5' 
                    : 'w-6'
                }`} />
                <span className={`block h-0.5 bg-current transition-all ${
                  isMobileMenuOpen 
                    ? 'w-6 -rotate-45 -translate-y-1' 
                    : 'w-4'
                }`} />
              </div>
            </div>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`fixed inset-0 bg-dark transition-all duration-300 md:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}>
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={link.isFeatures && isHome ? handleFeaturesClick : undefined}
                className={`text-xl transition-colors ${
                  isActivePath(link.path) 
                    ? 'text-primary font-medium' 
                    : 'text-secondary hover:text-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <button className="bg-primary text-light px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Hemen Kaydolun
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}