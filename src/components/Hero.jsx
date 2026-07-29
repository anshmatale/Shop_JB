import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative h-[65vh] md:h-[80vh] flex items-center justify-center overflow-hidden font-display">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="assets/images/hero_chaat.png"
          alt="Indian Street Food Collage"
          className="w-full h-full object-cover scale-105 filter brightness-50"
        />
        {/* Soft overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
      </div>

      {/* Hero Content Overlay */}
      <div className="relative z-20 text-center text-white px-4 max-w-4xl animate-fade-in-up">
        {/* Subtle red decoration badge */}
        <div className="inline-block bg-primary/25 border border-primary/40 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-semibold mb-4 text-primary">
          Authentic Street Food Experience
        </div>

        {/* Large Restaurant Name */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-4 drop-shadow-lg text-white">
          BAJRANG <span className="text-primary">CHAAT HOUSE</span>
        </h1>

        {/* Catchy Tagline */}
        <p className="text-xl md:text-3xl font-bold tracking-wide mb-3 text-gray-200">
          Every Bite Bursting With Flavour!
        </p>

        {/* Specialties Subheading */}
        <p className="text-sm md:text-lg font-medium text-gray-300 tracking-wider mb-8 font-sans">
          Chaat &bull; South Indian &bull; Chinese &bull; Fast Food
        </p>

        {/* Scroll CTA Button */}
        <a
          href="#menu"
          className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white font-bold text-sm md:text-base px-8 py-4 rounded-full shadow-2xl transition-all hover:-translate-y-0.5 border border-primary"
        >
          <span>View Menu</span>
          <i className="fa-solid fa-arrow-down"></i>
        </a>
      </div>
    </section>
  );
}
