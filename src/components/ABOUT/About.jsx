import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";

import reactLogo from "../../assets/images/react.png";
import figmaLogo from "../../assets/images/figma.png";
import { SiNextdotjs, SiWordpress } from "react-icons/si";


const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="about" className="about-section">
      <h2 data-aos="zoom-in">About Me</h2>

      <p data-aos="fade-up" data-aos-delay="100">
        Computer Science graduate from GC University Lahore with a solid foundational understanding of web development (React.js, Next.js, WordPress) and databases (SQL). I've completed internships where I assisted in developing responsive interfaces and maintaining web-based applications, gaining hands-on experience across modern development workflows and tools.
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        I specialize in building clean, responsive, and interactive user interfaces using React.js and Next.js, converting Figma designs into pixel-perfect, functional web pages. I've customized and developed full WordPress websites using Elementor and custom CSS for clients including school networks, focusing on responsive layouts, branding, and cross-browser consistency.
      </p>

      <p data-aos="fade-up" data-aos-delay="300">
        Beyond front-end development, I integrate REST APIs to manage dynamic data, collaborate closely with backend teams, and perform functional, UI, and cross-browser testing to ensure quality. I'm eager to keep growing my technical expertise within a professional development team while contributing to impactful software projects.
      </p>

      <div className="tech-images" data-aos="fade-left" data-aos-delay="300">
        <img src={reactLogo} alt="React" />
        <img src={figmaLogo} alt="figma" />
        <div className="tech-badge"><SiNextdotjs aria-label="Next.js" /></div>
        <div className="tech-badge"><SiWordpress aria-label="WordPress" /></div>
      </div>
    </section>
  );
};

export default About;
