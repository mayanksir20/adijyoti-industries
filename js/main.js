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



// Active menu item logic
function handleActiveLinks() {
    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    // --- 1. Desktop Handle ---
    // Main Links (Home, Products, Contact)
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('text-[#1d70d1]');
        }
    });

    // Services Parent Logic
    const servicesParent = document.getElementById('servicesParent');
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            const textElement = item.querySelector('.text-white');
            if (textElement) textElement.classList.replace('text-white', 'text-[#1d70d1]');
            if (servicesParent) servicesParent.classList.add('text-[#1d70d1]');
        }
    });

    // About Us Parent Logic (FIXED)
    const aboutParent = document.getElementById('aboutParent');
    document.querySelectorAll('.about-dropdown-item').forEach(item => {
        if (item.getAttribute('href') === currentPath) {
            const textElement = item.querySelector('.text-white');
            if (textElement) textElement.classList.replace('text-white', 'text-[#1d70d1]');
            if (aboutParent) aboutParent.classList.add('text-[#1d70d1]');
        }
    });

    // --- 2. Mobile Handle (FIXED) ---
    const mobileSidebar = document.getElementById('mobileSidebar');
    if (mobileSidebar) {
        const allMobileLinks = mobileSidebar.querySelectorAll('a');
        allMobileLinks.forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                // Highlighting the link itself
                link.classList.add('text-[#1d70d1]');

                // If link is inside About Submenu
                if (link.closest('#mobileAboutSub')) {
                    const mobileAboutBtn = document.getElementById('mobileAboutBtn');
                    const mobileAboutSub = document.getElementById('mobileAboutSub');

                    if (mobileAboutBtn) mobileAboutBtn.classList.add('text-[#1d70d1]');
                    if (mobileAboutSub) mobileAboutSub.classList.remove('hidden'); // Keeping it open
                }
            }
        });
    }
}

window.addEventListener('DOMContentLoaded', handleActiveLinks);





function openModal(imgSrc) {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        
        // Modal dikhao aur image source set karo
        modalImg.src = imgSrc;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Scroll lock karo
        document.body.style.overflow = 'hidden';
        
        // Animation effects
        setTimeout(() => {
            modalImg.classList.remove('scale-90', 'opacity-0');
            modalImg.classList.add('scale-100', 'opacity-100');
        }, 20);
    }

    function closeModal() {
        const modal = document.getElementById('imageModal');
        const modalImg = document.getElementById('modalImg');
        
        // Reverse animation
        modalImg.classList.remove('scale-100', 'opacity-100');
        modalImg.classList.add('scale-90', 'opacity-0');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            modal.classList.remove('flex');
            document.body.style.overflow = 'auto'; // Scroll unlock
        }, 300);
    }

    // Keyboard 'Escape' button logic
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });