const projects = [
  {
    id: "ecommerce",
    title: "E-commerce Sales Dashboard",
    kicker: "Internship Project | Power BI",
    theme: "powerbi",
    icon: "BI",
    date: "Aug 2025",
    summary: "Power BI sales dashboard built to track revenue, profit, quantity sold, payment mix, category performance, and regional contribution in one view.",
    highlights: [
      "Built KPI cards, map views, category charts, trend analysis, slicers, and conditional formatting.",
      "Strong example of recruiter-friendly business reporting and dashboard storytelling.",
      "Backed by GitHub repo details and a local project PDF."
    ],
    tools: ["Power BI", "DAX", "Power Query", "Sales KPIs", "Dashboard Design"],
    image: "assets/projects/ecommerce-1.png",
    slides: ["assets/projects/ecommerce-1.png", "assets/projects/ecommerce-2.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/E-commerce-Sales-Dashboard-in-Power-BI" },
      { label: "Open Project PDF", url: "assets/docs/Project_Ecommerce_Sales.pdf" },
      { label: "View Instructions", url: "assets/docs/Project_Ecommerce_Sales_Instructions.pdf" }
    ]
  },
  {
    id: "amazon",
    title: "Amazon Global Sales Analysis",
    kicker: "Python + MySQL + Power BI",
    theme: "analytics",
    icon: "SQL",
    date: "Jun 2025",
    summary: "End-to-end sales analytics pipeline that loads Excel data into MySQL, performs EDA in Python, and turns findings into dashboard-ready KPIs.",
    highlights: [
      "Connects data ingestion, SQL storage, EDA, and dashboarding into one workflow.",
      "Focuses on delivery performance, profit movement, and customer segments.",
      "Useful case study for business analytics interviews."
    ],
    tools: ["Python", "MySQL", "Power BI", "EDA", "Sales Analytics"],
    image: "assets/projects/amazon-1.png",
    slides: ["assets/projects/amazon-1.png", "assets/projects/amazon-2.png"],
    actions: [{ label: "View GitHub", url: "https://github.com/Manish-2906/Amazon-Global-Sales-Analysis" }]
  },
  {
    id: "churn",
    title: "Customer Churn Analysis",
    kicker: "Power BI + Python + SQL",
    theme: "retention",
    icon: "CRM",
    date: "Mar 2025",
    summary: "Customer churn study on 7,043 records and 23 features to identify risk segments, retention drivers, and behavior patterns.",
    highlights: [
      "Identified month-to-month contracts and early-tenure users as higher churn risk segments.",
      "Used dashboards to support retention strategy and business interpretation.",
      "Balanced analytical depth with clear stakeholder communication."
    ],
    tools: ["Power BI", "Python", "SQL", "DAX", "Customer Retention"],
    image: "assets/projects/churn-1.png",
    slides: ["assets/projects/churn-1.png", "assets/projects/churn-2.png", "assets/projects/churn-3.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/Customer-Churn-Analysis" },
      { label: "Open EDA Report", url: "assets/docs/Churn_Analysis_EDA.pdf" },
      { label: "Open Project Summary", url: "assets/docs/Teco_Customer_Churn_Analysis.pdf" }
    ]
  },
  {
    id: "whatsapp",
    title: "WhatsApp Chat Analysis",
    kicker: "Python + Streamlit",
    theme: "python",
    icon: "PY",
    date: "Jun 2025",
    summary: "Python-based chat analytics app that measures message volume, active users, emoji usage, and communication patterns from exported chats.",
    highlights: [
      "Explores who speaks most, when activity peaks, and how chat behavior changes over time.",
      "Turns text-heavy conversation data into readable dashboards and summaries.",
      "Strong example of practical Python-based analysis."
    ],
    tools: ["Python", "Streamlit", "Text Analysis", "Visualization"],
    image: "assets/projects/whatsapp-1.png",
    slides: ["assets/projects/whatsapp-1.png", "assets/projects/whatsapp-2.png", "assets/projects/whatsapp-3.png"],
    actions: [{ label: "View GitHub", url: "https://github.com/Manish-2906/WhatsApp-Chat-Analysis" }]
  },
  {
    id: "covid",
    title: "COVID-19 Impact Analysis",
    kicker: "Python Dashboard Project",
    theme: "public",
    icon: "DASH",
    date: "Apr 2026",
    summary: "Interactive India-focused dashboard summarizing pandemic metrics, trend movement, and resource-related insights in a compact reporting view.",
    highlights: [
      "Designed for quick understanding of time-based and geographic metrics.",
      "Shows clarity in public-data dashboarding and summary design.",
      "Useful example of analytical reporting on real-world topics."
    ],
    tools: ["Python", "Dashboarding", "Public Data", "Trend Analysis"],
    image: "assets/projects/covid.png",
    slides: ["assets/projects/covid.png"],
    actions: [{ label: "View GitHub", url: "https://github.com/Manish-2906/COVID-19-Impact-Analysis-" }]
  },
  {
    id: "movie",
    title: "Movie Recommendation System",
    kicker: "ML + TMDB API",
    theme: "ml",
    icon: "ML",
    date: "Aug 2025",
    summary: "Content-based recommendation engine using a similarity matrix and TMDB API to return relevant movie suggestions with rich poster output.",
    highlights: [
      "Uses cosine similarity for relevant recommendations.",
      "Pulls rich poster data from the TMDB API.",
      "Shows how machine learning can be packaged in a user-friendly way."
    ],
    tools: ["Machine Learning", "Python", "TMDB API", "Recommendation Systems"],
    image: "assets/projects/movie.png",
    slides: ["assets/projects/movie.png"],
    actions: [{ label: "View GitHub", url: "https://github.com/Manish-2906/Movie_recommendation" }]
  },
  {
    id: "music",
    title: "Music Store Data Analysis in SQL",
    kicker: "Advanced SQL Case Study",
    theme: "sql",
    icon: "SQL",
    date: "Jun 2025",
    summary: "Advanced SQL case study exploring customers, invoices, artists, genres, and sales patterns to uncover revenue and purchase insights.",
    highlights: [
      "Uses analytical SQL queries for customer, sales, and genre-level investigation.",
      "Shows practical business questioning with relational data.",
      "Also supported with a detailed local project document."
    ],
    tools: ["SQL", "Relational Analysis", "Business Queries", "Sales Insights"],
    image: "assets/projects/music-1.png",
    slides: ["assets/projects/music-1.png", "assets/projects/music-2.png", "assets/projects/music-3.png", "assets/projects/music-4.png", "assets/projects/music-5.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/Music-Store-Data-Analysis-in-SQL" },
      { label: "Open Project PDF", url: "assets/docs/Project_Music_Store_SQL.pdf" },
      { label: "Open Presentation Deck", url: "assets/docs/Music_Store_Analysis_Deck.pptx" }
    ]
  },
  {
    id: "scraping",
    title: "Google Image Scraping",
    kicker: "Python Web Scraping",
    theme: "automation",
    icon: "BOT",
    date: "Jun 2025",
    summary: "Python automation workflow for collecting image results from the web and storing them in a reusable format for further analysis or model input.",
    highlights: [
      "Built to practice scraping workflows and automate repetitive collection tasks.",
      "Shows useful handling of dynamic web content for data gathering.",
      "Pairs well with analyst workflows that depend on external data acquisition."
    ],
    tools: ["Python", "BeautifulSoup", "Web Scraping", "Automation"],
    image: "assets/projects/google-scraping.png",
    slides: ["assets/projects/google-scraping.png", "assets/projects/web-scraping.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/-Google-Image-Scraping-using-Python" },
      { label: "Open Summary PDF", url: "assets/docs/Google_Image_Scraping_Summary.pdf" },
      { label: "Open Presentation Deck", url: "assets/docs/Google_Image_Scraping_Deck.pdf" }
    ]
  }
];

const repoArchive = [
  {
    title: "Pizza Sales Analysis SQL",
    kicker: "SQL Business Analysis",
    theme: "sql",
    icon: "SQL",
    summary: "SQL project focused on revenue distribution, order behavior, and top-performing pizza categories for restaurant decision-making.",
    tags: ["SQL", "Restaurant Analytics", "Revenue"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/Pizza-Sales-Analysis-SQL" },
      { label: "Project Report", url: "assets/docs/Project_Pizza_Sales_SQL.pdf" },
      { label: "Presentation", url: "assets/docs/Pizza_Restaurant_Presentation.pdf" }
    ]
  },
  {
    title: "Zomato Restaurant EDA",
    kicker: "EDA + Business Insights",
    theme: "eda",
    icon: "EDA",
    summary: "Restaurant analytics study exploring online ordering behavior, customer preferences, and rating-based trends for actionable decisions.",
    tags: ["Python", "EDA", "Consumer Data"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/Zomato-Restaurant-Data-Analysis-eda-" },
      { label: "Project Report", url: "assets/docs/Project_Zomato_EDA.pdf" },
      { label: "Assignment", url: "assets/docs/Zomato_Project_Assignment.pdf" }
    ]
  },
  {
    title: "Ferns & Petals Sales Analysis",
    kicker: "Excel Dashboard Project",
    theme: "excel",
    icon: "XLS",
    summary: "Sales dashboard work for a gifting company, highlighting customer behavior, product performance, and occasion-based demand trends.",
    tags: ["Excel", "Dashboard", "Sales Trends"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/-Ferns-Petals-Sales-Analysis-Dashboard-Excel-Project" },
      { label: "Project PDF", url: "assets/docs/Ferns_and_Petals_Sales_Analysis.pdf" },
      { label: "Presentation", url: "assets/docs/FNP_Presentation.pdf" }
    ]
  },
  {
    title: "Marketing Data Analysis",
    kicker: "Customer Analytics",
    theme: "marketing",
    icon: "MKT",
    summary: "Customer and campaign analysis project covering spending patterns, market segmentation, and data-driven marketing insights.",
    tags: ["Python", "Marketing", "Segmentation"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/Marketing_Data_Analysis" }
    ]
  },
  {
    title: "FIFA World Cup Tableau Report",
    kicker: "Visualization Storytelling",
    theme: "tableau",
    icon: "VIZ",
    summary: "Interactive sports analysis work showcasing competition trends, team performance, and audience-facing dashboard storytelling.",
    tags: ["Tableau", "Sports Analytics", "Dashboard"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/FIFA-World-Cup-Analysis-Portfolio-Report" }
    ]
  },
  {
    title: "Flipkart Product Data Cleaning",
    kicker: "Data Cleaning Project",
    theme: "cleaning",
    icon: "ETL",
    summary: "Large-scale product review cleaning workflow using Python, regex, and string operations to improve dataset quality before analysis.",
    tags: ["Python", "Data Cleaning", "Preprocessing"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/Flipkart-Product-Data-Cleaning" }
    ]
  }
];

const credentials = [
  {
    id: "internship-letter",
    title: "Experience Letter",
    kicker: "InLighnX Global Pvt. Ltd.",
    summary: "Experience proof confirming a one-month Data Analyst internship and highlighting project contributions across sales analysis, dashboards, recommendation work, and SQL analysis.",
    image: "assets/credentials/experience-letter.png",
    slides: ["assets/credentials/experience-letter.png"],
    highlights: [
      "Confirms internship completion from 10 Jul 2025 to 10 Aug 2025.",
      "Mentions project work in Python, Power BI, SQL, NLP, and restaurant analysis.",
      "Strong supporting proof for the experience section."
    ],
    tools: ["Internship Proof", "Analytics Delivery", "Reporting"],
    actions: [
      { label: "Open Experience Letter", url: "assets/credentials/experience-letter.png" },
      { label: "Open Welcome Letter", url: "assets/docs/Internship_Welcome_Letter.pdf" }
    ]
  },
  {
    id: "internship-certificate",
    title: "Internship Completion Certificate",
    kicker: "Data Analyst Intern",
    summary: "Completion certificate issued by InLighnX Global for successfully finishing a one-month Data Analyst internship.",
    image: "assets/credentials/internship-certificate.png",
    slides: ["assets/credentials/internship-certificate.png"],
    highlights: [
      "One-month internship duration documented clearly.",
      "Reinforces hands-on exposure to analyst workflows in a professional setting."
    ],
    tools: ["Internship", "Professional Proof"],
    actions: [{ label: "View Certificate", url: "assets/credentials/internship-certificate.png" }]
  },
  {
    id: "data-analytics-certificate",
    title: "Master of Data Analytics Program",
    kicker: "The iScale",
    summary: "Course completion certificate supporting the formal upskilling journey into analytics and reporting.",
    image: "assets/credentials/data-analytics-certificate.jpg",
    slides: ["assets/credentials/data-analytics-certificate.jpg"],
    highlights: [
      "Resume cites this certificate as issued in May 2025.",
      "Supports transition into analytics with structured training."
    ],
    tools: ["Data Analytics", "Upskilling", "Certification"],
    actions: [{ label: "View Certificate", url: "assets/credentials/data-analytics-certificate.jpg" }]
  },
  {
    id: "sql-certificate",
    title: "SQL Intermediate Certification",
    kicker: "HackerRank",
    summary: "Skill certificate validating intermediate SQL proficiency and query-writing ability for joins, filtering, and analytical logic.",
    image: "assets/credentials/sql-certificate.png",
    slides: ["assets/credentials/sql-certificate.png"],
    highlights: [
      "Resume cites SQL certification issued in April 2025.",
      "Directly supports the SQL-heavy case studies in this portfolio."
    ],
    tools: ["SQL", "Certification", "Relational Analysis"],
    actions: [{ label: "View Certificate", url: "assets/credentials/sql-certificate.png" }]
  },
  {
    id: "tata-certificate",
    title: "Tata GenAI Data Analytics Simulation",
    kicker: "Tata | Forage",
    summary: "Certificate image for the GenAI Powered Data Analytics Job Simulation completed in April 2026.",
    image: "assets/credentials/tata-genai-certificate.png",
    slides: ["assets/credentials/tata-genai-certificate.png"],
    highlights: [
      "Covers exploratory data analysis, risk profiling, and AI-driven collections strategy tasks.",
      "Directly supports the Tata simulation work highlighted in the experience section."
    ],
    tools: ["GenAI", "Data Analytics", "Forage"],
    actions: [{ label: "View Certificate", url: "assets/credentials/tata-genai-certificate.png" }]
  },
  {
    id: "deloitte-certificate",
    title: "Deloitte Data Analytics Job Simulation",
    kicker: "Deloitte | Forage",
    summary: "Certificate image for the Deloitte Data Analytics Job Simulation completed in April 2026.",
    image: "assets/credentials/deloitte-certificate.png",
    slides: ["assets/credentials/deloitte-certificate.png"],
    highlights: [
      "Highlights practical work in data analysis and forensic technology tasks.",
      "Strengthens the portfolio with another business-oriented industry credential."
    ],
    tools: ["Data Analytics", "Forage", "Business Projects"],
    actions: [{ label: "View Certificate", url: "assets/credentials/deloitte-certificate.png" }]
  },
  {
    id: "degree",
    title: "Bachelor of Science in Agriculture",
    kicker: "Vasantrao Naik Marathwada Krishi Vidyapeeth",
    summary: "Formal degree certificate documenting academic completion and the foundation that preceded the move into analytics.",
    image: "assets/credentials/degree-certificate.png",
    slides: ["assets/credentials/degree-certificate.png"],
    highlights: [
      "Completed in 2020 before transitioning into analytics through self-driven project work.",
      "Reinforces educational credibility alongside project-led learning."
    ],
    tools: ["Education", "Academic Credential"],
    actions: [{ label: "View Degree Certificate", url: "assets/credentials/degree-certificate.png" }]
  }
];

const qs = (s) => document.querySelector(s);
const qsa = (s) => Array.from(document.querySelectorAll(s));
const projectGrid = qs("#projectGrid");
const repoArchiveGrid = qs("#repoArchive");
const credentialGrid = qs("#credentialGrid");
const navToggle = qs(".nav-toggle");
const navLinks = qs("#navLinks");
const navItems = qsa(".nav-links a[href^='#']");
const modal = qs("#detailModal");
const modalImage = qs("#modalImage");
const modalKicker = qs("#modalKicker");
const modalTitle = qs("#modalTitle");
const modalDescription = qs("#modalDescription");
const modalHighlights = qs("#modalHighlights");
const modalTags = qs("#modalTags");
const modalActions = qs("#modalActions");
const modalDots = qs("#modalDots");
const prevSlideButton = qs("#prevSlide");
const nextSlideButton = qs("#nextSlide");
let activeItem = null;
let activeSlide = 0;

const tags = (list) => list.map((tag) => `<span>${tag}</span>`).join("");
const itemById = (id) => [...projects, ...credentials].find((item) => item.id === id) || null;

function renderCards() {
  projectGrid.innerHTML = projects.map((project) => `
    <article class="project-card project-theme-${project.theme}" data-animate>
      <div class="project-visual">
        <img src="${project.image}" alt="${project.title} preview" loading="lazy">
        <span class="project-icon" aria-hidden="true">${project.icon}</span>
      </div>
      <div class="project-body">
        <div class="project-topline"><span>${project.kicker}</span><span>${project.date}</span></div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <ul class="project-highlights">${project.highlights.slice(0, 2).map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="tag-row">${tags(project.tools)}</div>
        <div class="project-actions">
          <a class="action-link" href="${project.actions[0].url}" target="_blank" rel="noopener noreferrer">Open GitHub</a>
          <button class="action-button" type="button" data-open-detail="${project.id}">Open Details</button>
        </div>
      </div>
    </article>
  `).join("");

  credentialGrid.innerHTML = credentials.map((item) => `
    <article class="credential-card" data-animate>
      <img src="${item.image}" alt="${item.title} preview" loading="lazy">
      <div class="credential-body">
        <span class="credential-kicker">${item.kicker}</span>
        <h3>${item.title}</h3>
        <p>${item.summary}</p>
        <div class="project-actions">
          <button class="action-button" type="button" data-open-detail="${item.id}">Open Details</button>
        </div>
      </div>
    </article>
  `).join("");

  repoArchiveGrid.innerHTML = repoArchive.map((item) => `
    <article class="repo-card repo-theme-${item.theme}" data-animate>
      <div class="repo-card-head">
        <span class="repo-icon" aria-hidden="true">${item.icon}</span>
        <div class="repo-head-copy">
          <span class="repo-kicker">${item.kicker}</span>
          <span class="repo-support">${item.actions.length} supporting link${item.actions.length > 1 ? "s" : ""}</span>
        </div>
      </div>
      <div class="repo-card-copy">
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
      </div>
      <div class="tag-row">${tags(item.tags)}</div>
      <div class="repo-card-actions">
        ${item.actions.map((action) => {
          const external = action.url.startsWith("http");
          return `<a class="action-link" href="${action.url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${action.label}</a>`;
        }).join("")}
      </div>
    </article>
  `).join("");
}

function renderModal() {
  if (!activeItem) return;
  modalImage.src = activeItem.slides[activeSlide];
  modalImage.alt = `${activeItem.title} slide ${activeSlide + 1}`;
  modalKicker.textContent = activeItem.kicker;
  modalTitle.textContent = activeItem.title;
  modalDescription.textContent = activeItem.summary;
  modalHighlights.innerHTML = activeItem.highlights.map((item) => `<li>${item}</li>`).join("");
  modalTags.innerHTML = tags(activeItem.tools);
  modalActions.innerHTML = activeItem.actions.map((action, index) => {
    const external = action.url.startsWith("http");
    return `<a href="${action.url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}>${action.label}</a>`;
  }).join("");
  modalDots.innerHTML = activeItem.slides.map((_, index) => `<button class="${index === activeSlide ? "is-active" : ""}" type="button" aria-label="Open slide ${index + 1}" data-open-slide="${index}"></button>`).join("");
  const visible = activeItem.slides.length > 1 ? "visible" : "hidden";
  prevSlideButton.style.visibility = visible;
  nextSlideButton.style.visibility = visible;
}

function openModal(id) {
  activeItem = itemById(id);
  activeSlide = 0;
  if (!activeItem) return;
  renderModal();
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeItem = null;
}

function moveSlide(direction) {
  if (!activeItem || activeItem.slides.length <= 1) return;
  activeSlide = (activeSlide + direction + activeItem.slides.length) % activeItem.slides.length;
  renderModal();
}

function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });
  qsa("[data-animate]").forEach((node) => observer.observe(node));
}

function initCounters() {
  const counters = qsa(".count-up");
  const animated = new WeakSet();

  const formatValue = (node, value) => {
    const suffix = node.dataset.suffix || "";
    const useComma = node.dataset.format === "comma";
    const text = useComma ? Math.round(value).toLocaleString("en-IN") : Math.round(value).toString();
    node.textContent = `${text}${suffix}`;
  };

  const animateCounter = (node) => {
    if (animated.has(node)) return;
    animated.add(node);

    const target = Number(node.dataset.counter || "0");
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      formatValue(node, target * eased);
      if (progress < 1) requestAnimationFrame(tick);
      else formatValue(node, target);
    };

    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach((node) => {
    formatValue(node, 0);
    observer.observe(node);
  });
}

function initScrollSpy() {
  const sections = navItems.map((link) => {
    const target = document.querySelector(link.getAttribute("href"));
    return target ? { link, target } : null;
  }).filter(Boolean);

  const update = () => {
    let current = sections[0];
    sections.forEach((section) => {
      if (section.target.getBoundingClientRect().top <= 180) current = section;
    });
    navItems.forEach((link) => link.classList.toggle("is-active", current && link === current.link));
  };

  update();
  document.addEventListener("scroll", update, { passive: true });
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-open-detail]");
    if (detailButton) openModal(detailButton.getAttribute("data-open-detail"));

    const slideButton = event.target.closest("[data-open-slide]");
    if (slideButton && activeItem) {
      activeSlide = Number(slideButton.getAttribute("data-open-slide"));
      renderModal();
    }

    if (event.target.closest("[data-modal-close]")) closeModal();
  });

  prevSlideButton.addEventListener("click", () => moveSlide(-1));
  nextSlideButton.addEventListener("click", () => moveSlide(1));

  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") closeModal();
    if (event.key === "ArrowRight") moveSlide(1);
    if (event.key === "ArrowLeft") moveSlide(-1);
  });

  navToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(open));
  });

  navItems.forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}

renderCards();
initEvents();
initReveal();
initCounters();
initScrollSpy();
