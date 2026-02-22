// Mobile menu toggle
document.getElementById('mobile-menu-btn').addEventListener('click', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.toggle('hidden');
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Contact modal functions
function openContactForm() {
    document.getElementById('contactModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeContactForm() {
    document.getElementById('contactModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Photo modal functions
function openPhotoModal(photoId) {
    const modal = document.getElementById('photoModal');
    const photoData = {
        1: {
            title: 'Device Testing',
            description: 'Testing sound recognition in real-world conditions with prototype devices.',
            fullSize: 'assets/images/device-testing-large.jpg'
        },
        2: {
            title: 'User Testing',
            description: 'Gathering insights from hearing loss community through interactive testing sessions.',
            fullSize: 'assets/images/user-testing-large.jpg'
        },
        3: {
            title: 'Technology',
            description: 'Compact AI-powered sound detection system with embedded TinyML processing.',
            fullSize: 'assets/images/technology-large.jpg'
        },
        4: {
            title: 'Community',
            description: 'Community engagement and awareness events promoting disability inclusion.',
            fullSize: 'assets/images/community-large.jpg'
        },
        5: {
            title: 'Recognition',
            description: 'Recognition for innovation and social impact in assistive technology.',
            fullSize: 'assets/images/recognition-large.jpg'
        },
        6: {
            title: 'Global Impact',
            description: 'International recognition and partnerships expanding Audiora\'s reach worldwide.',
            fullSize: 'assets/images/global-impact-large.jpg'
        },
        7: {
            title: 'Additional Photo 1',
            description: 'Additional photo showcasing Audiora\'s impact and achievements.',
            fullSize: 'assets/images/add-photo-1-large.jpg'
        },
        8: {
            title: 'Additional Photo 2',
            description: 'Another photo highlighting the team and community work.',
            fullSize: 'assets/images/add-photo-2-large.jpg'
        },
        // Album Photos
        album1: {
            title: 'Album Photo 1',
            description: 'Capturing moments from Audiora\'s development journey.',
            fullSize: 'assets/images/album-photo-1-large.jpg'
        },
        album2: {
            title: 'Album Photo 2',
            description: 'Team collaboration and innovation in action.',
            fullSize: 'assets/images/album-photo-2-large.jpg'
        },
        album3: {
            title: 'Album Photo 3',
            description: 'Community engagement and outreach activities.',
            fullSize: 'assets/images/album-photo-3-large.jpg'
        },
        album4: {
            title: 'Album Photo 4',
            description: 'Technical development and testing phases.',
            fullSize: 'assets/images/album-photo-4-large.jpg'
        },
        album5: {
            title: 'Album Photo 5',
            description: 'User feedback and improvement sessions.',
            fullSize: 'assets/images/album-photo-5-large.jpg'
        },
        album6: {
            title: 'Album Photo 6',
            description: 'Achievement recognition and celebration moments.',
            fullSize: 'assets/images/album-photo-6-large.jpg'
        },
        album7: {
            title: 'Album Photo 7',
            description: 'Partnership and collaboration highlights.',
            fullSize: 'assets/images/album-photo-7-large.jpg'
        },
        album8: {
            title: 'Album Photo 8',
            description: 'Future vision and upcoming initiatives.',
            fullSize: 'assets/images/album-photo-8-large.jpg'
        },
        // Swipeable Gallery Photos
        swipe1: {
            title: 'Gallery Photo 1',
            description: 'Memorable moment from Audiora\'s journey.',
            fullSize: 'assets/images/swipe-photo-1-large.jpg'
        },
        swipe2: {
            title: 'Gallery Photo 2',
            description: 'Team collaboration and innovation showcase.',
            fullSize: 'assets/images/swipe-photo-2-large.jpg'
        },
        swipe3: {
            title: 'Gallery Photo 3',
            description: 'Community engagement and outreach highlights.',
            fullSize: 'assets/images/swipe-photo-3-large.jpg'
        },
        swipe4: {
            title: 'Gallery Photo 4',
            description: 'Technical development and testing milestones.',
            fullSize: 'assets/images/swipe-photo-4-large.jpg'
        },
        swipe5: {
            title: 'Gallery Photo 5',
            description: 'User feedback and improvement sessions.',
            fullSize: 'assets/images/swipe-photo-5-large.jpg'
        },
        swipe6: {
            title: 'Gallery Photo 6',
            description: 'Achievement recognition and celebration moments.',
            fullSize: 'assets/images/swipe-photo-6-large.jpg'
        },
        swipe7: {
            title: 'Gallery Photo 7',
            description: 'Partnership and collaboration highlights.',
            fullSize: 'assets/images/swipe-photo-7-large.jpg'
        },
        swipe8: {
            title: 'Gallery Photo 8',
            description: 'Future vision and upcoming initiatives.',
            fullSize: 'assets/images/swipe-photo-8-large.jpg'
        }
    };
    
    const photo = photoData[photoId];
    if (photo) {
        document.getElementById('modalTitle').textContent = photo.title;
        document.getElementById('modalDescription').textContent = photo.description;
        document.getElementById('modalImage').src = photo.fullSize;
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
}

function closePhotoModal() {
    document.getElementById('photoModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Album tab switching functions
function showAlbumTab(tab) {
    const photosSection = document.getElementById('photos-section');
    const videosSection = document.getElementById('videos-section');
    const photosTab = document.getElementById('photos-tab');
    const videosTab = document.getElementById('videos-tab');
    
    if (tab === 'photos') {
        photosSection.classList.remove('hidden');
        videosSection.classList.add('hidden');
        photosTab.classList.add('bg-purple-600', 'text-white');
        photosTab.classList.remove('text-purple-600', 'hover:bg-purple-100');
        videosTab.classList.remove('bg-purple-600', 'text-white');
        videosTab.classList.add('text-purple-600', 'hover:bg-purple-100');
    } else if (tab === 'videos') {
        videosSection.classList.remove('hidden');
        photosSection.classList.add('hidden');
        videosTab.classList.add('bg-purple-600', 'text-white');
        videosTab.classList.remove('text-purple-600', 'hover:bg-purple-100');
        photosTab.classList.remove('bg-purple-600', 'text-white');
        photosTab.classList.add('text-purple-600', 'hover:bg-purple-100');
    }
}

// Swipe functionality for photo gallery
function initSwipeGallery() {
    const container = document.getElementById('photo-swipe-container');
    if (!container) return;
    
    let isDown = false;
    let startX;
    let scrollLeft;
    
    // Mouse events
    container.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    
    container.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    container.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    container.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events for mobile
    container.addEventListener('touchstart', (e) => {
        isDown = true;
        startX = e.touches[0].pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
    });
    
    container.addEventListener('touchend', () => {
        isDown = false;
    });
    
    container.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - container.offsetLeft;
        const walk = (x - startX) * 2;
        container.scrollLeft = scrollLeft - walk;
    });
}

// Initialize swipe gallery when page loads
document.addEventListener('DOMContentLoaded', initSwipeGallery);

// Video playing functionality
function playVideo(buttonElement, videoSrc) {
    // Create modal for video playback
    const videoModal = document.createElement('div');
    videoModal.className = 'fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4';
    videoModal.innerHTML = `
        <div class="relative max-w-4xl w-full">
            <button onclick="closeVideoModal(this)" class="absolute -top-12 right-0 text-white text-2xl hover:text-purple-300 transition-colors">
                <i class="fas fa-times"></i>
            </button>
            <video controls autoplay class="w-full rounded-lg shadow-2xl">
                <source src="${videoSrc}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        </div>
    `;
    
    document.body.appendChild(videoModal);
    document.body.style.overflow = 'hidden';
}

function closeVideoModal(buttonElement) {
    const modal = buttonElement.closest('.fixed');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Gallery functions
function openGallery(type) {
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const content = document.getElementById('galleryContent');
    
    // Set title based on gallery type
    if (type === 'fundraising') {
        title.textContent = 'Fundraising for Turkish Association of the Deaf';
        content.innerHTML = generateGalleryImages('fundraising');
    } else if (type === 'tea') {
        title.textContent = 'The Advocacy Network (TEA) Activities';
        content.innerHTML = generateGalleryImages('tea');
    }
    
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeGallery() {
    document.getElementById('galleryModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function generateGalleryImages(type) {
    // Placeholder images - replace with your actual photo paths
    const images = {
        fundraising: [
            { src: 'assets/images/fundraising-1.jpg', caption: 'Fundraising event coordination with community volunteers' },
            { src: 'assets/images/fundraising-2.jpg', caption: 'Awareness campaign activities' },
            { src: 'assets/images/fundraising-3.jpg', caption: 'Donation collection drive' },
            { src: 'assets/images/fundraising-4.jpg', caption: 'Community engagement event' },
            { src: 'assets/images/fundraising-5.jpg', caption: 'Fundraising success celebration' },
            { src: 'assets/images/fundraising-6.jpg', caption: 'Team organizing awareness campaigns' }
        ],
        tea: [
            { src: 'assets/images/tea-1.jpg', caption: 'TEA team meeting and planning session' },
            { src: 'assets/images/tea-2.jpg', caption: 'Educational equity workshop' },
            { src: 'assets/images/tea-3.jpg', caption: 'Disability advocacy awareness event' },
            { src: 'assets/images/tea-4.jpg', caption: 'Community program coordination' },
            { src: 'assets/images/tea-5.jpg', caption: 'Health-based social initiative launch' },
            { src: 'assets/images/tea-6.jpg', caption: 'Team leadership and collaboration' }
        ]
    };
    
    const galleryImages = images[type] || [];
    
    return galleryImages.map((img, index) => `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <div class="aspect-w-16 aspect-h-12 bg-gray-200">
                <img src="${img.src}" alt="${img.caption}" class="w-full h-48 object-cover" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE5MiIgdmlld0JveD0iMCAwIDMyMCAxOTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMjAiIGhlaWdodD0iMTkyIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjAgNzZDMTIwIDY5LjM3MjYgMTI1LjM3MyA2NCAxMzIgNjRDMTM4LjYyNyA2NCAxNDQgNjkuMzcyNiAxNDQgNzZDMTQ0IDgyLjYyNzQgMTM4LjYyNyA4OCAxMzIgODhDMTI1LjM3MyA4OCAxMjAgODIuNjI3NCAxMjAgNzZaIiBmaWxsPSIjOUNBM0VGIi8+CjxwYXRoIGQ9Ik04MCAxMjhIMjQwVjE0NEg4MFYxMjhaIiBmaWxsPSIjOUNBM0VGIi8+CjxwYXRoIGQ9Ik05NiAxNDRIMTI4VjE2MEg5NlYxNDRaIiBmaWxsPSIjOUNBM0VGIi8+CjxwYXRoIGQ9Ik0xOTIgMTQ0SDIyNFYxNjBIMTkyVjE0NFoiIGZpbGw9IiM5Q0EzRUYiLz4KPHRleHQgeD0iMTYwIiB5PSI5NiIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjE0IiBmaWxsPSIjNkI0NkMxIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5JbWFnZSAke2luZGV4ICsgMX08L3RleHQ+Cjwvc3ZnPgo='">
            </div>
            <div class="p-4">
                <p class="text-sm text-gray-700">${img.caption}</p>
            </div>
        </div>
    `).join('');
}

// Handle form submission - send email via mailto
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data directly from form elements
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const organization = event.target.querySelectorAll('input[type="text"]')[1]?.value || '';
    const message = event.target.querySelector('textarea').value;
    
    // Create mailto link
    const subject = encodeURIComponent(`Contact Inquiry from ${name} - Audiora`);
    const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Organization: ${organization}\n\n` +
        `Message:\n${message}\n\n` +
        `---\nSent from Audiora website contact form`
    );
    
    // Open email client
    window.location.href = `mailto:zeryacimen1@gmail.com?subject=${subject}&body=${body}`;
    
    // Show success message and close modal
    setTimeout(() => {
        alert('Thank you for your interest! Your email client has been opened to send the message.');
        closeContactForm();
        event.target.reset();
    }, 500);
}

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg');
    } else {
        navbar.classList.remove('shadow-lg');
    }
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all fade-in elements
document.addEventListener('DOMContentLoaded', function() {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Close mobile menu when clicking on a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function() {
        document.getElementById('mobile-menu').classList.add('hidden');
    });
});

// Add keyboard navigation for accessibility
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeContactForm();
        closeGallery();
    }
});

// Smooth reveal animation for feature cards
const featureCards = document.querySelectorAll('.feature-card');
const featureObserver = new IntersectionObserver(function(entries) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
        }
    });
}, observerOptions);

featureCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    featureObserver.observe(card);
});

// Add parallax effect to hero section - disabled to prevent overlap
window.addEventListener('scroll', function() {
    // Parallax effect disabled to prevent section overlap issues
    // const scrolled = window.pageYOffset;
    // const hero = document.querySelector('.gradient-bg');
    // if (hero) {
    //     hero.style.transform = `translateY(${scrolled * 0.5}px)`;
    // }
});

// Performance metrics animation
const performanceObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            performanceObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

// Find performance metrics section
const performanceSection = document.querySelector('.bg-gradient-to-r.from-purple-600.to-purple-800');
if (performanceSection) {
    performanceObserver.observe(performanceSection);
}

function animateNumbers() {
    const accuracyElement = document.querySelector('.text-4xl');
    if (accuracyElement && accuracyElement.textContent.includes('~85%')) {
        animateValue(accuracyElement, 0, 85, 2000, '%');
    }
}

function animateValue(element, start, end, duration, suffix = '') {
    const range = end - start;
    const increment = range / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        element.textContent = `~${Math.round(current)}${suffix}`;
    }, 16);
}

// Add hover sound effect simulation (visual feedback)
document.querySelectorAll('button, .feature-card').forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    element.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// Email validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Add loading states for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function() {
        if (!this.classList.contains('loading')) {
            this.classList.add('loading');
            setTimeout(() => {
                this.classList.remove('loading');
            }, 1000);
        }
    });
});

// Console branding
console.log('%c🎧 Audiora - AI-Powered Sound Awareness', 'font-size: 20px; font-weight: bold; color: #6B46C1;');
console.log('%cEnhancing safety and independence for individuals with hearing loss', 'font-size: 14px; color: #9333EA;');
