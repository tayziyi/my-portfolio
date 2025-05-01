import React from 'react';
import './Projects.css';
import nusfoodieLogo from '../assets/nusfoodie.png';
import ultimatetictactoeLogo from '../assets/ultimate.png';
import personalLogo from '../assets/personal.png';
import alibabaLogo from '../assets/alibaba.png';
import captchaLogo from '../assets/captcha.png';
import stocksLogo from '../assets/stocks.png'

const projectList = [
  {
    title: 'Alibaba International Global E-Commerce Challenge',
    description: 'Proposed scalable solutions for Lazada and AliExpress using NLP and Computer Vision techniques. Achieved Top 10 Global Finalist.',
    link: '#',
    tags: ['React', 'CSS', 'HTML', 'SQLite', 'Tensorflow', 'Scikit-Learn'],
    image: alibabaLogo, 
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
    link: 'https://github.com/tayziyi/Ultimate-Tic-Tac-Toe-Agent',
    tags: ['Python'],
    image: ultimatetictactoeLogo,
  },
  {
    title: 'Captcha Recognition',
    description: 'A CNN model designed to solve captchas. Some techniques used to increase accuracy were gaussian blur and thresholding. Final prediction accuracy: 85%.',
    link: 'https://github.com/tayziyi/Captcha-Recognition',
    tags: ['Pandas', 'Numpy', 'CV2', 'Pytorch'],
    image: captchaLogo,
  },
  {
    title: 'Analysis and Modelling of Stock Prices',
    description: 'Big data analysis of top 7 stocks. Prediction of future prices using Linear Regression. Feature selection implemented to reduce MSE Loss. ',
    link: 'https://colab.research.google.com/drive/1Zg2ngLOa17TkTESQTqdPRCRkToynZeF_#scrollTo=Z2kGijdiREMQ',
    tags: ['PySpark'],
    image: stocksLogo, 
  },
  {
    title: 'Personal Website',
    description: 'React-based personal website to showcase my education journey, experiences, projects and skills.',
    link: 'https://github.com/tayziyi/my-portfolio',
    tags: ['React', 'CSS', 'Javascript'],
    image: personalLogo, 
  },
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
