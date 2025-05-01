import React from 'react';
import './Hero.css';
import datascienceicon from '../assets/datascienceicon.png';

const Hero = () => {
  const title = "Hello, I'm Zi Yi Tay";
  const subtitle = "Aspiring Data Analyst & Scientist";

  const animateLetters = (text, baseClass, delayStep = 0.08) =>
    Array.from(text).map((char, i) => (
      <span
        key={i}
        className={`${baseClass} letter`}
        style={{ animationDelay: `${i * delayStep}s` }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            {animateLetters(title, 'hero-title')}
          </h1>
          <p className="hero-subtitle">
            {animateLetters(subtitle, 'hero-subtitle')}
          </p>
          <a
            href="#projects"
            className="cta-button fade-seq"
            style={{
              animationDelay: `${title.length * 0.05 + 0.5}s`,
            }}
          >
            View My Projects
          </a>
          <a
            href="/Resume%20-%20ZiYiTay.pdf"
            className="cta-button fade-seq"
            download
            style={{
              animationDelay: `${title.length * 0.05 + 0.8}s`,
              marginLeft: '20px',
            }}
          >
            Download CV
          </a>
        </div>
        <div className="hero-image">
          <img src={datascienceicon} alt="Data Science Icon" className="hero-icon" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
