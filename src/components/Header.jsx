import React from 'react';

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className="sticky top-0 z-50 w-full shadow-md font-display">
      {/* Top Thin Bar */}
      <div className="bg-primary text-white text-xs py-1.5 px-4 md:px-8 flex justify-between items-center">
        <span className="font-medium tracking-wide">📍 Near Jio BP Petrol Pump, Fulchur Naka, Gondia</span>
        <div className="flex items-center gap-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
            title="Facebook"
            aria-label="Facebook"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </a>
          <a
            href="https://instagram.com/bajrangchaathouse"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition-colors"
            title="Instagram"
            aria-label="Instagram"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="bg-black text-white py-3 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Side: Logo & Brand Name */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="assets/images/logo.jpg"
            alt="Bajrang Chaat House Logo"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border border-primary"
          />
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-bold leading-tight tracking-tight text-white uppercase">
              Bajrang <span className="text-primary font-black">Chaat House</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-wider -mt-0.5">THE TASTE OF STREET FOOD</span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="flex items-center gap-6 text-sm font-semibold">
          <a href="#hero" className="hover:text-primary transition-colors">Home</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#menu" className="hover:text-primary transition-colors">Menu</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </nav>

        {/* Right Actions: Live Search & Phone button */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          {/* Search bar */}
          <div className="relative w-full max-w-[200px]">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-800 text-white placeholder-gray-400 text-xs px-3.5 py-2 pl-8 rounded-full border border-neutral-700 focus:outline-none focus:border-primary transition-all"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-gray-400 text-[10px]"></i>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-2 text-gray-400 hover:text-white text-xs"
                title="Clear search"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>

          {/* Call button */}
          <a
            href="tel:+919922780180"
            className="bg-primary hover:bg-primary-hover text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transition-all flex items-center gap-2 shrink-0 border border-primary"
          >
            <i className="fa-solid fa-phone"></i>
            <span>Call Us</span>
          </a>
        </div>
      </div>
    </header>
  );
}
