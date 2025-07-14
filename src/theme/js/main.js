// DOM Elements
const searchBar = document.getElementById('searchBar');
const heroSearch = document.getElementById('heroSearch');
const searchModal = document.getElementById('searchModal');
const closeModal = document.querySelector('.close-modal');
const heroSection = document.getElementById('heroSection');
const mainHeader = document.getElementById('mainHeader');
const scrollIndicator = document.getElementById('scrollIndicator');
const categories = document.getElementById('categories');
const categoriesLeft = document.getElementById('categoriesLeft');
const categoriesRight = document.getElementById('categoriesRight');
const mapToggle = document.getElementById('mapToggle');

// Scroll Progress Indicator
function updateScrollIndicator() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    scrollIndicator.style.width = scrollPercent + '%';
}

// Enhanced Scroll Effects
let lastScrollY = 0;
let ticking = false;

function updateScrollEffects() {
    const scrollY = window.scrollY;
    const heroHeight = heroSection.offsetHeight;
    const scrollThreshold = heroHeight * 0.3;

    if (scrollY > scrollThreshold) {
        heroSection.classList.add('hidden');
        searchBar.classList.add('visible');
        mainHeader.classList.add('scrolled');
    } else {
        heroSection.classList.remove('hidden');
        searchBar.classList.remove('visible');
        mainHeader.classList.remove('scrolled');
    }

    // Update scroll indicator
    updateScrollIndicator();

    lastScrollY = scrollY;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick);

// Search Modal Functionality
function toggleSearchModal(show) {
    if (show) {
        searchModal.classList.add('show');
        document.body.style.overflow = 'hidden';
    } else {
        searchModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

searchBar.addEventListener('click', () => toggleSearchModal(true));
heroSearch.addEventListener('click', () => toggleSearchModal(true));
closeModal.addEventListener('click', () => toggleSearchModal(false));

// Close modal when clicking outside
searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) {
        toggleSearchModal(false);
    }
});

// Escape key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && searchModal.classList.contains('show')) {
        toggleSearchModal(false);
    }
});

// Section scroll buttons functionality
const sectionScrollButtons = document.querySelectorAll('.section-scroll-button');
const sectionScrollStep = 300; // Scroll distance for each click

sectionScrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sectionId = button.getAttribute('data-section');
        const listingsRow = document.getElementById(`${sectionId}-listings`);
        const isLeft = button.classList.contains('left');

        if (listingsRow) {
            const currentScroll = listingsRow.scrollLeft;
            const newScroll = isLeft ?
                currentScroll - sectionScrollStep :
                currentScroll + sectionScrollStep;

            listingsRow.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            });
        }
    });
});

// Category scroll buttons
const leftButton = document.querySelector('.category-scroll-button.left');
const rightButton = document.querySelector('.category-scroll-button.right');
let scrollAmount = 0;
const scrollStep = 200;

leftButton.addEventListener('click', () => {
    scrollAmount = Math.max(0, scrollAmount - scrollStep);
    categories.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

rightButton.addEventListener('click', () => {
    const maxScroll = categories.scrollWidth - categories.clientWidth;
    scrollAmount = Math.min(maxScroll, scrollAmount + scrollStep);
    categories.scrollTo({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

// Section scroll buttons
sectionScrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        const container = button.parentElement;
        const listingsRow = container.querySelector('.listings-row');
        const scrollStep = 280; // Card width + gap

        if (button.classList.contains('left')) {
            listingsRow.scrollBy({
                left: -scrollStep,
                behavior: 'smooth'
            });
        } else {
            listingsRow.scrollBy({
                left: scrollStep,
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to category
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('click', function () {
        categoryItems.forEach(i => i.classList.remove('active'));
        this.classList.add('active');

        // Add subtle animation
        this.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Filter Button Logic
const filterBtns = document.querySelectorAll('.filter-btn');
filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        const isFiltersBtn = this.querySelector('i').classList.contains('fa-sliders-h');

        if (isFiltersBtn) {
            // Handle filters button differently
            console.log('Opening filters modal...');
        } else {
            // Toggle active state for other filters
            filterBtns.forEach(b => {
                if (!b.querySelector('i').classList.contains('fa-sliders-h')) {
                    b.classList.remove('active');
                }
            });
            this.classList.add('active');
        }

        // Add click animation
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});

// Map Toggle
mapToggle.addEventListener('click', function () {
    const span = this.querySelector('span');
    const icon = this.querySelector('i');

    if (span.textContent === 'Show map') {
        span.textContent = 'Hide map';
        icon.classList.replace('fa-map', 'fa-list');
        this.style.background = '#f7f7f7';
    } else {
        span.textContent = 'Show map';
        icon.classList.replace('fa-list', 'fa-map');
        this.style.background = 'none';
    }

    // Add animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = '';
    }, 100);
});

// Section scroll buttons
sectionScrollButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const listingsRow = button.parentElement;
        const scrollAmount = 280; // Card width + gap

        if (button.classList.contains('left')) {
            listingsRow.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else {
            listingsRow.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});

// Enhanced Wishlist Hearts
const wishlistBtns = document.querySelectorAll('.wishlist-btn');
wishlistBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
        e.stopPropagation();

        const heart = this.querySelector('i');
        const isActive = this.classList.contains('active');

        if (isActive) {
            // Remove from wishlist
            heart.classList.replace('fas', 'far');
            this.classList.remove('active');

            // Animation
            this.style.transform = 'scale(0.8)';
            setTimeout(() => {
                this.style.transform = '';
            }, 200);
        } else {
            // Add to wishlist
            heart.classList.replace('far', 'fas');
            this.classList.add('active');

            // Enhanced animation
            this.style.transform = 'scale(1.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 100);
            }, 100);
        }
    });
});

// Search Tab Functionality
const searchTabs = document.querySelectorAll('.search-tab');
searchTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        searchTabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');

        // Add animation
        this.style.transform = 'translateY(-2px)';
        setTimeout(() => {
            this.style.transform = '';
        }, 200);
    });
});

// Smooth Listing Card Interactions
const listingCards = document.querySelectorAll('.listing-card');
listingCards.forEach(card => {
    card.addEventListener('mouseenter', function () {

    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });

    card.addEventListener('click', function () {
        // Add click animation
        this.style.transform = 'translateY(-6px) scale(0.98)';
        setTimeout(() => {
            this.style.transform = 'translateY(-6px)';
        }, 100);
    });
});

// Intersection Observer for Fade-in Animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all listing sections
const listingSections = document.querySelectorAll('.listing-section');
listingSections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
    updateScrollIndicator();
    updateCategoryScrollButtons();

    // Add loading animation
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.transition = 'opacity 0.5s ease';
    }, 100);
});

// Horizontal scrolling for listing sections
document.querySelectorAll('.section-scroll-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const sectionId = button.getAttribute('data-section');
        const listingsRow = document.getElementById(`${sectionId}-listings`);
        const scrollAmount = 300; // Adjust this value as needed

        if (listingsRow) {
            listingsRow.scrollBy({
                left: button.classList.contains('left') ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    });
});

// Enable horizontal scrolling with mouse wheel for listing rows
document.querySelectorAll('.listings-row').forEach(row => {
    row.addEventListener('wheel', (e) => {
        // Only prevent default if we're actually scrolling horizontally
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
            e.preventDefault();
            row.scrollLeft += e.deltaY;
        }
    });
});