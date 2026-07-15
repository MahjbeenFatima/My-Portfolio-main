import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./components/NAVBAR/Navbar";
import About from "./components/ABOUT/About";
import Skills from "./components/SKILL/Skills";
import Works from "./components/WORK/Works";
import Contact from "./components/CONTACT/Contact";
import bgImage from "./assets/images/bg1.jpg";
import ProfileAvatar from "./components/AVATAR/ProfileAvatar";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Navbar />
      <div
        id="home"
        className="background-container"
        data-aos="fade-up"
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
      >
        <ProfileAvatar />
        <div className="text-container">
          <h1 className="main-heading">Hi ! I'm Mahjbeen</h1>
          <p className="sub-heading">
            I am a Computer Science Graduate & Front-End Developer specializing in React.js, Next.js, and WordPress
          </p>
          <button className="scroll-down-button" onClick={scrollToAbout}>
            <span className="down-arrow">&#x2193;</span>
          </button>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <Works />
      <Contact />
    </>
  );
}

export default App;
