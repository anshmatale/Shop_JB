import React, { useState } from 'react';
import { CATEGORIES, MENU_ITEMS } from '../data/menu';

export default function Menu({ searchQuery }) {
  const [activeCategory, setActiveCategory] = useState('chaat');
  const [favorites, setFavorites] = useState({});

  // Toggle favorite helper
  const toggleFavorite = (itemId) => {
    setFavorites(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  // Filter items by category or search query
  const getFilteredItems = () => {
    if (searchQuery) {
      return MENU_ITEMS.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    if (activeCategory === 'chefs-specials') {
      return MENU_ITEMS.filter(item => item.inChefsSpecials);
    }
    
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  };

  const filteredItems = getFilteredItems();

  // Veg symbol JSX helper
  const VegIndicator = () => (
    <div className="border border-green-600 w-4 h-4 p-0.5 flex items-center justify-center rounded-[2px] bg-white shrink-0" title="100% Vegetarian">
      <div className="w-1.5 h-1.5 rounded-full bg-green-600"></div>
    </div>
  );

  // Card renderer helper
  const renderCard = (item, isFeatured = false) => {
    const isFavorite = !!favorites[item.id];
    return (
      <div
        key={item.id}
        className={`bg-white rounded-2xl shadow-md border border-neutral-100 p-5 pt-12 flex flex-col relative transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
          isFeatured ? 'ring-2 ring-primary/40 bg-gradient-to-b from-white to-red-50/10' : ''
        }`}
      >
        {/* Ribbon Badge */}
        {item.badgeText && (
          <div className={`absolute top-4 left-0 text-white text-[10px] uppercase font-black tracking-wider px-3.5 py-1.5 rounded-r-full shadow-sm z-10 ${
            item.badgeText.toLowerCase() === 'bestseller' ? 'bg-amber-500' : 'bg-primary'
          }`}>
            {item.badgeText}
          </div>
        )}

        {/* Favorite Icon */}
        <button
          onClick={() => toggleFavorite(item.id)}
          className="absolute top-4 right-4 text-gray-300 hover:text-primary transition-colors cursor-pointer text-sm p-1 z-10"
          title="Favorite"
          aria-label="Add to Favorites"
        >
          <i className={`${isFavorite ? 'fa-solid fa-heart text-primary' : 'fa-regular fa-heart'}`}></i>
        </button>

        {/* Circular food photo on light neutral background */}
        <div className="flex justify-center -mt-16 mb-4">
          <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-white shadow-md bg-neutral-50 flex items-center justify-center shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover hover:scale-108 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        </div>

        {/* Card Body */}
        <div className="flex-grow flex flex-col">
          {/* Item title and Veg dot */}
          <div className="flex justify-between items-start gap-2 mb-1.5">
            <h3 className="font-display font-bold text-gray-900 text-sm md:text-base leading-tight">
              {item.name}
            </h3>
            <VegIndicator />
          </div>

          {/* Description */}
          <p className="text-gray-500 text-[11px] md:text-xs leading-relaxed flex-grow font-sans mb-3 line-clamp-2">
            {item.description}
          </p>

          {/* Price Label (TEMP PRICE comments kept in data model) */}
          <div className="flex justify-between items-center border-t border-neutral-100 pt-3 mt-auto">
            <span className="text-gray-900 font-extrabold text-sm md:text-base font-display">
              ₹{item.price}
            </span>
            <span className="text-[10px] text-gray-400 font-semibold tracking-wider uppercase font-sans">
              Veg
            </span>
          </div>
        </div>
      </div>
    );
  };

  // Group Chinese items by subgroup
  const renderChineseMenu = () => {
    const subGroups = ['Starters', 'Soups', 'Noodles', 'Rice'];
    return (
      <div className="space-y-12">
        {subGroups.map(subGroupName => {
          const subGroupItems = filteredItems.filter(item => item.subGroup === subGroupName);
          if (subGroupItems.length === 0) return null;
          
          return (
            <div key={subGroupName} className="space-y-6">
              {/* Visual Sub-Header */}
              <div className="flex items-center gap-4">
                <h3 className="text-lg md:text-xl font-bold font-display text-gray-800 uppercase tracking-wide">
                  {subGroupName}
                </h3>
                <div className="h-[2px] bg-neutral-200 flex-grow rounded-full"></div>
              </div>
              
              {/* Responsive sub-grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 pt-10">
                {subGroupItems.map(item => renderCard(item))}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section id="menu" className="py-16 px-4 md:px-8 max-w-7xl mx-auto font-sans">
      {/* Centered Bold Red Heading */}
      <div className="text-center mb-10">
        <div className="w-10 h-1 bg-primary mx-auto mb-3 rounded-full"></div>
        <h2 className="text-3xl md:text-5xl font-extrabold font-display text-primary tracking-tight uppercase">
          {searchQuery ? 'Search Results' : 'Our Menu'}
        </h2>
        {searchQuery && (
          <p className="text-sm text-gray-500 mt-2">
            Found {filteredItems.length} items matching "{searchQuery}"
          </p>
        )}
      </div>

      {/* Category Pills Navigation (hidden when search is active) */}
      {!searchQuery && (
        <div className="flex justify-start md:justify-center overflow-x-auto pb-4 mb-16 scroll-smooth scrollbar-thin snap-x">
          <div className="flex gap-2.5 bg-neutral-100 p-1.5 rounded-full shadow-inner border border-neutral-200 max-w-full">
            {CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 whitespace-nowrap snap-center cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-md'
                    : 'text-gray-600 hover:text-black hover:bg-neutral-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Grid Content */}
      {filteredItems.length === 0 ? (
        <div className="text-center py-12 text-gray-500 font-medium">
          No delicious dishes found. Try a different search!
        </div>
      ) : searchQuery ? (
        // Standard Grid for Search results
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 pt-10">
          {filteredItems.map(item => renderCard(item))}
        </div>
      ) : activeCategory === 'chinese' ? (
        // Chinese visual subgrouping layout
        renderChineseMenu()
      ) : (
        // Standard Category Grid (including Chef's Specials)
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 pt-10">
          {filteredItems.map(item =>
            renderCard(item, activeCategory === 'chefs-specials')
          )}
        </div>
      )}
    </section>
  );
}
