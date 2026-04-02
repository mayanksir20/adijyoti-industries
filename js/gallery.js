const galleryData = [
    // PMFME (Category & Image only)
    { id: 1, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-1.png' },
    { id: 2, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-2.jpg' },
    { id: 3, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-3.jpg' },
    { id: 4, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-4.jpg' },
    { id: 5, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-5.jpeg' },
    { id: 6, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-6.jpg' },
    { id: 17, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-7.jpg' },
    { id: 20, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-8.jpg' },
    { id: 23, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-9.jfif' },
    { id: 24, category: 'pmfme', url: '../assets/gallery/pmfme/pmfme-10.jfif' },

    // PM Surya Ghar
    { id: 7, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-1.jfif' },
    { id: 8, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-2.jpg' },
    { id: 9, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-3.jpg' },
    { id: 10, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-4.jpg' },
    { id: 11, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-5.jpg' },
    { id: 18, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-6.jpg' },
    { id: 21, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-7.png' },
    { id: 22, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-8.jpg' },
    { id: 23, category: 'pmsuryaghar', url: '../assets/gallery/pmsolar/pmsolar-9.jpg' },


    // PMKSY
    { id: 12, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-1.jpg' },
    { id: 13, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-2.jpg' },
    { id: 14, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-3.png' },
    { id: 15, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-4.jfif' },
    { id: 16, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-5.jpg' },
    { id: 19, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-6.jpg' },
    { id: 22, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-7.jpg' },
    { id: 25, category: 'pmksy', url: '../assets/gallery/pmksy/pmksy-8.jpg' }
];

let activeFilter = 'all';
const galleryGrid = document.getElementById('gallery-grid');
const viewMoreBtn = document.getElementById('view-more-btn');
const btnText = document.getElementById('btn-text');

function renderGallery(reset = false) {
    if (reset) galleryGrid.innerHTML = '';

    const currentCount = galleryGrid.children.length;
    const filteredData = activeFilter === 'all'
        ? galleryData
        : galleryData.filter(item => item.category === activeFilter);

    const limit = reset ? 16 : 8;
    const itemsToShow = filteredData.slice(currentCount, currentCount + limit);

    itemsToShow.forEach((item, index) => {
        const card = document.createElement('div');
        // photo-card class will handle the equal size via CSS (aspect-ratio)
        card.className = `photo-card group relative overflow-hidden rounded-[2rem] bg-slate-100 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`;
        card.style.animationDelay = `${index * 0.05}s`;

        card.innerHTML = `
            <img src="${item.url}" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt="Gallery Image" loading="lazy">
            
            <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                 <span class="px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-xl">
                    ${item.category}
                </span>
            </div>

            <div class="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[8px] font-black text-slate-800 uppercase tracking-tighter shadow-sm group-hover:opacity-0 transition-opacity">
                ${item.category}
            </div>
        `;
        galleryGrid.appendChild(card);
    });

    // Button Logic
    if (galleryGrid.children.length >= filteredData.length) {
        viewMoreBtn.disabled = true;
        btnText.innerText = "All Photos Displayed";
    } else {
        viewMoreBtn.disabled = false;
        btnText.innerText = "Explore More Impact";
    }
}

// Filter Event Listeners
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('.filter-btn').forEach(b => {
            b.classList.remove('active', 'bg-white', 'shadow-sm', 'text-blue-600', 'border', 'border-blue-100');
            b.classList.add('text-slate-500');
        });

        this.classList.add('active', 'bg-white', 'shadow-sm', 'text-blue-600', 'border', 'border-blue-100');
        this.classList.remove('text-slate-500');

        activeFilter = this.dataset.filter;
        renderGallery(true);
    });
});

viewMoreBtn.addEventListener('click', () => renderGallery(false));

document.addEventListener('DOMContentLoaded', () => renderGallery(true));