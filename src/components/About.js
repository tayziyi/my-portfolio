import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg'; // make sure the image is in this path

const About = () => {
  return (
    <section className="about">
      <div className="about-content">
        <img src={profilePic} alt="Zi Yi Tay" className="profile-pic" />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm an NUS Y3 undergraduate student.
            I have a strong interest in AI/ML and Data Analytics, and I love exploring how technology
            can solve real-world problems!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
