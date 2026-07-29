// Bajrang Chaat House - Complete Menu Database
// NOTE: All prices below are temporary placeholders for layout purposes.
// They are marked with '// TEMP PRICE' comments and must be verified before launch.

export const CATEGORIES = [
  { id: 'chaat', name: 'Chaat' },
  { id: 'south-indian', name: 'South Indian' },
  { id: 'chinese', name: 'Chinese' },
  { id: 'pav-bhaji-pulav', name: 'Pav Bhaaji & Pulav' },
  { id: 'breakfast', name: 'Breakfast' },
  { id: 'tea-time', name: 'Tea Time' },
  { id: 'chefs-specials', name: "Chef's Specials" }
];

export const MENU_ITEMS = [
  // ==================== CHAAT (20 items) ====================
  {
    id: 'samosa-chaat',
    category: 'chaat',
    name: 'Samosa Chaat',
    description: 'Crispy samosa crushed and topped with hot chickpeas curry, fresh yogurt, sweet and tangy chutneys, and fine sev.',
    price: 60, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'kachori-chaat',
    category: 'chaat',
    name: 'Kachori Chaat',
    description: 'Flaky kachori served with warm spiced chickpea curry, chilled curd, tamarind-mint chutneys, and fine sev.',
    price: 60, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'raj-kachori',
    category: 'chaat',
    name: 'Raj Kachori ⭐',
    description: 'Crispy giant kachori filled with potatoes, sprouts, curd, tangy chutneys and fresh spices. A perfect balance of sweet, spicy and crunchy flavours.',
    price: 90, // TEMP PRICE
    image: '/assets/images/raj_kachori.png',
    isVegetarian: true,
    isBestseller: true,
    badgeText: 'Bestseller',
    inChefsSpecials: true
  },
  {
    id: 'papdi-chaat',
    category: 'chaat',
    name: 'Papdi Chaat',
    description: 'Crispy flour wafers topped with spiced potatoes, boiled chickpeas, yogurt, sweet-spicy sauces, and fine sev.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'basket-chaat',
    category: 'chaat',
    name: 'Basket Chaat',
    description: 'Edible potato basket packed with boiled potatoes, chickpeas, yogurt, sweet & sour chutneys, and pomegranate seeds.',
    price: 80, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'khastaa-chaat',
    category: 'chaat',
    name: 'Khastaa Chaat',
    description: 'Crisp layered pastry served with potatoes, warm pea gravy, yogurt, and authentic Indian street spices.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'aloo-chaat',
    category: 'chaat',
    name: 'Aaloo Chaat',
    description: 'Golden pan-fried potato cubes tossed with roasted cumin, tangy chaat masala, lemon juice, and green coriander.',
    price: 60, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'bhel',
    category: 'chaat',
    name: 'Bhel',
    description: 'A light and crisp mix of puffed rice, chopped onions, tomatoes, peanuts, and dry spices tossed with tangy chutneys.',
    price: 50, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'dahi-bhel',
    category: 'chaat',
    name: 'Dahi Bhel',
    description: 'Classic puffed rice bhel topped with sweet beaten yogurt, raw mango pieces, and custom spice powders.',
    price: 60, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'matki-bhel',
    category: 'chaat',
    name: 'Matki Bhel',
    description: 'Nutritious version of dry bhel tossed with healthy sprouted moth beans, green chillies, onions, and lemon.',
    price: 60, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'palak-patta-chaat',
    category: 'chaat',
    name: 'Palak Patta Chaat',
    description: 'Crisp batter-fried fresh spinach leaves topped with spiced potatoes, yogurt, mint-tamarind chutneys, and fine sev.',
    price: 80, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'chole-samosa',
    category: 'chaat',
    name: 'Chole Samosa',
    description: 'Crispy samosa served in a pool of spicy Punjabi chickpea curry, garnished with ginger and raw onions.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'chole-tikki',
    category: 'chaat',
    name: 'Chole Tikki',
    description: 'Crisp pan-fried potato patties served over hot chickpea gravy, topped with yogurt, sweet chutney, and onions.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'dahi-samosa',
    category: 'chaat',
    name: 'Dahi Samosa',
    description: 'Crushed samosa smothered in smooth sweetened yogurt, seasoned with cumin, chaat masala, and fine sev.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'dahi-wada',
    category: 'chaat',
    name: 'Dahi Wada',
    description: 'Soft lentil dumplings soaked in creamy sweet yogurt, drizzled with roasted spices and sweet red chutney.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'chole-bhature',
    category: 'chaat',
    name: 'Chole Bhature ⭐',
    description: 'Soft bhature served with spicy chole, onion and pickle. A classic, indulgent North Indian favorite.',
    price: 100, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true,
    isBestseller: true,
    badgeText: 'Bestseller',
    inChefsSpecials: true
  },
  {
    id: 'dahi-puri',
    category: 'chaat',
    name: 'Dahi Puri ⭐',
    description: 'Crispy hollow puris filled with potatoes and sprouts, overflowing with sweet curd, dynamic chutneys, and fine sev.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true,
    isBestseller: true
  },
  {
    id: 'pani-puri',
    category: 'chaat',
    name: 'Pani Puri ⭐',
    description: 'Crispy hollow puris served with a potato-chana stuffing and spicy mint-coriander water along with sweet tamarind water.',
    price: 50, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true,
    isBestseller: true
  },
  {
    id: 'sev-puri',
    category: 'chaat',
    name: 'Sev Puri',
    description: 'Crisp flat puris topped with potatoes, raw mango cubes, chopped onions, dynamic chutneys, and loaded with fine sev.',
    price: 60, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'spdp',
    category: 'chaat',
    name: 'SPDP',
    description: 'The legendary combination of sev, potato, and sweet curd in crispy hollow puris, layered with sweet and spicy chutneys.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },

  // ==================== SOUTH INDIAN (12 items) ====================
  {
    id: 'plain-dosa',
    category: 'south-indian',
    name: 'Plain Dosa',
    description: 'Crispy, golden crepe made from fermented rice and lentil batter, served with sambhar and coconut chutney.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'masala-dosa',
    category: 'south-indian',
    name: 'Masala Dosa',
    description: 'Crispy golden dosa rolled with a flavorful filling of tempered potato mash, mustard seeds, and curry leaves.',
    price: 90, // TEMP PRICE
    image: '/assets/images/masala_dosa.png',
    isVegetarian: true
  },
  {
    id: 'ghee-masala-dosa',
    category: 'south-indian',
    name: 'Ghee Masala Dosa 👨🍳',
    description: 'Crispy dosa cooked in ghee with spiced potato filling. Smells heavenly and has an extra rich crunch.',
    price: 120, // TEMP PRICE
    image: '/assets/images/masala_dosa.png',
    isVegetarian: true,
    isChefSpecial: true,
    badgeText: "Chef's Special",
    inChefsSpecials: true
  },
  {
    id: 'paneer-dosa',
    category: 'south-indian',
    name: 'Paneer Dosa',
    description: 'Crispy crepe stuffed with a rich, spiced scrambled paneer (cottage cheese) filling and fine herbs.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'mysore-dosa',
    category: 'south-indian',
    name: 'Mysore Dosa 👨🍳',
    description: 'Golden crispy dosa coated with a fiery garlic-chilli chutney on the inside, filled with light potato masala.',
    price: 110, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true,
    isChefSpecial: true
  },
  {
    id: 'hyderabadi-dosa',
    category: 'south-indian',
    name: 'Hyderabadi Dosa',
    description: 'Spicy dosa smeared with a unique Hyderabadi spice blend, roasted lentil powder (podi) and potato mash.',
    price: 120, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'rawa-dosa',
    category: 'south-indian',
    name: 'Rawa Dosa',
    description: 'Crispy, lace-like crepe made with semolina and rice flour, flavored with green chillies, ginger, and black pepper.',
    price: 100, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'sponge-dosa',
    category: 'south-indian',
    name: 'Sponge Dosa',
    description: 'Set of two soft, thick, and fluffy oil-free dosas served with fresh coconut chutney and hot sambhar.',
    price: 100, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'onion-uttapam',
    category: 'south-indian',
    name: 'Onion Uttapam',
    description: 'Thick, savory rice pancake topped with lots of finely chopped onions, green chillies, and fresh coriander.',
    price: 90, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'tomato-uttapam',
    category: 'south-indian',
    name: 'Tomato Uttapam',
    description: 'Fluffy rice-lentil pancake topped with juicy ripe tomatoes, green chillies, and spices, cooked till golden.',
    price: 90, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'sambhar-wada',
    category: 'south-indian',
    name: 'Sambhar Wada',
    description: 'Deep-fried crispy lentil donuts soaked in piping hot, vegetable-rich sambhar, served with fresh coconut chutney.',
    price: 70, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'podi-masala-dosa',
    category: 'south-indian',
    name: 'Podi Masala Dosa 👨🍳',
    description: 'Crispy Dosa coated with spicy southern gunpowder (podi) and filled with seasoned potato mash.',
    price: 110, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true,
    isChefSpecial: true
  },

  // ==================== CHINESE (22 items: grouped under visual sub-headers) ====================
  // Rice
  {
    id: 'fried-rice',
    category: 'chinese',
    subGroup: 'Rice',
    name: 'Fried Rice',
    description: 'Wok-tossed basmati rice with finely chopped carrots, beans, cabbage, and spring onions in soy sauce.',
    price: 110, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'manchurian-rice',
    category: 'chinese',
    subGroup: 'Rice',
    name: 'Manchurian Rice',
    description: 'A delicious combination of wok-fried rice and vegetable Manchurian balls simmered in a dark soy gravy.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'schezwan-rice',
    category: 'chinese',
    subGroup: 'Rice',
    name: 'Schezwan Rice',
    description: 'Spicy stir-fried rice tossed with colorful veggies in a fiery house-made Schezwan pepper sauce.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'triple-rice',
    category: 'chinese',
    subGroup: 'Rice',
    name: 'Triple Rice',
    description: 'A combination of Schezwan rice, soft noodles, and crispy fried noodles served with a hot Manchurian gravy.',
    price: 150, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'mushroom-fried-rice',
    category: 'chinese',
    subGroup: 'Rice',
    name: 'Mushroom Fried Rice',
    description: 'Fragrant basmati rice wok-tossed with fresh button mushrooms, garlic, greens, and Chinese seasonings.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'paneer-fried-rice',
    category: 'chinese',
    subGroup: 'Rice',
    name: 'Paneer Fried Rice',
    description: 'Fragrant rice stir-fried with paneer & vegetables in Chinese style. Loaded with protein and taste.',
    price: 140, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true,
    isBestseller: true,
    badgeText: 'Bestseller',
    inChefsSpecials: true
  },

  // Noodles
  {
    id: 'hakka-noodles',
    category: 'chinese',
    subGroup: 'Noodles',
    name: 'Hakka Noodles',
    description: 'Perfectly boiled thin noodles stir-fried with julienned vegetables, white pepper, and light soy sauce.',
    price: 110, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'schezwan-noodles',
    category: 'chinese',
    subGroup: 'Noodles',
    name: 'Schezwan Noodles',
    description: 'Fiery and garlic-rich noodles tossed with crunchy vegetables in hot house Schezwan paste.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'manchurian-noodles',
    category: 'chinese',
    subGroup: 'Noodles',
    name: 'Manchurian Noodles',
    description: 'Soft Hakka noodles served with delectable stir-fried vegetable Manchurian gravy poured over.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'american-chopsy',
    category: 'chinese',
    subGroup: 'Noodles',
    name: 'American Chopsy',
    description: 'Crispy fried noodles topped with a sweet and sour vegetable glaze and garnished with green spring onions.',
    price: 150, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },

  // Soups
  {
    id: 'manchow-soup',
    category: 'chinese',
    subGroup: 'Soups',
    name: 'Manchow Soup',
    description: 'Dark, spicy soy-based soup loaded with minced veggies, ginger, garlic, and topped with crunchy fried noodles.',
    price: 90, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'hot-knor-soup',
    category: 'chinese',
    subGroup: 'Soups',
    name: 'Hot & Knor Soup',
    description: 'A hot and sour soup packed with vinegar, soy, sliced mushrooms, bamboo shoots, and green vegetables.',
    price: 90, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },

  // Starters (named "Starters" per brief, corresponding to "Main Course" + "Snacks" of the old menu)
  {
    id: 'manchurian-dry-gravy',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Manchurian (Dry / Gravy)',
    description: 'Golden-fried vegetable dumplings tossed in an aromatic soy-chilli and garlic sauce.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'paneer-chilli',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Paneer Chilli',
    description: 'Stir-fried cottage cheese cubes with bell peppers, onions, and green chillies in a glossy soy glaze.',
    price: 150, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'mushroom-chilli',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Mushroom Chilli',
    description: 'Fresh button mushrooms fried crisp and tossed with onion, capsicum, and spicy oriental sauces.',
    price: 140, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'channa-chilli',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Channa Chilli',
    description: 'Crispy deep-fried kabuli chana tossed with garlic, green chillies, and dry Chinese spices.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'veg-crispy',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Veg Crispy 👨🍳',
    description: 'Crispy veggies tossed in a flavorful Indo-Chinese sauce. A sweet-spicy delight.',
    price: 120, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true,
    isChefSpecial: true,
    badgeText: "Chef's Special",
    inChefsSpecials: true
  },
  {
    id: 'corn-crispy',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Corn Crispy',
    description: 'Sweet corn kernels coated in starch, fried crispy, and seasoned with pepper, salt, and spring onions.',
    price: 120, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'veg-lollipop',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Veg Lollipop',
    description: 'Crispy spiced vegetable drumsticks served with a side of garlic-chilli Schezwan dip.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'hara-bhara-kabab',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Hara Bhara Kabab',
    description: 'Healthy pan-fried patties made of spinach, green peas, and potatoes, spiced with aromatic herbs.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'veg-cutlet',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Veg Cutlet',
    description: 'Crispy breaded patties filled with mixed mashed vegetables and shallow-fried till dark golden.',
    price: 90, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'corn-kabab',
    category: 'chinese',
    subGroup: 'Starters',
    name: 'Corn Kabab',
    description: 'Golden pan-fried tikkis made of sweet corn, potatoes, cheese, and medium Indian spices.',
    price: 120, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },

  // ==================== PAV BHAJI & PULAV (4 items) ====================
  {
    id: 'pav-bhaji',
    category: 'pav-bhaji-pulav',
    name: 'Pav Bhaji',
    description: 'A spiced blend of mashed mixed vegetables cooked with butter, served with soft toasted pav.',
    price: 90, // TEMP PRICE
    image: '/assets/images/pav_bhaji.png',
    isVegetarian: true
  },
  {
    id: 'butter-pav-bhaji',
    category: 'pav-bhaji-pulav',
    name: 'Butter Pav Bhaji 👨🍳',
    description: 'Rich buttery vegetable mash served with toasted pav & onions. Loaded with premium Amul butter.',
    price: 110, // TEMP PRICE
    image: '/assets/images/pav_bhaji.png',
    isVegetarian: true,
    isChefSpecial: true,
    badgeText: "Chef's Special",
    inChefsSpecials: true
  },
  {
    id: 'veg-pulav',
    category: 'pav-bhaji-pulav',
    name: 'Veg Pulav',
    description: 'Spicy street-style tawa rice cooked with chopped vegetables, butter, and pav bhaji spices.',
    price: 100, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'paneer-pulav',
    category: 'pav-bhaji-pulav',
    name: 'Paneer Pulav',
    description: 'Spicy tawa rice enriched with pan-fried paneer cubes, served with a garnish of coriander and lemon.',
    price: 130, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },

  // ==================== BREAKFAST (4 items) ====================
  {
    id: 'poha',
    category: 'breakfast',
    name: 'Poha',
    description: 'Flattened rice steamed with turmeric, mustard seeds, green chillies, onion, topped with crispy sev.',
    price: 40, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'chana-poha',
    category: 'breakfast',
    name: 'Chana Poha',
    description: 'Traditional poha served with a side of black chickpeas spicy tarri gravy for a flavorful kick.',
    price: 50, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'matki-poha',
    category: 'breakfast',
    name: 'Matki Poha',
    description: 'Fluffy poha topped with healthy sprouted moth beans (matki) Usal, lime juice, and onions.',
    price: 50, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },
  {
    id: 'chana-samosa',
    category: 'breakfast',
    name: 'Chana Samosa 🔺',
    description: 'Traditional samosa served with spicy black chickpea gravy, chopped onions, and lemon juice.',
    price: 30, // TEMP PRICE
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=400&q=80',
    isVegetarian: true
  },

  // ==================== TEA TIME (2 items) ====================
  {
    id: 'chai',
    category: 'tea-time',
    name: 'Chai',
    description: 'Strong, aromatic milk tea brewed with fresh ginger, cardamom, and premium tea leaves.',
    price: 20, // TEMP PRICE
    image: '/assets/images/chai_bun_maska.png',
    isVegetarian: true
  },
  {
    id: 'bun-maska',
    category: 'tea-time',
    name: 'Bun Maska',
    description: 'Soft sweet bun sliced and layered generously with fresh white butter. Best dipped in hot chai.',
    price: 40, // TEMP PRICE
    image: '/assets/images/chai_bun_maska.png',
    isVegetarian: true
  }
];
