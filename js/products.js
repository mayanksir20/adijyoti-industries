const productsData = {
    machinery: [
        {
            id: 1,
            nameEn: "Automatic Flour Mill",
            nameHi: "स्वचालित आटा मिल (चक्की)",
            shortEn: "PMFME Approved | 5HP Heavy Duty",
            shortHi: "PMFME स्वीकृत | 5HP हैवी ड्यूटी",
            fullEn: "Industrial-grade automatic flour mill with cool-grinding technology. Preserves nutrients and provides high output.",
            fullHi: "कूल-ग्राइंडिंग तकनीक के साथ औद्योगिक आटा मिल। पोषक तत्वों को सुरक्षित रखता है और उच्च उत्पादन देता है।",
            featuresEn: ["5HP Copper Motor", "70kg/hr Capacity", "SS 304 Food Grade", "Low Noise"],
            featuresHi: ["5HP कॉपर मोटर", "70kg/घंटा क्षमता", "SS 304 फूड ग्रेड", "कम शोर"],
            images: [
                "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
                "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
                "https://images.unsplash.com/photo-1581092921461-eab62e92c859?w=800",
                "https://images.unsplash.com/photo-1590959651373-a3db0f38a961?w=800"
            ]
        },
        {
            id: 2,
            nameEn: "Puffed Rice Plant",
            nameHi: "मुरमुरा (लाई) प्लांट",
            shortEn: "Fully Automatic Roaster System",
            shortHi: "पूर्ण स्वचालित रोस्टर सिस्टम",
            fullEn: "Complete solution for puffed rice production. Includes cleaner, roaster, and grader for rural entrepreneurs.",
            fullHi: "मुरमुरा उत्पादन के लिए संपूर्ण समाधान। ग्रामीण उद्यमियों के लिए क्लीनर, रोस्टर और ग्रेडर शामिल है।",
            featuresEn: ["LPG/Biomass Fuel", "200kg/h Output", "Full Automation", "Low Maintenance"],
            featuresHi: ["LPG/बायोमास ईंधन", "200kg/घंटा आउटपुट", "पूर्ण स्वचालन", "कम रखरखाव"],
            images: [
                "https://images.unsplash.com/photo-1558444479-c86e10556181?w=800",
                "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800",
                "https://images.unsplash.com/photo-1569335468143-bc0393282f9d?w=800",
                "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800"
            ]
        },
        {
            id: 3,
            nameEn: "Oil Extraction Machine",
            nameHi: "तेल निकालने की मशीन",
            shortEn: "Cold Press Technology | Multi-seed",
            shortHi: "कोल्ड प्रेस तकनीक | मल्टी-सीड",
            fullEn: "Extract pure oil from mustard, groundnut, and sunflower. Heavy-duty expeller for high recovery rates.",
            fullHi: "सरसों, मूंगफली और सूरजमुखी से शुद्ध तेल निकालें। उच्च रिकवरी दर के लिए हैवी-ड्यूटी एक्सपेलर।",
            featuresEn: ["Cold Press Tech", "High Oil Recovery", "Filter Press Included", "Easy to Clean"],
            featuresHi: ["कोल्ड प्रेस टेक", "उच्च तेल रिकवरी", "फिल्टर प्रेस शामिल", "साफ करने में आसान"],
            images: [
                "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
                "https://images.unsplash.com/photo-1621460245084-378396c0032e?w=800",
                "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=800",
                "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=800"
            ]
        },
        {
            id: 4,
            nameEn: "Spices Grinding Machine",
            nameHi: "मसाला पिसाई मशीन",
            shortEn: "Three Stage Impact Pulverizer",
            shortHi: "थ्री स्टेज इम्पैक्ट पल्वेराइज़र",
            fullEn: "Grind Turmeric, Chilli, and Coriander with ease. Maintains aroma and color of the spices.",
            fullHi: "हल्दी, मिर्च और धनिया आसानी से पीसें। मसालों की खुशबू और रंग बनाए रखता है।",
            featuresEn: ["Micro Grinding", "Dust-Free System", "Compact Design", "Heavy Duty Hammers"],
            featuresHi: ["माइक्रो ग्राइंडिंग", "डस्ट-फ्री सिस्टम", "कॉम्पैक्ट डिजाइन", "हैवी ड्यूटी हैमर्स"],
            images: [
                "https://images.unsplash.com/photo-1532336414038-cf19250c5757?w=800",
                "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800",
                "https://images.unsplash.com/photo-1509358271058-acd22cc93898?w=800",
                "https://images.unsplash.com/photo-1599940824399-b87987cb9723?w=800"
            ]
        },
        {
            id: 5,
            nameEn: "Dals Processing Unit",
            nameHi: "दाल प्रोसेसिंग यूनिट",
            shortEn: "Cleaner, Grader & Polisher",
            shortHi: "क्लीनर, ग्रेडर और पॉलिशर",
            fullEn: "Process Toor, Moong, and Urad dal. Includes grading for uniform quality and polishing for better market value.",
            fullHi: "तूर, मूंग और उड़द दाल को प्रोसेस करें। बेहतर मार्केट वैल्यू के लिए पॉलिशिंग और ग्रेडिंग शामिल है।",
            featuresEn: ["Multi-Grain Support", "High Polishing", "Low Husk Breakage", "Energy Efficient"],
            featuresHi: ["मल्टी-ग्रेन सपोर्ट", "हाई पॉलिशिंग", "कम भूसी टूटना", "ऊर्जा कुशल"],
            images: [
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800",
                "https://images.unsplash.com/photo-1547514701-42782101795e?w=800",
                "https://images.unsplash.com/photo-1585994424789-13763f14292c?w=800",
                "https://images.unsplash.com/photo-1495107333211-e122444ee258?w=800"
            ]
        },
        {
            id: 6,
            nameEn: "Rice Mill Machine",
            nameHi: "राइस मिल मशीन",
            shortEn: "Combined Hulling & Polishing",
            shortHi: "संयुक्त हलिंग और पॉलिशिंग",
            fullEn: "Small scale rice milling solution. Removes husk and polishes rice in a single pass.",
            fullHi: "लघु स्तरीय चावल मिलिंग समाधान। एक ही बार में भूसी हटाता है और चावल को पॉलिश करता है।",
            featuresEn: ["High Recovery", "Rubber Roll Tech", "Compact Size", "Easy Operation"],
            featuresHi: ["उच्च रिकवरी", "रबर रोल टेक", "कॉम्पैक्ट आकार", "आसान संचालन"],
            images: [
                "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?w=800",
                "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800",
                "https://images.unsplash.com/photo-1568241723642-990059ec845a?w=800",
                "https://images.unsplash.com/photo-1508615039623-a25651266c92?w=800"
            ]
        },
        {
            id: 7,
            nameEn: "Potato Chips Plant",
            nameHi: "आलू चिप्स प्लांट",
            shortEn: "Slicing, Frying & Seasoning",
            shortHi: "स्लाइसिंग, फ्राइंग और सीजनिंग",
            fullEn: "Semi-automatic plant for making potato chips and snacks. Includes peeler, slicer, and fryer.",
            fullHi: "आलू चिप्स और स्नैक्स बनाने के लिए अर्ध-स्वचालित प्लांट। इसमें पीलर, स्लाइसर और फ्रायर शामिल हैं।",
            featuresEn: ["Adjustable Slicing", "Uniform Frying", "SS 304 Construction", "High Profit"],
            featuresHi: ["एडजस्टेबल स्लाइसिंग", "समान फ्राइंग", "SS 304 बनावट", "उच्च लाभ"],
            images: [
                "https://images.unsplash.com/photo-1566478431375-7042f10aa4cd?w=800",
                "https://images.unsplash.com/photo-1528751004905-23f5a72a2e26?w=800",
                "https://images.unsplash.com/photo-1613967193442-19216300d52e?w=800",
                "https://images.unsplash.com/photo-1621447508373-1f1227ca0835?w=800"
            ]
        },
        {
            id: 8,
            nameEn: "Noodle Making Machine",
            nameHi: "नूडल्स बनाने की मशीन",
            shortEn: "Hygienic Extrusion Process",
            shortHi: "हाइजीनिक एक्सट्रूज़न प्रक्रिया",
            fullEn: "Automatic noodle and pasta making machine for food startups. Precise cutting and mixing.",
            fullHi: "फूड स्टार्टअप्स के लिए स्वचालित नूडल और पास्ता बनाने की मशीन। सटीक कटिंग और मिक्सिंग।",
            featuresEn: ["Multiple Dies", "Auto-Drying Opt", "Easy Maintenance", "Food Grade"],
            featuresHi: ["मल्टीपल डाइस", "ऑटो-ड्राइंग विकल्प", "आसान रखरखाव", "फूड ग्रेड"],
            images: [
                "https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=800",
                "https://images.unsplash.com/photo-1552611052-33e04de081de?w=800",
                "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
                "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800"
            ]
        },
        {
            id: 9,
            nameEn: "Cattle Feed Plant",
            nameHi: "पशु आहार प्लांट",
            shortEn: "Pellet Making for Dairy Farms",
            shortHi: "डेयरी फार्म के लिए पेलेट मेकिंग",
            fullEn: "Produce high-quality cattle feed pellets. Mixes grains, husk, and minerals perfectly.",
            fullHi: "उच्च गुणवत्ता वाले पशु आहार पेलेट्स का उत्पादन करें। अनाज, भूसी और खनिजों को पूरी तरह मिलाता है।",
            featuresEn: ["Adjustable Pellet Size", "High Durability", "Uniform Mixing", "Cost Effective"],
            featuresHi: ["एडजस्टेबल पेलेट साइज", "उच्च स्थायित्व", "समान मिक्सिंग", "लागत प्रभावी"],
            images: [
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
                "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=800",
                "https://images.unsplash.com/photo-1495107333211-e122444ee258?w=800",
                "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800"
            ]
        },
        {
            id: 10,
            nameEn: "Fruit Juice Extractor",
            nameHi: "फलों का रस निकालने वाली मशीन",
            shortEn: "Screw Type Juice Press",
            shortHi: "स्क्रू टाइप जूस प्रेस",
            fullEn: "Cold press juicer for Pineapple, Orange, and Grapes. Extracts maximum juice with dry pulp.",
            fullHi: "अनानास, संतरा और अंगूर के लिए कोल्ड प्रेस जूसर। सूखे गूदे के साथ अधिकतम रस निकालता है।",
            featuresEn: ["Stainless Steel", "Continuous Output", "Separates Seeds", "High Yield"],
            featuresHi: ["स्टेनलेस स्टील", "निरंतर आउटपुट", "बीज अलग करता है", "उच्च पैदावार"],
            images: [
                "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=800",
                "https://images.unsplash.com/photo-1574316071802-0d684efa7bf5?w=800",
                "https://images.unsplash.com/photo-1622597467827-439935b16c57?w=800",
                "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=800"
            ]
        }
    ],
    solar: [
        {
            id: 101,
            nameEn: "Mono Perc Solar Panel",
            nameHi: "मोनो पर्क सोलर पैनल",
            shortEn: "550W High Efficiency | Half-Cut",
            shortHi: "550W उच्च दक्षता | हाफ-कट",
            fullEn: "Tier-1 solar panels compliant with PM-Surya Ghar Yojana. High performance even in low light.",
            fullHi: "पीएम-सूर्य घर योजना के अनुरूप टियर-1 सोलर पैनल। कम रोशनी में भी उच्च प्रदर्शन।",
            featuresEn: ["21.5% Efficiency", "144 Half-Cut Cells", "Weather Proof IP68", "25yr Warranty"],
            featuresHi: ["21.5% दक्षता", "144 हाफ-कट सेल्स", "वेदर प्रूफ IP68", "25 साल वारंटी"],
            images: [
                "https://images.unsplash.com/photo-1509391366360-fe5bb584852a?w=800",
                "https://images.unsplash.com/photo-1508514177221-18d14273d822?w=800",
                "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?w=800",
                "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800"
            ]
        },
        {
            id: 102,
            nameEn: "On-Grid Solar Inverter",
            nameHi: "ऑन-ग्रिड सोलर इन्वर्टर",
            shortEn: "Pure Sine Wave | MPPT Tech",
            shortHi: "प्योर साइन वेव | MPPT टेक",
            fullEn: "Connect your solar system directly to the grid. Export excess power and reduce bills.",
            fullHi: "अपने सोलर सिस्टम को सीधे ग्रिड से जोड़ें। अतिरिक्त बिजली निर्यात करें और बिल कम करें।",
            featuresEn: ["Dual MPPT Trackers", "Remote Monitoring", "High Surge Rating", "Zero Maintenance"],
            featuresHi: ["डुअल MPPT ट्रैकर्स", "रिमोट मॉनिटरिंग", "हाई सर्ज रेटिंग", "जीरो मेंटेनेंस"],
            images: [
                "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800",
                "https://images.unsplash.com/photo-1548337138-e87d889cc369?w=800",
                "https://images.unsplash.com/photo-1592833159057-6fdc2a5dc02f?w=800",
                "https://images.unsplash.com/photo-1605980413988-9ff24c537935?w=800"
            ]
        },
        {
            id: 103,
            nameEn: "Lithium Ferro Phosphate (LFP) Battery",
            nameHi: "लिथियम फेरो फॉस्फेट बैटरी",
            shortEn: "48V 100Ah | Long Cycle Life",
            shortHi: "48V 100Ah | लंबी साइकिल लाइफ",
            fullEn: "Modern energy storage solution. Faster charging and longer life compared to lead-acid batteries.",
            fullHi: "आधुनिक ऊर्जा भंडारण समाधान। लेड-एसिड बैटरी की तुलना में तेज़ चार्जिंग और लंबी लाइफ।",
            featuresEn: ["6000+ Cycles", "BMS Protection", "Lightweight Design", "Fast Charging"],
            featuresHi: ["6000+ साइकिल", "BMS सुरक्षा", "हल्का डिजाइन", "फास्ट चार्जिंग"],
            images: [
                "https://images.unsplash.com/photo-1566353003205-09689694b297?w=800",
                "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800",
                "https://images.unsplash.com/photo-1611331481116-3ba008ce9629?w=800",
                "https://images.unsplash.com/photo-1569163139394-04663f707f5a?w=800"
            ]
        },
        {
            id: 104,
            nameEn: "Solar Water Pump",
            nameHi: "सोलर वाटर पंप",
            shortEn: "3HP Submersible | BLDC Motor",
            shortHi: "3HP सबमर्सिबल | BLDC मोटर",
            fullEn: "Reliable irrigation solution for farmers. Works without grid electricity.",
            fullHi: "किसानों के लिए विश्वसनीय सिंचाई समाधान। बिना ग्रिड बिजली के काम करता है।",
            featuresEn: ["High Flow Rate", "Dry Run Protection", "Low Maintenance", "High Durability"],
            featuresHi: ["हाई फ्लो रेट", "ड्राई रन प्रोटेक्शन", "कम रखरखाव", "उच्च स्थायित्व"],
            images: [
                "https://images.unsplash.com/photo-1473976339452-9543887224f8?w=800",
                "https://images.unsplash.com/photo-1495107333211-e122444ee258?w=800",
                "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800",
                "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800"
            ]
        },
        {
            id: 105,
            nameEn: "Solar Street Light",
            nameHi: "सोलर स्ट्रीट लाइट",
            shortEn: "All-in-One LED | Motion Sensor",
            shortHi: "ऑल-इन-वन एलईडी | मोशन सेंसर",
            fullEn: "Automatic lighting for roads and campuses. Fully solar integrated with battery and panel.",
            fullHi: "सड़कों और परिसरों के लिए स्वचालित प्रकाश व्यवस्था। बैटरी और पैनल के साथ पूर्णतः सोलर इंटीग्रेटेड।",
            featuresEn: ["Auto On/Off", "Motion Sensor", "IP65 Waterproof", "High Brightness"],
            featuresHi: ["ऑटो ऑन/ऑफ", "मोशन सेंसर", "IP65 वाटरप्रूफ", "उच्च चमक"],
            images: [
                "https://images.unsplash.com/photo-1471342317424-4b1070621379?w=800",
                "https://images.unsplash.com/photo-1520690216127-63a5893d115b?w=800",
                "https://images.unsplash.com/photo-1533035353720-f1c6a75cd8ab?w=800",
                "https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=800"
            ]
        },
        {
            id: 106,
            nameEn: "Hybrid Solar Inverter",
            nameHi: "हाइब्रिड सोलर इन्वर्टर",
            shortEn: "Grid + Battery Backup",
            shortHi: "ग्रिड + बैटरी बैकअप",
            fullEn: "Best of both worlds. Works with grid and stores power for night use.",
            fullHi: "ग्रिड के साथ काम करता है और रात में उपयोग के लिए बिजली स्टोर करता है।",
            featuresEn: ["Smart Load Management", "LCD Display", "Pure Sine Wave", "Solar Priority Mode"],
            featuresHi: ["स्मार्ट लोड प्रबंधन", "एलसीडी डिस्प्ले", "प्योर साइन वेव", "सोलर प्रायोरिटी मोड"],
            images: [
                "https://images.unsplash.com/photo-1569000971932-6f3630f59267?w=800",
                "https://images.unsplash.com/photo-1595183300806-039c9f7a9ca9?w=800",
                "https://images.unsplash.com/photo-1594818379496-da1e345b0ded?w=800",
                "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?w=800"
            ]
        },
        {
            id: 107,
            nameEn: "Solar Structure (Mounting)",
            nameHi: "सोलर स्ट्रक्चर (माउंटिंग)",
            shortEn: "Hot Dip Galvanized | Wind Resistant",
            shortHi: "हॉट डिप गैल्वेनाइज्ड | विंड रेजिस्टेंट",
            fullEn: "Strong mounting solution for solar panels. Designed for high wind speed and 25 years life.",
            fullHi: "सोलर पैनलों के लिए मजबूत माउंटिंग समाधान। तेज़ हवा की गति और 25 साल की लाइफ के लिए डिज़ाइन।",
            featuresEn: ["Rust Proof", "Pre-Fabricated", "Adjustable Angle", "Universal Fit"],
            featuresHi: ["जंग प्रूफ", "प्री-फैब्रिकेटेड", "एडजस्टेबल एंगल", "यूनिवर्सल फिट"],
            images: [
                "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?w=800",
                "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=800",
                "https://images.unsplash.com/photo-1508514177221-18d14273d822?w=800",
                "https://images.unsplash.com/photo-1559302995-f09fb992160d?w=800"
            ]
        },
        {
            id: 108,
            nameEn: "DC Combiner Box",
            nameHi: "डीसी कंबाइनर बॉक्स",
            shortEn: "Protection for PV Array",
            shortHi: "पीवी ऐरे के लिए सुरक्षा",
            fullEn: "Protects your solar system from surges and short circuits. Essential for system safety.",
            fullHi: "आपके सोलर सिस्टम को सर्ज और शॉर्ट सर्किट से बचाता है। सिस्टम सुरक्षा के लिए आवश्यक।",
            featuresEn: ["SPD Protection", "DC MCB Included", "IP66 Enclosure", "Cable Management"],
            featuresHi: ["SPD सुरक्षा", "DC MCB शामिल", "IP66 एनक्लोजर", "केबल प्रबंधन"],
            images: [
                "https://images.unsplash.com/photo-1558444479-c86e10556181?w=800",
                "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800",
                "https://images.unsplash.com/photo-1569335468143-bc0393282f9d?w=800",
                "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800"
            ]
        },
        {
            id: 109,
            nameEn: "Bifacial Solar Panel",
            nameHi: "बाइफेशियल सोलर पैनल",
            shortEn: "Double Sided Power Generation",
            shortHi: "दो तरफा बिजली उत्पादन",
            fullEn: "Generates power from both sides. Extra 10-20% output from ground reflection.",
            fullHi: "दोनों तरफ से बिजली पैदा करता है। जमीनी परावर्तन से अतिरिक्त 10-20% आउटपुट।",
            featuresEn: ["Higher ROI", "Glass-on-Glass Tech", "Enhanced Durability", "Modern Aesthetic"],
            featuresHi: ["उच्च ROI", "ग्लास-ऑन-ग्लास टेक", "बेहतर स्थायित्व", "आधुनिक डिजाइन"],
            images: [
                "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800",
                "https://images.unsplash.com/photo-1509391366360-fe5bb584852a?w=800",
                "https://images.unsplash.com/photo-1508514177221-18d14273d822?w=800",
                "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e2?w=800"
            ]
        },
        {
            id: 110,
            nameEn: "Solar Water Heater",
            nameHi: "सोलर वाटर हीटर",
            shortEn: "Vacuum Tube Tech | Hot Water 24/7",
            shortHi: "वैक्यूम ट्यूब टेक | 24/7 गर्म पानी",
            fullEn: "Zero cost hot water for homes and hotels. Uses sunlight to heat water effectively.",
            fullHi: "घरों और होटलों के लिए जीरो कॉस्ट गर्म पानी। प्रभावी ढंग से पानी गर्म करने के लिए सूरज की रोशनी का उपयोग करता है।",
            featuresEn: ["Insulated Tank", "Easy Installation", "Save Electricity", "Long Life"],
            featuresHi: ["इन्सुलेटेड टैंक", "आसान इंस्टॉलेशन", "बिजली बचाएं", "लंबी लाइफ"],
            images: [
                "https://images.unsplash.com/photo-1605980413988-9ff24c537935?w=800",
                "https://images.unsplash.com/photo-1611331481116-3ba008ce9629?w=800",
                "https://images.unsplash.com/photo-1569163139394-04663f707f5a?w=800",
                "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800"
            ]
        }
    ]
};