// Bajrang Chaat House - Bilingual Menu Database
// This database holds all 64 items with mouth-watering descriptions in both English and Hindi.

const CATEGORIES = [
  { id: 'chaat', name: { en: 'Chaat Delight', hi: 'चटपटी चाट' }, icon: '🍲' },
  { id: 'south-indian', name: { en: 'South Indian', hi: 'साउथ इंडियन' }, icon: '🥞' },
  { id: 'chinese', name: { en: 'Indo-Chinese', hi: 'इंडो-चाइनीज' }, icon: '🍜' },
  { id: 'pav-bhaji', name: { en: 'Pav Bhaji', hi: 'पाव भाजी' }, icon: '🍞' },
  { id: 'pulav', name: { en: 'Tawa Pulav', hi: 'तवा पुलाव' }, icon: '🍛' },
  { id: 'breakfast', name: { en: 'Breakfast Special', hi: 'सुबह का नाश्ता' }, icon: '🥯' },
  { id: 'tea-snacks', name: { en: 'Tea & Snacks', hi: 'चाय और स्नैक्स' }, icon: '☕' }
];

const MENU_ITEMS = [
  // ==================== CHAAT (20 items) ====================
  {
    id: 'samosa-chaat',
    category: 'chaat',
    name: { en: 'Samosa Chaat', hi: 'समोसा चाट' },
    description: {
      en: 'Crispy samosa crushed and topped with warm chickpea curry, whipped curd, tangy chutneys, and fine sev.',
      hi: 'कुरकुरे समोसे को तोड़कर गर्म छोले, गाढ़ी फेंटी हुई दही, खट्टी-मीठी चटनी और बारीक सेव के साथ परोसा गया।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'kachori-chaat',
    category: 'chaat',
    name: { en: 'Kachori Chaat', hi: 'कचौरी चाट' },
    description: {
      en: 'Flaky khasta kachori served with spiced chickpea curry, chilled yogurt, sweet tamarind, and spicy mint sauces.',
      hi: 'खस्ता कचौरी को तीखे छोले, ठंडी दही, मीठी इमली और तीखी पुदीने की चटनी के स्वादिष्ट मिश्रण के साथ परोसा गया।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'raj-kachori',
    category: 'chaat',
    name: { en: 'Raj Kachori', hi: 'राज कचौरी' },
    description: {
      en: 'Crispy giant kachori filled with potatoes, sprouts, curd, tangy chutneys and fresh spices. A perfect balance of sweet, spicy and crunchy flavours.',
      hi: 'करारी बड़ी कचौरी जिसमें आलू, अंकुरित दाल, दही, मीठी और तीखी चटनी तथा ताज़े मसाले भरे होते हैं। हर निवाले में कुरकुरापन, मिठास और मसालेदार स्वाद का शानदार मेल।'
    },
    isBestSeller: true,
    image: 'assets/images/raj_kachori.png'
  },
  {
    id: 'papdi-chaat',
    category: 'chaat',
    name: { en: 'Papdi Chaat', hi: 'पापड़ी चाट' },
    description: {
      en: 'Crispy flour crackers topped with potatoes, chickpeas, yogurt, chutneys, and a generous sprinkle of sev and spices.',
      hi: 'कुरकुरी पापड़ी के ऊपर उबले आलू, काबुली चने, गाढ़ी दही, तीखी-मीठी चटनियाँ और ऊपर से सेव-मसालों की शानदार कोटिंग।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'basket-chaat',
    category: 'chaat',
    name: { en: 'Basket Chaat', hi: 'बास्केट चाट' },
    description: {
      en: 'Edible potato basket packed with boiled potatoes, chickpeas, curd, assorted chutneys, pomegranate seeds, and sev.',
      hi: 'आलू के लच्छों से बनी कुरकुरी कटोरी (बास्केट) जिसमें उबले आलू, चने, मलाईदार दही, रंग-बिरंगी चटनियाँ और अनार के दाने सजे हैं।'
    },
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'khasta-chaat',
    category: 'chaat',
    name: { en: 'Khasta Chaat', hi: 'खस्ता चाट' },
    description: {
      en: 'Crisp layered pastry served with boiled potatoes, yellow peas gravy, yogurt, and authentic Indian street spices.',
      hi: 'परतदार खस्ता कचौड़ी के साथ मटर की चाट, ठंडी दही, इमली व पुदीने की चटनी और भुने हुए मसालों का बेजोड़ स्वाद।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'aloo-chaat',
    category: 'chaat',
    name: { en: 'Aloo Chaat', hi: 'आलू चाट' },
    description: {
      en: 'Golden pan-fried potato cubes tossed with roasted cumin, tangy chaat masala, lemon juice, and spicy green chutney.',
      hi: 'तवे पर कुरकुरे किए गए आलू के टुकड़ों में भुना जीरा, चटपटा चाट मसाला, नींबू का रस और तीखी हरी चटनी मिलाकर तैयार।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'bhel',
    category: 'chaat',
    name: { en: 'Bhel Puri', hi: 'भेल पूरी' },
    description: {
      en: 'A light, refreshing mix of puffed rice, onions, tomatoes, peanuts, and dry spices tossed with tangy chutneys.',
      hi: 'मुरमुरे, बारीक कटे प्याज, टमाटर, भुनी मूंगफली और मसालों को तीखी व खट्टी चटनियों के साथ तुरंत मिलाकर तैयार एक हल्का नाश्ता।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dahi-bhel',
    category: 'chaat',
    name: { en: 'Dahi Bhel', hi: 'दही भेल' },
    description: {
      en: 'Classic crispy puffed rice bhel topped with sweet beaten curd, adding a creamy, cooling dimension to the snack.',
      hi: 'पारंपरिक कुरकुरी भेल पूरी के ऊपर मलाईदार मीठी दही और अनार के दाने डालकर परोसा गया एक शीतल स्वादिष्ट फ्यूजन।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'matki-bhel',
    category: 'chaat',
    name: { en: 'Matki Bhel', hi: 'मटकी भेल' },
    description: {
      en: 'Nutritious version of dry bhel tossed with healthy sprouted moth beans (matki), lemon, and green chillies.',
      hi: 'सेहतमंद और स्वादिष्ट! अंकुरित मटकी (मोठ), हरी मिर्च, बारीक प्याज-टमाटर और नींबू के रस से भरपूर प्रोटीन युक्त भेल।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'palak-patta-chaat',
    category: 'chaat',
    name: { en: 'Palak Patta Chaat', hi: 'पालक पत्ता चाट' },
    description: {
      en: 'Crisp batter-fried fresh spinach leaves topped with spiced potatoes, yogurt, mint-tamarind sauces, and sev.',
      hi: 'बेसन के घोल में लिपटे कुरकुरे तले हुए पालक के पत्तों पर उबले आलू, दही, चटनियों और बारीक सेव की लाजवाब सजावट।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chole-samosa',
    category: 'chaat',
    name: { en: 'Chole Samosa', hi: 'छोले समोसा' },
    description: {
      en: 'Crispy samosa served swimming in a spicy, rich chickpea curry, garnished with ginger juliennes and raw onions.',
      hi: 'मसालेदार और चटपटे पंजाबी छोले की ग्रेवी में डुबोया हुआ गरमा-गरम समोसा, ऊपर से अदरक के लच्छे और प्याज।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chole-tikki',
    category: 'chaat',
    name: { en: 'Chole Tikki', hi: 'छोले टिक्की' },
    description: {
      en: 'Crisp golden potato patties served over a bed of spiced chickpea gravy, topped with yogurt and sweet chutneys.',
      hi: 'तवे पर लाल सिंकी हुई आलू की टिक्की को चटपटे छोले के साथ रखकर, मलाईदार दही और खट्टी-मीठी सोंठ चटनी से सजाया गया।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dahi-samosa',
    category: 'chaat',
    name: { en: 'Dahi Samosa', hi: 'दही समोसा' },
    description: {
      en: 'Crushed samosa smothered in smooth sweetened yogurt, seasoned with cumin, chaat masala, and fine sev.',
      hi: 'समोसे के ऊपर प्रचुर मात्रा में मीठी-ठंडी दही, भुना हुआ जीरा, चाट मसाला और बारीक सेव का एक लाजवाब ठंडा-गर्म स्वाद।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dahi-wada',
    category: 'chaat',
    name: { en: 'Dahi Wada', hi: 'दही वड़ा' },
    description: {
      en: 'Soft lentil dumplings soaked in creamy sweet yogurt, drizzled with roasted spices, red chilli powder, and sweet chutney.',
      hi: 'दाल से बने रुई जैसे मुलायम वड़ों को ठंडी मीठी दही में भिगोकर, ऊपर से लाल मिर्च, जीरा पाउडर और मीठी चटनी से सजाया गया।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chole-bhature',
    category: 'chaat',
    name: { en: 'Chole Bhature', hi: 'छोले भटूरे' },
    description: {
      en: 'Fluffy fried leavened bread served with rich, darkly spiced chickpea curry, pickles, and sliced onions.',
      hi: 'गरमा-गरम फूले हुए भटूरे के साथ गाढ़े खुशबूदार मसालों से बने पंजाबी छोले, अचार और कटी हुई प्याज व हरी मिर्च।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'dahi-puri',
    category: 'chaat',
    name: { en: 'Dahi Puri', hi: 'दही पूरी' },
    description: {
      en: 'Crispy hollow puris stuffed with potatoes and sprouts, overflowing with sweet curd, dynamic chutneys, and loaded with sev.',
      hi: 'कुरकुरी गोल गप्पों की पूरियों में आलू-चना भरकर उन्हें ठंडी गाढ़ी दही, तीखी-मीठी चटनियों और बारीक सेव से लबालब भरा जाता है।'
    },
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'pani-puri',
    category: 'chaat',
    name: { en: 'Pani Puri', hi: 'पानी पूरी' },
    description: {
      en: 'Crispy hollow puris served with boiled potato-chana stuffing and spicy mint-coriander water along with sweet tamarind water.',
      hi: 'सदाबहार पानी पूरी! कुरकुरी पूरियों में उबले आलू-चने भरकर, मसालेदार चटपटे पुदीने के पानी और मीठी इमली के पानी के साथ परोसा गया।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sev-puri',
    category: 'chaat',
    name: { en: 'Sev Puri', hi: 'सेव पूरी' },
    description: {
      en: 'Crisp flat puris topped with raw mango cubes, potatoes, chopped onions, and a thick carpet of fine sev.',
      hi: 'चपटी पापड़ियों पर आलू, प्याज, हरी-मीठी चटनी, कच्ची कैरी के टुकड़े और ढेर सारी बारीक बेसन सेव की सुनहरी परत।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'spdp',
    category: 'chaat',
    name: { en: 'Sev Potato Dahi Puri (SPDP)', hi: 'एसपीडीपी (Sev Potato Dahi Puri)' },
    description: {
      en: 'The legendary combination of sev, potato, and sweet curd in crispy puris, layered with sweet and spicy chutneys.',
      hi: 'कुरकुरी पूरियों में आलू, ठंडी दही, सोंठ और हरी चटनी का बेजोड़ संगम, जिसके ऊपर सेव का एक बड़ा पहाड़ सजा होता है।'
    },
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== SOUTH INDIAN (12 items) ====================
  {
    id: 'plain-dosa',
    category: 'south-indian',
    name: { en: 'Plain Dosa', hi: 'प्लेन डोसा' },
    description: {
      en: 'Crisp golden crepe made from fermented rice and lentil batter, served with sambar and traditional chutneys.',
      hi: 'चावल और उड़द दाल के घोल से बना कुरकुरा सुनहरा डोसा, गरमा-गरम सांबर और ताजी नारियल-टमाटर की चटनियों के साथ।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'masala-dosa',
    category: 'south-indian',
    name: { en: 'Masala Dosa', hi: 'मसाला डोसा' },
    description: {
      en: 'Thin crispy crepe rolled with a flavorful filling of tempered mashed potatoes, mustard seeds, and curry leaves.',
      hi: 'सरसों और कड़ी पत्ते का तड़का लगे स्वादिष्ट आलू मसाले से भरा बेहद कुरकुरा और स्वादिष्ट पारंपरिक मसाला डोसा।'
    },
    isBestSeller: true,
    image: 'assets/images/masala_dosa.png'
  },
  {
    id: 'ghee-masala-dosa',
    category: 'south-indian',
    name: { en: 'Ghee Masala Dosa', hi: 'घी मसाला डोसा' },
    description: {
      en: 'Rich and aromatic masala dosa cooked with a generous amount of pure desi ghee for a premium crispy finish.',
      hi: 'शुद्ध देसी घी में सेंका गया बेहद खुशबूदार और करारा मसाला डोसा, जो हर निवाले में बेजोड़ स्वाद देता है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'paneer-dosa',
    category: 'south-indian',
    name: { en: 'Paneer Dosa', hi: 'पनीर डोसा' },
    description: {
      en: 'Crispy crepe stuffed with a rich, spiced scrambled cottage cheese (paneer) filling and fine herbs.',
      hi: 'मसालेदार कद्दूकस किए पनीर, प्याज और हरे धनिए के लजीज मिश्रण से भरा हुआ एक शानदार प्रोटीन-युक्त डोसा।'
    },
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mysore-dosa',
    category: 'south-indian',
    name: { en: 'Mysore Dosa', hi: 'मैसूर डोसा' },
    description: {
      en: 'Golden crispy dosa coated with a fiery garlic-chilli chutney on the inside, filled with light potato masala.',
      hi: 'अंदर से लहसुन-लाल मिर्च की तीखी मैसूर चटनी से लिपटा हुआ और आलू मसाले से भरा कुरकुरा डोसा।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hyderabadi-dosa',
    category: 'south-indian',
    name: { en: 'Hyderabadi Dosa', hi: 'हैदराबादी डोसा' },
    description: {
      en: 'Spicy dosa smeared with a unique Hyderabadi spice blend and roasted lentils powder (podi) and filled with potatoes.',
      hi: 'हैदराबादी खास मसाले और गनपाउडर (पोडी) के छिड़काव तथा आलू भरते के साथ तैयार किया गया एक तीखा डोसा।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'rawa-dosa',
    category: 'south-indian',
    name: { en: 'Rawa Dosa', hi: 'रवा डोसा' },
    description: {
      en: 'Crispy, lace-like crepe made with semolina and rice flour, flavored with green chillies, ginger, and black pepper.',
      hi: 'सूजी और चावल के आटे से बना जालीदार करारा डोसा, जिसमें साबुत काली मिर्च, हरी मिर्च और अदरक का स्वाद समाया है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sponge-dosa',
    category: 'south-indian',
    name: { en: 'Sponge Dosa', hi: 'स्पंज डोसा' },
    description: {
      en: 'Set of two soft, thick, and fluffy oil-free dosas served with creamy coconut chutney and tangy sambar.',
      hi: 'बिना तेल के बनाए गए दो रुई जैसे नरम, मोटे और स्पंजी डोसे, नारियल चटनी और स्वादिष्ट गरम सांबर के साथ।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'onion-uttapam',
    category: 'south-indian',
    name: { en: 'Onion Uttapam', hi: 'अनियन उत्तपम' },
    description: {
      en: 'Thick, savory pancake topped with lots of finely chopped onions, green chillies, and fresh coriander, cooked to a golden brown.',
      hi: 'मोटा नमकीन पैनकेक जिसके ऊपर ढेर सारी बारीक कटी प्याज, हरी मिर्च और हरी धनिया छिड़ककर सुनहरा होने तक सेंका गया है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'tomato-uttapam',
    category: 'south-indian',
    name: { en: 'Tomato Uttapam', hi: 'टोमैटो उत्तपम' },
    description: {
      en: 'Fluffy rice-lentil pancake topped with juicy ripe tomatoes and spices, offering a tangy and savory breakfast option.',
      hi: 'चावल-दाल के घोल से बना मोटा चिल्ला, जिसके ऊपर रसीले पके हुए टमाटर और हरी मिर्च की टॉपिंग दी गई है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'sambhar-wada',
    category: 'south-indian',
    name: { en: 'Sambhar Wada', hi: 'सांबर वड़ा' },
    description: {
      en: 'Deep-fried crispy lentil donuts soaked in piping hot, vegetable-rich sambar, garnished with freshly grated coconut.',
      hi: 'उड़द दाल से बने खस्ता वड़ों को गर्मागर्म सब्जी वाले सांबर में डुबोकर परोसा जाता है। ऊपर से धनिया की सजावट।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'podi-masala-dosa',
    category: 'south-indian',
    name: { en: 'Podi Masala Dosa', hi: 'पोडी मसाला डोसा' },
    description: {
      en: 'Crispy Dosa coated with spicy gunpowder (podi) and filled with seasoned potato mash.',
      hi: 'दक्खिनी तीखे गनपाउडर (पोडी मसाला) और मक्खन से सना हुआ मसाला डोसा, जिसमें उबले आलू का भरावन है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== CHINESE - RICE (6 items) ====================
  {
    id: 'fried-rice',
    category: 'chinese',
    name: { en: 'Veg Fried Rice', hi: 'वेज फ्राइड राइस' },
    description: {
      en: 'Wok-tossed basmati rice with finely chopped carrots, beans, cabbage, and spring onions in light soy sauce.',
      hi: 'कढ़ाई में तेज आंच पर टॉस किए गए बासमती चावल, जिसमें बारीक कटी गाजर, बीन्स, पत्तागोभी और सोया सॉस का मिश्रण है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'manchurian-rice',
    category: 'chinese',
    name: { en: 'Manchurian Fried Rice', hi: 'मंचूरियन राइस' },
    description: {
      en: 'A combination of hot fried rice and vegetable Manchurian balls simmered in a rich garlic-soy gravy.',
      hi: 'गरमा-गरम फ्राइड राइस और अदरक-लहसुन की सोया ग्रेवी में पकी वेज मंचूरियन बॉल्स का एक बेहतरीन कॉम्बो।'
    },
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'schezwan-rice',
    category: 'chinese',
    name: { en: 'Schezwan Fried Rice', hi: 'शेजवान राइस' },
    description: {
      en: 'Spicy stir-fried rice tossed with colorful veggies in a fiery house-made Schezwan pepper sauce.',
      hi: 'घर पर बनी तीखी शेजवान मिर्च सॉस में शिमला मिर्च, प्याज और चावल को तेज आंच पर भूनकर तैयार तीखा राइस।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'triple-rice',
    category: 'chinese',
    name: { en: 'Schezwan Triple Rice', hi: 'ट्रिपल राइस' },
    description: {
      en: 'A hearty meal of Schezwan rice, soft noodles, and crispy fried noodles served with a hot Manchurian gravy.',
      hi: 'शेजवान राइस, नूडल्स और ऊपर से कुरकुरे फ्राइड नूडल्स का ट्रिपल कॉम्बो, जिसे तीखी मंचूरियन ग्रेवी के साथ परोसा जाता है।'
    },
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mushroom-rice',
    category: 'chinese',
    name: { en: 'Mushroom Fried Rice', hi: 'मशरूम फ्राइड राइस' },
    description: {
      en: 'Fragrant basmati rice wok-tossed with fresh sliced button mushrooms, garlic, and scallions.',
      hi: 'ताजे बटन मशरूम के स्लाइस, कुटी हुई लहसुन और हरी प्याज के पत्तों के साथ भुना हुआ खुशबूदार बासमती राइस।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'paneer-rice',
    category: 'chinese',
    name: { en: 'Paneer Fried Rice', hi: 'पनीर फ्राइड राइस' },
    description: {
      en: 'Delicious stir-fried rice loaded with golden-fried cottage cheese cubes and fresh vegetables.',
      hi: 'सुनहरे तले हुए पनीर के टुकड़ों और ताजी हरी सब्जियों से भरपूर एक स्वादिष्ट और पौष्टिक फ्राइड राइस।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== CHINESE - NOODLES (4 items) ====================
  {
    id: 'hakka-noodles',
    category: 'chinese',
    name: { en: 'Veg Hakka Noodles', hi: 'हक्का नूडल्स' },
    description: {
      en: 'Perfectly boiled thin noodles stir-fried with julienned vegetables, white pepper, and light soy sauce.',
      hi: 'पतले लंबे नूडल्स को लंबी कटी गाजर, शिमला मिर्च और पत्तागोभी के साथ हल्के मसालों में भुना गया क्लासिक चाइनीज।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'schezwan-noodles',
    category: 'chinese',
    name: { en: 'Schezwan Noodles', hi: 'शेजवान नूडल्स' },
    description: {
      en: 'Fiery and garlic-rich noodles tossed with crunchy vegetables in hot Schezwan paste.',
      hi: 'लहसुन और सूखी लाल मिर्च से बनी तीखी शेजवान चटनी में भुने हुए नूडल्स, जो शिमला मिर्च और प्याज से लदे हैं।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'manchurian-noodles',
    category: 'chinese',
    name: { en: 'Manchurian Noodles', hi: 'मंचूरियन नूडल्स' },
    description: {
      en: 'Soft Hakka noodles served with delectable stir-fried vegetable Manchurian gravy poured over them.',
      hi: 'मुलायम हक्का नूडल्स के ऊपर गाढ़ी, स्वादिष्ट वेज मंचूरियन ग्रेवी डालकर गरमा-गरम परोसा जाने वाला व्यंजन।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'american-chopsuey',
    category: 'chinese',
    name: { en: 'American Chopsuey', hi: 'अमेरिकन चॉपसूई' },
    description: {
      en: 'Crispy fried noodles topped with a sweet and sour vegetable glaze and garnished with spring onions.',
      hi: 'सुनहरे कुरकुरे नूडल्स का आधार, जिस पर खट्टी-मीठी सब्जियों वाली गाढ़ी सॉस डाली जाती है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== CHINESE - SOUPS (2 items) ====================
  {
    id: 'manchow-soup',
    category: 'chinese',
    name: { en: 'Veg Manchow Soup', hi: 'मंचो सूप' },
    description: {
      en: 'Dark, spicy soy-based soup loaded with minced veggies, ginger, garlic, and topped with crunchy fried noodles.',
      hi: 'अदरक, लहसुन और हरी मिर्च के तीखेपन से भरपूर गाढ़ा डार्क सूप, जिसे कुरकुरे फ्राइड नूडल्स के साथ परोसा जाता है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'hot-sour-soup',
    category: 'chinese',
    name: { en: 'Hot & Sour Soup', hi: 'हॉट एंड सॉर सूप' },
    description: {
      en: 'A hot and vinegar-sour soup packed with sliced mushrooms, bamboo shoots, and green vegetables.',
      hi: 'सफेद सिरके और काली मिर्च के तालमेल से बना एक खट्टा-तीखा सूप, जिसमें मशरूम और कटी सब्जियां उबाली गई हैं।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== CHINESE - MAIN COURSE (7 items) ====================
  {
    id: 'manchurian-dry-gravy',
    category: 'chinese',
    name: { en: 'Veg Manchurian (Dry/Gravy)', hi: 'मंचूरियन (ड्राई / ग्रेवी)' },
    description: {
      en: 'Golden-fried vegetable dumplings tossed in an aromatic soy-chilli and garlic sauce (Available in Dry or Gravy).',
      hi: 'पत्तागोभी और गाजर से बनी फ्राइड बॉल्स को लहसुन, अदरक और सोया सॉस की ग्रेवी या लटपटे सूखे मसाले में लपेटा गया।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'paneer-chilli',
    category: 'chinese',
    name: { en: 'Paneer Chilli', hi: 'पनीर चिल्ली' },
    description: {
      en: 'Stir-fried cottage cheese cubes with bell peppers, onions, and green chillies in a glossy dark soy sauce.',
      hi: 'पनीर के टुकड़ों को चौकोर कटी शिमला मिर्च, प्याज और तीखी हरी मिर्च के साथ सोया सॉस में भुना गया चटपटा स्टार्टर।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'mushroom-chilli',
    category: 'chinese',
    name: { en: 'Mushroom Chilli', hi: 'मशरूम चिल्ली' },
    description: {
      en: 'Fresh button mushrooms fried crisp and tossed with onion, capsicum, and oriental sauces.',
      hi: 'कुरकुरे तले हुए मशरूम को लहसुन, हरी प्याज और तीखी लाल मिर्च सॉस में टॉस करके बनाया गया चटपटा स्टार्टर।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'channa-chilli',
    category: 'chinese',
    name: { en: 'Chana Chilli', hi: 'चना चिल्ली' },
    description: {
      en: 'Crispy deep-fried kabuli chana tossed with garlic, green chillies, and dry Chinese spices.',
      hi: 'कुरकुरे तले हुए काबुली चने को लहसुन, शिमला मिर्च और मसालेदार सोया सॉस के साथ टॉस करके बनाया गया अनोखा स्टार्टर।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veg-crispy',
    category: 'chinese',
    name: { en: 'Veg Crispy', hi: 'वेज क्रिस्पी' },
    description: {
      en: 'Assorted seasonal vegetables batter-fried to absolute crunch, tossed in a sweet-spicy chili glaze.',
      hi: 'विभिन्न मौसमी सब्जियों को बेसन-कॉर्नफ्लोर के घोल में अति-कुरकुरा तलकर, मीठी और तीखी सॉस में मिलाया गया।'
    },
    isBestSeller: true,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'corn-crispy',
    category: 'chinese',
    name: { en: 'Corn Crispy', hi: 'कॉर्न क्रिस्पी' },
    description: {
      en: 'Sweet corn kernels coated in starch, fried crispy, and seasoned with pepper, salt, and spring onions.',
      hi: 'मीठे भुट्टे के दानों को कुरकुरा तलकर, काली मिर्च, प्याज और चाट मसाले के साथ टॉस किया गया लाजवाब स्नैक।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veg-lollipop',
    category: 'chinese',
    name: { en: 'Veg Lollipop', hi: 'वेज लॉलीपॉप' },
    description: {
      en: 'Crispy spiced vegetable drumsticks served with a side of fiery garlic-chilli schezwan dip.',
      hi: 'सब्जियों के मसालेदार मिश्रण से तैयार लॉलीपॉप की तरह तले हुए कबाब, तीखी शेजवान चटनी के साथ।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== CHINESE - SNACKS (3 items) ====================
  {
    id: 'hara-bhara-kabab',
    category: 'chinese',
    name: { en: 'Hara Bhara Kabab', hi: 'हरा भरा कबाब' },
    description: {
      en: 'Healthy pan-fried patties made of spinach, green peas, and potatoes, spiced with aromatic herbs.',
      hi: 'पालक, उबले मटर और आलू के मिश्रण से बने तवे पर सिंके हरे कबाब, जो काजू के एक टुकड़े से सजे होते हैं।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'veg-cutlet',
    category: 'chinese',
    name: { en: 'Veg Cutlet', hi: 'वेज कटलेट' },
    description: {
      en: 'Crispy breaded patties filled with mixed mashed vegetables and shallow-fried till dark golden.',
      hi: 'मिश्रित सब्जियों को मैश करके ब्रेडक्रम्ब्स में लपेटकर कुरकुरा तला गया कटलेट, सॉस के साथ परोसा गया।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'corn-kabab',
    category: 'chinese',
    name: { en: 'Corn Kabab', hi: 'कॉर्न कबाब' },
    description: {
      en: 'Golden pan-fried tikkis made of sweet corn, potatoes, cheese, and medium Indian spices.',
      hi: 'स्वीट कॉर्न, आलू और हल्के मसालों से बने कबाब जो अंदर से नर्म और बाहर से बेहद कुरकुरे होते हैं।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== PAV BHAJI (2 items) ====================
  {
    id: 'pav-bhaji',
    category: 'pav-bhaji',
    name: { en: 'Classic Pav Bhaji', hi: 'क्लासिक पाव भाजी' },
    description: {
      en: 'A spiced blend of mashed mixed vegetables cooked on a flat tawa with butter, served with soft toasted pav.',
      hi: 'तवे पर मक्खन के साथ पकाई गई मसालेदार मैश की हुई सब्जियों की भाजी, जिसे सेंके हुए मुलायम पाव के साथ परोसा जाता है।'
    },
    isBestSeller: false,
    image: 'assets/images/pav_bhaji.png'
  },
  {
    id: 'butter-pav-bhaji',
    category: 'pav-bhaji',
    name: { en: 'Special Butter Pav Bhaji', hi: 'बटर पाव भाजी' },
    description: {
      en: 'Our signature pav bhaji loaded with extra Amul butter in the bhaji and served with heavily butter-toasted pav.',
      hi: 'अमूल बटर की प्रचुर मात्रा से बनी गाढ़ी मखमली भाजी, जिसे मक्खन में डूबे हुए गरमा-गरम पाव और नींबू-प्याज के साथ परोसा जाता है।'
    },
    isBestSeller: true,
    image: 'assets/images/pav_bhaji.png'
  },

  // ==================== PULAV (2 items) ====================
  {
    id: 'veg-pulav',
    category: 'pulav',
    name: { en: 'Veg Tawa Pulav', hi: 'वेज पुलाव' },
    description: {
      en: 'Spicy street-style rice cooked on the pav bhaji tawa with chopped veggies, butter, and pav bhaji masala.',
      hi: 'पाव भाजी वाले बड़े तवे पर मक्खन, सब्जियों और खास पाव भाजी मसाले के साथ बनाया गया तीखा मुंबईया पुलाव।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'paneer-pulav',
    category: 'pulav',
    name: { en: 'Paneer Tawa Pulav', hi: 'पनीर पुलाव' },
    description: {
      en: 'Tawa pulav enriched with butter-fried paneer cubes and garnished with coriander and fresh lemon.',
      hi: 'तवा पुलाव का शाही रूप, जिसमें मक्खन में तले हुए पनीर के नरम टुकड़े, हरा धनिया और नींबू का रस मिला होता है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== BREAKFAST (4 items) ====================
  {
    id: 'poha',
    category: 'breakfast',
    name: { en: 'Indori Poha', hi: 'पोहा' },
    description: {
      en: 'Light and fluffy flattened rice steamed with turmeric, mustard seeds, onions, topped with crunchy sev and pomegranate.',
      hi: 'हल्दी, राई और प्याज के साथ भाप में पके हुए चपटे चावल, जिन पर इंदौरी सेव, कटी हुई प्याज और अनार के दाने सजे हैं।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chana-poha',
    category: 'breakfast',
    name: { en: 'Nagpuri Chana Poha', hi: 'चना पोहा' },
    description: {
      en: 'Traditional Indori poha served with a side of black chickpeas (chana) spicy tarri gravy for a flavorful punch.',
      hi: 'गरमा-गरम पोहे के साथ काले चने की तीखी तरी (रसा), नागपुरी स्टाइल में सुबह का एक लाजवाब मसालेदार नाश्ता।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'matki-poha',
    category: 'breakfast',
    name: { en: 'Matki Poha', hi: 'मटकी पोहा' },
    description: {
      en: 'Fluffy poha topped with healthy sprouted moth beans (matki) Usal, lime juice, and chopped onions.',
      hi: 'पोहे के ऊपर सेहतमंद मसालेदार अंकुरित मटकी का उसल, नींबू का रस और तीखी धनिया-पुदीना चटनी।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 'chana-samosa',
    category: 'breakfast',
    name: { en: 'Chana Samosa Plate', hi: 'चना समोसा' },
    description: {
      en: 'Two hot samosas served with black chickpeas tarri curry, raw onions, and tangy lemon slice.',
      hi: 'सुबह के नाश्ते में दो गरमा-गरम आलू समोसे, जिन्हें काले चने की तरी, कटी हुई प्याज और नींबू के स्लाइस के साथ परोसा गया है।'
    },
    isBestSeller: false,
    image: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&w=600&q=80'
  },

  // ==================== TEA & SNACKS (2 items) ====================
  {
    id: 'chai',
    category: 'tea-snacks',
    name: { en: 'Special Masala Chai', hi: 'चाय' },
    description: {
      en: 'Strong, aromatic milk tea brewed with fresh ginger, cardamom, cloves, and premium tea leaves.',
      hi: 'अदरक, हरी इलायची और दालचीनी के ताजे मसालों के साथ पकी गरमा-गरम कड़क मसाला चाय, जो ताजगी से भर दे।'
    },
    isBestSeller: true,
    image: 'assets/images/chai_bun_maska.png'
  },
  {
    id: 'bun-maska',
    category: 'tea-snacks',
    name: { en: 'Bun Maska', hi: 'बन मस्का' },
    description: {
      en: 'Soft sweet bun sliced and layered generously with fresh white homemade butter. Best enjoyed dipped in hot chai.',
      hi: 'ताजे मीठे बन के बीचों-बीच मक्खन की मोटी परत। चाय के साथ खाया जाने वाला मुंबई का एक क्लासिक और बेहद लोकप्रिय स्नैक।'
    },
    isBestSeller: true,
    image: 'assets/images/chai_bun_maska.png'
  }
];
