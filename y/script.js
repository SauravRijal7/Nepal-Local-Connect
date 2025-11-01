// ===================================
// NEPAL LOCAL CONNECT - MAIN SCRIPT
// ===================================

'use strict';

// ===================================
// EXPERIENCE POPUP MODALS
// ===================================

const experienceData = {
    guides: {
        title: "Local Guides",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>`,
        description: "Connect with experienced local guides who know Nepal's hidden treasures and cultural stories that guidebooks miss.",
        features: [
            "Licensed and certified guides",
            "Fluent in English, Nepali, and regional languages",
            "Expert knowledge of trekking routes and cultural sites",
            "Personalized itineraries based on your interests",
            "Deep understanding of local customs and traditions"
        ],
        services: [
            { name: "Kathmandu Valley Tours", desc: "UNESCO World Heritage Sites exploration" },
            { name: "Trekking Guides", desc: "Everest, Annapurna, Langtang routes" },
            { name: "Cultural Tours", desc: "Temple visits, local festivals, traditional crafts" },
            { name: "Adventure Support", desc: "Mountain climbing, paragliding assistance" }
        ],
        stats: { guides: "500+", languages: "15+", regions: "75+" }
    },
    homestays: {
        title: "Homestays",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
            <polyline points="9 22 9 12 15 12 15 22"/>
        </svg>`,
        description: "Experience authentic Nepalese hospitality by staying with local families in traditional homes across Nepal's diverse regions.",
        features: [
            "Clean, comfortable traditional accommodations",
            "Home-cooked authentic Nepalese meals (Dal Bhat, Momos)",
            "Cultural immersion and language practice",
            "Family-style warm hospitality",
            "Safe and verified host families"
        ],
        services: [
            { name: "Village Homestays", desc: "Rural mountain village experiences" },
            { name: "Kathmandu Homestays", desc: "City life with local families" },
            { name: "Farm Stays", desc: "Agricultural life in terraced fields" },
            { name: "Cultural Homestays", desc: "Newari, Tamang, Sherpa communities" }
        ],
        stats: { homestays: "200+", villages: "50+", families: "300+" }
    },
    adventures: {
        title: "Adventures",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>`,
        description: "Embark on thrilling adventures led by experienced local operators who prioritize safety and environmental responsibility.",
        features: [
            "Professional, safety-certified operators",
            "High-quality equipment and gear",
            "Small group sizes for personalized experience",
            "Eco-friendly and sustainable practices",
            "Emergency evacuation and insurance support"
        ],
        services: [
            { name: "Trekking Expeditions", desc: "Everest Base Camp, Annapurna Circuit, Manaslu" },
            { name: "White Water Rafting", desc: "Trishuli, Bhote Koshi, Sun Koshi rivers" },
            { name: "Paragliding", desc: "Pokhara lakeside flights with mountain views" },
            { name: "Mountain Climbing", desc: "Peak climbing: Island Peak, Mera Peak, Lobuche" }
        ],
        stats: { routes: "100+", operators: "75+", adventures: "1000+" }
    },
    culture: {
        title: "Cultural Activities",
        icon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>`,
        description: "Immerse yourself in Nepal's rich cultural heritage through traditional festivals, crafts, music, and spiritual experiences.",
        features: [
            "Authentic cultural workshops and classes",
            "Participation in local festivals and ceremonies",
            "Traditional craft learning experiences",
            "Buddhist meditation and yoga sessions",
            "Local music and dance performances"
        ],
        services: [
            { name: "Cooking Classes", desc: "Learn to prepare Dal Bhat, Momos, Sel Roti" },
            { name: "Craft Workshops", desc: "Pottery, Thangka painting, woodcarving" },
            { name: "Temple Ceremonies", desc: "Morning pujas, evening aarti participation" },
            { name: "Festival Experiences", desc: "Dashain, Tihar, Holi celebrations" }
        ],
        stats: { activities: "150+", festivals: "30+", workshops: "50+" }
    }
};

const createPopupHTML = (data) => {
    return `
        <div class="popup-overlay" onclick="closePopup(event)">
            <div class="popup-content" onclick="event.stopPropagation()">
                <button class="popup-close" onclick="closePopup(event)" aria-label="Close">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                
                <div class="popup-header">
                    <div class="popup-icon">${data.icon}</div>
                    <h2 class="popup-title">${data.title}</h2>
                </div>
                
                <p class="popup-description">${data.description}</p>
                
                <div class="popup-section">
                    <h3 class="popup-section-title">What We Offer</h3>
                    <ul class="popup-features">
                        ${data.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="popup-section">
                    <h3 class="popup-section-title">Popular Services</h3>
                    <div class="popup-services">
                        ${data.services.map(service => `
                            <div class="popup-service-card">
                                <h4>${service.name}</h4>
                                <p>${service.desc}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div class="popup-stats">
                    ${Object.entries(data.stats).map(([key, value]) => `
                        <div class="popup-stat">
                            <span class="popup-stat-number">${value}</span>
                            <span class="popup-stat-label">${key.charAt(0).toUpperCase() + key.slice(1)}</span>
                        </div>
                    `).join('')}
                </div>
                
                <div class="popup-actions">
                    <button class="btn btn-primary btn-large" onclick="closePopup(event)">Book Now</button>
                    <button class="btn btn-outline btn-large" onclick="closePopup(event)">Contact Us</button>
                </div>
            </div>
        </div>
    `;
};

const openPopup = (type) => {
    const data = experienceData[type];
    if (!data) return;
    
    const popup = document.createElement('div');
    popup.className = 'popup-modal';
    popup.innerHTML = createPopupHTML(data);
    document.body.appendChild(popup);
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden';
    
    // Animate in
    setTimeout(() => popup.classList.add('active'), 10);
};

const closePopup = (event) => {
    event.preventDefault();
    event.stopPropagation();
    
    const popup = document.querySelector('.popup-modal');
    if (popup) {
        popup.classList.remove('active');
        setTimeout(() => {
            popup.remove();
            document.body.style.overflow = '';
        }, 300);
    }
};

// Add popup styles
const popupStyles = document.createElement('style');
popupStyles.textContent = `
    .popup-modal {
        position: fixed;
        inset: 0;
        z-index: 99999;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .popup-modal.active {
        opacity: 1;
    }
    
    .popup-overlay {
        position: absolute;
        inset: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1rem;
        overflow-y: auto;
    }
    
    .popup-content {
        background: white;
        border-radius: 24px;
        max-width: 800px;
        width: 100%;
        max-height: 90vh;
        overflow-y: auto;
        padding: 2.5rem;
        position: relative;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        transform: scale(0.9);
        transition: transform 0.3s ease;
    }
    
    .popup-modal.active .popup-content {
        transform: scale(1);
    }
    
    .popup-close {
        position: absolute;
        top: 1.5rem;
        right: 1.5rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: none;
        background: var(--bg-secondary);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: var(--transition);
        z-index: 10;
    }
    
    .popup-close:hover {
        background: var(--primary);
        transform: rotate(90deg);
    }
    
    .popup-close svg {
        width: 20px;
        height: 20px;
        color: var(--text-primary);
    }
    
    .popup-close:hover svg {
        color: white;
    }
    
    .popup-header {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 1.5rem;
    }
    
    .popup-icon {
        width: 60px;
        height: 60px;
        background: var(--gradient-accent);
        border-radius: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
    }
    
    .popup-icon svg {
        width: 32px;
        height: 32px;
        color: white;
    }
    
    .popup-title {
        font-size: 2rem;
        font-weight: 800;
        color: var(--text-primary);
        margin: 0;
    }
    
    .popup-description {
        font-size: 1.1rem;
        color: var(--text-secondary);
        line-height: 1.7;
        margin-bottom: 2rem;
    }
    
    .popup-section {
        margin-bottom: 2rem;
    }
    
    .popup-section-title {
        font-size: 1.3rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 1rem;
    }
    
    .popup-features {
        list-style: none;
        display: grid;
        gap: 0.75rem;
    }
    
    .popup-features li {
        padding-left: 2rem;
        position: relative;
        color: var(--text-secondary);
        line-height: 1.6;
    }
    
    .popup-features li::before {
        content: "✓";
        position: absolute;
        left: 0;
        color: var(--primary);
        font-weight: bold;
        font-size: 1.2rem;
    }
    
    .popup-services {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
    }
    
    .popup-service-card {
        padding: 1.25rem;
        background: var(--bg-secondary);
        border-radius: 12px;
        transition: var(--transition);
    }
    
    .popup-service-card:hover {
        background: white;
        box-shadow: var(--shadow-md);
        transform: translateY(-4px);
    }
    
    .popup-service-card h4 {
        font-size: 1.1rem;
        font-weight: 700;
        color: var(--text-primary);
        margin-bottom: 0.5rem;
    }
    
    .popup-service-card p {
        font-size: 0.95rem;
        color: var(--text-secondary);
        line-height: 1.5;
        margin: 0;
    }
    
    .popup-stats {
        display: flex;
        gap: 2rem;
        justify-content: center;
        padding: 1.5rem;
        background: var(--bg-secondary);
        border-radius: 16px;
        margin-bottom: 2rem;
    }
    
    .popup-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
    
    .popup-stat-number {
        font-size: 2rem;
        font-weight: 800;
        color: var(--primary);
    }
    
    .popup-stat-label {
        font-size: 0.9rem;
        color: var(--text-secondary);
        text-transform: capitalize;
    }
    
    .popup-actions {
        display: flex;
        gap: 1rem;
        flex-wrap: wrap;
    }
    
    .popup-actions .btn {
        flex: 1;
        min-width: 200px;
    }
    
    @media (max-width: 768px) {
        .popup-content {
            padding: 2rem 1.5rem;
            max-height: 95vh;
        }
        
        .popup-title {
            font-size: 1.5rem;
        }
        
        .popup-description {
            font-size: 1rem;
        }
        
        .popup-services {
            grid-template-columns: 1fr;
        }
        
        .popup-stats {
            flex-wrap: wrap;
            gap: 1rem;
        }
        
        .popup-stat {
            flex: 1 1 45%;
        }
        
        .popup-actions {
            flex-direction: column;
        }
        
        .popup-actions .btn {
            width: 100%;
        }
    }
    
    @media (max-width: 480px) {
        .popup-content {
            padding: 1.5rem 1rem;
        }
        
        .popup-close {
            top: 1rem;
            right: 1rem;
            width: 36px;
            height: 36px;
        }
        
        .popup-icon {
            width: 50px;
            height: 50px;
        }
        
        .popup-icon svg {
            width: 26px;
            height: 26px;
        }
    }
`;
document.head.appendChild(popupStyles);

// ===================================
// MOBILE NAVIGATION
// ===================================

const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const body = document.body;

// Toggle mobile menu
if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        const isActive = navMenu.classList.contains('active');
        
        if (isActive) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        } else {
            navMenu.classList.add('active');
            navToggle.classList.add('active');
            body.style.overflow = 'hidden';
        }
    });
}

// Close mobile menu when clicking nav links
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu && navToggle) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        }
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navToggle) {
        const isClickInsideNav = e.target.closest('.nav-container');
        const isMenuActive = navMenu.classList.contains('active');
        
        if (!isClickInsideNav && isMenuActive) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        }
    }
});

// Close menu on escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu && navToggle) {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            body.style.overflow = '';
        }
    }
});

// Close menu on window resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && navMenu && navToggle) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        body.style.overflow = '';
    }
});

// ===================================
// NAVBAR SCROLL EFFECT
// ===================================

const navbar = document.getElementById('navbar');
let lastScrollTop = 0;
let scrollThreshold = 100;

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add scrolled class when scrolled down
    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ===================================
// SMOOTH SCROLLING FOR ANCHOR LINKS
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        
        if (target) {
            e.preventDefault();
            
            const navHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            
            // Add stagger effect for grid items
            if (entry.target.classList.contains('experience-card') || 
                entry.target.classList.contains('value-item')) {
                const index = Array.from(entry.target.parentElement.children).indexOf(entry.target);
                entry.target.style.transitionDelay = `${index * 0.1}s`;
            }
            
            // Unobserve after animation
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for reveal animation
const revealElements = document.querySelectorAll('.experience-card, .value-item, .visual-card');
revealElements.forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// ===================================
// HERO STATS COUNTER ANIMATION
// ===================================

const animateCounter = (element, target, duration = 2000) => {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + '+';
        }
    }, 16);
};

// Animate stats when hero is in view
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                animateCounter(stat, target);
            });
            heroObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
}

// ===================================
// EXPERIENCE CARDS HOVER EFFECT
// ===================================

const experienceCards = document.querySelectorAll('.experience-card');

experienceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===================================
// PARALLAX EFFECT FOR HERO
// ===================================

const heroImage = document.querySelector('.hero-image');
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroHeight = document.querySelector('.hero').offsetHeight;
    
    if (scrolled < heroHeight) {
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.2}px)`;
            heroContent.style.opacity = 1 - (scrolled / heroHeight);
        }
    }
});

// ===================================
// ACTIVE NAVIGATION HIGHLIGHT
// ===================================

const sections = document.querySelectorAll('section[id]');

const highlightNavigation = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
};

window.addEventListener('scroll', highlightNavigation);

// ===================================
// BUTTON RIPPLE EFFECT
// ===================================

const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ===================================
// LAZY LOADING IMAGES
// ===================================

const images = document.querySelectorAll('img[src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
        }
    });
}, { rootMargin: '50px' });

images.forEach(img => {
    imageObserver.observe(img);
});

// ===================================
// SCROLL TO TOP BUTTON
// ===================================

const createScrollTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 19V5M5 12l7-7 7 7"/>
        </svg>
    `;
    button.className = 'scroll-top-btn';
    button.setAttribute('aria-label', 'Scroll to top');
    document.body.appendChild(button);
    
    // Show/hide button
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    // Scroll to top on click
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
};

// Add scroll to top button styles
const scrollTopStyle = document.createElement('style');
scrollTopStyle.textContent = `
    .scroll-top-btn {
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary);
        color: white;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: var(--shadow-lg);
        opacity: 0;
        visibility: hidden;
        transform: translateY(20px);
        transition: all 0.3s ease;
        z-index: 999;
    }
    
    .scroll-top-btn.visible {
        opacity: 1;
        visibility: visible;
        transform: translateY(0);
    }
    
    .scroll-top-btn:hover {
        background: var(--primary-dark);
        transform: translateY(-4px);
        box-shadow: var(--shadow-xl);
    }
    
    .scroll-top-btn svg {
        width: 24px;
        height: 24px;
    }
    
    @media (max-width: 768px) {
        .scroll-top-btn {
            bottom: 1rem;
            right: 1rem;
        }
    }
`;
document.head.appendChild(scrollTopStyle);

createScrollTopButton();

// ===================================
// PERFORMANCE OPTIMIZATION
// ===================================

// Debounce function for scroll events
const debounce = (func, wait = 10) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Apply debounce to scroll-heavy functions
window.addEventListener('scroll', debounce(() => {
    highlightNavigation();
}, 10));

// ===================================
// CONSOLE LOG
// ===================================

console.log('%c🏔️ Nepal Local Connect', 'font-size: 20px; font-weight: bold; color: #E74C3C;');
console.log('%cWebsite loaded successfully!', 'font-size: 14px; color: #2C3E50;');
console.log('%cExplore authentic Nepal experiences at nepallocalconnect.com', 'font-size: 12px; color: #7F8C8D;');

// ===================================
// INITIALIZATION
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Initialize any additional features here
    console.log('All features initialized');
});