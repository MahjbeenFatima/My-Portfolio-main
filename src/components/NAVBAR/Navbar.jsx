import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FiMenu, FiX, FiShoppingBag, FiSend, FiLayers } from "react-icons/fi";
import { SiWordpress } from "react-icons/si";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (filterType) => {
    closeMenu();
    if (filterType) {
      window.dispatchEvent(
        new CustomEvent("setProjectFilter", { detail: filterType })
      );
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <a href="#home" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-text">Mahjbeen</span>
          <span className="logo-dot">.</span>
          <span className="logo-badge">Full Stack &amp; CMS</span>
        </a>

        {/* Desktop Navigation links */}
        <ul className="navbar-links desktop-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li>
            <a
              href="#works"
              className="nav-highlight shopify-nav-link"
              onClick={() => handleNavClick("shopify")}
            >
              <FiShoppingBag className="nav-icon" /> Shopify Stores
            </a>
          </li>
          <li>
            <a
              href="#works"
              className="nav-highlight wp-nav-link"
              onClick={() => handleNavClick("wordpress")}
            >
              <SiWordpress className="nav-icon" /> WordPress
            </a>
          </li>
          <li>
            <a href="#works" onClick={() => handleNavClick("all")}>
              <FiLayers className="nav-icon" /> All Works
            </a>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <div className="navbar-action">
          <a href="#contact" className="navbar-cta-btn">
            <span>Connect</span>
            <FiSend className="cta-icon" />
          </a>
          {/* Menu button for mobile/tablet */}
          <button
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "open" : ""}`}>
        <ul className="mobile-links">
          <li><a href="#home" onClick={closeMenu}>Home</a></li>
          <li><a href="#about" onClick={closeMenu}>About</a></li>
          <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
          <li>
            <a
              href="#works"
              onClick={() => handleNavClick("shopify")}
              className="mobile-highlight"
            >
              <FiShoppingBag /> Shopify Stores (13+)
            </a>
          </li>
          <li>
            <a
              href="#works"
              onClick={() => handleNavClick("wordpress")}
              className="mobile-highlight wp-color-link"
            >
              <SiWordpress /> WordPress Portals (6)
            </a>
          </li>
          <li>
            <a href="#works" onClick={() => handleNavClick("all")}>
              <FiLayers /> All Projects (22)
            </a>
          </li>
          <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
        </ul>
        <a href="#contact" className="mobile-cta-btn" onClick={closeMenu}>
          Let's Talk <FiSend />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
