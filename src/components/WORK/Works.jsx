import React, { useEffect } from "react";
import "./Works.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Works = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="works" className="works-section">
      <h2 className="works-title" data-aos="fade-down">
        Projects
      </h2>

      <div className="works-grid">
        <a
          className="work-card one"
          data-aos="fade-right"
          href="https://staging.ams.edu.pk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="School">🏫</span>
          </div>
          <div className="card-content">
            <h3>Al Murtaza School Network</h3>
            <p>
              Complete WordPress & Elementor customization including Home, About Us, Chairman/Director Message, Academics, Branches, and Contact sections. Built responsive layouts for desktop, tablet, and mobile with custom CSS for branding, typography, and hover effects, plus performance and cross-browser fixes.
            </p>
          </div>
        </a>

        <a
          className="work-card two"
          data-aos="zoom-in-up"
          data-aos-delay="100"
          href="https://bluestarschools.com.pk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="School">🏫</span>
          </div>
          <div className="card-content">
            <h3>Blue Star Schools</h3>
            <p>
              Developed and customized a modern, responsive school website with WordPress and Elementor. Designed academics, facilities, and admissions sections, implemented custom CSS for buttons, cards, and hover animations, and optimized structure for navigation and user experience.
            </p>
          </div>
        </a>

        <div className="work-card three" data-aos="fade-left" data-aos-delay="200">
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Trophy">🥇</span>
          </div>
          <div className="card-content">
            <h3>Gold & Silver</h3>
            <p>
              UI/UX design, front-end development, and QA testing for a Next.js web app. Converted Figma designs into responsive, interactive pages, built reusable components, integrated REST APIs for dynamic data, and performed functional, UI, and cross-browser testing across the user dashboard.
            </p>
          </div>
        </div>

        <div className="work-card four" data-aos="fade-right" data-aos-delay="300">
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Live streaming">🎥</span>
          </div>
          <div className="card-content">
            <h3>Live Streaming Web Application</h3>
            <p>
              Led the development of a dynamic live streaming web application built with Next.js. Implemented real-time video streaming functionality and integrated live chat features for user interaction, with a focus on performance optimization and overall user experience.
            </p>
          </div>
        </div>

        <div className="work-card five" data-aos="zoom-in-up" data-aos-delay="400">
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Hospital">🏥</span>
          </div>
          <div className="card-content">
            <h3>Hospital Management System</h3>
            <p>
              Developed a comprehensive hospital management system using core Java and OOP principles. Implemented functionality to manage patient records, appointments, and staff details, with modules for inventory control and billing, and integrated SQL for secure, accurate data storage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
