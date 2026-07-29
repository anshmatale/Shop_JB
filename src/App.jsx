import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Footer from './components/Footer';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll listener to toggle Back-to-Top visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* Sticky Header with Search State bindings */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <Menu searchQuery={searchQuery} />
        <About />
      </main>

      {/* Footer & Contact */}
      <Footer />

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 w-11 h-11 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform z-40 border border-primary cursor-pointer ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to Top"
        title="Scroll to Top"
      >
        <i className="fa-solid fa-arrow-up text-sm"></i>
      </button>
    </div>
  );
}
