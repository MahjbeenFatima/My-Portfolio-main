import React, { useEffect } from "react";
import "./Skills.css";
import AOS from "aos";
import "aos/dist/aos.css";

import reactIcon from "/src/assets/images/react.png";
import { SiNextdotjs, SiWordpress, SiMysql } from "react-icons/si";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-overlay">
        <h2 className="skills-title" data-aos="fade-down">Skills</h2>
        <div className="skills-grid">
          <div className="skill-card one" data-aos="fade-up">
            <img src={reactIcon} alt="React" />
            <h3>React.js</h3>
            <p>Developed responsive, component-based UIs using React.js, focusing on fast, interactive web experiences and reusable components.</p>
          </div>

          <div className="skill-card two" data-aos="fade-up" data-aos-delay="100">
            <SiNextdotjs className="skill-icon" aria-label="Next.js" />
            <h3>Next.js</h3>
            <p>Converted Figma designs into interactive Next.js applications, including real-time features like live streaming and chat.</p>
          </div>

          <div className="skill-card three" data-aos="fade-up" data-aos-delay="200">
            <SiWordpress className="skill-icon" aria-label="WordPress" />
            <h3>WordPress & Elementor</h3>
            <p>Customized full WordPress websites with Elementor and custom CSS, delivering responsive layouts and consistent branding.</p>
          </div>

          <div className="skill-card four" data-aos="fade-up" data-aos-delay="300">
            <SiMysql className="skill-icon" aria-label="SQL" />
            <h3>SQL, Git & Java</h3>
            <p>Worked with SQL for data management, Git/GitHub for version control, and Java/C++ for backend logic and problem-solving.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
