import React from 'react';
import './WorkExperience.css';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import tiktokLogo from '../assets/tiktok-logo.png';
import actxaLogo from '../assets/actxa-logo.png';
import changiLogo from '../assets/changiairportgroup_logo.jpeg';

const workData = [
    {
        role: 'AI/ML Intern',
        company: 'Changi Airport Group',
        period: 'Jan 2026 – Apr 2026',
        description:
            '• Built automated ML monitoring pipelines on AWS to track model performance and detect data drift\n' +
            '• Engineered data pipelines integrating flight data to train prediction models achieving 87% accuracy\n' +
            '• Developed LLM applications including an in-house chatbot and feedback generator using LangChain\n' +
            '• Built RAG pipelines integrating vector databases with LLMs for context-aware responses',
        logo: changiLogo,
    },
    {
        role: 'Risk Analyst Intern',
        company: 'ByteDance (TikTok)',
        period: 'May 2025 – Sep 2025',
        description:
            '• Analyzed performance of ad risk auto-moderation models using statistical methods and internal dashboards\n' +
            '• Conducted in-depth root cause analysis (RCA) on abnormal cases such as model leakages and overkills\n' +
            '• Supported Blue Team operations by identifying risks and enabling early threat detection\n' +
            '• Implemented prompt engineering strategies for LLMs to improve moderation of violative ad content',
        logo: tiktokLogo,
    },
    {
        role: 'Data Science Intern',
        company: 'Actxa',
        period: 'May 2024 – Dec 2024',
        description:
            '• Led R&D on deep learning models to improve performance beyond traditional ML benchmarks\n' +
            '• Built feature extraction and engineering pipelines for physiological signals in blood glucose prediction\n' +
            '• Developed Python scripts to filter high-quality signals, achieving 90% precision',
        logo: actxaLogo,
    },
];

const WorkExperience = () => {
    return (
        <section className="work">
            <h2>Work Experience</h2>
            <div className="work-timeline">
                {workData.map((item, idx) => (
                    <motion.div
                        key={idx}
                        className="work-item"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.2 }}
                        viewport={{ once: true }}
                    >
                        <div className="work-icon">
                            <FaBriefcase size={24} />
                        </div>
                        <div className="work-content">
                            <div className="logo-container">
                                {item.logo && (
                                    <img src={item.logo} alt={`${item.company} logo`} className="company-logo" />
                                )}
                            </div>
                            <h3>{item.role}</h3>
                            <p className="company">{item.company}</p>
                            <p className="period">{item.period}</p>
                            <p className="desc">{item.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WorkExperience;
