const customerData = [
    { nameEn: "Meera Jha", nameHi: "मीरा झा", roleEn: "CEO, MITHILA FOODS", roleHi: "सीईओ, मिथिला फुट", feedbackEn: "Perfect guidance for women entrepreneurs. Best machines.", feedbackHi: "महिला उद्यमियों के लिए बेहतरीन मार्गदर्शन और मशीनें।", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150" },
    { nameEn: "Rajesh Kumar", nameHi: "राजेश कुमार", roleEn: "Rice Mill Owner", roleHi: "राइस मिल मालिक", feedbackEn: "Excellent support for PMFME subsidy and setup.", feedbackHi: "PMFME सब्सिडी और सेटअप के लिए शानदार सहयोग मिला।", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150" },
    { nameEn: "Anil Pathak", nameHi: "अनिल पाठक", roleEn: "MSME Entrepreneur", roleHi: "MSME उद्यमी", feedbackEn: "DPR process was very smooth with them.", feedbackHi: "DPR प्रक्रिया इनके साथ बहुत आसान रही।", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150" },
    { nameEn: "Sandeep Verma", nameHi: "संदीप वर्मा", roleEn: "Solar Tech Owner", roleHi: "सोलर टेक मालिक", feedbackEn: "Zero electricity bill now. Great service!", feedbackHi: "अब बिजली का बिल जीरो है। शानदार सर्विस!", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150" },
    { nameEn: "Priyanka Sharma", nameHi: "प्रियंका शर्मा", roleEn: "Spice Manufacturer", roleHi: "मसाला निर्माता", feedbackEn: "Professional team and timely delivery.", feedbackHi: "प्रोफेशनल टीम और समय पर डिलीवरी।", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150" },
    { nameEn: "Vikram Das", nameHi: "विक्रम दास", roleEn: "Entrepreneur", roleHi: "उद्यमी", feedbackEn: "The best experience for scaling my business.", feedbackHi: "मेरे व्यवसाय को बढ़ाने के लिए सबसे अच्छा अनुभव।", img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=150" },
    { nameEn: "Rahul Verma", nameHi: "राहुल वर्मा", roleEn: "MD, Solar Tech", roleHi: "एमडी, सोलर टेक", feedbackEn: "High-quality industrial equipment and great support.", feedbackHi: "उच्च गुणवत्ता वाले औद्योगिक उपकरण और शानदार सपोर्ट।", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150" }
];

let feedbackIndex = 0;
let autoSlideInterval;

function initFeedbackCards() {
    const track = document.getElementById('feedback-track');
    if (!track) return;

    track.innerHTML = customerData.map(c => `
        <div class="feedback-card bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-all duration-500 hover:shadow-xl">
            <img src="${c.img}" class="client-img shadow-lg border-4 border-slate-50 flex-shrink-0" alt="Client">
            
            <div class="flex-grow text-center sm:text-left">
                <div class="mb-4">
                    <h4 class="font-black text-slate-900 text-xl uppercase bebas tracking-widest" 
                        data-en="${c.nameEn}" data-hi="${c.nameHi}">${currentLang === 'hi' ? c.nameHi : c.nameEn}</h4>
                    <p class="text-blue-600 text-[10px] font-black uppercase tracking-widest mt-1" 
                       data-en="${c.roleEn}" data-hi="${c.roleHi}">${currentLang === 'hi' ? c.roleHi : c.roleEn}</p>
                </div>
                <p class="text-slate-500 text-sm font-bold leading-relaxed italic pt-4 border-t border-slate-100" 
                   data-en="${c.feedbackEn}" data-hi="${c.feedbackHi}">
                   "${currentLang === 'hi' ? c.feedbackHi : c.feedbackEn}"
                </p>
            </div>
        </div>
    `).join('');
    
    if(window.lucide) lucide.createIcons();
}

function updateSliderPosition() {
    const track = document.getElementById('feedback-track');
    const cards = document.querySelectorAll('.feedback-card');
    if (!track || cards.length === 0) return;

    const gap = 24;
    const cardWidth = cards[0].offsetWidth + gap;
    track.style.transform = `translateX(-${feedbackIndex * cardWidth}px)`;
}

function nextSlide() {
    const visibleCards = window.innerWidth > 1024 ? 2 : 1;
    if (feedbackIndex < customerData.length - visibleCards) {
        feedbackIndex++;
    } else {
        feedbackIndex = 0;
    }
    updateSliderPosition();
    resetAutoSlide();
}

function prevSlide() {
    const visibleCards = window.innerWidth > 1024 ? 2 : 1;
    if (feedbackIndex > 0) {
        feedbackIndex--;
    } else {
        feedbackIndex = customerData.length - visibleCards;
    }
    updateSliderPosition();
    resetAutoSlide();
}

// Auto Slide Controls
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

document.addEventListener('DOMContentLoaded', () => {
    initFeedbackCards();
    startAutoSlide();
});