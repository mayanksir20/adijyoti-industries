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
    // 1. Current URL nikalna aur use saaf karna
    const rawPath = window.location.pathname;

    // Agar URL '/' hai toh 'index.html', warna path se extension aur slashes hatayein
    let currentPath = rawPath === "/" || rawPath === "" ? "index.html" : rawPath.split("/").pop();

    // NETLIFY FIX: Agar URL bina extension ke hai (jaise '/products'), toh '.html' add karein
    if (currentPath && !currentPath.includes(".")) {
        currentPath += ".html";
    }

    // 2. Desktop Links Handle
    document.querySelectorAll('.nav-link').forEach(link => {
        // Link ka href nikal kar clean karein (jaise './products.html' -> 'products.html')
        const linkHref = link.getAttribute('href').replace("./", "");
        if (linkHref === currentPath) {
            link.classList.add('text-[#1d70d1]');
        } else {
            link.classList.remove('text-[#1d70d1]');
        }
    });

    // 3. Services Dropdown Handle
    const servicesParent = document.getElementById('servicesParent');
    document.querySelectorAll('.nav-dropdown-item').forEach(item => {
        const itemHref = item.getAttribute('href').replace("./", "");
        if (itemHref === currentPath) {
            const textElement = item.querySelector('.text-white') || item;
            if (textElement.classList.contains('text-white')) {
                textElement.classList.replace('text-white', 'text-[#1d70d1]');
            } else {
                textElement.classList.add('text-[#1d70d1]');
            }
            if (servicesParent) servicesParent.classList.add('text-[#1d70d1]');
        }
    });

    // 4. About Us Dropdown Handle
    const aboutParent = document.getElementById('aboutParent');
    document.querySelectorAll('.about-dropdown-item').forEach(item => {
        const itemHref = item.getAttribute('href').replace("./", "");
        if (itemHref === currentPath) {
            const textElement = item.querySelector('.text-white') || item;
            if (textElement.classList.contains('text-white')) {
                textElement.classList.replace('text-white', 'text-[#1d70d1]');
            } else {
                textElement.classList.add('text-[#1d70d1]');
            }
            if (aboutParent) aboutParent.classList.add('text-[#1d70d1]');
        }
    });

    // 5. Mobile Sidebar Handle
    const mobileSidebar = document.getElementById('mobileSidebar');
    if (mobileSidebar) {
        mobileSidebar.querySelectorAll('a').forEach(link => {
            const linkHref = link.getAttribute('href').replace("./", "");
            if (linkHref === currentPath) {
                link.classList.add('text-[#1d70d1]');

                // Keep sub-menu open
                const parentSub = link.closest('#mobileAboutSub');
                if (parentSub) {
                    const mobileAboutBtn = document.getElementById('mobileAboutBtn');
                    if (mobileAboutBtn) mobileAboutBtn.classList.add('text-[#1d70d1]');
                    parentSub.classList.remove('hidden');
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
document.addEventListener('click', function (event) {
    const searchInput = document.getElementById('standaloneSearch');
    const resultsDiv = document.getElementById('bentoResults');

    if (searchInput && !searchInput.contains(event.target)) {
        resultsDiv.classList.add('hidden');
    }
});



// Auto Update Copyright Year
document.getElementById('current-year').textContent = new Date().getFullYear();



/// Bank Logos JSON
const bankLogos = [
    { id: 1, name: 'SBI', url: '../assets/banks/bank (1).png' },
    { id: 2, name: 'Punjab National Bank', url: '../assets/banks/bank (2).png' },
    { id: 3, name: 'Bank of Baroda (Guyana)', url: '../assets/banks/bank (3).png' },
    { id: 4, name: 'ICICI Bank', url: '../assets/banks/bank (4).png' },
    { id: 5, name: 'Bank of Baroda', url: '../assets/banks/bank (5).png' },
    { id: 6, name: 'Canara Bank', url: '../assets/banks/bank (6).png' },
    { id: 7, name: 'Union Bank of India', url: '../assets/banks/bank (7).png' },
    { id: 8, name: 'Indian Bank', url: '../assets/banks/bank (8).png' },
    { id: 9, name: 'Bank of India', url: '../assets/banks/bank (9).png' },
    { id: 10, name: 'Indian Overseas Bank', url: '../assets/banks/bank (10).png' },
    { id: 11, name: 'HDFC Bank', url: '../assets/banks/bank (11).png' },
    { id: 12, name: 'DCB Bank', url: '../assets/banks/bank (12).png' },
    { id: 13, name: 'IndusInd Bank', url: '../assets/banks/bank (13).png' },
    { id: 14, name: 'Yes Bank', url: '../assets/banks/bank (14).png' },
    { id: 15, name: 'IDFC FIRST Bank', url: '../assets/banks/bank (15).png' },
    { id: 16, name: 'Bandhan Bank', url: '../assets/banks/bank (16).png' },
    { id: 17, name: 'Axis Bank', url: '../assets/banks/bank (17).png' },
    { id: 18, name: 'IDBI Bank', url: '../assets/banks/bank (18).png' },
    { id: 19, name: 'Kotak Mahindra Bank', url: '../assets/banks/bank (19).png' },
    { id: 20, name: 'Central Bank of India', url: '../assets/banks/bank (20).png' }
];

function setupBankSlider() {
    const mainTrack = document.getElementById('bank-slider');
    const duplicateTrack = document.getElementById('bank-slider-duplicate');

    if (!mainTrack || !duplicateTrack) return;

    // Map through JSON to create HTML strings
    const logoHTML = bankLogos.map(bank => `
        <div class="bank-card">
            <img src="${bank.url}" alt="${bank.name}" title="${bank.name}" loading="lazy">
        </div>
    `).join('');

    // Inject into both tracks for seamless scrolling
    mainTrack.innerHTML = logoHTML;
    duplicateTrack.innerHTML = logoHTML;
}

// Run the setup once DOM is ready
document.addEventListener('DOMContentLoaded', setupBankSlider);



// viwe all bank logo in modal logic
function openBankModal() {
    const modal = document.getElementById('bankModal');
    const backdrop = document.getElementById('modalBackdrop');
    const box = document.getElementById('modalBox');
    const grid = document.getElementById('modalBankGrid');

    // Grid content generate karein
    grid.innerHTML = bankLogos.map(bank => `
        <div class="modal-bank-card group">
            <img src="${bank.url}" alt="${bank.name}" title="${bank.name}">
        </div>
    `).join('');

    // Modal dikhayein
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Scroll band
}

function closeBankModal() {
    const modal = document.getElementById('bankModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto'; // Scroll shuru
}

// Click outside to close
window.onclick = function (event) {
    const modal = document.getElementById('bankModal');
    if (event.target == document.getElementById('modalBackdrop')) {
        closeBankModal();
    }
}