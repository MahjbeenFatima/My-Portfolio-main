import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  SiNextdotjs,
  SiWordpress,
  SiShopify,
  SiNodedotjs,
  SiReact,
  SiMysql,
  SiFigma,
  SiGit,
  SiTailwindcss,
} from "react-icons/si";
import { FiCode, FiShoppingBag, FiGlobe, FiLayers } from "react-icons/fi";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Who I Am</span>
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-intro" data-aos="fade-up" data-aos-delay="100">
          <p className="lead-paragraph">
            I am a <strong>Computer Science Graduate from GC University Lahore</strong> and a versatile <strong>Full Stack Developer, Shopify Architect &amp; WordPress Specialist</strong> dedicated to building high-converting e-commerce stores, modern full-stack web applications, and feature-rich CMS portals.
          </p>
          <p>
            With extensive experience across both modern JavaScript stacks (<strong>React.js, Next.js, Node.js, Express, MySQL</strong>) and premier CMS platforms (<strong>Shopify Liquid &amp; WordPress / Elementor</strong>), I deliver end-to-end digital solutions that merge visual elegance with rock-solid engineering.
          </p>
          <p>
            I have architected and deployed <strong>13+ production Shopify stores</strong> for retail, fashion, FMCG, and cosmetic brands, alongside <strong>6+ comprehensive WordPress portals</strong> for major school networks, educational colleges, and organizations.
          </p>
        </div>

        {/* 4 Pillars of Engineering Specialty */}
        <div className="pillars-grid" data-aos="fade-up" data-aos-delay="200">
          <div className="pillar-card card-fullstack">
            <div className="pillar-icon-box icon-fullstack">
              <FiCode className="pillar-icon" />
            </div>
            <h3>Full-Stack Engineering</h3>
            <p>
              Developing dynamic, scalable web applications with React.js and Next.js, integrating RESTful APIs, Node.js backend logic, and structured relational databases (MySQL/SQL).
            </p>
            <div className="pillar-tags">
              <span>React</span>
              <span>Next.js</span>
              <span>Node.js</span>
              <span>REST APIs</span>
            </div>
          </div>

          <div className="pillar-card card-shopify highlight">
            <div className="pillar-icon-box icon-shopify">
              <FiShoppingBag className="pillar-icon" />
            </div>
            <div className="pillar-badge">13+ Stores</div>
            <h3>Shopify E-Commerce</h3>
            <p>
              Custom Liquid theme development, modular section schemas, cart drawer upsells, product bundle builders, speed optimization, and seamless mobile checkouts.
            </p>
            <div className="pillar-tags">
              <span>Liquid</span>
              <span>Theme Dev</span>
              <span>Storefront UX</span>
              <span>Checkouts</span>
            </div>
          </div>

          <div className="pillar-card card-wordpress highlight-wp">
            <div className="pillar-icon-box icon-wordpress">
              <FiGlobe className="pillar-icon" />
            </div>
            <div className="pillar-badge wp-badge">6+ Portals</div>
            <h3>WordPress &amp; Elementor</h3>
            <p>
              Designing responsive enterprise and educational portals with Elementor Pro, custom CSS styling, dynamic content, multi-campus architectures, and SEO speed tuning.
            </p>
            <div className="pillar-tags">
              <span>Elementor Pro</span>
              <span>Custom CSS</span>
              <span>Admissions Portals</span>
              <span>Speed Tuning</span>
            </div>
          </div>

          <div className="pillar-card card-design">
            <div className="pillar-icon-box icon-design">
              <FiLayers className="pillar-icon" />
            </div>
            <h3>Figma to Code &amp; QA</h3>
            <p>
              Transforming complex Figma and UI prototypes into pixel-perfect, responsive web pages. Ensuring rigorous cross-browser compatibility and functional testing.
            </p>
            <div className="pillar-tags">
              <span>Figma</span>
              <span>Tailwind CSS</span>
              <span>Responsive UI</span>
              <span>QA Testing</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Strip with Hover Animations */}
        <div className="tech-strip-container" data-aos="fade-up" data-aos-delay="300">
          <span className="tech-strip-label">Core Tech Stack</span>
          <div className="tech-strip">
            <div className="tech-pill animated-pill">
              <SiReact className="tech-pill-icon react-color" />
              <span>React.js</span>
            </div>
            <div className="tech-pill animated-pill">
              <SiNextdotjs className="tech-pill-icon" />
              <span>Next.js</span>
            </div>
            <div className="tech-pill animated-pill shopify-glow">
              <SiShopify className="tech-pill-icon shopify-color" />
              <span>Shopify / Liquid</span>
            </div>
            <div className="tech-pill animated-pill wp-glow">
              <SiWordpress className="tech-pill-icon wp-color" />
              <span>WordPress / Elementor</span>
            </div>
            <div className="tech-pill animated-pill">
              <SiNodedotjs className="tech-pill-icon node-color" />
              <span>Node.js</span>
            </div>
            <div className="tech-pill animated-pill">
              <SiMysql className="tech-pill-icon mysql-color" />
              <span>MySQL / SQL</span>
            </div>
            <div className="tech-pill animated-pill">
              <SiTailwindcss className="tech-pill-icon tailwind-color" />
              <span>Tailwind CSS</span>
            </div>
            <div className="tech-pill animated-pill">
              <SiFigma className="tech-pill-icon figma-color" />
              <span>Figma UI/UX</span>
            </div>
            <div className="tech-pill animated-pill">
              <SiGit className="tech-pill-icon git-color" />
              <span>Git &amp; GitHub</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
