// MOBILE MENU
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('navMobile');
const closeMenu = document.getElementById('closeMenu');
const navMobileLinks = document.querySelectorAll('.nav-link-mobile');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMobile.classList.toggle('active');
    });
}

if (closeMenu) {
    closeMenu.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMobile.classList.remove('active');
    });
}

navMobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMobile.classList.remove('active');
    });
});

document.addEventListener('click', (e) => {
    if (navMobile && navMobile.classList.contains('active')) {
        if (!navMobile.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            navMobile.classList.remove('active');
        }
    }
});

// SCROLL TO SECTION
function scrollToSection(id) {
    if (id === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// HEADER ACTIVE NAV LINK
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// SCROLL ANIMATIONS - Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up').forEach(el => {
    observer.observe(el);
});

// FAQ FUNCTIONALITY
const faqItems = document.querySelectorAll('.faq-item');
const faqFilters = document.querySelectorAll('.faq-filter-btn');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

faqFilters.forEach(btn => {
    btn.addEventListener('click', () => {
        const category = btn.getAttribute('data-filter');
        
        faqFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        faqItems.forEach(item => {
            if (item.getAttribute('data-category') === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// READ MORE TOGGLE
const readMoreBtn = document.getElementById('readMoreBtn');
const readMoreContent = document.getElementById('readMoreContent');

if (readMoreBtn) {
    readMoreBtn.addEventListener('click', () => {
        readMoreContent.classList.toggle('active');
        readMoreBtn.textContent = readMoreContent.classList.contains('active') ? 'Read Less' : 'Read More';
    });
}

// CONTACT FORM
const formBtns = document.querySelectorAll('.form-btn');
const submitBtn = document.getElementById('submitBtn');
let selectedBoard = null;
let selectedMode = null;

const messages = {
    'cbse-classroom': 'Hi, I came from your website and would like to know more information about Class 12 CBSE Classroom batch.',
    'cbse-online': 'Hi, I came from your website and would like to know more information about Class 12 CBSE Online batch.',
    'cbse-hybrid': 'Hi, I came from your website and would like to know more information about Class 12 CBSE Hybrid batch.',
    'tnboard-classroom': 'Hi, I came from your website and would like to know more information about Class 12 TN State Board Classroom batch.',
    'tnboard-online': 'Hi, I came from your website and would like to know more information about Class 12 TN State Board Online batch.',
    'tnboard-hybrid': 'Hi, I came from your website and would like to know more information about Class 12 TN State Board Hybrid batch.'
};

formBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const selectType = btn.getAttribute('data-select');
        const value = btn.getAttribute('data-value');

        if (selectType === 'board') {
            selectedBoard = value;
            document.querySelectorAll('.form-btn[data-select="board"]').forEach(b => b.classList.remove('active'));
        } else if (selectType === 'mode') {
            selectedMode = value;
            document.querySelectorAll('.form-btn[data-select="mode"]').forEach(b => b.classList.remove('active'));
        }

        btn.classList.add('active');
        updateSubmitButton();
    });
});

function updateSubmitButton() {
    if (selectedBoard && selectedMode) {
        const key = `${selectedBoard}-${selectedMode}`;
        const message = messages[key];
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://wa.me/919787692116?text=${encodedMessage}`;
        
        submitBtn.href = whatsappLink;
        submitBtn.removeAttribute('disabled');
        submitBtn.style.cursor = 'pointer';
    } else {
        submitBtn.href = '#';
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.style.cursor = 'not-allowed';
    }
}

// CAROUSEL NAVIGATION
const prevBtn = document.querySelector('.carousel-nav.prev');
const nextBtn = document.querySelector('.carousel-nav.next');
const carouselContainer = document.querySelector('.carousel-container');

if (prevBtn && nextBtn && carouselContainer) {
    prevBtn.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    });
}

// PARALLAX SCROLL EFFECT
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    // Grid parallax
    const heroGrid = document.querySelector('.hero-grid');
    if (heroGrid) {
        heroGrid.style.transform = `translateY(${scrollY * 0.5}px)`;
    }

    // Papers parallax
    const papersGrid = document.querySelector('.papers-grid');
    if (papersGrid) {
        papersGrid.style.transform = `translateY(${scrollY * 0.3}px)`;
    }
});

// SMOOTH SCROLL BEHAVIOR
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute('href') !== '#') {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ANIMATION ON SCROLL - STACKED CARDS (Mobile Modes Section)
const modeCards = document.querySelectorAll('.mode-card');

function handleModeCardsScroll() {
    if (window.innerWidth <= 768) {
        modeCards.forEach((card, index) => {
            const rect = card.getBoundingClientRect();
            const elementCenter = rect.top + rect.height / 2;
            const windowCenter = window.innerHeight / 2;
            const distance = elementCenter - windowCenter;
            
            if (index === 0) {
                card.style.transform = `translateY(${Math.max(0, -distance * 0.3)}px) scale(${1 - Math.max(0, -distance * 0.0005)})`;
            } else if (index === 1) {
                card.style.transform = `translateY(${Math.max(0, -distance * 0.2)}px) scale(${1 - Math.max(0, -distance * 0.0003)})`;
            }
        });
    }
}

window.addEventListener('scroll', handleModeCardsScroll);
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        modeCards.forEach(card => {
            card.style.transform = '';
        });
    }
});

// HOVER EFFECT FOR MODE CARDS (Desktop)
if (window.innerWidth > 768) {
    document.querySelectorAll('.modes-container').forEach(container => {
        const cards = container.querySelectorAll('.mode-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cards.forEach(c => {
                    if (c !== card) {
                        c.style.transform = 'scale(0.95)';
                    }
                });
                card.style.transform = 'scale(1.05)';
            });

            card.addEventListener('mouseleave', () => {
                cards.forEach(c => {
                    c.style.transform = '';
                });
            });
        });
    });
}

// COURSE CARD HOVER
document.querySelectorAll('.course-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// LAZY LOAD IMAGES
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.hasAttribute('data-src')) {
                    img.src = img.getAttribute('data-src');
                    img.removeAttribute('data-src');
                }
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// PRELOAD ANIMATIONS
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});

// SMOOTH FADE IN ON PAGE LOAD
document.body.style.opacity = '0.95';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);
