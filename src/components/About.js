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
            I'm a Year 3 NUS Computer Science undergraduate student.<br />
            I have a strong interest in AI/ML and Data Analytics, and I love exploring how technology and numbers
            work together to solve real-world problems!<br />
            <br />
            Outside of the technoloy world, I seriously enjoy team sports like badminton and basketball.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
