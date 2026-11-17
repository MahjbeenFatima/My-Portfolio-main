import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  FiMail,
  FiLinkedin,
  FiMapPin,
  FiArrowUp,
  FiSend,
  FiShoppingBag,
  FiCode,
  FiGlobe,
} from "react-icons/fi";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="contact-section">
      <div className="contact-container">
        {/* Section Header */}
        <div className="section-header" data-aos="fade-up">
          <span className="section-subtitle">Reach Out</span>
          <h2 className="section-title">Let's Work Together</h2>
          <div className="section-line"></div>
          <p className="contact-lead">
            Whether you need a high-converting <strong>Shopify e-commerce store</strong>, an enterprise <strong>WordPress &amp; Elementor portal</strong>, or a scalable <strong>Full Stack web application</strong> — I'd love to connect.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid" data-aos="fade-up" data-aos-delay="100">
          <a
            href="mailto:mahjbeenfatima23@gmail.com"
            className="contact-card"
          >
            <div className="contact-icon-box">
              <FiMail className="contact-icon" />
            </div>
            <span className="contact-label">Email Address</span>
            <span className="contact-value">mahjbeenfatima23@gmail.com</span>
            <span className="contact-action">
              Send an Email <FiSend />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/mahjbeen-rana"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card highlight"
          >
            <div className="contact-icon-box">
              <FiLinkedin className="contact-icon" />
            </div>
            <span className="contact-label">LinkedIn Profile</span>
            <span className="contact-value">linkedin.com/in/mahjbeen-rana</span>
            <span className="contact-action">
              Connect on LinkedIn <FiSend />
            </span>
          </a>

          <div className="contact-card">
            <div className="contact-icon-box">
              <FiMapPin className="contact-icon" />
            </div>
            <span className="contact-label">Location</span>
            <span className="contact-value">Johar Town, Lahore, Pakistan</span>
            <span className="contact-action-static">Available for Remote &amp; Onsite Roles</span>
          </div>
        </div>

        {/* 3 Core Services Banner */}
        <div className="services-banner" data-aos="fade-up" data-aos-delay="200">
          <div className="banner-item">
            <div className="service-icon-wrap shopify-icon-wrap">
              <FiShoppingBag className="banner-icon" />
            </div>
            <div>
              <h4>Shopify Theme Engineering</h4>
              <p>Custom Liquid themes, 13+ live stores, speed tuning &amp; apps</p>
            </div>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-item">
            <div className="service-icon-wrap wp-icon-wrap">
              <FiGlobe className="banner-icon" />
            </div>
            <div>
              <h4>WordPress &amp; Elementor Pro</h4>
              <p>Custom portals, multi-campus architectures, styling &amp; SEO</p>
            </div>
          </div>
          <div className="banner-divider"></div>
          <div className="banner-item">
            <div className="service-icon-wrap code-icon-wrap">
              <FiCode className="banner-icon" />
            </div>
            <div>
              <h4>Full-Stack Web Applications</h4>
              <p>React.js, Next.js, Node.js, RESTful APIs &amp; SQL databases</p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-brand">
            <span className="brand-name">Mahjbeen Fatima</span>
            <span className="brand-role">• Full Stack Developer • Shopify &amp; WordPress Specialist</span>
          </div>

          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Mahjbeen Fatima. Built with React &amp; Modern Web Animations.
          </p>

          <button
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
