const projects = [
  {
    id: "vendor-analysis",
    title: "Vendor Performance & Profitability Analysis",
    kicker: "Retail Inventory & Sales | SQL, Python, Power BI",
    theme: "analytics",
    icon: "BI",
    date: "May 2026",
    summary: "Analyzed vendor efficiency and profitability across purchasing, sales, pricing, freight, and inventory data to support strategic purchasing decisions, reduce over-dependence, and uncover inventory optimization opportunities.",
    highlights: [
      "Developed a complex SQL ETL pipeline with CTEs and filtered aggregations to build a vendor_sales_summary table from multiple business tables.",
      "Used Python EDA and hypothesis testing to evaluate vendor profitability, pricing strategy effectiveness, inventory turnover, and margin behavior.",
      "Identified over-dependence on the top 10 vendors, representing 65.7% of purchases, and uncovered $2.71M in unsold inventory from low-performing vendors.",
      "Built Power BI dashboards showing vendor performance, profit margins, bulk purchase impact, and a 72% cost-reduction signal for decision-makers."
    ],
    tools: ["SQL", "Python", "Power BI", "MySQL", "Hypothesis Testing"],
    imagePosition: "center center",
    image: "assets/projects/vendor-analysis-1.png",
    slides: ["assets/projects/vendor-analysis-1.png", "assets/projects/vendor-analysis-impact.png"],
    actions: [
      { label: "Download EDA Notebook", url: "assets/docs/Vendor_Performance_Analysis.ipynb", download: true },
      { label: "Open Business Problem", url: "assets/docs/Vendor_Performance_Business_Problem.pdf" },
      { label: "Open Presentation Deck", url: "assets/docs/Vendor_Performance_Presentation.pdf" }
    ]
  },
  {
    id: "ecommerce",
    title: "E-commerce Sales Dashboard",
    kicker: "Internship Project | Power BI",
    theme: "powerbi",
    icon: "BI",
    date: "Aug 2025",
    summary: "Developed a Power BI command center tracking revenue, profit, order volume, payment mix, category contribution, and state-wise performance so decision-makers could spot growth pockets and weak regions faster.",
    highlights: [
      "Combined KPI cards, geo views, trend charts, and slicers to reduce manual sales reporting across product, payment, and regional segments.",
      "Surfaced which categories and states were driving the strongest contribution, helping prioritize focus areas for revenue growth.",
      "Packaged the analysis as a recruiter-ready case study with dashboard screens and supporting project documentation."
    ],
    tools: ["Power BI", "DAX", "Power Query", "Sales KPIs", "Dashboard Design"],
    imagePosition: "center top",
    image: "assets/projects/ecommerce-1.png",
    slides: ["assets/projects/ecommerce-1.png", "assets/projects/ecommerce-2.png", "assets/projects/ecommerce-3.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/E-commerce-Sales-Dashboard-in-Power-BI" },
      {
        label: "Open PBIX File",
        url: "assets/docs/Ecommerce_Sales_Dashboard.pbix",
        download: true,
        mobileLabel: "Open Dashboard Report",
        mobileUrl: "assets/docs/Ecommerce_Sales_Dashboard_Report.pdf"
      },
      { label: "Open Dashboard Report", url: "assets/docs/Ecommerce_Sales_Dashboard_Report.pdf" },
      { label: "Open Problem Statement", url: "assets/docs/Project_Ecommerce_Sales.pdf" },
      { label: "Open Instructions", url: "assets/docs/Project_Ecommerce_Sales_Instructions.pdf" }
    ]
  },
  {
    id: "amazon",
    title: "Amazon Global Sales Analysis",
    kicker: "Python + MySQL + Power BI",
    theme: "analytics",
    icon: "SQL",
    date: "Jun 2025",
    summary: "Built an end-to-end sales analytics pipeline that transformed raw Excel data into MySQL and dashboard-ready KPIs, making profit drivers, delivery performance, and customer segment trends easier to act on.",
    highlights: [
      "Connected ingestion, cleaning, SQL storage, exploratory analysis, and reporting in one business-ready workflow.",
      "Highlighted margin movement, shipping performance, and segment-level demand patterns to support sharper sales decisions.",
      "Shows how raw operational data can be converted into executive-friendly performance tracking."
    ],
    tools: ["Python", "MySQL", "Power BI", "EDA", "Sales Analytics"],
    imagePosition: "center top",
    image: "assets/projects/amazon-1.png",
    slides: ["assets/projects/amazon-1.png", "assets/projects/amazon-2.png", "assets/projects/amazon-3.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/Amazon-Global-Sales-Analysis" },
      { label: "Open EDA PDF", url: "assets/docs/Amazon_Global_Sales_EDA_Report.pdf" },
      { label: "Open Data Ingestion (ETL)", url: "assets/docs/Amazon_Global_Sales_Data_Ingestion_ETL.pdf" },
      {
        label: "Open PBIX File",
        url: "assets/docs/Amazon_Global_Sales_Dashboard.pbix",
        download: true,
        mobileLabel: "Open EDA PDF",
        mobileUrl: "assets/docs/Amazon_Global_Sales_EDA_Report.pdf"
      }
    ]
  },
  {
    id: "churn",
    title: "Customer Churn Analysis",
    kicker: "Power BI + Python + SQL",
    theme: "retention",
    icon: "CRM",
    date: "Mar 2025",
    summary: "Analyzed 7,043 telecom customer records across 23 variables to pinpoint churn-prone segments, quantify retention risk, and support intervention planning before revenue leaks grow.",
    highlights: [
      "Identified month-to-month contracts, low-tenure subscribers, and service-level patterns as key churn signals for retention targeting.",
      "Translated customer behavior into dashboard KPIs that help teams focus on at-risk cohorts instead of reactive blanket outreach.",
      "Balanced statistical analysis with business storytelling so churn insights were easier to operationalize."
    ],
    tools: ["Power BI", "Python", "SQL", "DAX", "Customer Retention"],
    imagePosition: "center top",
    image: "assets/projects/churn-1.png",
    slides: ["assets/projects/churn-1.png", "assets/projects/churn-2.png", "assets/projects/churn-3.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/Customer-Churn-Analysis" },
      { label: "Open EDA Report", url: "assets/docs/Churn_Analysis_EDA.pdf" },
      { label: "Open Retention Summary", url: "assets/docs/Teco_Customer_Churn_Analysis.pdf" }
    ]
  },
  {
    id: "pizza",
    title: "Pizza Sales SQL Deep Dive",
    kicker: "SQL + Restaurant Analytics",
    theme: "sql",
    icon: "SQL",
    date: "Featured",
    summary: "Analyzed pizza sales with SQL to quantify revenue by category, size, and order pattern, helping restaurant teams sharpen menu strategy, pricing focus, and peak-hour planning.",
    highlights: [
      "Mapped revenue by pizza category, size, and order timing to show which menu combinations drove the highest commercial return.",
      "Used SQL analysis to surface top sellers and peak demand windows, helping support pricing, inventory, and promotion choices.",
      "Turned query output into presentation-ready visuals so non-technical stakeholders could review the story quickly."
    ],
    tools: ["SQL", "Menu Analytics", "Revenue Analysis", "Business Reporting"],
    imagePosition: "center top",
    image: "assets/projects/pizza-1.png",
    slides: [
      "assets/projects/pizza-1.png",
      "assets/projects/pizza-2.png",
      "assets/projects/pizza-3.png",
      "assets/projects/pizza-4.png",
      "assets/projects/pizza-5.png",
      "assets/projects/pizza-6.png",
      "assets/projects/pizza-7.png",
      "assets/projects/pizza-8.png",
      "assets/projects/pizza-9.png",
      "assets/projects/pizza-10.png"
    ],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/Pizza-Sales-Analysis-SQL" },
      { label: "Open Problem Statement", url: "assets/docs/Project_Pizza_Sales_SQL.pdf" },
      { label: "Open Presentation Deck", url: "assets/docs/Pizza_Restaurant_Presentation.pdf" }
    ]
  },
  {
    id: "fnp",
    title: "Ferns & Petals Sales Intelligence",
    kicker: "Excel Dashboard | Business KPIs",
    theme: "excel",
    icon: "XLS",
    date: "Featured",
    summary: "Built an Excel sales dashboard around revenue, delivery time, top products, and occasion-led demand so the business can improve campaign timing, inventory planning, and customer experience.",
    highlights: [
      "Tracked revenue, order count, average customer spend, and delivery time in one dashboard designed for faster business reviews.",
      "Compared occasion-level demand, top products, and top cities to highlight when and where gifting sales perform best.",
      "Created an Excel-based visual story that helps teams align campaigns with seasonal buying behavior."
    ],
    tools: ["Excel", "Sales Dashboard", "Occasion Analytics", "KPI Tracking"],
    imagePosition: "center top",
    image: "assets/projects/fnp-1.png",
    slides: [
      "assets/projects/fnp-1.png",
      "assets/projects/fnp-2.png",
      "assets/projects/fnp-3.png",
      "assets/projects/fnp-4.png",
      "assets/projects/fnp-5.png",
      "assets/projects/fnp-6.png",
      "assets/projects/fnp-7.png",
      "assets/projects/fnp-8.png",
      "assets/projects/fnp-9.png"
    ],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/-Ferns-Petals-Sales-Analysis-Dashboard-Excel-Project" },
      { label: "Open Problem Statement", url: "assets/docs/Ferns_and_Petals_Sales_Analysis.pdf" },
      { label: "Open Presentation Deck", url: "assets/docs/FNP_Presentation.pdf" }
    ]
  },
  {
    id: "online-store",
    title: "Online Store Sales Analysis",
    kicker: "Excel Dashboard | Annual Report",
    theme: "excel",
    icon: "XLS",
    date: "Featured",
    summary: "Built an annual online store sales dashboard to compare channel mix, gender contribution, age-group demand, and state-level performance, helping teams identify where orders and revenue are actually coming from.",
    highlights: [
      "Combined channel mix, order status, monthly trend, gender split, and state performance into one Excel reporting layer for faster business reviews.",
      "Highlighted where sales volume, order count, and customer mix differ across Amazon, Flipkart, Myntra, and other channels so teams can focus marketing where conversion is stronger.",
      "Shows how an annual-report dataset can be translated into recruiter-ready business visuals with clear commercial talking points."
    ],
    tools: ["Excel", "Dashboarding", "Channel Analysis", "Sales KPIs"],
    imagePosition: "center top",
    image: "assets/projects/online-store-1.png",
    slides: [
      "assets/projects/online-store-1.png",
      "assets/projects/online-store-2.png",
      "assets/projects/online-store-3.png",
      "assets/projects/online-store-4.png",
      "assets/projects/online-store-5.png"
    ],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/Online-Store-Sales-Analysis-Excel-Dashboard" },
      { label: "Open Problem Statement", url: "assets/docs/Online_Store_Annual_Report_Problem_Statement.pdf" },
      { label: "Open Dashboard Report", url: "assets/docs/Online_Store_Sales_Analysis_Dashboard.pdf" }
    ]
  },
  {
    id: "fifa",
    title: "FIFA World Cup Tableau Report",
    kicker: "Tableau | Visual Storytelling",
    theme: "tableau",
    icon: "VIZ",
    date: "Featured",
    summary: "Designed a Tableau story that connects champions, hosts, qualification history, audience patterns, and tournament-era trends so viewers can explore World Cup performance through one visual narrative.",
    highlights: [
      "Turned tournament history, host-country context, attendance signals, and qualification trends into a single Tableau storytelling flow.",
      "Used visual summaries to make sports data easier to scan for non-technical viewers, showing narrative-led dashboard design.",
      "Strengthens the portfolio with a polished data-visualization case study beyond pure business reporting."
    ],
    tools: ["Tableau", "Data Storytelling", "Sports Analytics", "Dashboard Design"],
    imagePosition: "center top",
    image: "assets/projects/fifa-1.png",
    slides: ["assets/projects/fifa-1.png", "assets/projects/fifa-2.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/FIFA-World-Cup-Analysis-Portfolio-Report" }
    ]
  },
  {
    id: "whatsapp",
    title: "WhatsApp Chat Analysis",
    kicker: "Python + Streamlit",
    theme: "python",
    icon: "PY",
    date: "Jun 2025",
    summary: "Built a Streamlit chat analytics app that converts exported conversations into participation, response, and activity KPIs, turning unstructured messages into clear engagement insights.",
    highlights: [
      "Quantifies who contributes most, when activity peaks, and how engagement shifts over time without manual chat review.",
      "Transforms noisy conversational data into digestible charts and summaries that support faster pattern discovery.",
      "Demonstrates practical Python analytics on real-world text data with a usable front end."
    ],
    tools: ["Python", "Streamlit", "Text Analysis", "Visualization"],
    imagePosition: "center top",
    image: "assets/projects/whatsapp-1.png",
    slides: ["assets/projects/whatsapp-1.png", "assets/projects/whatsapp-2.png", "assets/projects/whatsapp-3.png"],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/WhatsApp-Chat-Analysis" },
      { label: "Open Problem Statement", url: "assets/docs/WhatsApp_Chat_Analysis_Problem_Statement.pdf" }
    ]
  },
  {
    id: "movie",
    title: "Movie Recommendation System",
    kicker: "ML + TMDB API",
    theme: "ml",
    icon: "ML",
    date: "Aug 2025",
    summary: "Built a content-based recommendation engine that improves content discovery by surfacing relevant titles quickly, reducing search friction and demonstrating how analytics can lift user engagement.",
    highlights: [
      "Uses similarity modeling to match users with closer-fit titles instead of generic browsing.",
      "Enriched results with TMDB poster metadata to make recommendations more clickable and user friendly.",
      "Frames machine learning as a product-impact feature rather than only a model experiment."
    ],
    tools: ["Machine Learning", "Python", "TMDB API", "Recommendation Systems"],
    imagePosition: "center center",
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
    summary: "Executed advanced SQL analysis across customers, invoices, artists, and genres to uncover revenue concentration, high-value buyers, and best-selling catalog segments for smarter merchandising decisions.",
    highlights: [
      "Answered business questions around customer spend, genre performance, and artist-level sales using joins, CTEs, and aggregations.",
      "Revealed where revenue clusters and which music categories deserve stronger promotion or stocking focus.",
      "Supported the analysis with a full project document and presentation deck for portfolio storytelling."
    ],
    tools: ["SQL", "Relational Analysis", "Business Queries", "Sales Insights"],
    imagePosition: "center top",
    image: "assets/projects/music-1.png",
    slides: [
      "assets/projects/music-1.png",
      "assets/projects/music-2.png",
      "assets/projects/music-3.png",
      "assets/projects/music-4.png",
      "assets/projects/music-5.png",
      "assets/projects/music-6.png",
      "assets/projects/music-7.png",
      "assets/projects/music-8.png",
      "assets/projects/music-9.png",
      "assets/projects/music-10.png",
      "assets/projects/music-11.png",
      "assets/projects/music-12.png"
    ],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/Music-Store-Data-Analysis-in-SQL" },
      { label: "Open SQL Case Study", url: "assets/docs/Project_Music_Store_SQL.pdf" },
      {
        label: "Open Presentation Deck",
        url: "assets/docs/Music_Store_Analysis_Deck.pptx",
        mobileLabel: "View GitHub",
        mobileUrl: "https://github.com/Manish-2906/Music-Store-Data-Analysis-SQL-Project"
      }
    ]
  },
  {
    id: "scraping",
    title: "Google Image Scraping",
    kicker: "Python Web Scraping",
    theme: "automation",
    icon: "BOT",
    date: "Jun 2025",
    summary: "Automated image collection from the web with Python to cut repetitive manual search effort and create reusable datasets for downstream analysis, labeling, or model experimentation.",
    highlights: [
      "Reduced manual collection work by turning repeated browser tasks into a reusable scraping workflow.",
      "Demonstrates how analysts can build faster data-acquisition pipelines when public data is not available in ready-made tables.",
      "Useful support project for teams that need custom image datasets or automated research collection."
    ],
    tools: ["Python", "BeautifulSoup", "Web Scraping", "Automation"],
    imagePosition: "center center",
    image: "assets/projects/scraping-1.png",
    slides: [
      "assets/projects/scraping-1.png",
      "assets/projects/scraping-2.png",
      "assets/projects/scraping-3.png",
      "assets/projects/scraping-4.png",
      "assets/projects/scraping-5.png",
      "assets/projects/scraping-6.png",
      "assets/projects/scraping-7.png",
      "assets/projects/scraping-8.png",
      "assets/projects/scraping-9.png"
    ],
    actions: [
      { label: "View GitHub", url: "https://github.com/Manish-2906/-Google-Image-Scraping-using-Python" },
      { label: "Open Problem Statement", url: "assets/docs/Google_Image_Scraping_Problem_Statement.pdf" },
      { label: "Open Workflow Summary", url: "assets/docs/Google_Image_Scraping_Summary.pdf" },
      { label: "Open Presentation Deck", url: "assets/docs/Google_Image_Scraping_Deck.pdf" }
    ]
  }
];

const repoArchive = [
  {
    title: "Zomato Restaurant EDA",
    kicker: "EDA + Business Insights",
    theme: "eda",
    icon: "EDA",
    summary: "Explored restaurant demand, online-order behavior, and rating trends to highlight what drives customer preference and where operators can improve visibility, delivery focus, or market positioning.",
    tags: ["Python", "EDA", "Consumer Data"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/Zomato-Restaurant-Data-Analysis-eda-" },
      { label: "Project Report", url: "assets/docs/Project_Zomato_EDA.pdf" },
      { label: "Open Problem Statement", url: "assets/docs/Zomato_Project_Assignment.pdf" }
    ]
  },
  {
    id: "covid-archive",
    title: "COVID-19 Monitoring Dashboard",
    kicker: "Python Dashboard Project",
    theme: "eda",
    icon: "DASH",
    summary: "Designed an India-focused monitoring dashboard consolidating case, recovery, and regional trend KPIs so users can quickly scan public-health movement from one reporting layer.",
    image: "assets/projects/covid.png",
    imagePosition: "center top",
    slides: ["assets/projects/covid.png"],
    highlights: [
      "Brought time-series and geography-based metrics into one compact view for faster trend monitoring.",
      "Improved readability of public data by organizing high-noise metrics into a decision-friendly dashboard format.",
      "Shows how analytics can support situational awareness on a real-world, high-volume topic."
    ],
    tools: ["Python", "Dashboarding", "Public Data", "Trend Analysis"],
    tags: ["Python", "Dashboard", "Public Data"],
    actions: [{ label: "Open GitHub", url: "https://github.com/Manish-2906/COVID-19-Impact-Analysis-" }]
  },
  {
    title: "New Year Sales Analysis",
    kicker: "Python EDA Project",
    theme: "marketing",
    icon: "EDA",
    summary: "Analyzed festive-season transactions to identify the highest-value customer segment, strongest states, and best-selling categories, giving marketing teams clearer direction on campaign targeting and stock planning.",
    tags: ["Python", "EDA", "Retail Analytics"],
    actions: [
      { label: "Open Analysis PDF", url: "assets/docs/New_Year_Sales_Analysis.pdf" }
    ]
  },
  {
    title: "Marketing Data Analysis",
    kicker: "Customer Analytics",
    theme: "marketing",
    icon: "MKT",
    summary: "Segmented customers by spend and campaign behavior to help prioritize high-value audiences, sharpen targeting decisions, and improve marketing ROI conversations.",
    tags: ["Python", "Marketing", "Segmentation"],
    actions: [
      { label: "Open GitHub", url: "https://github.com/Manish-2906/Marketing_Data_Analysis" }
    ]
  },
  {
    title: "Flipkart Product Data Cleaning",
    kicker: "Data Cleaning Project",
    theme: "cleaning",
    icon: "ETL",
    summary: "Cleaned large-scale product review data with Python and regex to reduce noise, standardize messy text fields, and create analysis-ready inputs for pricing, sentiment, or merchandising work.",
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
      { label: "Open Signed PDF", url: "assets/docs/Experience_Letter_Manish.pdf" },
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

document.documentElement.classList.add("js-ready");

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
const modalContent = qs("#modalContent");
const modalCloseButton = qs(".modal-close");
const heroVideoFrame = qs("#heroVideoFrame");
const heroVideoFallback = qs("#heroVideoFallback");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const prefersCoarsePointer = window.matchMedia("(pointer: coarse)");
let activeItem = null;
let activeSlide = 0;
let lastActiveTrigger = null;

const tags = (list) => list.map((tag) => `<span>${tag}</span>`).join("");
const itemById = (id) => [...projects, ...credentials, ...repoArchive].find((item) => item.id === id) || null;

function isMobileLike() {
  return prefersCoarsePointer.matches || window.innerWidth <= 820;
}

function resolveAction(action) {
  const useMobileFallback = isMobileLike() && action.mobileUrl;
  return {
    ...action,
    label: useMobileFallback ? (action.mobileLabel || action.label) : action.label,
    url: useMobileFallback ? action.mobileUrl : action.url,
    download: useMobileFallback ? false : action.download
  };
}

function getVisibleActions(actions = []) {
  return actions
    .map((action) => resolveAction(action))
    .filter((action) => !/project explanation/i.test(action.label || ""));
}

function setNavState(open) {
  navLinks.classList.toggle("is-open", open);
  navToggle.setAttribute("aria-expanded", String(open));
}

function revealAnimatedNodes() {
  qsa("[data-animate]").forEach((node) => node.classList.add("is-visible"));
}

function getModalFocusableElements() {
  return qsa("#detailModal button, #detailModal a[href], #detailModal [tabindex]:not([tabindex='-1'])")
    .filter((node) => !node.disabled && node.offsetParent !== null);
}

function renderCards() {
  projectGrid.innerHTML = projects.map((project) => `
    <article class="project-card project-theme-${project.theme}" data-animate>
      <div class="project-visual">
        <img src="${project.image}" alt="${project.title} preview" loading="lazy" style="object-position: ${project.imagePosition || "center center"};">
        <span class="project-icon" aria-hidden="true">${project.icon}</span>
      </div>
      <div class="project-body">
        <div class="project-topline"><span>${project.kicker}</span><span>${project.date}</span></div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <ul class="project-highlights">${project.highlights.slice(0, 2).map((item) => `<li>${item}</li>`).join("")}</ul>
        <div class="tag-row">${tags(project.tools)}</div>
        <div class="project-actions">
          ${getVisibleActions(project.actions).slice(0, 3).map((action) => {
            const external = action.url.startsWith("http");
            return `<a class="action-link" href="${action.url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}${action.download ? " download" : ""}>${action.label}</a>`;
          }).join("")}
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
      ${item.image ? `<div class="repo-visual"><img src="${item.image}" alt="${item.title} preview" loading="lazy" style="object-position: ${item.imagePosition || "center center"};"></div>` : ""}
      <div class="repo-card-head">
        <span class="repo-icon" aria-hidden="true">${item.icon}</span>
        <div class="repo-head-copy">
          <span class="repo-kicker">${item.kicker}</span>
          <span class="repo-support">${getVisibleActions(item.actions).length} supporting link${getVisibleActions(item.actions).length !== 1 ? "s" : ""}</span>
        </div>
      </div>
      <div class="repo-card-copy">
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
      </div>
      <div class="tag-row">${tags(item.tags)}</div>
      <div class="repo-card-actions">
        ${getVisibleActions(item.actions).map((action) => {
          const external = action.url.startsWith("http");
          return `<a class="action-link" href="${action.url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}${action.download ? " download" : ""}>${action.label}</a>`;
        }).join("")}
        ${item.id ? `<button class="action-button" type="button" data-open-detail="${item.id}">View Gallery</button>` : ""}
      </div>
    </article>
  `).join("");
}

function renderModal() {
  if (!activeItem) return;
  modalImage.src = activeItem.slides[activeSlide];
  modalImage.alt = `${activeItem.title} slide ${activeSlide + 1}`;
  modalImage.style.objectPosition = activeItem.modalPosition || activeItem.imagePosition || "center center";
  modalKicker.textContent = activeItem.kicker;
  modalTitle.textContent = activeItem.title;
  modalDescription.textContent = activeItem.summary;
  modalHighlights.innerHTML = (activeItem.highlights || []).map((item) => `<li>${item}</li>`).join("");
  modalTags.innerHTML = tags(activeItem.tools || activeItem.tags || []);
  modalActions.innerHTML = getVisibleActions(activeItem.actions).map((action) => {
    const external = action.url.startsWith("http");
    return `<a href="${action.url}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""}${action.download ? " download" : ""}>${action.label}</a>`;
  }).join("");
  modalDots.innerHTML = activeItem.slides.map((_, index) => `<button class="${index === activeSlide ? "is-active" : ""}" type="button" aria-label="Open slide ${index + 1}" data-open-slide="${index}"></button>`).join("");
  const visible = activeItem.slides.length > 1 ? "visible" : "hidden";
  prevSlideButton.style.visibility = visible;
  nextSlideButton.style.visibility = visible;
}

function openModal(id, trigger = document.activeElement) {
  activeItem = itemById(id);
  activeSlide = 0;
  if (!activeItem) return;
  lastActiveTrigger = trigger instanceof HTMLElement ? trigger : null;
  renderModal();
  if (modalContent) modalContent.scrollTop = 0;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  requestAnimationFrame(() => modalCloseButton?.focus());
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  activeItem = null;
  lastActiveTrigger?.focus();
  lastActiveTrigger = null;
}

function moveSlide(direction) {
  if (!activeItem || activeItem.slides.length <= 1) return;
  activeSlide = (activeSlide + direction + activeItem.slides.length) % activeItem.slides.length;
  renderModal();
}

function initReveal() {
  if (prefersReducedMotion.matches || typeof IntersectionObserver === "undefined") {
    revealAnimatedNodes();
    return;
  }

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
    const prefix = node.dataset.prefix || "";
    const useComma = node.dataset.format === "comma";
    const decimals = Number(node.dataset.decimals || "0");
    const rounded = decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
    const text = useComma ? Math.round(value).toLocaleString("en-IN") : rounded;
    node.textContent = `${prefix}${text}${suffix}`;
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

  if (prefersReducedMotion.matches || typeof IntersectionObserver === "undefined") {
    counters.forEach((node) => formatValue(node, Number(node.dataset.counter || "0")));
    return;
  }

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

function initHeroVideo() {
  if (!heroVideoFrame) return;

  const livePreviewLink = heroVideoFallback ? heroVideoFallback.querySelector("[data-live-preview]") : null;
  if (livePreviewLink) livePreviewLink.href = `http://127.0.0.1:8000/index.html${window.location.hash || ""}`;

  if (window.location.protocol === "file:") {
    document.body.classList.add("is-file-preview");
    return;
  }

  const originParam = window.location.origin && window.location.origin.startsWith("http")
    ? `&origin=${encodeURIComponent(window.location.origin)}`
    : "";
  heroVideoFrame.src = `${heroVideoFrame.dataset.src}${originParam}`;
}

function initEvents() {
  document.addEventListener("click", (event) => {
    const detailButton = event.target.closest("[data-open-detail]");
    if (detailButton) openModal(detailButton.getAttribute("data-open-detail"), detailButton);

    const slideButton = event.target.closest("[data-open-slide]");
    if (slideButton && activeItem) {
      activeSlide = Number(slideButton.getAttribute("data-open-slide"));
      renderModal();
    }

    if (event.target.closest("[data-modal-close]")) closeModal();

    if (navLinks.classList.contains("is-open") && !event.target.closest(".nav")) {
      setNavState(false);
    }
  });

  prevSlideButton.addEventListener("click", () => moveSlide(-1));
  nextSlideButton.addEventListener("click", () => moveSlide(1));

  document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("is-open")) {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") moveSlide(1);
      if (event.key === "ArrowLeft") moveSlide(-1);

      if (event.key === "Tab") {
        const focusable = getModalFocusableElements();
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }

      return;
    }

    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      setNavState(false);
      navToggle.focus();
    }
  });

  navToggle.addEventListener("click", () => {
    setNavState(!navLinks.classList.contains("is-open"));
  });

  navItems.forEach((link) => link.addEventListener("click", () => {
    setNavState(false);
  }));

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820 && navLinks.classList.contains("is-open")) setNavState(false);
  });
}

renderCards();
initEvents();
initReveal();
initCounters();
initScrollSpy();
initHeroVideo();
