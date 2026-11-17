import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/NAVBAR/Navbar";
import About from "./components/ABOUT/About";
import Skills from "./components/SKILL/Skills";
import Works from "./components/WORK/Works";
import Contact from "./components/CONTACT/Contact";
import ProfileAvatar from "./components/AVATAR/ProfileAvatar";
import bgImage from "./assets/images/bg1.jpg";

import {
  FiArrowDown,
  FiShoppingBag,
  FiLayers,
  FiMail,
} from "react-icons/fi";
import { SiWordpress } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";

const rotatingRoles = [
  "Full Stack Developer",
  "Shopify E-Commerce Architect",
  "WordPress & CMS Specialist",
];

function App() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [fadeAnim, setFadeAnim] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });

    // Rotating role text animation every 3.2 seconds
    const interval = setInterval(() => {
      setFadeAnim(false);
      setTimeout(() => {
        setRoleIndex((prev) => (prev + 1) % rotatingRoles.length);
        setFadeAnim(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id, filterType = null) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    if (filterType) {
      window.dispatchEvent(
        new CustomEvent("setProjectFilter", { detail: filterType })
      );
    }
  };

  return (
    <div className="portfolio-app">
      <Navbar />

      {/* Hero Section */}
      <header
        id="home"
        className="hero-section"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-grid-pattern"></div>
        <div className="hero-ambient-glow glow-1"></div>
        <div className="hero-ambient-glow glow-2"></div>
        <div className="hero-ambient-glow glow-3"></div>

        <div className="hero-content" data-aos="fade-up">
          <ProfileAvatar />

          <div className="hero-badge animate-float">
            <span className="badge-sparkle">✨</span>
            <span>Full Stack • Shopify • WordPress Developer</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="text-gradient">Mahjbeen Fatima</span>
          </h1>

          <div className="hero-dynamic-role">
            <span className="role-prefix">Specializing in</span>{" "}
            <span className={`role-animated-text ${fadeAnim ? "fade-in" : "fade-out"}`}>
              {rotatingRoles[roleIndex]}
            </span>
          </div>

          <p className="hero-description">
            Computer Science Graduate with hands-on expertise building scalable <strong>Full Stack Web Applications</strong>, <strong>13+ bespoke Shopify E-Commerce stores</strong>, and <strong>custom WordPress &amp; Elementor portals</strong>. Seamlessly bridging responsive UI architectures with robust backend databases and high-converting checkout flows.
          </p>

          <div className="hero-actions">
            <button
              className="btn btn-primary"
              onClick={() => scrollToSection("works", "shopify")}
            >
              <FiShoppingBag className="btn-icon" />
              <span>Shopify Stores (13+)</span>
            </button>
            <button
              className="btn btn-wordpress"
              onClick={() => scrollToSection("works", "wordpress")}
            >
              <SiWordpress className="btn-icon" />
              <span>WordPress Portals (6)</span>
            </button>
            <button
              className="btn btn-secondary"
              onClick={() => scrollToSection("works", "fullstack")}
            >
              <FiLayers className="btn-icon" />
              <span>Full Stack Apps</span>
            </button>
            <button
              className="btn btn-outline"
              onClick={() => scrollToSection("contact")}
            >
              <FiMail className="btn-icon" />
              <span>Contact Me</span>
            </button>
          </div>

          {/* Quick Metrics Bar */}
          <div className="hero-stats-bar">
            <div className="stat-item" onClick={() => scrollToSection("works", "shopify")}>
              <span className="stat-number">13+</span>
              <span className="stat-label">Shopify Stores</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item" onClick={() => scrollToSection("works", "wordpress")}>
              <span className="stat-number">6+</span>
              <span className="stat-label">WordPress Portals</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item" onClick={() => scrollToSection("works", "fullstack")}>
              <span className="stat-number">Full Stack</span>
              <span className="stat-label">React • Next • Node • SQL</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">22+</span>
              <span className="stat-label">Total Works Delivered</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button
            className="scroll-indicator"
            onClick={() => scrollToSection("about")}
            aria-label="Scroll to About section"
          >
            <span className="scroll-text">Explore Portfolio</span>
            <FiArrowDown className="scroll-arrow" />
          </button>
        </div>
      </header>

      {/* Main Sections */}
      <main>
        <About />
        <Skills />
        <Works />
        <Contact />
      </main>
    </div>
  );
}

export default App;
