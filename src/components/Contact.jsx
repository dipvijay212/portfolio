import React from "react";
import "./Contact.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact-content">

          <div className="contact-socials">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub/></a>
            <a href="mailto:your.email@example.com"><MdOutlineMail/></a>
          </div>

        <form className="contact-form">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
