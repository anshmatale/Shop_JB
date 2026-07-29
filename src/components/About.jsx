import React from 'react';

export default function About() {
  const badges = [
    { label: '100% Veg', icon: 'fa-solid fa-leaf', color: 'text-green-600 bg-green-50 border-green-200' },
    { label: 'Fresh Batter Daily', icon: 'fa-solid fa-seedling', color: 'text-amber-600 bg-amber-50 border-amber-200' },
    { label: 'Authentic Taste', icon: 'fa-solid fa-award', color: 'text-primary bg-red-50 border-red-200' },
    { label: 'Made with Love', icon: 'fa-solid fa-heart', color: 'text-red-500 bg-red-50/50 border-red-200' }
  ];

  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-neutral-50/70 border-y border-neutral-100 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Accent Bar */}
        <div className="w-10 h-1 bg-primary mb-3 rounded-full"></div>
        
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold font-display text-gray-900 mb-6 uppercase tracking-tight">
          Our Story
        </h2>

        {/* Paragraph */}
        <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-3xl mb-12 font-medium">
          Welcome to <strong className="text-primary font-bold">Bajrang Chaat House</strong>, a family-run chaat house built with a passion for bringing the real flavours of Indian street food to your plate. Every single day, we select fresh ingredients and prepare home-style batters to serve you authentic Chaat delicacies, crispy South Indian Dosas, and sizzling Indo-Chinese fast food. Everything is made with love, respect for tradition, and a commitment to quality.
        </p>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
          {badges.map((badge, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-300 hover:scale-103 hover:shadow-sm ${badge.color}`}
            >
              <div className="text-xl md:text-2xl mb-2.5">
                <i className={badge.icon}></i>
              </div>
              <span className="font-bold text-xs md:text-sm tracking-wide text-neutral-800">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
