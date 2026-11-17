import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiShopify,
  SiWordpress,
  SiElementor,
  SiGit,
  SiGithub,
  SiFigma,
  SiVercel,
} from "react-icons/si";
import {
  FiLayout,
  FiServer,
  FiShoppingBag,
  FiGlobe,
  FiCheckCircle,
} from "react-icons/fi";

const skillCategories = [
  {
    title: "Frontend Engineering",
    icon: <FiLayout className="category-icon" />,
    badge: "Core Stack",
    description:
      "Crafting blazing-fast, dynamic user interfaces with component-driven architectures, modern styling, and pixel-perfect responsiveness.",
    skills: [
      { name: "React.js", icon: <SiReact style={{ color: "#61dafb" }} /> },
      { name: "Next.js", icon: <SiNextdotjs style={{ color: "#ffffff" }} /> },
      { name: "JavaScript (ES6+)", icon: <SiJavascript style={{ color: "#f7df1e" }} /> },
      { name: "TypeScript", icon: <SiTypescript style={{ color: "#3178c6" }} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#38bdf8" }} /> },
      { name: "HTML5 & CSS3", icon: <FiLayout style={{ color: "#e34f26" }} /> },
    ],
  },
  {
    title: "Shopify & E-Commerce",
    icon: <FiShoppingBag className="category-icon" />,
    badge: "13+ Live Stores",
    description:
      "End-to-end Shopify development, bespoke Liquid theme architecture, schema sections, checkout enhancements, and speed optimization.",
    skills: [
      { name: "Shopify Themes", icon: <SiShopify style={{ color: "#95bf47" }} /> },
      { name: "Liquid Templating", icon: <SiShopify style={{ color: "#7ab55c" }} /> },
      { name: "Storefront UX", icon: <FiShoppingBag style={{ color: "#00E9B0" }} /> },
      { name: "App Integrations", icon: <FiCheckCircle style={{ color: "#38bdf8" }} /> },
      { name: "Cart Drawers & PDP", icon: <SiShopify style={{ color: "#95bf47" }} /> },
      { name: "Speed & SEO", icon: <FiCheckCircle style={{ color: "#00E9B0" }} /> },
    ],
  },
  {
    title: "WordPress & CMS Architecture",
    icon: <FiGlobe className="category-icon wp-icon" />,
    badge: "6+ Live Portals",
    description:
      "Developing enterprise WordPress portals with Elementor Pro, custom CSS styling, dynamic content, admissions funnels, and WooCommerce workflows.",
    skills: [
      { name: "WordPress", icon: <SiWordpress style={{ color: "#21759b" }} /> },
      { name: "Elementor Pro", icon: <SiElementor style={{ color: "#92003b" }} /> },
      { name: "Custom CSS / Styling", icon: <FiLayout style={{ color: "#38bdf8" }} /> },
      { name: "Academic & CMS Portals", icon: <FiGlobe style={{ color: "#00E9B0" }} /> },
      { name: "WooCommerce Ready", icon: <SiWordpress style={{ color: "#7f54b3" }} /> },
      { name: "Speed & Performance", icon: <FiCheckCircle style={{ color: "#22c55e" }} /> },
    ],
  },
  {
    title: "Backend, Database & Cloud",
    icon: <FiServer className="category-icon" />,
    badge: "Full Stack",
    description:
      "Designing scalable server-side systems, RESTful web services, database relational schemas, and CI/CD cloud deployments.",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs style={{ color: "#22c55e" }} /> },
      { name: "Express.js", icon: <SiExpress style={{ color: "#cbd5e1" }} /> },
      { name: "RESTful APIs", icon: <FiServer style={{ color: "#00E9B0" }} /> },
      { name: "MySQL / SQL", icon: <SiMysql style={{ color: "#00758f" }} /> },
      { name: "MongoDB", icon: <SiMongodb style={{ color: "#47a248" }} /> },
      { name: "Git & Vercel", icon: <SiVercel style={{ color: "#ffffff" }} /> },
    ],
  },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Technical Proficiency</span>
          <h2 className="section-title">Skills &amp; Specialties</h2>
          <div className="section-line"></div>
          <p className="skills-lead">
            Comprehensive full-stack toolset covering modern JavaScript frameworks, high-converting <strong>Shopify Liquid e-commerce</strong>, and tailored <strong>WordPress CMS portals</strong>.
          </p>
        </div>

        <div className="skills-categories-grid">
          {skillCategories.map((cat, idx) => (
            <div
              key={cat.title}
              className={`skill-category-card card-anim-${idx % 4} ${cat.badge.includes("Shopify") || cat.badge.includes("Stores") ? "featured-shopify" : ""} ${cat.badge.includes("WordPress") || cat.badge.includes("Portals") ? "featured-wp" : ""}`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="card-top">
                <div className="category-icon-wrapper">{cat.icon}</div>
                {cat.badge && (
                  <span
                    className={`category-badge ${
                      cat.badge.includes("WordPress") || cat.badge.includes("Portals")
                        ? "badge-wp"
                        : ""
                    }`}
                  >
                    {cat.badge}
                  </span>
                )}
              </div>

              <h3 className="category-title">{cat.title}</h3>
              <p className="category-desc">{cat.description}</p>

              <div className="skills-tag-cloud">
                {cat.skills.map((s) => (
                  <div key={s.name} className="skill-tag">
                    <span className="tag-icon">{s.icon}</span>
                    <span className="tag-name">{s.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
