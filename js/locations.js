const locationData = [
    // DELHI & NCR
    { district: "New Delhi", state: "Delhi", type: "Full Coverage" },
    { district: "North East Delhi", state: "Delhi", type: "NCR Region" },
    { district: "Gurgaon", state: "Haryana", type: "NCR Border" },
    { district: "Faridabad", state: "Haryana", type: "UP Border" },
    { district: "Sonipat", state: "Haryana", type: "UP Border" },
    { district: "Palwal", state: "Haryana", type: "UP Border" },

    // BIHAR BORDER
    { district: "Buxar", state: "Bihar", type: "UP Border" },
    { district: "Siwan", state: "Bihar", type: "UP Border" },
    { district: "Gopalganj", state: "Bihar", type: "UP Border" },
    { district: "Kaimur", state: "Bihar", type: "UP Border" },
    { district: "Rohtas", state: "Bihar", type: "UP Border" },

    // ALL UP DISTRICTS (75)
    ...["Agra", "Aligarh", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Ayodhya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Prayagraj", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"].map(d => ({ district: d, state: "Uttar Pradesh", type: "District Coverage" }))
];

// Districts jo bina search ke hamesha dikhne chahiye
const featuredDistricts = ["Ambedkar Nagar", "Ayodhya", "Barabanki", "Gonda", "Basti", "Azamgarh", "Sultanpur", "Lucknow", "Noida", "Varanasi"];

function displayLocations(data, isSearching = false) {
    const grid = document.getElementById('locationGrid');
    const noResults = document.getElementById('noResults');
    grid.innerHTML = '';

    // Logic: Agar search nahi ho rahi, toh sirf featured waale dikhao
    let displayData = isSearching ? data : data.filter(loc => featuredDistricts.includes(loc.district) || loc.state !== "Uttar Pradesh");

    if (displayData.length === 0) {
        noResults.classList.remove('hidden');
        return;
    } else {
        noResults.classList.add('hidden');
    }

    displayData.forEach(loc => {
        const card = `
            <div class="group bg-white p-5 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex items-center justify-between" data-aos="zoom-in">
                <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-[#1d70d1] group-hover:bg-[#1d70d1] group-hover:text-white transition-colors">
                        <i data-lucide="map-pin" class="w-5 h-5"></i>
                    </div>
                    <div>
                        <h4 class="font-bold text-slate-900 leading-tight">${loc.district}</h4>
                        <p class="text-[10px] font-bold text-slate-400 uppercase tracking-widest">${loc.state} • ${loc.type}</p>
                    </div>
                </div>
                <a href="tel:6387905006" class="w-12 h-12 rounded-full bg-green-50 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all shadow-sm" title="Call Center">
                    <i data-lucide="phone-call" class="w-5 h-5"></i>
                </a>
            </div>
        `;
        grid.innerHTML += card;
    });

    lucide.createIcons();
}

function filterLocations() {
    const searchTerm = document.getElementById('districtSearch').value.toLowerCase();
    const stateValue = document.getElementById('stateFilter').value;

    const filtered = locationData.filter(loc => {
        const matchesSearch = loc.district.toLowerCase().includes(searchTerm);
        const matchesState = stateValue === 'all' || loc.state === stateValue;
        return matchesSearch && matchesState;
    });

    // Agar search box mein kuch likha hai toh true pass karo
    displayLocations(filtered, searchTerm.length > 0 || stateValue !== 'all');
}

document.addEventListener('DOMContentLoaded', () => {
    displayLocations(locationData);
});




