document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage(); // New
  initMobileMenu();
  initScrollAnimations();
  initActiveNavSpy();
});

/* ScrollSpy for Active Nav Link */
function initActiveNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");

  if (!sections.length || !navLinks.length) return;

  function updateActiveLink() {
    let currentSectionId = "";
    const scrollPosition = window.scrollY + 140;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        currentSectionId = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href === `#${currentSectionId}`) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}

/* Theme Handling */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  const savedTheme = localStorage.getItem("theme");
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  if (savedTheme === "light" || (!savedTheme && prefersLight)) {
    body.classList.add("light-mode");
  }

  themeToggle.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
}

/* Mobile Menu */
function initMobileMenu() {
  const hamburger = document.querySelector(".mobile-toggle");
  const navLinks = document.querySelector(".nav-links");
  const links = document.querySelectorAll(".nav-links a");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      hamburger.classList.remove("active");
    });
  });
}

/* Scroll Animations */
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  const fadeElements = document.querySelectorAll(".fade-up");
  fadeElements.forEach((el) => observer.observe(el));
}

/* Language Handling */
const translations = {
  en: {
    client: {
      nav: {
        home: "Developer Portfolio",
        services: "Services",
        work: "Work",
        contact: "Contact",
      },
      hero: {
        title: "Digital Solutions That Grow Your Business",
        subtitle:
          "I build premium websites and applications that convert visitors into customers.",
        cta: "Start Your Project",
      },
      services: {
        title: "How I Can Help You",
        web: {
          title: "Custom Websites",
          desc: "Tailor-made websites that reflect your brand and work perfectly on all devices.",
        },
        app: {
          title: "Web Applications",
          desc: "Complex functionality made simple. Dashboards, booking systems, and more.",
        },
        seo: {
          title: "SEO & Performance",
          desc: "Fast loading times and optimizations to help you rank higher on Google.",
        },
      },
      process: {
        title: "My Process",
        step1: {
          title: "1. Strategy",
          desc: "We discuss your goals and target audience.",
        },
        step2: {
          title: "2. Design & Code",
          desc: "I build your solution using modern technology.",
        },
        step3: {
          title: "3. Launch",
          desc: "We go live and I ensure everything runs smoothly.",
        },
      },
      cta_section: {
        title: "Ready to upgrade your online presence?",
        btn: "Get a Free Quote",
      },
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      clients: "For Business",
      experience: "Experience",
      contact: "Contact Me",
    },
    hero: {
      greeting: "Hello, I'm",
      subtitle: "Frontend-/Full-Stack Web Developer",
      description:
        "Building modern, scalable web applications with clean architecture, intuitive UI, and reliable APIs. Based in Germany, collaborating with forward-thinking teams and businesses.",
      projects: "View Projects",
      contact: "Contact Me",
      downloadCV_DE: "Download CV (DE)",
      downloadCV_EN: "Download CV (EN)",
    },
    about: {
      title: "About Me",
      p1: "I am a dedicated developer based in <strong>Hildesheim, Germany</strong>. My primary focus is on <strong>frontend excellence</strong> using React, Next.js, and TypeScript, combined with solid backend experience using Node.js and Laravel.",
      p2: "I build scalable, modern web applications with clean architecture and a strong emphasis on UI/UX. As a certified IT Specialist for Application Development (IHK), my focus centers on full-stack web engineering, databases, object-oriented design, and AI-driven solutions.",
      stats: {
        projects: "Featured Projects",
        languages: "Languages Spoken",
      },
    },
    skills: {
      title: "Technical Skills",
      strong_focus: "Strong Focus",
      working_experience: "Working Experience",
      additional_experience: "Additional Experience",
    },
    services: {
      title: "Services",
      subtitle: "Professional solutions for your business needs.",
      s1: {
        title: "Full-Stack Web Development",
        desc: "End-to-end development using Next.js, Node.js, and Laravel for scalable, robust applications.",
      },
      s2: {
        title: "Business Websites",
        desc: "High-conversion landing pages and corporate sites designed to build trust and drive growth.",
      },
      s3: {
        title: "Performance & UX",
        desc: "Optimizing speed, refining user flows, and conducting UI cleanup for a superior user experience.",
      },
    },
    projects: {
      title: "Featured Projects",
      additional_title: "Additional Projects",
      view: "Live Website",
      github: "GitHub Code",
      ki_title: "Project-X KI – AI Ticket-Management System",
      ki_btn: "Live Demo",
      p1: {
        type: "Service Website",
        desc: "A professional service website designed to build trust, present services clearly, and convert visitors into inquiries.",
      },
      p2: {
        type: "Product & Brand",
        desc: "A product-focused website with a strong brand identity and responsive layout, built to scale with e-commerce features.",
      },
      p3: {
        title: "Khushu App",
        type: "Progressive Web App (PWA)",
        desc: "An immersive Islamic platform and PWA featuring authentic Adhkar, interactive audio Tasbeeh, dark mode, and full offline caching.",
      },
      p4: {
        title: "Nabatek Dawak (نباتك 🌿 دواك)",
        type: "Botanical & Natural Health Platform",
        desc: "A modern digital platform for medicinal herbs and natural remedies, featuring multilingual support, dark mode, and clean reading UX.",
      },
      p5: {
        type: "E-Commerce Store",
        desc: "An elegant online store for perfumes featuring a modern design, product catalog, and seamless user experience.",
      },
      p6: {
        type: "Service Platform",
        desc: "A professional website for a moving company in Germany, offering service details, booking inquiries, and a clean corporate presence.",
      },
      p7: {
        type: "E-Commerce & Corporate Platform",
        desc: "The official web platform for Al-Najah Company, built with Next.js 15, MongoDB, and high-security administration features.",
      },
      ki: {
        type: "Enterprise AI System & IHK Final Project",
        desc: "Developed at Enodia Software GmbH as an IHK final project. An intelligent ticket management system powered by AI for automated classification, ticket analysis, and customer management. Live demo running with safe mock data on Laravel Cloud.",
      },
    },
    experience: {
      title: "Experience",
      ongoing: "Ongoing",
      r1: {
        title: "Full-Stack Developer",
        company: "Freelance / Client Projects — Germany",
        duration: "Ongoing",
        desc: "<li>Built responsive websites with premium UI and clear structure.</li><li>Improved UX and page flow for better conversion and trust.</li><li>Delivered deployments and iterations based on real feedback.</li>",
      },
      r2: {
        title: "IT Specialist for Application Development (IHK)",
        company: "WBS Training AG — IHK Certified",
        duration: "01/2023 - 11/2025",
        desc: "<li>Successfully completed the certified IHK program, including project work and technical defense in enterprise AI-assisted systems.</li><li>Advanced software engineering principles: OOP, relational & NoSQL databases, Clean Architecture, and RESTful APIs.</li><li>Engineered full-stack web applications using React, Next.js, TypeScript, and modern backend stacks.</li>",
      },
      r3: {
        title: "Application Developer",
        company: "Enodia Software GmbH — Germany",
        duration: "04/2024 - 02/2025",
        desc: "<li>Developed and customized UI components using React, Next.js, TypeScript, and Tailwind CSS.</li><li>Integrated REST APIs and processed JSON data in the frontend.</li><li>Maintained customer websites with WordPress/Divi, including content, theme, and plugin updates.</li><li>Supported customization tasks and gained initial experience with Shopware systems.</li><li>Conducted bug fixing, technical optimization, and version control with Git/GitHub in an agile team environment.</li>",
      },
      r4: {
        title: "Independent Product Builder",
        company: "Web Projects",
        duration: "Ongoing",
        desc: "<li>Created reusable components and scalable page structures.</li><li>Engineered multilingual setups, dark mode, and structured content workflows.</li><li>Optimized web performance, accessibility, and code quality continuously.</li>",
      },
    },
    objective: {
      title: "Engineering Focus",
      text: "As a <strong>frontend-focused full-stack developer</strong>, I specialize in shipping high-impact features and building scalable web applications with clean architecture, robust performance, and a proactive delivery mindset for modern product teams.",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Open for ambitious projects, technical collaborations, and key engineering roles.",
      desc: "Whether you're looking to build a high-performance web product, solve complex technical challenges, or bring an experienced developer into your team — let's start a conversation.",
      form: {
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
    },
    footer: {
      back: "Back to Top",
      copyright: "© 2025 Ayman Plöger. All rights reserved.",
    },
  },
  de: {
    client: {
      nav: {
        home: "Entwickler Portfolio",
        services: "Leistungen",
        work: "Arbeiten",
        contact: "Kontakt",
      },
      hero: {
        title: "Digitale Lösungen für Ihr Wachstum",
        subtitle:
          "Ich entwickle Premium-Webseiten und Apps, die Besucher in Kunden verwandeln.",
        cta: "Projekt Starten",
      },
      services: {
        title: "Wie ich Ihnen helfe",
        web: {
          title: "Individuelle Webseiten",
          desc: "Maßgeschneiderte Webseiten, die Ihre Marke widerspiegeln und auf allen Geräten perfekt funktionieren.",
        },
        app: {
          title: "Web Applikationen",
          desc: "Komplexe Funktionen einfach gemacht. Dashboards, Buchungssysteme und mehr.",
        },
        seo: {
          title: "SEO & Performance",
          desc: "Schnelle Ladezeiten und Optimierungen für ein besseres Google-Ranking.",
        },
      },
      process: {
        title: "Mein Prozess",
        step1: {
          title: "1. Strategie",
          desc: "Wir besprechen Ihre Ziele und Ihre Zielgruppe.",
        },
        step2: {
          title: "2. Design & Code",
          desc: "Ich baue Ihre Lösung mit modernster Technologie.",
        },
        step3: {
          title: "3. Launch",
          desc: "Wir gehen live und ich sorge für einen reibungslosen Start.",
        },
      },
      cta_section: {
        title: "Bereit für den nächsten Schritt?",
        btn: "Kostenloses Angebot",
      },
    },
    nav: {
      about: "Über mich",
      skills: "Fähigkeiten",
      projects: "Projekte",
      clients: "Für Unternehmen",
      experience: "Erfahrung",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hallo, ich bin",
      subtitle: "Frontend-/Full-Stack Web Entwickler",
      description:
        "Entwicklung moderner, skalierbarer Webanwendungen mit sauberer Architektur, intuitiver UI und zuverlässigen APIs. Ansässig in Deutschland, offen für zukunftsorientierte Teams und anspruchsvolle Projekte.",
      projects: "Projekte Ansehen",
      contact: "Kontaktieren",
      downloadCV_DE: "CV herunterladen (DE)",
      downloadCV_EN: "CV herunterladen (EN)",
    },
    about: {
      title: "Über Mich",
      p1: "Ich bin ein engagierter Entwickler aus <strong>Hildesheim, Deutschland</strong>. Mein klarer Fokus liegt auf <strong>Frontend-Exzellenz</strong> mit React, Next.js und TypeScript, ergänzt durch fundierte Backend-Erfahrung mit Node.js und Laravel.",
      p2: "Ich entwickle skalierbare, moderne Webanwendungen mit sauberer Architektur und hohem Anspruch an UI/UX. Als zertifizierter Fachinformatiker für Anwendungsentwicklung (IHK) liegt mein Fokus auf moderner Webarchitektur, performanten Datenbanken, OOP und KI-gestützten Lösungen.",
      stats: {
        projects: "Ausgewählte Projekte",
        languages: "Gesprochene Sprachen",
      },
    },
    skills: {
      title: "Technische Skills",
      strong_focus: "Starker Fokus",
      working_experience: "Praxiserfahrung",
      additional_experience: "Zusätzliche Erfahrung",
    },
    services: {
      title: "Dienstleistungen",
      subtitle: "Professionelle Lösungen für Ihr Business.",
      s1: {
        title: "Full-Stack Entwicklung",
        desc: "End-to-End Entwicklung mit Next.js, Node.js und Laravel für skalierbare Anwendungen.",
      },
      s2: {
        title: "Business Webseiten",
        desc: "Konversionsstarke Landing Pages und Unternehmensseiten, die Vertrauen aufbauen.",
      },
      s3: {
        title: "Performance & UX",
        desc: "Optimierung von Ladezeiten, Nutzerführung und UI-Bereinigung für eine bessere User Experience.",
      },
    },
    projects: {
      title: "Ausgewählte Projekte",
      additional_title: "Weitere Projekte",
      view: "Zur Webseite",
      github: "GitHub Code",
      ki_title: "Project-X KI – KI-gestütztes Ticket-Management",
      ki_btn: "Live Demo",
      p1: {
        type: "Service Webseite",
        desc: "Eine professionelle Service-Webseite, entwickelt um Vertrauen aufzubauen und Besucher in Anfragen zu konvertieren.",
      },
      p2: {
        type: "Produkt & Marke",
        desc: "Eine produktfokussierte Webseite mit starker Markenidentität und responsivem Layout, skalierbar für E-Commerce.",
      },
      p3: {
        title: "Khushu App",
        type: "Progressive Web App (PWA)",
        desc: "Eine immersive islamische Plattform und PWA mit authentischen Adhkar, interaktivem Audio-Tasbeeh, Dark Mode und Offline-Caching.",
      },
      p4: {
        title: "Nabatek Dawak (نباتك 🌿 دواك)",
        type: "Naturheilkunde & Wissensplattform",
        desc: "Eine moderne, mehrsprachige Plattform für Heilpflanzen und Naturheilkunde mit optimierter Lesbarkeit und Dark-Mode-First-Design.",
      },
      p5: {
        type: "E-Commerce / Shop",
        desc: "Ein eleganter Online-Shop für Parfüms mit modernem Design, Produktkatalog und nahtloser Benutzererfahrung.",
      },
      p6: {
        type: "Dienstleistungs-Webseite",
        desc: "Eine professionelle Webseite für ein Umzugsunternehmen mit Leistungsdetails, Buchungsanfragen und klarer Unternehmenspräsenz.",
      },
      p7: {
        type: "E-Commerce & Unternehmensplattform",
        desc: "Die offizielle Webplattform für die Firma Al-Najah, entwickelt mit Next.js 15, Produktkatalog, MongoDB-Anbindung und abgesichertem Super-Admin-Dashboard.",
      },
      ki: {
        type: "Enterprise KI-System & IHK-Abschlussprojekt",
        desc: "Entwickelt bei der Enodia Software GmbH als IHK-Abschlussprojekt. Ein intelligentes Ticket-Management-System mit KI-gestützter Analyse, automatisierter Kategorisierung und Kundenverwaltung. Live-Demo mit sicheren Mock-Daten auf Laravel Cloud.",
      },
    },
    experience: {
      title: "Erfahrung",
      ongoing: "Laufend",
      r1: {
        title: "Full-Stack Entwickler",
        company: "Freelance / Kundenprojekte — Deutschland",
        duration: "Laufend",
        desc: "<li>Entwicklung responsiver Webseiten mit Premium-UI und klarer Struktur.</li><li>Verbesserung von UX und Page-Flow für bessere Konversion.</li><li>Deployments und Iterationen basierend auf echtem Feedback.</li>",
      },
      r2: {
        title: "Fachinformatiker für Anwendungsentwicklung (IHK)",
        company: "WBS Training AG — IHK-Zertifiziert",
        duration: "01/2023 - 11/2025",
        desc: "<li>Erfolgreicher IHK-Abschluss inklusive Projektarbeit und Fachgespräch im Bereich KI-gestützte Ticketsysteme.</li><li>Vertiefung zentraler Software-Engineering-Prinzipien: OOP, relationale Datenbanken, Clean Architecture und REST-APIs.</li><li>Entwicklung praxisnaher Full-Stack-Webprojekte mit modernem Tech-Stack (React, Next.js, TypeScript, Node.js).</li>",
      },
      r3: {
        title: "Anwendungsentwickler",
        company: "Enodia Software GmbH — Deutschland",
        duration: "04/2024 - 02/2025",
        desc: "<li>Entwicklung und Anpassung von UI-Komponenten mit React, Next.js, TypeScript und Tailwind CSS.</li><li>Integration von REST-APIs und Verarbeitung von JSON-Daten im Frontend.</li><li>Pflege von Kundenwebseiten mit WordPress/Divi, inkl. Content-, Theme- und Plugin-Updates.</li><li>Unterstützung bei Anpassungsaufgaben und erste Einblicke in Shopware-Systeme.</li><li>Bugfixing, technische Optimierung und Versionsverwaltung mit Git/GitHub im agilen Teamumfeld.</li>",
      },
      r4: {
        title: "Unabhängiger Produkt-Entwickler",
        company: "Web Projekte",
        duration: "Laufend",
        desc: "<li>Erstellung wiederverwendbarer Komponenten und skalierbarer Seitenstrukturen.</li><li>Implementierung mehrsprachiger Architekturen, Dark Mode und strukturierter Datenworkflows.</li><li>Kontinuierliche Optimierung von Web-Performance, Barrierefreiheit und Code-Qualität.</li>",
      },
    },
    objective: {
      title: "Entwicklungsanspruch",
      text: "Als <strong>Frontend-fokussierter Full-Stack Entwickler</strong> entwickle ich hochwertige Features und skalierbare Web-Experiences mit sauberer Architektur, kompromissloser Performance und echtem Mehrwert für moderne Produktteams.",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Offen für anspruchsvolle Projekte, technische Kooperationen und innovative Rollen.",
      desc: "Egal ob Sie ein modernes Webprodukt entwickeln möchten, technische Herausforderungen lösen wollen oder Verstärkung für Ihr Entwicklerteam suchen – ich freue mich auf den Austausch mit Ihnen.",
      form: {
        name: "Name",
        email: "E-Mail",
        message: "Nachricht",
        send: "Nachricht Senden",
      },
    },
    footer: {
      back: "Nach Oben",
      copyright: "© 2025 Ayman Plöger. Alle Rechte vorbehalten.",
    },
  },
  ar: {
    client: {
      nav: {
        home: "ملف المطور",
        services: "خدماتي",
        work: "أعمالي",
        contact: "تواصل معي",
      },
      hero: {
        title: "حلول رقمية لتنمية عملك",
        subtitle:
          "أقوم بإنشاء مواقع وتطبيقات متميزة تحول الزوار إلى عملاء دائمين.",
        cta: "ابدأ مشروعك",
      },
      services: {
        title: "كيف يمكنني مساعدتك",
        web: {
          title: "مواقع مخصصة",
          desc: "مواقع مصممة خصيصاً لتعكس علامتك التجارية وتعمل بامتياز على جميع الأجهزة.",
        },
        app: {
          title: "تطبيقات الويب",
          desc: "وظائف معقدة بأسلوب بسيط. لوحات تحكم، أنظمة حجز، والمزيد.",
        },
        seo: {
          title: "تحسين الأداء والبحث",
          desc: "سرعة تحميل عالية وتحسينات لتصدر نتائج البحث في جوجل.",
        },
      },
      process: {
        title: "كيف أعمل",
        step1: {
          title: "1. الاستراتيجية",
          desc: "نناقش أهدافك وجمهورك المستهدف.",
        },
        step2: {
          title: "2. التصميم والتطوير",
          desc: "أبني حلولك باستخدام أحدث التقنيات.",
        },
        step3: {
          title: "3. الإطلاق",
          desc: "نطلق المشروع وأضمن أن يعمل كل شيء بسلاسة.",
        },
      },
      cta_section: {
        title: "جاهز لتطوير تواجدك الرقمي؟",
        btn: "احصل على عرض مجاني",
      },
    },
    nav: {
      about: "نبذة عني",
      skills: "مهاراتي",
      projects: "مشاريعي",
      clients: "للشركات",
      experience: "الخبرة",
      contact: "اتصل بي",
    },
    hero: {
      greeting: "مرحباً، أنا",
      subtitle: "مطور واجهات وخلفيات (Frontend / Full-Stack)",
      description:
        "أقوم ببناء تطبيقات ويب حديثة وقابلة للتوسع بهندسة برمجية نظيفة، تجربة مستخدم سلسة، وواجهات برمجة موثوقة. مقيم في ألمانيا، ومنفتح على التعاون مع الفرق المبتكرة والمشاريع الطموحة.",
      projects: "تصفح المشاريع",
      contact: "تواصل معي",
      downloadCV_DE: "تحميل السيرة الذاتية بالألمانية",
      downloadCV_EN: "تحميل السيرة الذاتية بالإنجليزية",
    },
    about: {
      title: "نبذة عني",
      p1: "أنا مطور شغوف مقيم في <strong>هيلدسهايم، ألمانيا</strong>. ينصب تركيزي الأساسي على <strong>تطوير واجهات المستخدم</strong> باستخدام React و Next.js و TypeScript، بالإضافة إلى خبرة عملية في تطوير الخلفيات (Backend) باستخدام Node.js و Laravel.",
      p2: "أقوم ببناء تطبيقات ويب حديثة وقابلة للتوسع بتصميم هندسي نظيف واهتمام كبير بتجربة المستخدم. كمتخصص معتمد في تطوير التطبيقات (Fachinformatiker IHK)، ينصب تركيزي على هندسة الويب المتقدمة، قواعد البيانات، البرمجة الكائنية، والحلول المدعومة بالذكاء الاصطناعي.",
      stats: {
        projects: "مشاريع مميزة",
        languages: "لغات",
      },
    },
    skills: {
      title: "المهارات التقنية",
      strong_focus: "التركيز الأساسي",
      working_experience: "خبرة عملية",
      additional_experience: "خبرات إضافية",
    },
    services: {
      title: "خدماتي",
      subtitle: "حلول احترافية تلبي احتياجات عملك.",
      s1: {
        title: "تطوير ويب شامل",
        desc: "تطوير متكامل باستخدام Next.js و Node.js و Laravel لتطبيقات قوية وقابلة للتوسع.",
      },
      s2: {
        title: "مواقع الأعمال",
        desc: "صفحات هبوط ومواقع شركات مصممة لزيادة التحويل وبناء الثقة.",
      },
      s3: {
        title: "أداء أقوى وتجربة مستخدم أفضل",
        desc: "تسريع التحميل، تنظيم تدفق المستخدم، وواجهة نظيفة تضمن تجربة مريحة وفعّالة.",
      },
    },
    projects: {
      title: "مشاريع مميزة",
      additional_title: "مشاريع إضافية",
      view: "زيارة الموقع",
      github: "كود GitHub",
      ki_title: "نظام إدارة التذاكر بالذكاء الاصطناعي (Project-X KI)",
      ki_btn: "عرض حي (Live Demo)",
      p1: {
        type: "موقع خدمي",
        desc: "موقع خدمات احترافي مصمم لبناء الثقة وعرض الخدمات بوضوح وتحويل الزوار إلى عملاء.",
      },
      p2: {
        type: "منتج وعلامة تجارية",
        desc: "موقع يركز على المنتج مع هوية تجارية قوية وتخطيط متجاوب، مبني للتوسع مع ميزات التجارة الإلكترونية.",
      },
      p3: {
        title: "تطبيق خشوع (Khushu App)",
        type: "تطبيق ويب تقدمي (PWA)",
        desc: "منصة إسلامية متكاملة وتطبيق PWA للأذكار والأدعية، يتميز بمسبحة تفاعلية بمؤثرات صوتية، دعم كامل للعمل بدون إنترنت، ووضع مظلم سينمائي.",
      },
      p4: {
        title: "نباتك 🌿 دواك",
        type: "موسوعة الأعشاب والطب البديل",
        desc: "منصة ويب متكاملة لعلوم الأعشاب الطبية والعلاجات الطبيعية، بتصميم عصري يدعم تعدد اللغات، الوضع المظلم، وتجربة تصفح سلسة.",
      },
      p5: {
        type: "متجر إلكتروني",
        desc: "متجر إلكتروني أنيق للعطور يتميز بتصميم عصري وكتالوج منتجات وتجربة مستخدم سلسة.",
      },
      p6: {
        type: "موقع خدمي",
        desc: "موقع خدمي احترافي لشركة نقل أثاث في ألمانيا، يقدم تفاصيل الخدمات وحساب التكاليف وحجز المواعيد بشكل سلس.",
      },
      p7: {
        type: "منصة تجارية وموقع شركة",
        desc: "المنصة الرسمية لشركة النجاح لصناعة الأسفنج والمراتب، مبنية باستخدام Next.js 15 و MongoDB مع نظام إدارة فائق الأمان كـ Super Admin.",
      },
      ki: {
        type: "نظام مؤسسي بالذكاء الاصطناعي ومشروع تخرج IHK",
        desc: "تم تطويره في شركة Enodia Software GmbH كمشروع تخرج IHK. نظام متكامل لإدارة وتحليل تذاكر الدعم الفني بالذكاء الاصطناعي، وتصنيفها آلياً وإدارة العملاء. متاح للعرض المباشر (Demo) ببيانات تجريبية آمنة على Laravel Cloud.",
      },
    },
    experience: {
      title: "الخبرة العملية",
      ongoing: "حالي",
      r1: {
        title: "Full-Stack Developer",
        company: "عمل حر / مشاريع عملاء — ألمانيا",
        duration: "حالي",
        desc: "<li>بناء مواقع متجاوبة مع واجهة مستخدم متميزة وهيكلة واضحة.</li><li>تحسين تجربة المستخدم لجذب العملاء بشكل أفضل.</li><li>تسليم التحديثات والتحسينات بناءً على ملاحظات حقيقية.</li>",
      },
      r2: {
        title: "متخصص في تطوير التطبيقات (Fachinformatiker IHK)",
        company: "WBS Training AG — اعتماد IHK الألماني",
        duration: "01/2023 - 11/2025",
        desc: "<li>إتمام برنامج الاعتماد الألماني (IHK) بنجاح، بما في ذلك المشروع العملي والمناقشة التقنية لأنظمة التذاكر الذكية بالذكاء الاصطناعي.</li><li>التعمق في مبادئ هندسة البرمجيات: البرمجة الكائنية (OOP)، قواعد البيانات، الهيكلية النظيفة (Clean Architecture)، والـ REST APIs.</li><li>تطوير مشاريع ويب متكاملة (Full-Stack) بتطبيق أحدث المعايير في الواجهات الأمامية والخلفية.</li>",
      },
      r3: {
        title: "مطور تطبيقات",
        company: "Enodia Software GmbH — ألمانيا",
        duration: "04/2024 - 02/2025",
        desc: "<li>تطوير وتعديل مكونات واجهات المستخدم باستخدام React و Next.js و TypeScript و Tailwind CSS.</li><li>دمج واجهات البرمجة (REST APIs) ومعالجة بيانات JSON في الواجهة الأمامية.</li><li>صيانة مواقع العملاء المبنية على WordPress/Divi بما في ذلك تحديثات المحتوى والقوالب والإضافات.</li><li>تقديم الدعم في مهام التعديل والحصول على تجربة أولية مع أنظمة Shopware.</li><li>إصلاح الأخطاء (Bugfixing)، التحسين التقني، وإدارة الإصدارات باستخدام Git/GitHub في بيئة عمل مرنة (Agile).</li>",
      },
      r4: {
        title: "بناء منتجات مستقلة",
        company: "مشاريع ويب",
        duration: "حالي",
        desc: "<li>إنشاء مكونات برمجية قابلة لإعادة الاستخدام وهياكل صفحات قابلة للتوسع.</li><li>تطوير معمارية برمجية متعددة اللغات، الوضع المظلم، وتنظيم البيانات المتقدم.</li><li>تحسين مستمر لسرعة الأداء، معايير الوصول (Accessibility)، وجودة الكود.</li>",
      },
    },
    objective: {
      title: "الرؤية الهندسية والمهنية",
      text: "أركز كمطور <strong>Full-Stack باهتمام متقدم بالواجهات الأمامية</strong> على تقديم ميزات برمجية عالية الجودة، وبناء تجارب ويب قابلة للتوسع بهندسة نظيفة، أداء فائق، وعقلية تسليم احترافية تضيف قيمة حقيقية لفرق المنتجات.",
    },
    contact: {
      title: "تواصل معي",
      subtitle: "منفتح على المشاريع الطموحة، التعاون التقني، والفرص النوعية.",
      desc: "سواء كنت تتطلع لبناء منتج رقمي عالي الأداء، حل تحديات تقنية معقدة، أو إضافة مطور ذو كفاءة لفريقك الهندسي — يسعدني دائماً التواصل وبدء حوار مثمر.",
      form: {
        name: "الاسم",
        email: "البريد الإلكتروني",
        message: "الرسالة",
        send: "إرسال الرسالة",
      },
    },
    footer: {
      back: "العودة للأعلى",
      copyright: "© 2025 Ayman Plöger. جميع الحقوق محفوظة.",
    },
  },
};

function initLanguage() {
  const selector = document.getElementById("language-selector");
  const savedLang = localStorage.getItem("lang") || "en";

  // Set initial value
  selector.value = savedLang;
  setLanguage(savedLang);

  // Listen for changes
  selector.addEventListener("change", (e) => {
    const lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("lang", lang);
  });
}

function setLanguage(lang) {
  const data = translations[lang];
  if (!data) return;

  // Handle RTL
  if (lang === "ar") {
    document.documentElement.setAttribute("dir", "rtl");
    document.documentElement.lang = "ar";
  } else {
    document.documentElement.setAttribute("dir", "ltr");
    document.documentElement.lang = lang;
  }

  // Update Text Content
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const keys = key.split(".");

    let value = data;
    keys.forEach((k) => {
      if (value) value = value[k];
    });

    if (value) {
      // Check if element contains HTML tags (like strong or li)
      if (
        el.tagName === "UL" ||
        key.includes("p1") ||
        key.includes("p2") ||
        key.includes("objective")
      ) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    }
  });
}
