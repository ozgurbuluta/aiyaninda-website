// app/components/Header.js
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { analytics } from '@/utils/firebase';
import { logEvent } from 'firebase/analytics';

export default function Header({ onSignUpClick }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleFeaturesClick = (e) => {
    if (isHome) {  // Only prevent default and scroll if we're on home page
      e.preventDefault();
      if (analytics) {
        logEvent(analytics, 'features_link_click', {
          location: 'header'
        });
      }
      const featuresSection = document.getElementById('ozellikler');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
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
      name: 'Çözümler',
      path: '/solutions'
    },
    {
      name: 'Hakkımızda',
      path: '/about'
    },
    {
      name: 'Blog',
      path: '/blog'
    },
    {
      name: 'İletişim',
      path: '/contact'
    }
  ];

  const handleNavigation = (linkName, path) => {
    if (analytics) {
      logEvent(analytics, 'navigation_click', {
        link_name: linkName,
        path: path,
        source: 'header'
      });
    }
  };

  const handleSignUpClick = (location) => {
    if (analytics) {
      logEvent(analytics, 'signup_button_click', {
        location: location
      });
    }
    onSignUpClick && onSignUpClick();
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (analytics) {
      logEvent(analytics, 'mobile_menu_toggle', {
        action: !isMobileMenuOpen ? 'open' : 'close'
      });
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled || isMobileMenuOpen 
        ? 'bg-dark/95 backdrop-blur-md shadow-lg' 
        : 'bg-dark/80 backdrop-blur-sm'
    }`}>
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link 
            href="/" 
            className="relative z-50 hover:opacity-90 transition-opacity flex items-center"
            onClick={() => handleNavigation('logo', '/')}
          >
            <Image
              src="https://cdn.jsdelivr.net/gh/ozgurbuluta/aiyaninda-website@v1.0.0/public/images/aiyaninda_logo_white1.svg"
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
              onClick={(e) => {
                if (link.isFeatures) {
                  handleFeaturesClick(e);
                } else {
                  handleNavigation(link.name, link.path);
                }
              }}
              className={`transition-colors ${
                isActivePath(link.path) 
                  ? 'text-primary font-medium' 
                  : 'text-secondary hover:text-light'
              }`}
            >
              {link.name}
            </Link>
            ))}
            
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                onClick={() => handleNavigation('login', '/login')}
                className="text-secondary hover:text-light transition-colors"
              >
                Giriş Yap
              </Link>
              
              <button 
                onClick={() => handleSignUpClick('header')}
                className="bg-primary text-light px-6 py-2 rounded-lg 
                          hover:bg-primary/90 transition-colors"
              >
                Hemen Kaydolun
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={handleMobileMenuToggle}
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
            : 'opacity-0 invisible pointer-events-none'
        }`}>
          <div className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => {
                  if (link.isFeatures && isHome) {
                    handleFeaturesClick();
                  } else {
                    handleNavigation(link.name, link.path);
                  }
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl transition-colors ${
                  isActivePath(link.path) 
                    ? 'text-primary font-medium' 
                    : 'text-secondary hover:text-light'
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex flex-col items-center space-y-4 pt-4 border-t border-white/10 w-full">
              <Link
                href="/login"
                onClick={() => {
                  handleNavigation('login', '/login');
                  setIsMobileMenuOpen(false);
                }}
                className="text-xl text-secondary hover:text-light transition-colors"
              >
                Giriş Yap
              </Link>
              
              <button 
                onClick={() => {
                  handleSignUpClick('mobile_menu');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-primary text-light px-8 py-3 rounded-lg 
                         hover:bg-primary/90 transition-colors w-full"
              >
                Hemen Kaydolun
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}