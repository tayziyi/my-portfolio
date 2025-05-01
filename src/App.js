import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import TechnicalSkills from './components/TechnicalSkills';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#education">Education</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
        <a href="#skills">Skills</a>
        <a href="#contact">Contact</a>
      </nav>

      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="education"><Education /></section>
      <section id="work"><WorkExperience /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><TechnicalSkills /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </div>
  );
}

export default App;
