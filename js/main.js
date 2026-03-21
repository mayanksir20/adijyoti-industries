let currentLang = localStorage.getItem('selectedLang') || 'en';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initializations
    applyLanguage(currentLang);
    lucide.createIcons();
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 1000, once: true, offset: 100 });
    }

    // 2. Swiper Initialization with Background Toggle
    const heroSection = document.getElementById('heroSection');

    const swiper = new Swiper('.heroSwiper', {
        loop: true,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        speed: 1000,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        on: {
            slideChangeTransitionStart: function () {
                // Update Background Image Class
                const index = this.realIndex + 1;
                heroSection.classList.remove('bg-slide-1', 'bg-slide-2', 'bg-slide-3');
                heroSection.classList.add('bg-slide-' + index);
            },
            slideChange: function () {
                if (typeof AOS !== 'undefined') AOS.refresh();
            }
        }
    });
});

// Mobile Sidebar Logic
function toggleMobileMenu() {
    const sidebar = document.getElementById('mobileSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('-translate-x-full');
    overlay.classList.toggle('hidden');
    setTimeout(() => overlay.classList.toggle('opacity-100'), 10);
}

// Language translate eng hin Logic
function toggleLang() {
    currentLang = currentLang === 'en' ? 'hi' : 'en';
    localStorage.setItem('selectedLang', currentLang);
    applyLanguage(currentLang);

    const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true
    });
    Toast.fire({
        icon: 'success',
        title: currentLang === 'hi' ? 'भाषा: हिंदी' : 'Language: English'
    });
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        const text = el.getAttribute('data-' + lang);
        if (text) el.innerText = text;
    });

    const btn = document.getElementById('langBtn');
    if (btn) {
        btn.innerText = lang === 'en' ? 'ENGLISH / हिंदी' : 'हिंदी / ENGLISH';
    }
    lucide.createIcons();
}



function handleActiveLinks() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // 1. Handle Main Nav Links
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-[#1d70d1]');
        }
    });

    // 2. Handle Dropdown Items & Parent Highlight
    const servicesParent = document.getElementById('servicesParent');
    const dropdownItems = document.querySelectorAll('.nav-dropdown-item');

    dropdownItems.forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            // Highlight the dropdown text inside the card
            item.querySelector('.text-white').classList.replace('text-white', 'text-[#1d70d1]');
            // Highlight the PARENT "Services" button
            servicesParent.classList.add('text-[#1d70d1]');
        }
    });
}

window.addEventListener('DOMContentLoaded', handleActiveLinks);



