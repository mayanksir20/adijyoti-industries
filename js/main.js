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





// Initialize Lucide Icons
lucide.createIcons();

function openModal(imgSrc) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImg');

    modalImg.src = imgSrc;
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Disable page scroll
    document.body.style.overflow = 'hidden';

    // Trigger animation
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
        // Enable page scroll
        document.body.style.overflow = 'auto';
    }, 300);
}

// Escape Key to close modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});



// serch logic find distric 1st section in our location page
function searchInBento(query) {
    const resultsDiv = document.getElementById('bentoResults');
    const term = query.toLowerCase().trim();

    // 1. Agar search box khali hai toh list chhupa do
    if (term.length < 1) {
        resultsDiv.classList.add('hidden');
        return;
    }

    // 2. Apne purane 'locationData' array se filter karein
    const matches = locationData.filter(loc => 
        loc.district.toLowerCase().includes(term)
    );

    // 3. Results ko render karein
    if (matches.length > 0) {
        resultsDiv.classList.remove('hidden');
        resultsDiv.innerHTML = matches.map(loc => `
            <div onclick="window.location.href='tel:6387905006'" class="p-4 border-b border-slate-50 hover:bg-blue-50 cursor-pointer transition-all flex justify-between items-center group">
                <div>
                    <p class="text-slate-900 font-bold text-sm mb-0">${loc.district}</p>
                    <p class="text-slate-400 text-[10px] uppercase font-bold tracking-tighter">${loc.state} • ${loc.type}</p>
                </div>
                <div class="w-8 h-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition-all shadow-sm">
                    <i data-lucide="phone-call" class="w-4 h-4"></i>
                </div>
            </div>
        `).join('');
        
        // Lucide icons ko naye elements ke liye refresh karein
        lucide.createIcons();
    } else {
        // No results found view
        resultsDiv.innerHTML = `<div class="p-5 text-slate-400 text-xs text-center font-medium">Hume ye district nahi mila.</div>`;
        resultsDiv.classList.remove('hidden');
    }
}

// 4. Click Outside Logic: Jab kahin aur click ho toh list band ho jaye
document.addEventListener('click', function(event) {
    const searchInput = document.getElementById('standaloneSearch');
    const resultsDiv = document.getElementById('bentoResults');
    
    if (searchInput && !searchInput.contains(event.target)) {
        resultsDiv.classList.add('hidden');
    }
});