const customerData = [
    {
        nameEn: "Sant Ram Verma",
        nameHi: "संत राम वर्मा",
        roleEn: "Progressive Farmer",
        roleHi: "प्रगतिशील किसान",
        locationEn: "Barabanki, UP",
        locationHi: "बाराबंकी, यूपी",
        feedbackEn: "The solar panel setup for my fields has been a game-changer. The motor performance for irrigation is excellent, and I've seen a significant reduction in electricity bills. Highly recommended for farmers!",
        feedbackHi: "अपने खेतों में सोलर पैनल सेटअप लगवाने के बाद सिंचाई का काम बहुत आसान हो गया है। मोटर की परफॉरमेंस बेहतरीन है और बिजली के बिल में भी काफी बचत हो रही है। बाराबंकी के सभी किसान भाइयों के लिए ये बहुत फायदेमंद है।",
        img: "../assets/image/feedbak-sechai1.jfif"
    },
    {
        nameEn: "Rajesh Kumar",
        nameHi: "राजेश कुमार",
        roleEn: "Rice Mill & Tractor Owner",
        roleHi: "राइस मिल और ट्रैक्टर मालिक",
        locationEn: "Gonda, Uttar Pradesh",
        locationHi: "गोंडा, उत्तर प्रदेश",
        feedbackEn: "I started my rice mill and bought a tractor by taking advantage of the PMFME scheme through Adijyoti Industries. Their support in documentation and machinery was excellent. I'm very satisfied!",
        feedbackHi: "मैंने आदिज्योति इंडस्ट्रीज के सहयोग से PMFME योजना का पूरा लाभ लेते हुए अपना राइस मिल और ट्रैक्टर का सेटअप किया है। कागजी कार्रवाई से लेकर मशीनरी तक इनका साथ बहुत शानदार रहा। मैं बहुत खुश हूँ!",
        img: "../assets/image/rici mill tractor.jpg"
    },
    {
        nameEn: "Ram Kishor Jaiswal",
        nameHi: "राम किशोर जायसवाल",
        roleEn: "Progressive Farmer",
        roleHi: "प्रगतिशील किसान",
        locationEn: "Sant Kabir Nagar, UP",
        locationHi: "संत कबीर नगर, यूपी",
        feedbackEn: "With the help of Adijyoti Industries, I installed irrigation pipes under the PMKSY scheme. Now, water reaching every corner of my field is very easy and efficient. Excellent service!",
        feedbackHi: "आदिज्योति इंडस्ट्रीज की मदद से मैंने PMKSY योजना के तहत अपने खेतों में सिंचाई पाइप लगवाया है। अब संत कबीर नगर के मेरे खेतों में पानी पहुँचाना बहुत आसान और प्रभावी हो गया है। शानदार सर्विस!",
        img: "../assets/image/pmksy-1.jpg"
    },
    {
        nameEn: "Rajwati Devi",
        nameHi: "राजवती देवी",
        roleEn: "Micro-Entrepreneur",
        roleHi: "लघु उद्यमी",
        locationEn: "Ambedkar Nagar, UP",
        locationHi: "अम्बेडकर नगर, यूपी",
        feedbackEn: "With the help of Adijyoti Industries, I took a loan under the PMFME scheme and set up a rice mill, flour mill, and oil extraction machine. I am very happy with their full support and guidance in my business!",
        feedbackHi: "मैंने आदिज्योति इंडस्ट्रीज की मदद से PMFME योजना के तहत लोन लेकर राइस मिल, आटा चक्की और तेल पेरने वाली मशीन का सेटअप किया है। अम्बेडकर नगर में मेरे इस व्यापार को शुरू करने में इनका पूरा सहयोग रहा और आज मैं बहुत खुश हूँ!",
        img: "../assets/image/rice mill 2.jpg"
    },
    {
        nameEn: "Malkhan Singh",
        nameHi: "मलखान सिंह",
        roleEn: "Jaggery Plant Owner",
        roleHi: "गन्ना क्रेशर प्लांट मालिक",
        locationEn: "Lakhimpur Kheri, UP",
        locationHi: "लखीमपुर खीरी, यूपी",
        feedbackEn: "With Adijyoti Industries, I set up a Sugarcane Crusher plant using the PMFME scheme and Solar energy. Now my production cost is low, and I am exporting high-quality Jaggery (Gud) to other cities. Great income and support!",
        feedbackHi: "आदिज्योति इंडस्ट्रीज की मदद से मैंने PMFME योजना और सोलर सेटअप के साथ अपना गन्ना क्रेशर प्लांट लगाया है। अब मेरी लागत कम आती है और मैं अपना बनाया गुड़ बाहर के शहरों तक भेजता हूँ। लखीमपुर खीरी में आज मेरी बहुत अच्छी कमाई हो रही है!",
        img: "../assets/image/feedbak-ganna1.png"
    },
    {
        nameEn: "Sabbir Alam",
        nameHi: "सब्बीर आलम",
        roleEn: "Progressive Farmer",
        roleHi: "प्रगतिशील किसान",
        locationEn: "Barabanki, Uttar Pradesh",
        locationHi: "बाराबंकी, उत्तर प्रदेश",
        feedbackEn: "I installed a solar plant through Adijyoti Industries in Barabanki. Now, the cost of irrigating my fields has become zero. It is a very profitable deal for every farmer. Great support!",
        feedbackHi: "मैंने आदिज्योति इंडस्ट्रीज के माध्यम से बाराबंकी में सोलर प्लांट लगवाया है। अब मेरे खेतों की सिंचाई का खर्चा 0 रुपया आ रहा है। यह हर किसान के लिए बहुत ही फायदे का सौदा है। बहुत शानदार सपोर्ट मिला!",
        img: "../assets/image/feedbak-sichai.png"
    },
    {
        nameEn: "Agyaram Rajbhar",
        nameHi: "आज्ञाराम राजभर",
        roleEn: "Progressive Farmer",
        roleHi: "प्रगतिशील किसान",
        locationEn: "Ayodhya, Uttar Pradesh",
        locationHi: "अयोध्या, उत्तर प्रदेश",
        feedbackEn: "With Adijyoti Industries, I installed a Drip Irrigation plant and Solar setup under the PMKSY scheme. Today, I am growing excellent crops in Ayodhya and my neighbors are also inspired by this success. Very happy!",
        feedbackHi: "आदिज्योति इंडस्ट्रीज के साथ जुड़कर मैंने PMKSY योजना के तहत ड्रिप इरिगेशन प्लांट और सोलर सेटअप लगवाया है। आज अयोध्या में मेरी फसल बहुत अच्छी हो रही है और आस-पास के लोग भी इसे देखकर प्रेरित हो रहे हैं। मैं बहुत खुश हूँ!",
        img: "../assets/image/pmksy-2.jpg"
    },
    {
        nameEn: "Nirpendra Verma",
        nameHi: "नृपेंद्र वर्मा",
        roleEn: "Industrial Mill Owner",
        roleHi: "औद्योगिक मिल मालिक",
        locationEn: "Ambedkar Nagar, Uttar Pradesh",
        locationHi: "अम्बेडकर नगर, उत्तर प्रदेश",
        feedbackEn: "I installed a solar plant through Adijyoti Industries to run my composite mill (Flour, Oil, and Rice). Since then, my electricity bill has become zero. It’s the best investment for any mill owner in Ambedkar Nagar!",
        feedbackHi: "मैंने अपनी मिली-जुली मिल (आटा, तेल और राइस मिल) चलाने के लिए आदिज्योति इंडस्ट्रीज के माध्यम से सोलर प्लांट लगवाया है। जब से यह लगा है, मेरा बिजली का बिल 0 आ रहा है। अम्बेडकर नगर के किसी भी मिल मालिक के लिए यह सबसे अच्छा निवेश है!",
        img: "../assets/image/nirpendra-verma.jpeg"
    },

];

let feedbackIndex = 0;
let autoSlideInterval;

function initFeedbackCards() {
    const track = document.getElementById('feedback-track');
    if (!track) return;

    track.innerHTML = customerData.map(c => `
        <div class="feedback-card bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 flex flex-col sm:flex-row items-center sm:items-start gap-8 transition-all duration-500 hover:shadow-xl shrink-0 w-full lg:w-[calc(50%-12px)]">
            <img src="${c.img}" class="client-img shadow-lg border-4 border-slate-50 flex-shrink-0 w-34 h-44 object-cover" alt="Client">
            
            <div class="flex-grow text-center sm:text-left">
                <div class="mb-4">
                    <h4 class="font-black text-slate-900 text-xl uppercase bebas tracking-widest" 
                        data-en="${c.nameEn}" data-hi="${c.nameHi}">${currentLang === 'hi' ? c.nameHi : c.nameEn}</h4>
                    
                    <p class="text-blue-600 text-[10px] font-black uppercase tracking-widest mt-1" 
                       data-en="${c.roleEn}" data-hi="${c.roleHi}">${currentLang === 'hi' ? c.roleHi : c.roleEn}</p>
                    
                    <p class="text-slate-400 text-[9px] font-bold uppercase tracking-wider mt-0.5" 
                       data-en="${c.locationEn}" data-hi="${c.locationHi}">${currentLang === 'hi' ? c.locationHi : c.locationEn}</p>
                </div>
                
                <p class="text-slate-500 text-sm font-bold leading-relaxed italic pt-4 border-t border-slate-100 break-words whitespace-normal" 
                   data-en="${c.feedbackEn}" data-hi="${c.feedbackHi}">
                    "${currentLang === 'hi' ? c.feedbackHi : c.feedbackEn}"
                </p>
            </div>
        </div>
    `).join('');

    if (window.lucide) lucide.createIcons();
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