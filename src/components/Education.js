import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: 'National University of Singapore (NUS)',
    degree: 'Bachelor of Computing in Computer Science (Honours)',
    year: '2022 - 2026',
    description: 'Relevant Modules: Data structures (CS2040), Programming Methodology I & II (CS2030), Introduction to AI/ML (CS2109), Computer Vision (CS4243), Calculus for Computing (MA1521), Linear Algebra (MA2001), Probability and Statistics (ST2334), Computer Networks (CS2105), Algorithm Analysis (CS3230, Big Data Systems for Data Science (CS4225)'
  },
  {
    school: 'Hanyang University (Winter Exchange)',
    degree: '',
    year: '2024 - 2025',
    description: 'Description: Went on student exchange program to Hanyang University in Korea (Winter 2024). '
  },
  {
    school: 'Nanyang Junior College (NYJC)',
    degree: 'GCE A-Levels: 88.75/90 RP',
    year: '2018 - 2019',
    description: 'Relevant Subjects: H3 Mathematics, H2 Mathematics, H2 Physics, H2 Chemistry, H1 Economics',
    award: 'Awards: Honor Roll for 2019 Block Test and Preliminary Exam'
  },
  {
    school: 'Bowen Secondary School',
    degree: 'GCE O-Levels: 5 Points',
    year: '2014 - 2017',
    description: 'Relevant Subjects: Physics, Chemistry, Biology, Combined Humanities (SS/Geog), A Mathematics',
    award: 'Awards: Top in level for Mathematics'
  },
];

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <div className="timeline">
        {educationData.map((item, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <div className="timeline-icon">
              <FaGraduationCap size={24} />
            </div>
            <div className="timeline-content">
              <h3>{item.school}</h3>
              <p>{item.degree}</p>
              {item.year && <p className="year">{item.year}</p>}
              {item.description && <p className="description">{item.description}</p>}
              <p>{item.award}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
