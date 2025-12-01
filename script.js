// ============================================
// Safe Zone - Safe Family Website JavaScript
// Multilingual Support & Interactive Features
// DARK MODE ENHANCED VERSION
// ============================================

// Create Scroll Progress Indicator
document.addEventListener('DOMContentLoaded', () => {
  const progressBar = document.createElement('div');
  progressBar.className = 'scroll-progress';
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    progressBar.style.width = scrolled + '%';
  });
});

// Translations Object
const translations = {
  uz: {
    // Navigation
    nav_home: "Bosh",
    nav_problem: "Muammo",
    nav_team: "Jamoa",
    nav_whyus: "Nega Biz",
    nav_roadmap: "Yo'l",
    nav_plan: "Reja",
    nav_site: "Sayt",

    // Hero Section
    hero_title: "Smart City Security System",
    hero_subtitle: "AI va IoT texnologiyalari bilan jihozlangan aqlli shahar xavfsizlik tizimi. 3D xarita, real-time monitoring va Computer Vision.",
    hero_btn_start: "Batafsil",
    hero_btn_learn: "Saytga O'tish",

    // Problem Section
    problem_title: "Muammo va Yechim",
    problem_subtitle: "Shahar xavfsizligidagi asosiy muammolar va bizning yechimlarimiz",
    problem_card1_title: "Muammo",
    problem_item1: "Yong'in xavfi: Is gazi va yong'inni o'z vaqtida aniqlay olmaslik",
    problem_item2: "Suv toshqini: Suvga tushgan odamni bilmaslik",
    problem_item3: "Xavfsizlik: Shubhali odamlarni aniqlay olmaslik",
    problem_item4: "Monitoring: Markazlashtirilgan tizim yo'qligi",
    problem_card2_title: "Yechim",
    solution_item1: "IoT Datchiklar: Real-time ogohlantirishlar",
    solution_item2: "Computer Vision: Avtomatik aniqlash",
    solution_item3: "Yuz tanish: Shubhali odamlarni aniqlash",
    solution_item4: "3D Xarita: Interaktiv monitoring tizimi",
    problem_adv_title: "Asosiy Afzalliklar",
    adv1_title: "Tezkor Javob",
    adv1_text: "Bir zumda ogohlantirishlar",
    adv2_title: "AI Texnologiyasi",
    adv2_text: "Avtomatik aniqlash",
    adv3_title: "3D Vizualizatsiya",
    adv3_text: "Real-time monitoring",
    adv4_title: "IoT Tarmoq",
    adv4_text: "Aqlli tizim",

    // Team Section
    team_title: "Bizning Jamoa",
    team_subtitle: "5 kishilik professional mutaxassislar jamoasi",
    team1_role: "CEO & Project Manager",
    team1_bio: "5 yillik tajribaga ega PM sohasidagi mutaxassis.",
    team2_role: "CV & AI/ML Engineer",
    team2_bio: "AI, CV va Machine Learning bo'yicha 4 yillik.",
    team3_role: "Designer & Web developer",
    team3_bio: "Frontend bo'yicha 1 yillik tajriba.",
    team4_role: "AT mutaxasis",
    team4_bio: "Computer & AT sohasi ",
    team5_role: "Computer Vision Engineer",
    team5_bio: "Cam meralar bilan ishlash boyicha mutahasis",

    // Why Us Section
    whyus_title: "Nega Bizning Jamoa?",
    whyus_subtitle: "Biz bu muammoni hal qilish uchun eng yaxshi tanlovmiz",
    whyus_card1_title: "Tajriba",
    whyus_card1_text: "AI, IoT, va Computer Vision bo'yicha 5+ yillik tajriba.",
    whyus_card2_title: "Texnologiyalar",
    whyus_card2_text: "Eng so'nggi va samarali texnologiyalar.",
    whyus_card3_title: "Innovatsiya",
    whyus_card3_text: "Yangi innovatsion yondashuvlar.",

    // Roadmap Section
    roadmap_title: "Loyiha Yo'l Xaritasi",
    roadmap_subtitle: "G'oyadan ishga tushirishgacha",
    roadmap_item1_title: "Idea",
    roadmap_item1_status: "Bajarildi",
    roadmap_item2_title: "Prototype",
    roadmap_item2_status: "Bajarildi",
    roadmap_item3_title: "MVP",
    roadmap_item3_status: "Jarayonda",
    roadmap_item4_title: "Launched",
    roadmap_item4_status: "Rejada",

    // Implementation Section
    impl_title: "Amalga Oshirish Rejasi",
    impl_subtitle: "Yechimni qanday amalga oshiramiz",
    impl_step1_title: "IoT Sensor Network Setup",
    impl_step1_text: "Shahar bo'ylab IoT datchiklar tarmog'ini o'rnatish.",
    impl_step2_title: "Computer Vision Integration",
    impl_step2_text: "AI kameralar o'rnatish va CV modellarini deploy qilish.",
    impl_step3_title: "3D Dashboard Development",
    impl_step3_text: "Interaktiv 3D xarita va monitoring dashboard yaratish.",
    impl_tech_title: "Texnologiyalar",
    impl_btn: "Saytga O'tish",
    impl_btn_sub: "To'liq ma'lumot uchun bizning saytimizga tashrif buyuring",

    // Footer
    footer_desc: "AI va IoT texnologiyalari bilan jihozlangan aqlli shahar xavfsizlik tizimi.",
    footer_links: "Havolalar",
    footer_contact: "Bog'lanish",
    footer_rights: "Barcha huquqlar himoyalangan."
  },

  en: {
    // Navigation
    nav_home: "Home",
    nav_problem: "Problem",
    nav_team: "Team",
    nav_whyus: "Why Us",
    nav_roadmap: "Roadmap",
    nav_plan: "Plan",
    nav_site: "Site",

    // Hero Section
    hero_title: "Smart City Security System",
    hero_subtitle: "Smart city security system equipped with AI and IoT technologies. 3D map, real-time monitoring and Computer Vision.",
    hero_btn_start: "Details",
    hero_btn_learn: "Go to Site",

    // Problem Section
    problem_title: "Problem & Solution",
    problem_subtitle: "Main problems in city security and our solutions",
    problem_card1_title: "Problem",
    problem_item1: "Fire Risk: Inability to detect smoke and fire in time",
    problem_item2: "Flood: Not knowing when someone falls into water",
    problem_item3: "Security: Inability to identify suspicious people",
    problem_item4: "Monitoring: Lack of centralized system",
    problem_card2_title: "Solution",
    solution_item1: "IoT Sensors: Real-time alerts",
    solution_item2: "Computer Vision: Automatic detection",
    solution_item3: "Face Recognition: Identifying suspicious people",
    solution_item4: "3D Map: Interactive monitoring system",
    problem_adv_title: "Key Advantages",
    adv1_title: "Rapid Response",
    adv1_text: "Instant alerts",
    adv2_title: "AI Technology",
    adv2_text: "Automatic detection",
    adv3_title: "3D Visualization",
    adv3_text: "Real-time monitoring",
    adv4_title: "IoT Network",
    adv4_text: "Smart system",

    // Team Section
    team_title: "Our Team",
    team_subtitle: "A team of 5 professional specialists",

    team1_role: "CEO & Project Manager",
    team1_bio: "Project management specialist with 5 years of experience.",

    team2_role: "CV & AI/ML Engineer",
    team2_bio: "4 years of experience in AI, Computer Vision, and Machine Learning.",

    team3_role: "Designer & Web Developer",
    team3_bio: "1 year of experience in frontend development.",

    team4_role: "IT Specialist",
    team4_bio: "Specialist in computer systems and IT support.",

    team5_role: "Computer Vision Engineer",
    team5_bio: "Expert in working with camera-based detection systems.",


    // Why Us Section
    whyus_title: "Why Our Team?",
    whyus_subtitle: "We are the best choice to solve this problem",
    whyus_card1_title: "Experience",
    whyus_card1_text: "5+ years experience in AI, IoT, and Computer Vision.",
    whyus_card2_title: "Technologies",
    whyus_card2_text: "Latest and most effective technologies.",
    whyus_card3_title: "Innovation",
    whyus_card3_text: "New innovative approaches.",

    // Roadmap Section
    roadmap_title: "Project Roadmap",
    roadmap_subtitle: "From idea to launch",
    roadmap_item1_title: "Idea",
    roadmap_item1_status: "Completed",
    roadmap_item2_title: "Prototype",
    roadmap_item2_status: "Completed",
    roadmap_item3_title: "MVP",
    roadmap_item3_status: "In Progress",
    roadmap_item4_title: "Launched",
    roadmap_item4_status: "Planned",

    // Implementation Section
    impl_title: "Implementation Plan",
    impl_subtitle: "How we implement the solution",
    impl_step1_title: "IoT Sensor Network Setup",
    impl_step1_text: "Installing IoT sensor network across the city.",
    impl_step2_title: "Computer Vision Integration",
    impl_step2_text: "Installing AI cameras and deploying CV models.",
    impl_step3_title: "3D Dashboard Development",
    impl_step3_text: "Creating interactive 3D map and monitoring dashboard.",
    impl_tech_title: "Technologies",
    impl_btn: "Go to Site",
    impl_btn_sub: "Visit our website for full information",

    // Footer
    footer_desc: "Smart city security system equipped with AI and IoT technologies.",
    footer_links: "Links",
    footer_contact: "Contact",
    footer_rights: "All rights reserved."
  },

  ru: {
    // Navigation
    nav_home: "Главная",
    nav_problem: "Проблема",
    nav_team: "Команда",
    nav_whyus: "Почему Мы",
    nav_roadmap: "Карта",
    nav_plan: "План",
    nav_site: "Сайт",

    // Hero Section
    hero_title: "Smart City Security System",
    hero_subtitle: "Система безопасности умного города с технологиями AI и IoT. 3D карта, мониторинг в реальном времени и Computer Vision.",
    hero_btn_start: "Подробнее",
    hero_btn_learn: "Перейти на сайт",

    // Problem Section
    problem_title: "Проблема и Решение",
    problem_subtitle: "Основные проблемы безопасности города и наши решения",
    problem_card1_title: "Проблема",
    problem_item1: "Риск пожара: Невозможность вовремя обнаружить дым и огонь",
    problem_item2: "Наводнение: Неизвестно, когда кто-то падает в воду",
    problem_item3: "Безопасность: Невозможность выявить подозрительных людей",
    problem_item4: "Мониторинг: Отсутствие централизованной системы",
    problem_card2_title: "Решение",
    solution_item1: "IoT Датчики: Оповещения в реальном времени",
    solution_item2: "Computer Vision: Автоматическое обнаружение",
    solution_item3: "Распознавание лиц: Выявление подозрительных людей",
    solution_item4: "3D Карта: Интерактивная система мониторинга",
    problem_adv_title: "Основные Преимущества",
    adv1_title: "Быстрый Ответ",
    adv1_text: "Мгновенные оповещения",
    adv2_title: "AI Технология",
    adv2_text: "Автоматическое обнаружение",
    adv3_title: "3D Визуализация",
    adv3_text: "Мониторинг в реальном времени",
    adv4_title: "IoT Сеть",
    adv4_text: "Умная система",

    // Team Section
    team_title: "Наша команда",
    team_subtitle: "Команда из 5 профессиональных специалистов",

    team1_role: "CEO и менеджер проекта",
    team1_bio: "Специалист по управлению проектами с опытом 5 лет.",

    team2_role: "Инженер AI и Computer Vision",
    team2_bio: "4 года опыта в AI, Computer Vision и Machine Learning.",

    team3_role: "Дизайнер и веб-разработчик",
    team3_bio: "1 год опыта во frontend-разработке.",

    team4_role: "IT специалист",
    team4_bio: "Специалист по компьютерным системам и IT-поддержке.",

    team5_role: "Инженер Computer Vision",
    team5_bio: "Специалист по работе с видеокамерами и системами распознавания.",


    // Why Us Section
    whyus_title: "Почему Наша Команда?",
    whyus_subtitle: "Мы лучший выбор для решения этой проблемы",
    whyus_card1_title: "Опыт",
    whyus_card1_text: "5+ лет опыта в AI, IoT и Computer Vision.",
    whyus_card2_title: "Технологии",
    whyus_card2_text: "Новейшие и самые эффективные технологии.",
    whyus_card3_title: "Инновации",
    whyus_card3_text: "Новые инновационные подходы.",

    // Roadmap Section
    roadmap_title: "Дорожная Карта Проекта",
    roadmap_subtitle: "От идеи до запуска",
    roadmap_item1_title: "Idea",
    roadmap_item1_status: "Выполнено",
    roadmap_item2_title: "Prototype",
    roadmap_item2_status: "Выполнено",
    roadmap_item3_title: "MVP",
    roadmap_item3_status: "В процессе",
    roadmap_item4_title: "Launched",
    roadmap_item4_status: "В планах",

    // Implementation Section
    impl_title: "План Реализации",
    impl_subtitle: "Как мы реализуем решение",
    impl_step1_title: "IoT Sensor Network Setup",
    impl_step1_text: "Установка сети датчиков IoT по всему городу.",
    impl_step2_title: "Computer Vision Integration",
    impl_step2_text: "Установка AI камер и развертывание CV моделей.",
    impl_step3_title: "3D Dashboard Development",
    impl_step3_text: "Создание интерактивной 3D карты и панели мониторинга.",
    impl_tech_title: "Технологии",
    impl_btn: "Перейти на сайт",
    impl_btn_sub: "Посетите наш сайт для полной информации",

    // Footer
    footer_desc: "Система безопасности умного города с технологиями AI и IoT.",
    footer_links: "Ссылки",
    footer_contact: "Контакты",
    footer_rights: "Все права защищены."
  }
};

// ============================================
// Language Switcher Logic
// ============================================
let currentLanguage = 'uz';

function changeLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem('preferredLanguage', lang);

  // Update all elements with data-translate attribute
  const elements = document.querySelectorAll('[data-translate]');
  elements.forEach(element => {
    const key = element.getAttribute('data-translate');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  // Update dropdown active state
  const langOptions = document.querySelectorAll('.lang-option');
  langOptions.forEach(opt => {
    opt.classList.remove('active');
    if (opt.dataset.lang === lang) {
      opt.classList.add('active');
    }
  });

  // Update current language display in toggle button
  const currentLangSpan = document.getElementById('currentLang');
  if (currentLangSpan) {
    currentLangSpan.textContent = lang.toUpperCase();
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;
}

// Initialize Language Switcher
document.addEventListener('DOMContentLoaded', () => {
  // Check for saved language preference
  const savedLang = localStorage.getItem('preferredLanguage') || 'uz';
  changeLanguage(savedLang);

  // Language Dropdown Toggle
  const langDropdown = document.getElementById('langDropdown');
  const langToggle = document.getElementById('langToggle');
  const langOptions = document.querySelectorAll('.lang-option');

  if (langToggle && langDropdown) {
    langToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('active');
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
      langDropdown.classList.remove('active');
    });
  }

  // Language selection
  langOptions.forEach(option => {
    option.addEventListener('click', () => {
      const selectedLang = option.dataset.lang;
      changeLanguage(selectedLang);
      if (langDropdown) {
        langDropdown.classList.remove('active');
      }
    });
  });
});

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.getElementById('navMenu');

if (mobileMenuBtn && navMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenuBtn.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ============================================
// CUSTOM CURSOR
// ============================================
const cursorDot = document.querySelector('.cursor-dot');
const cursorOutline = document.querySelector('.cursor-outline');

if (cursorDot && cursorOutline) {
  document.body.classList.add('custom-cursor-active');

  window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows immediately
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with delay (using animate for smoother performance)
    cursorOutline.animate({
      left: `${posX}px`,
      top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
  });

  // Hover effects
  document.querySelectorAll('a, button, .card').forEach(item => {
    item.addEventListener('mouseenter', () => {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.backgroundColor = 'rgba(37, 99, 235, 0.1)';
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1.5)';
    });

    item.addEventListener('mouseleave', () => {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.backgroundColor = 'transparent';
      cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });
}

// ============================================
// BACKGROUND MUSIC CONTROL
// ============================================

// Global function for inline onclick
window.toggleMusic = function () {
  const musicToggle = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic');

  if (!bgMusic || !musicToggle) {
    console.error('Music elements not found');
    return;
  }

  if (bgMusic.paused) {
    const playPromise = bgMusic.play();
    if (playPromise !== undefined) {
      playPromise.then(_ => {
        console.log('Audio playback started');
        musicToggle.classList.add('playing');

        // Resume Audio Context if it exists (fixes silence issue)
        if (typeof window.resumeAudioContext === 'function') {
          window.resumeAudioContext();
        }

        if (typeof initAudioVisualization === 'function') {
          initAudioVisualization();
        }
      })
        .catch(error => {
          console.error('Playback failed:', error);
          alert('Musiqa xatosi: ' + error.message);
        });
    }
  } else {
    bgMusic.pause();
    musicToggle.classList.remove('playing');
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Event listener is now handled by inline onclick for robustness
  // But we keep this for initialization checks if needed
  const musicToggle = document.getElementById('musicToggle');
  const bgMusic = document.getElementById('bgMusic');
  console.log('Music Init:', { musicToggle, bgMusic });
});

