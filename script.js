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
const sections = document.querySelectorAll('section[id$="-section"], #home');

function updateActiveNav() {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href === '#' + current || (current === 'home' && href === '#home')) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
updateActiveNav();

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
    if (question) {
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    }
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

// CAROUSEL NAVIGATION - COMPLETE REWRITE
const carouselContainer = document.getElementById('carouselContainer');
const carouselPrev = document.getElementById('carouselPrev');
const carouselNext = document.getElementById('carouselNext');

if (carouselContainer && carouselPrev && carouselNext) {
    // Simple scroll function
    function scrollCarousel(direction) {
        const isMobile = window.innerWidth <= 768;
        let scrollDistance;

        if (isMobile) {
            // On mobile: scroll by one item (100% - 1rem) + 1rem gap
            scrollDistance = carouselContainer.offsetWidth;
        } else {
            // On desktop: scroll by 304px (280 item + 24 gap)
            scrollDistance = 304;
        }

        const newScrollLeft = direction === 'next' 
            ? carouselContainer.scrollLeft + scrollDistance
            : carouselContainer.scrollLeft - scrollDistance;

        carouselContainer.scrollTo({
            left: newScrollLeft,
            behavior: 'smooth'
        });
    }

    // Arrow click handlers
    carouselNext.addEventListener('click', (e) => {
        e.preventDefault();
        scrollCarousel('next');
    });

    carouselPrev.addEventListener('click', (e) => {
        e.preventDefault();
        scrollCarousel('prev');
    });

    // TOUCH/SWIPE SUPPORT
    let touchStartX = 0;
    let touchEndX = 0;

    carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].clientX;
    }, false);

    carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > swipeThreshold) {
            if (difference > 0) {
                // Swiped left - go next
                scrollCarousel('next');
            } else {
                // Swiped right - go prev
                scrollCarousel('prev');
            }
        }
    }

    // Prevent touch scroll while swiping (optional)
    let isScrolling = false;
    carouselContainer.addEventListener('scroll', () => {
        isScrolling = true;
    });

    carouselContainer.addEventListener('scrollend', () => {
        isScrolling = false;
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
    btn.addEventListener('click', (e) => {
        e.preventDefault();
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
        
        submitBtn.removeAttribute('disabled');
        submitBtn.disabled = false;
        submitBtn.style.cursor = 'pointer';
        submitBtn.onclick = (e) => {
            e.preventDefault();
            window.open(whatsappLink, '_blank');
        };
    } else {
        submitBtn.setAttribute('disabled', 'disabled');
        submitBtn.disabled = true;
        submitBtn.style.cursor = 'not-allowed';
        submitBtn.onclick = (e) => {
            e.preventDefault();
        };
    }
}

// PARALLAX SCROLL EFFECT
window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    const heroGrid = document.querySelector('.hero-grid');
    if (heroGrid) {
        heroGrid.style.transform = `translateY(${scrollY * 0.5}px)`;
    }

    const papersGrid = document.querySelector('.papers-grid');
    if (papersGrid) {
        papersGrid.style.transform = `translateY(${scrollY * 0.3}px)`;
    }

    const digestImage = document.querySelector('.digest-image');
    if (digestImage) {
        const imageRect = digestImage.parentElement.getBoundingClientRect();
        const imageCenter = imageRect.top + imageRect.height / 2;
        const windowCenter = window.innerHeight / 2;
        const distance = imageCenter - windowCenter;
        const zoomAmount = 1 + (Math.max(0, -distance) / (window.innerHeight * 2)) * 0.1;
        digestImage.style.transform = `scale(${Math.min(1.1, zoomAmount)})`;
    }
});

// SMOOTH SCROLL BEHAVIOR
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '' && !href.includes('wa.me')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
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

// SMOOTH FADE IN ON PAGE LOAD
document.body.style.opacity = '0.95';
setTimeout(() => {
    document.body.style.opacity = '1';
}, 100);
