import React from 'react';
import './TechnicalSkills.css';

const skills = {
  "Programming Languages": ['Python', 'Java', 'C', 'R'],

  "Machine Learning & AI": [
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'CNNs',
    'RNNs'
  ],

  "LLM & GenAI": [
    'LangChain',
    'RAG',
    'Prompt Engineering',
    'Embeddings',
    'SFT',
    'Encoder-Decoder'
  ],

  "Data Science": [
    'Pandas',
    'NumPy',
    'Matplotlib',
    'Seaborn'
  ],

  "Big Data & Databases": [
    'PostgreSQL',
    'MySQL',
    'PySpark',
    'Hadoop'
  ],

  "MLOps & Cloud": [
    'AWS (ECS, S3, SES)',
    'Docker',
    'GitHub Actions'
  ],

  "Collaboration Tools": [
    'GitHub',
    'Bitbucket',
    'Confluence',
    'Jira'
  ],

  "Languages": [
    'English (Fluent)',
    'Chinese (Fluent)'
  ]
};

const TechnicalSkills = () => {
  return (
    <section className="technical-skills" id="skills">
      <h2>Technical Skills</h2>

      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div className="skill-category" key={category}>
            <h3>{category}</h3>

            <div className="skill-tags">
              {items.map((skill, idx) => (
                <span className="skill-tag" key={idx}>
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;