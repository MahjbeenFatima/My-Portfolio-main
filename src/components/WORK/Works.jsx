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
          className="work-card three"
          data-aos="fade-right"
          href="https://goldandsilverdr.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Trophy">🥇</span>
          </div>
          <div className="card-content">
            <h3>Gold & Silver</h3>
            <p>
              UI/UX design, front-end development, and QA testing for a Next.js web app. Converted Figma designs into responsive, interactive pages, built reusable components, integrated REST APIs for dynamic data, and performed functional, UI, and cross-browser testing across the user dashboard.
            </p>
          </div>
        </a>

        <a
          className="work-card seven"
          data-aos="zoom-in-up"
          data-aos-delay="100"
          href="https://cinewoo.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Film">🎬</span>
          </div>
          <div className="card-content">
            <h3>Cinewoo</h3>
            <p>
              Developed a modern, visually engaging website for Cinewoo, a platform empowering Canadian film talent. Focused on clean UI, smooth animations, and responsive layouts to showcase the brand and its mission to the film community.
            </p>
          </div>
        </a>

        <a
          className="work-card ten"
          data-aos="fade-left"
          data-aos-delay="200"
          href="https://mmcp.com.pk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Pharmacy">💊</span>
          </div>
          <div className="card-content">
            <h3>Mian Meer College of Pharmacy</h3>
            <p>
              Built the website for MMCP, Jhang's first pharmacy college, showcasing its Pharm-D program, admissions process, downloadable forms, campus facilities, and institutional vision through a clean, informative layout.
            </p>
          </div>
        </a>

        <a
          className="work-card one"
          data-aos="fade-right"
          data-aos-delay="300"
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
          data-aos-delay="400"
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

        <a
          className="work-card six"
          data-aos="fade-left"
          data-aos-delay="500"
          href="https://gak-website-six.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="School">🏫</span>
          </div>
          <div className="card-content">
            <h3>APS&C GAK Campus</h3>
            <p>
              Built the official website for Army Public School &amp; College, GAK Campus, covering admissions, academics (FBISE &amp; Cambridge streams), notifications, and parent resources. Delivered a responsive, content-rich site with a clean, disciplined layout matching the institution's identity.
            </p>
          </div>
        </a>

        <a
          className="work-card eight"
          data-aos="fade-right"
          data-aos-delay="600"
          href="https://meemacademy.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Graduation cap">🎓</span>
          </div>
          <div className="card-content">
            <h3>Meem School System</h3>
            <p>
              Built the website for Meem School System, a K-12 institution offering academics from preschool through senior school alongside a Hifz-ul-Qur'an program. Implemented admissions info, online courses, a student login portal, and campus gallery sections.
            </p>
          </div>
        </a>

        <a
          className="work-card nine"
          data-aos="zoom-in-up"
          data-aos-delay="700"
          href="https://hihss.edu.pk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="card-image">
            <span className="card-emoji" role="img" aria-label="Books">📖</span>
          </div>
          <div className="card-content">
            <h3>Himayat-e-Islam School</h3>
            <p>
              Developed the website for Himayat-e-Islam School, Lahore, a historic institution established in 1884. Structured content around academics, faculty profiles, admissions, and alumni connections with a responsive, easy-to-navigate design.
            </p>
          </div>
        </a>

        <div className="work-card four" data-aos="fade-left" data-aos-delay="800">
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
      </div>
    </section>
  );
};

export default Works;
