// Bajrang Chaat House - Core UI & Logic Controller

const TRANSLATIONS = {
  en: {
    nav_menu: 'Menu',
    nav_contact: 'Contact',
    nav_location: 'Location',
    welcome: 'Welcome to Bajrang Chaat House',
    tagline: 'The Taste of Real Indian Street Food',
    explore_btn: 'Explore Menu',
    hero_badge: '🇮🇳 Traditional & Authentic 🇮🇳',
    hero_sub: 'Authentic Chaat • South Indian • Chinese • Pav Bhaji • Pulav • Breakfast • Snacks',
    menu_title: 'Our Culinary Menu',
    best_seller: '⭐ BEST SELLER',
    contact_sub: 'Get In Touch',
    contact_title: 'Visit Our House',
    contact_desc: 'Drop by to experience the explosion of authentic street food flavors. Feel free to call us or locate us directly.',
    label_address: 'Address',
    label_phone: 'Phone Numbers',
    label_hours: 'Opening Hours',
    hours_val: 'Monday - Sunday: 9:00 AM - 10:30 PM',
    btn_copy_address: 'Copy Address',
    btn_open_maps: 'Open in Google Maps',
    address_val: 'Near JIO BP Petrol Pump,\nAmgaon Road, Fulchur Naka,\nGondia - 441601,\nMaharashtra, India',
    made_with: 'Made with ❤️ for Bajrang Chaat House',
    copyright: '© 2026 Bajrang Chaat House. All Rights Reserved.',
    toast_copy_success: 'Address copied to clipboard!',
    lang_modal_title: 'Select Language',
    lang_modal_sub: 'Please choose your preferred language to proceed'
  },
  hi: {
    nav_menu: 'मेन्यू',
    nav_contact: 'संपर्क',
    nav_location: 'लोकेशन',
    welcome: 'बजरंग चाट हाउस में आपका स्वागत है',
    tagline: 'असली भारतीय स्ट्रीट फूड का स्वाद',
    explore_btn: 'मेन्यू देखें',
    hero_badge: '🇮🇳 पारंपरिक एवं असली स्वाद 🇮🇳',
    hero_sub: 'स्वादिष्ट चाट • साउथ इंडियन • चाइनीज • पाव भाजी • पुलाव • नाश्ता • स्नैक्स',
    menu_title: 'हमारा विशेष मेन्यू',
    best_seller: '⭐ बेस्ट सेलर',
    contact_sub: 'संपर्क करें',
    contact_title: 'दुकान पर पधारें',
    contact_desc: 'असली स्ट्रीट फूड के चटपटे स्वादों का अनुभव करने के लिए जरूर आएं। आप हमें कॉल कर सकते हैं या सीधे मानचित्र पर ढूंढ सकते हैं।',
    label_address: 'पता',
    label_phone: 'फोन नंबर',
    label_hours: 'खुलने का समय',
    hours_val: 'सोमवार - रविवार: सुबह 9:00 बजे - रात 10:30 बजे',
    btn_copy_address: 'पता कॉपी करें',
    btn_open_maps: 'गूगल मैप्स पर खोलें',
    address_val: 'जियो बीपी पेट्रोल पंप के पास,\nआमगांव रोड, फुलचुर नाका,\nगोंदिया - 441601,\nमहाराष्ट्र, भारत',
    made_with: 'बजरंग चाट हाउस के लिए ❤️ से निर्मित',
    copyright: '© 2026 बजरंग चाट हाउस। सर्वाधिकार सुरक्षित।',
    toast_copy_success: 'पता क्लिपबोर्ड पर कॉपी किया गया!',
    lang_modal_title: 'भाषा चुनें',
    lang_modal_sub: 'कृपया आगे बढ़ने के लिए अपनी पसंदीदा भाषा का चयन करें'
  }
};

let currentLang = localStorage.getItem('bajrang_lang') || null;
let currentCategory = 'chaat';

// Document Elements
const loadingScreen = document.getElementById('loading-screen');
const langSelector = document.getElementById('language-selector');
const appContainer = document.getElementById('app-container');
const menuGrid = document.getElementById('menu-grid');
const categoryList = document.getElementById('category-list');
const mobileToggle = document.getElementById('mobile-toggle');
const navLinksContainer = document.getElementById('nav-links-container');
const scrollProgressBar = document.getElementById('scroll-progress');
const headerContainer = document.querySelector('.header-container');
const backToTopBtn = document.getElementById('back-to-top');

// Active state values
let lastScrollTop = 0;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  initSpiceParticles();
  
  if (currentLang) {
    applyLanguage(currentLang);
    // Directly hide loading screen and show app container
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.visibility = 'hidden';
      appContainer.style.display = 'block';
      renderCategories();
      renderMenu();
    }, 1200);
  } else {
    // No language selected, trigger language selection overlay
    setTimeout(() => {
      loadingScreen.style.opacity = '0';
      loadingScreen.style.visibility = 'hidden';
      langSelector.classList.add('active');
    }, 1200);
  }

  // Setup Event Listeners
  setupEventListeners();
});

// Setup Language Button actions inside the Modal and Header
function setupEventListeners() {
  // Modal Buttons
  document.getElementById('btn-lang-en').addEventListener('click', () => selectLanguage('en'));
  document.getElementById('btn-lang-hi').addEventListener('click', () => selectLanguage('hi'));

  // Header Language Switcher button
  document.getElementById('header-lang-toggle').addEventListener('click', () => {
    const targetLang = currentLang === 'en' ? 'hi' : 'en';
    selectLanguage(targetLang);
  });

  // Mobile Hamburger menu toggle
  mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navLinksContainer.classList.toggle('active');
  });

  // Close mobile drawer on link selection
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      mobileToggle.classList.remove('active');
      navLinksContainer.classList.remove('active');
    });
  });

  // Copy Address to clipboard action
  document.getElementById('btn-copy-address').addEventListener('click', copyAddressToClipboard);

  // Scroll Actions
  window.addEventListener('scroll', handleScroll);

  // Back to top action
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Ripple Click effect binding on interactive components
  document.body.addEventListener('click', triggerRippleEffect);
}

// Handle Language Selection
function selectLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('bajrang_lang', lang);
  
  // Close the overlay modal
  langSelector.classList.remove('active');
  appContainer.style.display = 'block';
  
  applyLanguage(lang);
  renderCategories();
  renderMenu();
}

// Apply Translated values across static data elements
function applyLanguage(lang) {
  document.documentElement.setAttribute('lang', lang);
  
  // Update static text elements using data-translate attribute
  document.querySelectorAll('[data-translate]').forEach(el => {
    const key = el.getAttribute('data-translate');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      // Handle HTML Line breaks if present in text
      if (TRANSLATIONS[lang][key].includes('\n')) {
        el.innerHTML = TRANSLATIONS[lang][key].replace(/\n/g, '<br>');
      } else {
        el.textContent = TRANSLATIONS[lang][key];
      }
    }
  });

  // Toggle Header Lang switcher label
  const toggleBtn = document.getElementById('header-lang-toggle');
  if (lang === 'en') {
    toggleBtn.innerHTML = '🇮🇳 हिन्दी';
  } else {
    toggleBtn.innerHTML = '🇬🇧 English';
  }

  // Update Address block specifically
  const addrText = TRANSLATIONS[lang].address_val;
  document.getElementById('address-text').innerHTML = addrText.replace(/\n/g, '<br>');
}

// Render dynamic category horizontal scroll bar
function renderCategories() {
  categoryList.innerHTML = '';
  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `category-btn ${cat.id === currentCategory ? 'active' : ''}`;
    btn.dataset.category = cat.id;
    
    // Read localized category name
    const categoryName = cat.name[currentLang] || cat.name['en'];
    btn.innerHTML = `<span>${cat.icon}</span> ${categoryName}`;
    
    btn.addEventListener('click', () => {
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = cat.id;
      renderMenu();
      
      // Smooth scroll to category menu list
      const menuSection = document.getElementById('menu');
      const offset = 120; // sticky header + category bar compensation
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = menuSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
    
    categoryList.appendChild(btn);
  });
}

// Render dynamic menu items corresponding to selected categories
function renderMenu() {
  menuGrid.style.opacity = '0';
  
  setTimeout(() => {
    menuGrid.innerHTML = '';
    
    const filteredItems = MENU_ITEMS.filter(item => item.category === currentCategory);
    
    filteredItems.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      
      // Localized properties
      const itemName = item.name[currentLang] || item.name['en'];
      const itemDesc = item.description[currentLang] || item.description['en'];
      
      // Best Seller Badge
      const bsBadge = item.isBestSeller 
        ? `<div class="bestseller-badge">${TRANSLATIONS[currentLang].best_seller}</div>` 
        : '';
        
      card.innerHTML = `
        <div class="card-img-wrapper">
          ${bsBadge}
          <img class="card-img" src="${item.image}" alt="${itemName}" loading="lazy" />
        </div>
        <div class="card-content">
          <div class="card-header">
            <h3 class="item-name">${itemName}</h3>
          </div>
          <p class="card-description">${itemDesc}</p>
        </div>
      `;
      
      menuGrid.appendChild(card);
    });
    
    // Smooth fade back in
    menuGrid.style.transition = 'opacity 0.4s ease';
    menuGrid.style.opacity = '1';
  }, 150);
}

// Scroll Event Handler
function handleScroll() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  // 1. Scroll Progress Bar
  const pct = (scrollTop / docHeight) * 100;
  scrollProgressBar.style.width = `${pct}%`;
  
  // 2. Sticky Header elevation scroll class
  if (scrollTop > 50) {
    headerContainer.classList.add('scrolled');
  } else {
    headerContainer.classList.remove('scrolled');
  }
  
  // 3. Scroll Aware Header hide/show behaviour
  if (scrollTop > 150) {
    if (scrollTop > lastScrollTop) {
      headerContainer.classList.remove('scroll-up');
      headerContainer.classList.add('scroll-down');
    } else {
      headerContainer.classList.remove('scroll-down');
      headerContainer.classList.add('scroll-up');
    }
  } else {
    headerContainer.classList.remove('scroll-down');
    headerContainer.classList.remove('scroll-up');
  }
  lastScrollTop = scrollTop;
  
  // 4. Back to top visibility toggle
  if (scrollTop > 400) {
    backToTopBtn.classList.add('visible');
  } else {
    backToTopBtn.classList.remove('visible');
  }

  // 5. Category section sticky shadow shift
  const categorySection = document.querySelector('.category-section');
  const catOffset = categorySection.getBoundingClientRect().top;
  if (catOffset <= 70) {
    categorySection.style.boxShadow = 'var(--shadow-md)';
  } else {
    categorySection.style.boxShadow = 'none';
  }
}

// Copy address utility
function copyAddressToClipboard() {
  // Simple unformatted raw string representation of Gondia shop location
  const rawAddress = "Bajrang Chaat House, Near JIO BP Petrol Pump, Amgaon Road, Fulchur Naka, Gondia - 441601, Maharashtra, India";
  
  navigator.clipboard.writeText(rawAddress).then(() => {
    const toast = document.getElementById('toast');
    toast.textContent = TRANSLATIONS[currentLang].toast_copy_success;
    toast.classList.add('visible');
    
    setTimeout(() => {
      toast.classList.remove('visible');
    }, 2500);
  }).catch(err => {
    console.error('Could not copy address: ', err);
  });
}

// Visual Ripple Effect on clicks
function triggerRippleEffect(e) {
  // Check if click target supports click ripple
  const target = e.target.closest('.hero-btn, .category-btn, .lang-btn, .action-btn, .lang-toggle-btn, .floating-btn');
  if (!target) return;
  
  // Create ripple circle
  const circle = document.createElement('span');
  circle.className = 'ripple';
  
  const rect = target.getBoundingClientRect();
  const diameter = Math.max(rect.width, rect.height);
  const radius = diameter / 2;
  
  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${e.clientX - rect.left - radius}px`;
  circle.style.top = `${e.clientY - rect.top - radius}px`;
  
  // Clear any existing ripples inside target
  const oldRipple = target.querySelector('.ripple');
  if (oldRipple) {
    oldRipple.remove();
  }
  
  target.appendChild(circle);
}

// HTML5 Canvas particles system (floating spices)
function initSpiceParticles() {
  const canvas = document.getElementById('spice-particles');
  const ctx = canvas.getContext('2d');
  
  let particles = [];
  const particleColors = [
    'rgba(244, 197, 66, 0.25)',  // Turmeric Gold
    'rgba(255, 140, 66, 0.2)',   // Warm Chilli Orange
    'rgba(214, 40, 40, 0.12)',   // Red spice powder
    'rgba(76, 175, 80, 0.15)',   // Coriander Green leaf specs
  ];
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  // Spice particle specifications
  class SpiceParticle {
    constructor() {
      this.reset();
      // Scatter initially across full screen height
      this.y = Math.random() * canvas.height;
    }
    
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = canvas.height + 20;
      this.size = Math.random() * 6 + 2;
      this.speedY = -(Math.random() * 0.4 + 0.1);
      this.speedX = Math.random() * 0.3 - 0.15;
      this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      this.angle = Math.random() * Math.PI * 2;
      this.spin = Math.random() * 0.01 - 0.005;
      // Shape: 0: Circle (pepper/mustard), 1: Leaf spec (coriander), 2: Cumin seed shape
      this.shape = Math.floor(Math.random() * 3);
    }
    
    update() {
      this.y += this.speedY;
      this.x += this.speedX;
      this.angle += this.spin;
      
      // Floating wave offset
      this.x += Math.sin(this.y * 0.01) * 0.1;
      
      // Recycle particle if it floats off-screen
      if (this.y < -20 || this.x < -20 || this.x > canvas.width + 20) {
        this.reset();
      }
    }
    
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.angle);
      ctx.fillStyle = this.color;
      
      ctx.beginPath();
      if (this.shape === 0) {
        // Mustard seed / Pepper circle
        ctx.arc(0, 0, this.size, 0, Math.PI * 2);
      } else if (this.shape === 1) {
        // Flat leaf spec
        ctx.ellipse(0, 0, this.size * 1.5, this.size * 0.8, 0, 0, Math.PI * 2);
      } else {
        // Cumin seed shape
        ctx.moveTo(-this.size, 0);
        ctx.quadraticCurveTo(0, -this.size / 2, this.size, 0);
        ctx.quadraticCurveTo(0, this.size / 2, -this.size, 0);
      }
      ctx.fill();
      ctx.restore();
    }
  }
  
  // Set lower particle count for mobile to optimize performance
  const particleCount = window.innerWidth < 768 ? 15 : 40;
  for (let i = 0; i < particleCount; i++) {
    particles.push(new SpiceParticle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(animate);
  }
  
  animate();
}
