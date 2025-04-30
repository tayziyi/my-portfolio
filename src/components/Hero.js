import React from 'react';
import './Hero.css';

const Hero = () => {
  const title = "Hello, I'm Zi Yi Tay!";
  const subtitle = "Data Scientist • Data Analyst • Machine Learning Engineer";

  const animateWords = (text, baseClass, delayStep = 0.2) =>
    text.split(' ').map((word, i) => (
      <span
        key={i}
        className={`${baseClass} word`}
        style={{ animationDelay: `${i * delayStep}s` }}
      >
        {word}&nbsp;
      </span>
    ));

  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">
          {animateWords(title, 'hero-title')}
        </h1>
        <p className="hero-subtitle">
          {animateWords(subtitle, 'hero-subtitle', 0.1)}
        </p>
        <a href="#projects" className="cta-button fade-seq" style={{ animationDelay: `${title.split(' ').length * 0.2 + 0.5}s` }}>
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
