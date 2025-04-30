import React from 'react';
import './Projects.css';
import nusfoodieLogo from '../assets/nusfoodie.png';
import ultimatetictactoeLogo from '../assets/ultimate.png';
import personalLogo from '../assets/personal.png';

const projectList = [
  {
    title: 'Personal Website',
    description: 'React-based personal website to showcase my education journey, experiences, projects and skills.',
    link: 'https://github.com/tayziyi/my-portfolio',
    tags: ['React', 'CSS', 'Javascript'],
    image: personalLogo, 
  },
  {
    title: 'NUSFoodie',
    description: 'A web application with food recommender system made with collaborative filtering for NUS students. Built with Flask, Django, and PyTorch.',
    link: 'https://github.com/tayziyi/nusfoodie',
    tags: ['Python', 'Flask', 'Django', 'PyTorch'],
    image: nusfoodieLogo,
  },
  {
    title: 'Ultimate Tic Tac Toe Agent',
    description: 'An AI agent created with minimax algorithm and alpha-beta pruning for optimal decision-making. Designed with strong heuristics evaluation function.',
    link: '#',
    tags: ['Python'],
    image: ultimatetictactoeLogo,
  }
];

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div className="project-card" key={index}>
            {proj.image && (
              <img src={proj.image} alt={proj.title} className="project-image" />
            )}
            <div className="project-content">
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <div className="tags">
                {proj.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <a href={proj.link} target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
