// Prevajanje spletne strani
const translations = {
    sl: {
        homeButton: "Domov",
        aboutUsButton: "O nas",
        menuButton: "Ponudba",
        galeryButton: "Galerija",
        title: "Woody's Restavracija",
        slogan: "Pridi lačen, odidi srečen!",
        aboutUsTitle: "O nas",
        aboutUsText1: "Z bratom sva z združenimi močmi odprla restavracijo, kjer združujeva ljubezen do kakovostne hrane in prijetnega vzdušja. Naša ponudba zajema izvrstne burgerje, okusne testenine, raznovrstne sladice, osvežilne koktejle in še veliko več (Naša ponudba). Verjamemo, da dobra hrana prinaša veselje, zato skrbno izbiramo le najboljše sestavine za vsako jed.",
        aboutUsText2: "Naša restavracija se nahaja v bližini centra Ptuja in nudi prijeten ambient, ki ustvarja občutek domačnosti in topline. Prostori so zasnovani tako, da se pri nas vsak gost počuti sproščeno in dobrodošlo. Poseben poudarek dajemo kakovosti hrane in vrhunski storitvi, da zagotovimo edinstveno izkušnjo za vse naše obiskovalce.",
        aboutUsText3: "Naš kolektiv sestavljajo predvsem prijatelji, kar pripomore k prijaznemu in sproščenemu vzdušju v lokalu. Vsi zaposleni delijo najino strast do kulinarike in prijazne postrežbe. Skupaj ustvarjamo restavracijo, kjer se gostje vedno radi vračajo.",
        showMore: "Pokaži več",
        showLess: "Pokaži majn",
        menuTitle: "Ponudba",
        workTimeTitle: "Delovni čas",
        monday: "Ponedeljek:",
        tuesday: "Torek:",
        wednesday: "Sreda:",
        thursday: "Četrtek:",
        friday: "Petek:",
        saturday: "Sobota:",
        sunday: "Nedelja:",
        closed: "Zaprto",
        closed2: "Zaprto",
        workTimeNote: "Opomba: Kuhinja se zapre eno uro pred zaprtjem lokala.",
        wagyuTitle: "Striploin Wagyu A5 iz Japonske, Kagoshima",
        wagyuText1: "Striploin Wagyu A5 iz Japonske, regije Kagoshima, je eno najbolj prestižnih in iskanih vrst mesa na svetu. Ponaša se z izjemno marmoriranostjo, kar pomeni, da je meso prepleteno z nežnimi plastmi maščobe, ki mu dajejo bogat, sočen okus. Ta stopnja marmoriranosti je eden glavnih razlogov, zakaj Wagyu A5 velja za vrhunski gurmanski izdelek.",
        wagyuText2: "Regija Kagoshima na Japonskem je znana po odličnih pogojih za rejo Wagyu goveda. Zaradi blagih klimatskih razmer in visokih standardov v oskrbi živali, meso pridobi edinstveno teksturo in okus. Govedo iz te regije se hrani z izbrano prehrano, kar dodatno vpliva na kakovost mesa.",
        wagyuText3: "Wagyu A5 Striploin ima izjemno mehkobo in se dobesedno topi v ustih. Zaradi visoke vsebnosti maščobe, ki je enakomerno razporejena po mesu, vsak grižljaj prinaša bogato in polno doživetje okusa. Meso je primerno za hitro pripravo na žaru ali v ponvi, kjer se maščoba nežno topi, medtem ko se meso hitro skuha.",
        showMoreWagyu: "Pokaži več",
        wagyuText4: "Za Wagyu krave v regiji Kagoshima skrbijo z izjemno pozornostjo in predanostjo, da zagotovijo najvišjo kakovost mesa. Krave imajo dovolj prostora za gibanje in bivajo v čistih in urejenih okoljih, kjer se lahko sprostijo in razvijajo brez stresa. Pomemben del oskrbe je tudi zagotavljanje ustrezne higiene in stalnega dostopa do sveže vode.",
        wagyuText5: "Prehrana Wagyu krav je skrbno nadzorovana in sestavljena iz posebne mešanice hranil, ki vključuje visokokakovostno zrnje, seno in občasno tudi pivo, kar pripomore k boljšemu okusu in marmoriranosti mesa. Krave pogosto hranijo z roko, kar povečuje njihovo udobje in zmanjšuje stres. Ta skrbno izbrana prehrana je ključna za razvoj edinstvene maščobe, ki daje Wagyu mesu značilno teksturo in okus.",
        wagyuText6: "Poleg prehrane in higiene je pomemben del oskrbe tudi sprostitev in masaža krav, kar pomaga izboljšati cirkulacijo in enakomerno porazdelitev maščobe po telesu. V nekaterih primerih kravam celo predvajajo pomirjujočo glasbo, kar prispeva k njihovemu dobremu počutju. Vse te prakse skupaj ustvarjajo optimalne pogoje za razvoj vrhunskega Wagyu mesa, ki je cenjeno po vsem svetu.",
        showLessWagyu: "Pokaži majn",
        image1: "images/menu-slo/1-stran.jpg",
        image2: "images/menu-slo/2-stran.jpg",
        image3: "images/menu-slo/3-stran.jpg",
        image4: "images/menu-slo/4-stran.jpg",
        image5: "images/menu-slo/5-stran.jpg",
        image6: "images/menu-slo/6-stran.jpg",
        image7: "images/menu-slo/7-stran.jpg",
        image8: "images/menu-slo/8-stran.jpg",
        image9: "images/menu-slo/9-stran.jpg",
        image10: "images/menu-slo/10-stran.jpg",
        image11: "images/menu-slo/11-stran.jpg",
        image12: "images/menu-slo/12-stran.jpg",
        image13: "images/menu-slo/13-stran.jpg",
        image14: "images/menu-slo/14-stran.jpg",
        image15: "images/menu-slo/15-stran.jpg",
        image16: "images/menu-slo/16-stran.jpg",
        image17: "images/menu-slo/17-stran.jpg",
        image18: "images/menu-slo/18-stran.jpg",
        image19: "images/menu-slo/19-stran.jpg",
        image20: "images/menu-slo/20-stran.jpg",
        image21: "images/menu-slo/21-stran.jpg",
        image22: "images/menu-slo/22-stran.jpg",
        image23: "images/menu-slo/23-stran.jpg",
        image24: "images/menu-slo/24-stran.jpg",
        image25: "images/menu-slo/25-stran.jpg",
    },
    en: {
        homeButton: "Home",
        aboutUsButton: "About Us",
        menuButton: "Menu",
        galeryButton: "Gallery",
        title: "Woody's Restaurant",
        slogan: "Come hungry, leave happy!",
        aboutUsTitle: "About Us",
        aboutUsText1: "My brother and I have opened a restaurant with a shared passion for quality food and a pleasant atmosphere. Our offer includes excellent burgers, delicious pasta, various desserts, refreshing cocktails, and much more (Our Menu). We believe that good food brings joy, which is why we carefully select only the best ingredients for every dish.",
        aboutUsText2: "Our restaurant is located near the center of Ptuj and offers a pleasant ambiance that creates a sense of home and warmth. The spaces are designed to ensure that every guest feels relaxed and welcome. We place special emphasis on the quality of food and top-notch service to provide a unique experience for all our visitors.",
        aboutUsText3: "Our team is mostly made up of friends, which contributes to the friendly and relaxed atmosphere in the restaurant. All employees share our passion for culinary arts and friendly service. Together, we create a restaurant where guests always love to return.",
        showMore: "Show more",
        showLess: "Show less",
        menuTitle: "Menu",
        workTimeTitle: "Working Hours",
        monday: "Monday:",
        tuesday: "Tuesday:",
        wednesday: "Wednesday:",
        thursday: "Thursday:",
        friday: "Friday:",
        saturday: "Saturday:",
        sunday: "Sunday:",
        closed: "Closed",
        closed2: "Closed",
        workTimeNote: "Note: The kitchen closes one hour before closing time.",
        wagyuTitle: "Striploin Wagyu A5 Japan, Kagoshima",
        wagyuText1: "Striploin Wagyu A5 from Japan’s Kagoshima region is one of the most prestigious and sought-after types of meat in the world. It boasts exceptional marbling, meaning the meat is interlaced with delicate layers of fat that give it a rich, juicy flavor. This level of marbling is one of the main reasons why Wagyu A5 is considered a top gourmet product.",
        wagyuText2: "The Kagoshima region of Japan is known for its excellent conditions for raising Wagyu cattle. Due to the mild climate and high standards of animal care, the meat develops a unique texture and flavor. The cattle from this region are fed a carefully selected diet, which further enhances the quality of the meat.",
        wagyuText3: "Wagyu A5 Striploin has incredible tenderness and literally melts in your mouth. Due to its high fat content, which is evenly distributed throughout the meat, each bite delivers a rich and full flavor experience. The meat is ideal for quick preparation on the grill or in a pan, where the fat gently melts while the meat cooks quickly.",
        showMoreWagyu: "Show more",
        wagyuText4: "Wagyu cows in the Kagoshima region are cared for with exceptional attention and dedication to ensure the highest quality meat. The cows have plenty of space to move and live in clean and well-maintained environments where they can relax and develop without stress. An important part of their care is ensuring proper hygiene and constant access to fresh water.",
        wagyuText5: "The diet of Wagyu cows is carefully monitored and consists of a special blend of nutrients, including high-quality grains, hay, and occasionally even beer, which helps improve the taste and marbling of the meat. The cows are often hand-fed, which increases their comfort and reduces stress. This carefully selected diet is key to developing the unique fat that gives Wagyu beef its distinctive texture and flavor.",
        wagyuText6: "In addition to diet and hygiene, relaxation and massage of the cows are also important parts of their care, helping to improve circulation and the even distribution of fat throughout the body. In some cases, soothing music is even played to the cows, contributing to their overall well-being. All of these practices together create the optimal conditions for developing premium Wagyu beef, which is highly valued worldwide.",
        showLessWagyu: "Show less",
        image1: "images/menu-eng/1-page.jpg",
        image2: "images/menu-eng/2-page.jpg",
        image3: "images/menu-eng/3-page.jpg",
        image4: "images/menu-eng/4-page.jpg",
        image5: "images/menu-eng/5-page.jpg",
        image6: "images/menu-eng/6-page.jpg",
        image7: "images/menu-eng/7-page.jpg",
        image8: "images/menu-eng/8-page.jpg",
        image9: "images/menu-eng/9-page.jpg",
        image10: "images/menu-eng/10-page.jpg",
        image11: "images/menu-eng/11-page.jpg",
        image12: "images/menu-eng/12-page.jpg",
        image13: "images/menu-eng/13-page.jpg",
        image14: "images/menu-eng/14-page.jpg",
        image15: "images/menu-eng/15-page.jpg",
        image16: "images/menu-eng/16-page.jpg",
        image17: "images/menu-eng/17-page.jpg",
        image18: "images/menu-eng/18-page.jpg",
        image19: "images/menu-eng/19-page.jpg",
        image20: "images/menu-eng/20-page.jpg",
        image21: "images/menu-eng/21-page.jpg",
        image22: "images/menu-eng/22-page.jpg",
        image23: "images/menu-eng/23-page.jpg",
        image24: "images/menu-eng/24-page.jpg",
        image25: "images/menu-eng/25-page.jpg",
    },
    de: {
        homeButton: "Startseite",
        aboutUsButton: "Über uns",
        menuButton: "Menü",
        galeryButton: "Galerie",
        title: "Woody's Restaurant",
        slogan: "Komm hungrig, geh glücklich!",
        aboutUsTitle: "Über uns",
        aboutUsText1: "Mein Bruder und ich haben gemeinsam ein Restaurant eröffnet, in dem wir unsere Liebe zu qualitativ hochwertigem Essen und einer angenehmen Atmosphäre vereinen. Unser Angebot umfasst hervorragende Burger, leckere Pasta, verschiedene Desserts, erfrischende Cocktails und vieles mehr (Unser Angebot). Wir glauben, dass gutes Essen Freude bringt, daher wählen wir für jedes Gericht nur die besten Zutaten aus.",
        aboutUsText2: "Unser Restaurant befindet sich in der Nähe des Zentrums von Ptuj und bietet ein angenehmes Ambiente, das ein Gefühl von Zuhause und Wärme vermittelt. Die Räumlichkeiten sind so gestaltet, dass sich jeder Gast bei uns entspannt und willkommen fühlt. Wir legen besonderen Wert auf die Qualität der Speisen und erstklassigen Service, um allen unseren Besuchern ein einzigartiges Erlebnis zu bieten.",
        aboutUsText3: "Unser Team besteht hauptsächlich aus Freunden, was zur freundlichen und entspannten Atmosphäre im Lokal beiträgt. Alle Mitarbeiter teilen unsere Leidenschaft für Kulinarik und freundlichen Service. Gemeinsam schaffen wir ein Restaurant, in das die Gäste immer gerne zurückkehren.",
        showMore: "Mehr anzeigen",
        showLess: "Weniger anzeigen",
        menuTitle: "Menü",
        workTimeTitle: "Öffnungszeiten",
        monday: "Montag:",
        tuesday: "Dienstag:",
        wednesday: "Mittwoch:",
        thursday: "Donnerstag:",
        friday: "Freitag:",
        saturday: "Samstag:",
        sunday: "Sonntag:",
        closed: "Geschlossen",
        closed2: "Geschlossen",
        workTimeNote: "Hinweis: Die Küche schließt eine Stunde vor der Schließung.",
        wagyuTitle: "Striploin Wagyu A5 Japan, Kagoshima",
        wagyuText1: "Striploin Wagyu A5 aus der japanischen Region Kagoshima ist eines der prestigeträchtigsten und begehrtesten Fleischsorten der Welt. Es zeichnet sich durch eine außergewöhnliche Marmorierung aus, was bedeutet, dass das Fleisch mit feinen Fettschichten durchzogen ist, die ihm einen reichen, saftigen Geschmack verleihen. Dieses Maß an Marmorierung ist einer der Hauptgründe, warum Wagyu A5 als Spitzenprodukt der Gourmetküche gilt.",
        wagyuText2: "Die Region Kagoshima in Japan ist bekannt für ihre hervorragenden Bedingungen zur Aufzucht von Wagyu-Rindern. Dank des milden Klimas und der hohen Standards in der Tierpflege entwickelt das Fleisch eine einzigartige Textur und einen besonderen Geschmack. Das Vieh aus dieser Region wird mit einer sorgfältig ausgewählten Ernährung gefüttert, was die Fleischqualität zusätzlich verbessert.",
        wagyuText3: "Wagyu A5 Striploin hat eine unglaubliche Zartheit und schmilzt buchstäblich im Mund. Aufgrund seines hohen Fettgehalts, der gleichmäßig im Fleisch verteilt ist, liefert jeder Bissen ein reiches und volles Geschmackserlebnis. Das Fleisch eignet sich ideal für die schnelle Zubereitung auf dem Grill oder in der Pfanne, wo das Fett sanft schmilzt, während das Fleisch schnell gegart wird.",
        showMoreWagyu: "Mehr anzeigen",
        wagyuText4: "Wagyu-Kühe in der Region Kagoshima werden mit außergewöhnlicher Aufmerksamkeit und Hingabe gepflegt, um die höchste Fleischqualität zu gewährleisten. Die Kühe haben viel Platz zum Bewegen und leben in sauberen und gepflegten Umgebungen, in denen sie sich ohne Stress entspannen und entwickeln können. Ein wichtiger Teil ihrer Pflege ist die Sicherstellung der richtigen Hygiene und des ständigen Zugangs zu frischem Wasser.",
        wagyuText5: "Die Ernährung der Wagyu-Kühe wird sorgfältig überwacht und besteht aus einer speziellen Mischung von Nährstoffen, darunter hochwertiges Getreide, Heu und gelegentlich sogar Bier, was den Geschmack und die Marmorierung des Fleisches verbessert. Die Kühe werden oft von Hand gefüttert, was ihren Komfort erhöht und den Stress verringert. Diese sorgfältig ausgewählte Ernährung ist der Schlüssel zur Entwicklung des einzigartigen Fetts, das dem Wagyu-Rindfleisch seine charakteristische Textur und seinen Geschmack verleiht.",
        wagyuText6: "Neben Ernährung und Hygiene sind auch Entspannung und Massage der Kühe wichtige Bestandteile ihrer Pflege, da sie helfen, die Durchblutung zu verbessern und das Fett gleichmäßig im Körper zu verteilen. In einigen Fällen wird den Kühen sogar beruhigende Musik vorgespielt, was zu ihrem allgemeinen Wohlbefinden beiträgt. All diese Praktiken zusammen schaffen optimale Bedingungen für die Entwicklung des hochwertigen Wagyu-Fleisches, das weltweit sehr geschätzt wird.",
        showLessWagyu: "Weniger anzeigen",
        image1: "images/menu-de/1-seite.jpg",
        image2: "images/menu-de/2-seite.jpg",
        image3: "images/menu-de/3-seite.jpg",
        image4: "images/menu-de/4-seite.jpg",
        image5: "images/menu-de/5-seite.jpg",
        image6: "images/menu-de/6-seite.jpg",
        image7: "images/menu-de/7-seite.jpg",
        image8: "images/menu-de/8-seite.jpg",
        image9: "images/menu-de/9-seite.jpg",
        image10: "images/menu-de/10-seite.jpg",
        image11: "images/menu-de/11-seite.jpg",
        image12: "images/menu-de/12-seite.jpg",
        image13: "images/menu-de/13-seite.jpg",
        image14: "images/menu-de/14-seite.jpg",
        image15: "images/menu-de/15-seite.jpg",
        image16: "images/menu-de/16-seite.jpg",
        image17: "images/menu-de/17-seite.jpg",
        image18: "images/menu-de/18-seite.jpg",
        image19: "images/menu-de/19-seite.jpg",
        image20: "images/menu-de/20-seite.jpg",
        image21: "images/menu-de/21-seite.jpg",
        image22: "images/menu-de/22-seite.jpg",
        image23: "images/menu-de/23-seite.jpg",
        image24: "images/menu-de/24-seite.jpg",
        image25: "images/menu-de/25-seite.jpg",
    }
};

// Dropdown navigation bar menu links
document.getElementById("dropdown-button").addEventListener("click", function() {
    var navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});

// Show more and show less functionality for the "About Us" section
function showMoreAboutUs() {
    document.getElementById("aboutUsText2").classList.remove("hidden");
    document.getElementById("aboutUsText3").classList.remove("hidden");
    document.getElementById("showMore").classList.add("hidden");
    document.getElementById("showLess").classList.remove("hidden");
}

function showLessAboutUs() {
    document.getElementById("aboutUsText2").classList.add("hidden");
    document.getElementById("aboutUsText3").classList.add("hidden");
    document.getElementById("showLess").classList.add("hidden");
    document.getElementById("showMore").classList.remove("hidden");
}

document.getElementById("showMore").addEventListener("click", function(event) {
    event.preventDefault();
    showMoreAboutUs();
});

document.getElementById("showLess").addEventListener("click", function(event) {
    event.preventDefault();
    showLessAboutUs();
});

// Show more and show less functionality for the "Wagyu" section
document.addEventListener("DOMContentLoaded", function() {
    const showMoreLinkWagyu = document.getElementById("showMoreWagyu");
    const showLessLinkWagyu = document.getElementById("showLessWagyu");
    const wagyuParagraphs = document.querySelectorAll("#wagyu .display-text.hidden");

    showMoreLinkWagyu.addEventListener("click", function(e) {
        e.preventDefault();
        wagyuParagraphs.forEach((p) => {
            p.classList.remove("hidden");
        });
        showMoreLinkWagyu.classList.add("hidden");
        showLessLinkWagyu.classList.remove("hidden");
    });

    showLessLinkWagyu.addEventListener("click", function(e) {
        e.preventDefault();
        wagyuParagraphs.forEach((p) => {
            p.classList.add("hidden");
        });
        showLessLinkWagyu.classList.add("hidden");
        showMoreLinkWagyu.classList.remove("hidden");
    });
});

// Function to update the text content based on the selected language
function updateLanguage(lang) {
    const elementsToTranslate = {
        homeButton: document.getElementById("homeButton"),
        aboutUsButton: document.getElementById("aboutUsButton"),
        menuButton: document.getElementById("menuButton"),
        galeryButton: document.getElementById("galeryButton"),
        title: document.getElementById("title"),
        slogan: document.getElementById("slogan"),
        aboutUsTitle: document.getElementById("aboutUsTitle"),
        aboutUsText1: document.getElementById("aboutUsText1"),
        aboutUsText2: document.getElementById("aboutUsText2"),
        aboutUsText3: document.getElementById("aboutUsText3"),
        showMore: document.getElementById("showMore"),
        showLess: document.getElementById("showLess"),
        menuTitle: document.getElementById("menuTitle"),
        workTimeTitle: document.getElementById("workTimeTitle"),
        monday: document.getElementById("monday"),
        tuesday: document.getElementById("tuesday"),
        wednesday: document.getElementById("wednesday"),
        thursday: document.getElementById("thursday"),
        friday: document.getElementById("friday"),
        saturday: document.getElementById("saturday"),
        sunday: document.getElementById("sunday"),
        closed: document.getElementById("closed"),
        closed2: document.getElementById("closed2"),
        workTimeNote: document.getElementById("workTimeNote"),
        wagyuTitle: document.getElementById("wagyuTitle"),
        wagyuText1: document.getElementById("wagyuText1"),
        wagyuText2: document.getElementById("wagyuText2"),
        wagyuText3: document.getElementById("wagyuText3"),
        showMoreWagyu: document.getElementById("showMoreWagyu"),
        wagyuText4: document.getElementById("wagyuText4"),
        wagyuText5: document.getElementById("wagyuText5"),
        wagyuText6: document.getElementById("wagyuText6"),
        showLessWagyu: document.getElementById("showLessWagyu"),
        image1: document.getElementById("image1"),
        image2: document.getElementById("image2"),
        image3: document.getElementById("image3"),
        image4: document.getElementById("image4"),
        image5: document.getElementById("image5"),
        image6: document.getElementById("image6"),
        image7: document.getElementById("image7"),
        image8: document.getElementById("image8"),
        image9: document.getElementById("image9"),
        image10: document.getElementById("image10"),
        image11: document.getElementById("image11"),
        image12: document.getElementById("image12"),
        image13: document.getElementById("image13"),
        image14: document.getElementById("image14"),
        image15: document.getElementById("image15"),
        image16: document.getElementById("image16"),
        image17: document.getElementById("image17"),
        image18: document.getElementById("image18"),
        image19: document.getElementById("image19"),
        image20: document.getElementById("image20"),
        image21: document.getElementById("image21"),
        image22: document.getElementById("image22"),
        image23: document.getElementById("image23"),
        image24: document.getElementById("image24"),
        image25: document.getElementById("image25"),
    };

    Object.keys(elementsToTranslate).forEach(function(key) {
        if (elementsToTranslate[key] && key.startsWith("image")) {
            elementsToTranslate[key].src = translations[lang][key]; // Spremeni pot slike
        } else if (elementsToTranslate[key]) {
            elementsToTranslate[key].textContent = translations[lang][key];
        }
    });
}

// Event listeners for language buttons
document.getElementById("en-btn").addEventListener("click", function() {
    updateLanguage('en');
});

document.getElementById("de-btn").addEventListener("click", function() {
    updateLanguage('de');
});

document.getElementById("primary-lang-btn").addEventListener("click", function() {
    updateLanguage('sl');
});

// Set default language to Slovenian
updateLanguage('sl');

// Navbar getting thinner when scrolling
window.addEventListener('scroll', function() {
    const navBar = document.getElementById('navigation-bar');
    
    if (window.scrollY > 500) {
        navBar.classList.add('scrolled');
    } else {
        navBar.classList.remove('scrolled');
    }
});