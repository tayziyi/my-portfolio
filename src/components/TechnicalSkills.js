// components/TechnicalSkills.js
import React from 'react';
import './TechnicalSkills.css'; // Optional: for styling

const skills = {
  Languages: ['Python', 'Java', 'C', 'R'],
  WebDev: ['HTML', 'CSS', 'JavaScript', 'React', 'Flask', 'Django'],
  Tools: ['Git', 'Jira', 'Confluence', 'BitBucket'],
  Data: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'PySpark'],
  ML: ['PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision'],
};

const TechnicalSkills = () => {
  return (
    <section className="technical-skills" id="skills">
      <h2>Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-category" key={category}>
            <h3>{category}</h3>
            <ul>
              {items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
