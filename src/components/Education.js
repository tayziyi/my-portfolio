import React from 'react';
import './Education.css';
import { FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const educationData = [
  {
    school: 'National University of Singapore (NUS)',
    degree: 'Bachelor of Computing in Computer Science (Honors)',
    year: '2022 - 2026',
    description: 'Specialisation Track in Artificial Intelligence/Machine Learning (AI/ML) and Database Systems'
  },
  {
    school: 'Hanyang University (Winter Exchange)',
    degree: '',
    year: '2024 - 2025',
    description: 'Description: Went on student exchange program to Hanyang University in Korea (Winter 2024) '
  },
  {
    school: 'Nanyang Junior College (NYJC)',
    degree: 'GCE A-Levels: 88.75/90 RP',
    year: '2018 - 2019',
    description: 'Relevant Subjects: H3 Mathematics, H2 Mathematics, H2 Physics, H2 Chemistry, H1 Economics',
    award: 'Awards: Honor Roll for 2019 Block Test and Preliminary Exam'
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
