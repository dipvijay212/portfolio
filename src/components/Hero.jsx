import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-section-light" id="home">
      <div className="hero-content-light">
        <p className="intro-light">Hi, my name is</p>
        <h1 className="hero-name-light">Dipvijay Patil</h1>
        <h2 className="hero-title-light">Full Stack Web Developer.</h2>
        <a href="#projects" className="hero-button-light">
           <span className="arrow">Hire me </span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
