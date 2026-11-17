import React, { useState, useEffect } from "react";
import "./Works.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiExternalLink,
  FiShoppingBag,
  FiCode,
  FiGlobe,
  FiSearch,
  FiCheckCircle,
  FiArrowUpRight,
} from "react-icons/fi";
import { SiShopify, SiNextdotjs, SiWordpress, SiReact } from "react-icons/si";

const projectsData = [
  // ================= SHOPIFY STORES (13 STORES FROM PARTNER DASHBOARD) =================
  {
    id: "leftovers-den",
    title: "Leftovers Den",
    domain: "leftoversden.com",
    url: "https://leftoversden.com",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Apparel & Factory Surplus E-Commerce",
    initials: "LD",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    status: "Active Store",
    summary:
      "Engineered an optimized, high-volume apparel storefront handling extensive inventory catalogs, multi-attribute filter schemas, and high-conversion mobile checkout funnels.",
    tags: ["Shopify", "Liquid", "Theme Customization", "Mobile Checkout"],
  },
  {
    id: "pukhrajpk",
    title: "Pukhrajpk",
    domain: "pukhraj.pk",
    url: "https://pukhraj.pk",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Luxury Eastern Pret & Fashion",
    initials: "PU",
    gradient: "linear-gradient(135deg, #10b981 0%, #00E9B0 100%)",
    status: "Active Store",
    summary:
      "Crafted a luxury pret and eastern fashion boutique with tailored product showcases, interactive sizing guides, dynamic variant pickers, and lightning-fast page loading.",
    tags: ["Shopify", "Liquid", "Pret Fashion", "Size Guide Integration"],
  },
  {
    id: "tehzeeb",
    title: "Tehzeeb",
    domain: "thetehzeeb.pk",
    url: "https://thetehzeeb.pk",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Designer Pret & Couture",
    initials: "TE",
    gradient: "linear-gradient(135deg, #0ea5e9 0%, #38bdf8 100%)",
    status: "Active Store",
    summary:
      "Developed an editorial-grade boutique experience featuring lookbook galleries, curated bridal and pret collections, custom mega-menus, and sticky add-to-cart on mobile.",
    tags: ["Shopify", "Liquid", "Lookbook UI", "Conversion UX"],
  },
  {
    id: "quill",
    title: "Quill",
    domain: "quill.pk",
    url: "https://quill.pk",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Stationery & Lifestyle Goods",
    initials: "QU",
    gradient: "linear-gradient(135deg, #8b5cf6 0%, #a855f7 100%)",
    status: "Active Store",
    summary:
      "Engineered a minimalist, aesthetic e-commerce store for bespoke notebooks and stationery goods with cart drawer upsells, product bundle logic, and clean typography.",
    tags: ["Shopify", "Liquid", "Minimalist Design", "Cart Upsells"],
  },
  {
    id: "bolan-fruit",
    title: "Bolan Fruit Products",
    domain: "bolanfruitproducts.com",
    url: "https://bolanfruitproducts.com",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Organic FMCG & Farm Produce",
    initials: "BO",
    gradient: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    status: "Active Store",
    summary:
      "Developed an enterprise food & agriculture e-commerce portal showcasing organic preserves, jams, and dry fruits with custom nutrition tabs and bulk order inquiry forms.",
    tags: ["Shopify", "FMCG", "Custom Sections", "Bulk Inquiries"],
  },
  {
    id: "keshh-herbals",
    title: "Keshh Herbals",
    domain: "keshhherbals.com",
    url: "https://keshhherbals.com",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Organic Haircare & Cosmetics",
    initials: "KE",
    gradient: "linear-gradient(135deg, #14b8a6 0%, #06b6d4 100%)",
    status: "Active Store",
    summary:
      "Created an organic haircare storefront with dynamic bundle & save builder, customer reviews carousel, ingredient highlight accordions, and free shipping tier progress bars.",
    tags: ["Shopify", "Liquid", "Bundle Builder", "Customer Reviews"],
  },
  {
    id: "cotton-eagle",
    title: "Cotton Eagle",
    domain: "cottoneagle.com",
    url: "https://www.cottoneagle.com",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Premium Cotton Menswear",
    initials: "CO",
    gradient: "linear-gradient(135deg, #0284c7 0%, #6366f1 100%)",
    status: "Active Store",
    summary:
      "Designed a responsive menswear portal with tailored product description templates, stock availability counters, instant swatch selection, and speed-optimized layouts.",
    tags: ["Shopify", "Liquid", "Menswear PDP", "Sticky Cart"],
  },
  {
    id: "ejaazcollection",
    title: "ejaazcollection",
    domain: "ejaazcollection.com",
    url: "https://ejaazcollection.com",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Designer Festive & Bridal Wear",
    initials: "EJ",
    gradient: "linear-gradient(135deg, #d946ef 0%, #ec4899 100%)",
    status: "Active Store",
    summary:
      "Built an exclusive fashion designer storefront featuring ultra-high-resolution image galleries, multi-currency conversion, slide-out cart drawers, and luxury branding.",
    tags: ["Shopify", "Liquid", "Multi-Currency", "High Fashion"],
  },
  {
    id: "nazneen",
    title: "Nazneen Collection",
    domain: "nazneencollection.pk",
    url: "https://www.nazneencollection.pk",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Embroidered Women's Pret",
    initials: "NA",
    gradient: "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
    status: "Active Store",
    summary:
      "Engineered a scalable women's apparel store with faceted collection filtering, dynamic sales badges, cross-sell product recommendations, and frictionless mobile checkout.",
    tags: ["Shopify", "Liquid", "Collection Filters", "Cross-Sell"],
  },
  {
    id: "rivaayatpk",
    title: "Rivaayat PK",
    domain: "rivaayat.pk",
    url: "https://rivaayat.pk",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Traditional Heritage Apparel",
    initials: "RI",
    gradient: "linear-gradient(135deg, #047857 0%, #10b981 100%)",
    status: "Active Store",
    summary:
      "Implemented a heritage-inspired cultural clothing store with elegant typography, responsive product cards with hover previews, trust badges, and speed-optimized Liquid templates.",
    tags: ["Shopify", "Liquid", "Heritage Brand", "Speed Optimization"],
  },
  {
    id: "core-clothing",
    title: "Core Clothing",
    domain: "coreclothing.pk",
    url: "https://coreclothing.pk",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Urban Streetwear & Athletic",
    initials: "CC",
    gradient: "linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)",
    status: "Active Store",
    summary:
      "Customized a high-energy urban streetwear storefront with bold dark aesthetics, animated promo tickers, interactive size charts, and high-impact hero carousel banners.",
    tags: ["Shopify", "Liquid", "Streetwear UI", "Animations"],
  },
  {
    id: "madina-mobile",
    title: "Madina Mobile",
    domain: "madina-mobile-3m8uzfz2.myshopify.com",
    url: "https://madina-mobile-3m8uzfz2.myshopify.com",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Smart Devices, Gadgets & Audio",
    initials: "MM",
    gradient: "linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)",
    status: "Active Store",
    summary:
      "Engineered an electronics and smart accessories portal featuring structured technical specification tables, warranty assurance badges, and fast search with autocomplete.",
    tags: ["Shopify", "Gadgets E-Commerce", "Tech Specs UI", "Fast Search"],
  },
  {
    id: "zynaofficial",
    title: "Zyna Official",
    domain: "zynaofficial.com",
    url: "https://zynaofficial.com",
    category: "shopify",
    categoryLabel: "Shopify Store",
    niche: "Contemporary Ready-to-Wear",
    initials: "ZY",
    gradient: "linear-gradient(135deg, #c026d3 0%, #e879f9 100%)",
    status: "Active Store",
    summary:
      "Delivered a modern ready-to-wear women's fashion site with quick-view modal dialogs, integrated Instagram lookbooks, responsive grid layouts, and single-click add-to-cart.",
    tags: ["Shopify", "Liquid", "Quick View Modals", "Instagram Feed"],
  },

  // ================= FULL STACK & NEXT.JS WEB APPS =================
  {
    id: "gold-and-silver",
    title: "Gold & Silver",
    domain: "goldandsilverdr.com",
    url: "https://goldandsilverdr.com/",
    category: "fullstack",
    categoryLabel: "Full Stack App",
    niche: "Precious Metals Trading & Analytics",
    initials: "GS",
    gradient: "linear-gradient(135deg, #eab308 0%, #f59e0b 100%)",
    status: "Live Platform",
    summary:
      "End-to-end UI/UX design, Next.js frontend development, and QA testing. Integrated RESTful APIs for real-time market valuations, built responsive user dashboard panels, and ensured cross-browser performance.",
    tags: ["Next.js", "React", "REST API", "Financial Dashboard", "QA"],
  },
  {
    id: "cinewoo",
    title: "Cinewoo",
    domain: "cinewoo.com",
    url: "https://cinewoo.com/",
    category: "fullstack",
    categoryLabel: "Web Platform",
    niche: "Canadian Film Talent Network",
    initials: "CW",
    gradient: "linear-gradient(135deg, #e11d48 0%, #fb7185 100%)",
    status: "Live Platform",
    summary:
      "Developed a modern, visually immersive web application empowering Canadian filmmakers and actors. Features smooth micro-animations, media galleries, responsive creator profiles, and clean branding.",
    tags: ["React", "Next.js", "Media Showcase", "Modern UI", "Animations"],
  },
  {
    id: "live-streaming-app",
    title: "Live Streaming Web Application",
    domain: "Next.js Streaming Platform",
    url: null,
    category: "fullstack",
    categoryLabel: "Full Stack App",
    niche: "Real-Time Video & Chat System",
    initials: "LS",
    gradient: "linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)",
    status: "Architecture Project",
    summary:
      "Architected dynamic live streaming platform using Next.js. Engineered real-time video playback pipelines, interactive live chat streams with WebSockets, and low-latency client optimization.",
    tags: ["Next.js", "WebSockets", "Live Video", "Real-Time Chat", "Node.js"],
  },

  // ================= WORDPRESS & EDUCATIONAL PORTALS =================
  {
    id: "al-murtaza",
    title: "Al Murtaza School Network",
    domain: "staging.ams.edu.pk",
    url: "https://staging.ams.edu.pk/",
    category: "wordpress",
    categoryLabel: "WordPress Portal",
    niche: "Multi-Campus School System",
    initials: "AM",
    gradient: "linear-gradient(135deg, #0d9488 0%, #14b8a6 100%)",
    status: "Live Portal",
    summary:
      "Complete WordPress and Elementor customization across multi-campus portals: Academics, Branches, Director's Message, and Admissions. Implemented custom CSS typography, interactive maps, and speed tuning.",
    tags: ["WordPress", "Elementor", "Custom CSS", "Multi-Campus Portal"],
  },
  {
    id: "blue-star-schools",
    title: "Blue Star Schools",
    domain: "bluestarschools.com.pk",
    url: "https://bluestarschools.com.pk/",
    category: "wordpress",
    categoryLabel: "WordPress Portal",
    niche: "K-12 School & Admissions",
    initials: "BS",
    gradient: "linear-gradient(135deg, #2563eb 0%, #3b82f6 100%)",
    status: "Live Portal",
    summary:
      "Customized a responsive educational institution portal. Built admissions information pipelines, campus facilities showcase, interactive card hover animations with custom CSS, and SEO enhancements.",
    tags: ["WordPress", "Elementor", "Admissions UI", "Custom Styling"],
  },
  {
    id: "mmcp",
    title: "Mian Meer College of Pharmacy",
    domain: "mmcp.com.pk",
    url: "https://mmcp.com.pk/",
    category: "wordpress",
    categoryLabel: "Institutional Portal",
    niche: "Higher Education Pharmacy College",
    initials: "MM",
    gradient: "linear-gradient(135deg, #059669 0%, #10b981 100%)",
    status: "Live Portal",
    summary:
      "Delivered official institutional portal for Jhang's premier pharmacy college. Structured Pharm-D curriculum, online downloadable admissions forms, campus laboratory facilities, and faculty profiles.",
    tags: ["WordPress", "Elementor", "Higher Education", "Forms & Portal"],
  },
  {
    id: "gak-campus",
    title: "APS&C GAK Campus",
    domain: "gak-website-six.vercel.app",
    url: "https://gak-website-six.vercel.app/",
    category: "wordpress",
    categoryLabel: "Web Portal",
    niche: "Army Public School & College",
    initials: "GK",
    gradient: "linear-gradient(135deg, #15803d 0%, #22c55e 100%)",
    status: "Live Portal",
    summary:
      "Built the official educational portal for APS&C GAK Campus. Features dual-curriculum (FBISE & Cambridge) guides, parent notification boards, downloads section, and clean disciplined layout.",
    tags: ["Next.js", "Vercel", "Educational Portal", "Responsive Design"],
  },
  {
    id: "meem-academy",
    title: "Meem School System",
    domain: "meemacademy.org",
    url: "https://meemacademy.org/",
    category: "wordpress",
    categoryLabel: "WordPress Portal",
    niche: "K-12 & Dual Curriculum School",
    initials: "MS",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #8b5cf6 100%)",
    status: "Live Portal",
    summary:
      "Customized comprehensive portal for preschool through senior school alongside Hifz program. Integrated course directory, student login gateway links, virtual campus gallery, and contact desk.",
    tags: ["WordPress", "Elementor", "Student Portal", "Responsive"],
  },
  {
    id: "himayat-e-islam",
    title: "Himayat-e-Islam School",
    domain: "hihss.edu.pk",
    url: "https://hihss.edu.pk/",
    category: "wordpress",
    categoryLabel: "Institutional Portal",
    niche: "Historic Educational Institution",
    initials: "HI",
    gradient: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 100%)",
    status: "Live Portal",
    summary:
      "Developed web portal for historic educational institution established in 1884. Created structured layouts for faculty profiles, alumni network, admissions info, and archival heritage exhibits.",
    tags: ["WordPress", "Elementor", "Archival Layout", "Cross-Browser"],
  },
];

const Works = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });

    const handleCustomFilter = (e) => {
      if (e.detail) {
        setActiveFilter(e.detail);
      }
    };
    window.addEventListener("setProjectFilter", handleCustomFilter);
    return () => window.removeEventListener("setProjectFilter", handleCustomFilter);
  }, []);

  const filteredProjects = projectsData.filter((project) => {
    const matchesFilter =
      activeFilter === "all" || project.category === activeFilter;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.domain.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) =>
        t.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesFilter && matchesSearch;
  });

  const shopifyCount = projectsData.filter((p) => p.category === "shopify").length;
  const fullstackCount = projectsData.filter((p) => p.category === "fullstack").length;
  const wordpressCount = projectsData.filter((p) => p.category === "wordpress").length;

  return (
    <section id="works" className="works-section">
      <div className="works-container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Portfolio &amp; Showcase</span>
          <h2 className="section-title">Shopify Stores, WordPress &amp; Full Stack Apps</h2>
          <div className="section-line"></div>
          <p className="works-lead">
            Explore <strong>13+ production Shopify stores</strong>, <strong>6+ enterprise WordPress &amp; educational portals</strong>, and scalable <strong>Full Stack web applications</strong> built with modern technologies.
          </p>
        </div>

        {/* Dual Spotlight Banners: Shopify & WordPress */}
        <div className="spotlights-wrapper" data-aos="fade-up" data-aos-delay="100">
          <div className="shopify-spotlight-banner">
            <div className="spotlight-badge">
              <SiShopify className="shopify-brand-icon" />
              <span>Shopify Dev Portfolio (13 Stores)</span>
            </div>
            <div className="spotlight-content">
              <div className="spotlight-text">
                <h3>13+ High-Converting Shopify Stores</h3>
                <p>
                  Bespoke Liquid theme development, section schemas, cart drawer upsells, product bundle builders, and mobile speed optimization.
                </p>
              </div>
              <button
                className={`spotlight-btn ${activeFilter === "shopify" ? "active" : ""}`}
                onClick={() => setActiveFilter("shopify")}
              >
                <FiShoppingBag /> View Shopify Stores ({shopifyCount})
              </button>
            </div>
          </div>

          <div className="wordpress-spotlight-banner">
            <div className="spotlight-badge wp-spotlight-badge">
              <SiWordpress className="wp-brand-icon" />
              <span>WordPress &amp; CMS Portals (6 Portals)</span>
            </div>
            <div className="spotlight-content">
              <div className="spotlight-text">
                <h3>6+ Educational &amp; Institutional Portals</h3>
                <p>
                  Built with Elementor Pro and custom CSS: multi-campus architectures, student admissions pipelines, academic notifications, and responsive branding.
                </p>
              </div>
              <button
                className={`spotlight-btn wp-spotlight-btn ${activeFilter === "wordpress" ? "active" : ""}`}
                onClick={() => setActiveFilter("wordpress")}
              >
                <SiWordpress /> View WordPress Portals ({wordpressCount})
              </button>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="works-controls" data-aos="fade-up" data-aos-delay="150">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeFilter === "all" ? "active" : ""}`}
              onClick={() => setActiveFilter("all")}
            >
              All Projects <span className="tab-count">{projectsData.length}</span>
            </button>
            <button
              className={`filter-tab shopify-tab ${activeFilter === "shopify" ? "active" : ""}`}
              onClick={() => setActiveFilter("shopify")}
            >
              <SiShopify className="tab-icon" /> Shopify Stores{" "}
              <span className="tab-count">{shopifyCount}</span>
            </button>
            <button
              className={`filter-tab ${activeFilter === "fullstack" ? "active" : ""}`}
              onClick={() => setActiveFilter("fullstack")}
            >
              <FiCode className="tab-icon" /> Full Stack &amp; Next.js{" "}
              <span className="tab-count">{fullstackCount}</span>
            </button>
            <button
              className={`filter-tab ${activeFilter === "wordpress" ? "active" : ""}`}
              onClick={() => setActiveFilter("wordpress")}
            >
              <SiWordpress className="tab-icon" /> Portals &amp; WordPress{" "}
              <span className="tab-count">{wordpressCount}</span>
            </button>
          </div>

          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search stores, brands, or tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                className="clear-search"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="works-grid">
          {filteredProjects.length === 0 ? (
            <div className="no-results">
              <p>No projects found matching "{searchQuery}".</p>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  setSearchQuery("");
                  setActiveFilter("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                className={`project-card ${project.category}`}
                data-aos="fade-up"
                data-aos-delay={Math.min(idx * 60, 400)}
              >
                {/* Card Top / Header */}
                <div className="card-header">
                  <div className="card-badges">
                    <span className="category-pill">
                      {project.category === "shopify" && (
                        <SiShopify className="pill-brand-icon" />
                      )}
                      {project.category === "fullstack" && (
                        <SiNextdotjs className="pill-brand-icon" />
                      )}
                      {project.category === "wordpress" && (
                        <SiWordpress className="pill-brand-icon" />
                      )}
                      {project.categoryLabel}
                    </span>
                    <span className="status-indicator">
                      <span className="live-dot"></span>
                      {project.status}
                    </span>
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link-btn"
                      title={`Visit ${project.title}`}
                      aria-label={`Visit ${project.title}`}
                    >
                      <FiArrowUpRight />
                    </a>
                  ) : null}
                </div>

                {/* Visual Brand Monogram Banner */}
                <div
                  className="card-brand-banner"
                  style={{ background: project.gradient }}
                >
                  <div className="brand-monogram">
                    <span>{project.initials}</span>
                  </div>
                  <div className="brand-domain-chip">
                    <FiGlobe className="domain-icon" />
                    <span>{project.domain}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="card-body">
                  <span className="project-niche">{project.niche}</span>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-summary">{project.summary}</p>
                </div>

                {/* Tech Pills */}
                <div className="card-footer">
                  <div className="tech-tags-list">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tech-tag-chip">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.url ? (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-visit-action"
                    >
                      <span>{project.category === "shopify" ? "Visit Live Store" : "Visit Website"}</span>
                      <FiExternalLink />
                    </a>
                  ) : (
                    <div className="live-visit-action disabled">
                      <span>Internal Architecture</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Works;
