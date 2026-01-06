document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initLanguage(); // New
  initMobileMenu();
  initScrollAnimations();
});

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
      subtitle: "Full-Stack Developer",
      description:
        "Building modern, scalable web apps with clean UI and reliable APIs. Based in Germany, open to full-time roles and selected client projects.",
      projects: "View Projects",
      contact: "Contact Me",
    },
    about: {
      title: "About Me",
      p1: "I am a dedicated developer based in <strong>Hildesheim, Germany</strong>, driven by a mission to build web products that are fast, modern, and scalable. With a focus on <strong>frontend excellence</strong> using React and Next.js, giving attention to detail in UI/UX, I also bring a pragmatic approach to backend development with Laravel and Node.js.",
      p2: "My work revolves around clean architecture, maintainability, and a production-first mindset. I thrive in diverse environments, leveraging my multilingual communication skills in <strong>German, English, and Arabic</strong> to collaborate effectively and deliver business impact.",
      stats: {
        projects: "Featured Projects",
        languages: "Languages Spoken",
      },
    },
    skills: {
      title: "Technical Skills",
      languages: "Languages",
      frameworks: "Frameworks",
      backend: "Backend",
      tools: "Data & Tools",
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
      view: "Live Website",
      p1: {
        type: "Service Website",
        desc: "A professional service website designed to build trust, present services clearly, and convert visitors into inquiries.",
      },
      p2: {
        type: "Product & Brand",
        desc: "A product-focused website with a strong brand identity and responsive layout, built to scale with e-commerce features.",
      },
      p3: {
        type: "Concept Website",
        desc: "A premium company website concept with modern sections, clear content hierarchy, and a professional visual system.",
      },
      p4: {
        type: "Knowledge Platform",
        desc: "A structured multilingual content platform designed for scalability, readability, and modern UI — including dark-mode-first design.",
      },
    },
    experience: {
      title: "Experience",
      ongoing: "Ongoing",
      r1: {
        title: "Full-Stack Developer",
        company: "Freelance / Client Projects — Germany",
        desc: "<li>Built responsive websites with premium UI and clear structure.</li><li>Improved UX and page flow for better conversion and trust.</li><li>Delivered deployments and iterations based on real feedback.</li>",
      },
      r2: {
        title: "Fachinformatiker AE",
        company: "Umschulung — WBS Training",
        desc: "<li>Strengthened software engineering fundamentals (OOP, DB, clean code).</li><li>Built multiple web projects applying modern frontend/backend concepts.</li><li>Focused on maintainability, reliability, and production thinking.</li>",
      },
      r3: {
        title: "Independent Product Builder",
        company: "Web Projects",
        desc: "<li>Created reusable components and scalable page structures.</li><li>Experimented with multilingual setups, dark mode, structured content.</li><li>Improved performance basics and code organization continuously.</li>",
      },
    },
    objective: {
      title: "Career Objective",
      text: "I am seeking a full-time role as a <strong>frontend-focused full-stack developer</strong>, contributing to product teams, shipping high-quality features, and building scalable web experiences with clean architecture and strong delivery mindset.",
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Let's evaluate how I can help your team.",
      desc: "Whether you have a question or just want to say hi, I'll try my best to get back to you!",
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
      subtitle: "Full-Stack Entwickler",
      description:
        "Ich entwickle moderne, skalierbare Web-Apps mit sauberer UI und zuverlässigen APIs. Ansässig in Deutschland, offen für Vollzeitstellen und ausgewählte Kundenprojekte.",
      projects: "Projekte Ansehen",
      contact: "Kontaktieren",
    },
    about: {
      title: "Über Mich",
      p1: "Ich bin ein engagierter Entwickler aus <strong>Hildesheim, Deutschland</strong>, mit der Mission, schnelle und skalierbare Webprodukte zu bauen. Mein Fokus liegt auf <strong>Frontend-Exzellenz</strong> mit React und Next.js, sowie einer pragmatischen Herangehensweise an Backend-Entwicklung mit Laravel und Node.js.",
      p2: "Meine Arbeit basiert auf sauberer Architektur, Wartbarkeit und einem produktionsorientierten Denken. Ich arbeite effektiv in diversen Umgebungen und nutze meine Sprachkenntnisse in <strong>Deutsch, Englisch und Arabisch</strong> für eine erfolgreiche Zusammenarbeit.",
      stats: {
        projects: "Ausgewählte Projekte",
        languages: "Gesprochene Sprachen",
      },
    },
    skills: {
      title: "Technische Skills",
      languages: "Sprachen",
      frameworks: "Frameworks",
      backend: "Backend",
      tools: "Daten & Tools",
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
      view: "Zur Webseite",
      p1: {
        type: "Service Webseite",
        desc: "Eine professionelle Service-Webseite, entwickelt um Vertrauen aufzubauen und Besucher in Anfragen zu konvertieren.",
      },
      p2: {
        type: "Produkt & Marke",
        desc: "Eine produktfokussierte Webseite mit starker Markenidentität und responsivem Layout, skalierbar für E-Commerce.",
      },
      p3: {
        type: "Konzept Webseite",
        desc: "Ein Premium-Firmenkonzept mit modernen Sektionen, klarer Hierarchie und professionellem Designsystem.",
      },
      p4: {
        type: "Wissensplattform",
        desc: "Eine strukturierte, mehrsprachige Content-Plattform, designed für Skalierbarkeit und Lesbarkeit (Dark Mode First).",
      },
    },
    experience: {
      title: "Erfahrung",
      ongoing: "Laufend",
      r1: {
        title: "Full-Stack Entwickler",
        company: "Freelance / Kundenprojekte — Deutschland",
        desc: "<li>Entwicklung responsiver Webseiten mit Premium-UI und klarer Struktur.</li><li>Verbesserung von UX und Page-Flow für bessere Konversion.</li><li>Deployments und Iterationen basierend auf echtem Feedback.</li>",
      },
      r2: {
        title: "Fachinformatiker Anwendungsentwicklung",
        company: "Umschulung — WBS Training",
        desc: "<li>Vertiefung von Software-Engineering-Grundlagen (OOP, DB, Clean Code).</li><li>Bau mehrerer Webprojekte mit modernen Frontend/Backend-Konzepten.</li><li>Fokus auf Wartbarkeit, Zuverlässigkeit und Produktionsdenken.</li>",
      },
      r3: {
        title: "Unabhängiger Produkt-Entwickler",
        company: "Web Projekte",
        desc: "<li>Erstellung wiederverwendbarer Komponenten und skalierbarer Seitenstrukturen.</li><li>Experimentieren mit Mehrsprachigkeit, Dark Mode und strukturiertem Content.</li><li>Kontinuierliche Verbesserung von Performance-Basics und Code-Organisation.</li>",
      },
    },
    objective: {
      title: "Karriereziel",
      text: "Ich suche eine Vollzeitstelle als <strong>Frontend-fokussierter Full-Stack Entwickler</strong>, um in Produktteams hochwertige Features zu liefern und skalierbare Web-Experiences mit sauberer Architektur zu bauen.",
    },
    contact: {
      title: "Kontakt",
      subtitle: "Lassen Sie uns besprechen, wie ich helfen kann.",
      desc: "Ob Sie eine Frage haben oder einfach Hallo sagen möchten, ich melde mich so schnell wie möglich!",
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
      about: "عني",
      skills: "مهاراتي",
      projects: "مشاريعي",
      clients: "للشركات",
      experience: "الخبرة",
      contact: "اتصل بي",
    },
    hero: {
      greeting: "مرحباً، أنا",
      subtitle: "مطور واجهات وخلفيات (Full-Stack)",
      description:
        "أقوم ببناء تطبيقات ويب حديثة وقابلة للتوسع بتصاميم نظيفة وواجهات برمجة موثوقة. مقيم في ألمانيا ومتاح للعمل بدوام كامل أو لمشاريع مختارة.",
      projects: "تصفح المشاريع",
      contact: "تواصل معي",
    },
    about: {
      title: "نبذة عني",
      p1: "أنا مطور شغوف مقيم في <strong>هيلدسهايم، ألمانيا</strong>، هدفي هو بناء منتجات ويب سريعة وحديثة. أركز على <strong>الجودة في الواجهات الأمامية</strong> باستخدام React و Next.js، مع الاهتمام بدقة التفاصيل، وأمتلك نهجاً عملياً في تطوير الخلفيات (Backend) باستخدام Laravel و Node.js.",
      p2: "يعتمد عملي على الهيكلة النظيفة للكود، وسهولة الصيانة، والتفكير في بيئة الإنتاج. أزدهر في بيئات العمل المتنوعة، مستفيداً من مهاراتي اللغوية في <strong>الألمانية، الإنجليزية، والعربية</strong> للتعاون بفعالية وتحقيق تأثير ملموس.",
      stats: {
        projects: "مشاريع مميزة",
        languages: "لغات",
      },
    },
    skills: {
      title: "المهارات التقنية",
      languages: "اللغات",
      frameworks: "إطارات العمل",
      backend: "الخلفي (Backend)",
      tools: "الأدوات والبيانات",
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
        title: "الأداء وتجربة المستخدم",
        desc: "تحسين السرعة، وتنقيح تدفق المستخدم، وتنظيف الواجهة لتجربة مستخدم فائقة.",
      },
    },
    projects: {
      title: "مشاريع مميزة",
      view: "زيارة الموقع",
      p1: {
        type: "موقع خدمي",
        desc: "موقع خدمات احترافي مصمم لبناء الثقة وعرض الخدمات بوضوح وتحويل الزوار إلى عملاء.",
      },
      p2: {
        type: "منتج وعلامة تجارية",
        desc: "موقع يركز على المنتج مع هوية تجارية قوية وتخطيط متجاوب، مبني للتوسع مع ميزات التجارة الإلكترونية.",
      },
      p3: {
        type: "مفهوم موقع شركة",
        desc: "مفهوم موقع شركة متميز بأقسام حديثة، وتسلسل هرمي واضح للمحتوى، ونظام بصري احترافي.",
      },
      p4: {
        type: "منصة معرفية",
        desc: "منصة محتوى منظمة متعددة اللغات مصممة للقابلية للتوسع والقراءة، وتصميم يدعم الوضع المظلم أولاً.",
      },
    },
    experience: {
      title: "الخبرة العملية",
      ongoing: "حالي",
      r1: {
        title: "Full-Stack Developer",
        company: "عمل حر / مشاريع عملاء — ألمانيا",
        desc: "<li>بناء مواقع متجاوبة مع واجهة مستخدم متميزة وهيكلة واضحة.</li><li>تحسين تجربة المستخدم لجذب العملاء بشكل أفضل.</li><li>تسليم التحديثات والتحسينات بناءً على ملاحظات حقيقية.</li>",
      },
      r2: {
        title: "تدريب مهني - تطوير برمجيات",
        company: "WBS Training",
        desc: "<li>تعزيز أساسيات هندسة البرمجيات (OOP, DB, Clean Code).</li><li>بناء مشاريع ويب متعددة بتطبيق مفاهيم حديثة في الواجهة الأمامية والخلفية.</li><li>التركيز على سهولة الصيانة والموثوقية.</li>",
      },
      r3: {
        title: "بناء منتجات مستقلة",
        company: "مشاريع ويب",
        desc: "<li>إنشاء مكونات قابلة لإعادة الاستخدام وهياكل صفحات قابلة للتوسع.</li><li>تجربة إعدادات متعددة اللغات، الوضع المظلم، والمحتوى المنظم.</li><li>تحسين أساسيات الأداء وتنظيم الكود بشكل مستمر.</li>",
      },
    },
    objective: {
      title: "الهدف الوظيفي",
      text: "أسعى للحصول على وظيفة بدوام كامل كمطور <strong>Full-Stack بتركيز على الواجهة الأمامية</strong>، للمساهمة في فرق المنتجات، وتقديم ميزات عالية الجودة، وبناء تجارب ويب قابلة للتوسع مع هندسة نظيفة وعقلية تسليم قوية.",
    },
    contact: {
      title: "تواصل معي",
      subtitle: "دعنا نرى كيف يمكنني مساعدة فريقك.",
      desc: "سواء كان لديك سؤال أو ترغب فقط في إلقاء التحية، سأبذل قصارى جهدي للرد عليك!",
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
