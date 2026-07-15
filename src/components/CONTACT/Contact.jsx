import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="contact" className="contact-section">
      <h1 className="contact-title" data-aos="fade-down">Contact</h1>

      <div className="contact-info" data-aos="fade-up">
        <p><strong>Email:</strong> mehjabeen.faima35@gmail.com</p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/mahjbeen-rana" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/mahjbeen-rana</a></p>
        
        <p><strong>Location:</strong> Johar Town, Lahore</p>
        <p className="footer-note">Designed by Mahjbeen Fatima &copy; {new Date().getFullYear()}</p>
      </div>
    </section>
  );
};

export default Contact;
