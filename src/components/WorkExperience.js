import React from 'react';
import './WorkExperience.css';
import { FaBriefcase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import tiktokLogo from '../assets/tiktok-logo.png';
import actxaLogo from '../assets/actxa-logo.png';

const workData = [
    {
        role: 'Auto Moderation Operations Intern',
        company: 'Tiktok',
        period: 'May 2025 – Present',
        description:
            'Analyze ad risk auto moderation models by collecting, statistically analyzing data to compile analysis reports. \nConduct daily statistical analysis for auto moderation models risk operations, with in-depth analysis of abnormal cases. \nSupport data needs for the business team and internal team requirements.',
        logo: tiktokLogo,
    },
    {
        role: 'Data Science Intern',
        company: 'Actxa',
        period: 'May 2024 – Dec 2024',
        description:
            'Assisted in conducting public healthcare Research and Development within the digital health and wellness domain.\nPiloted a Research and Development on Deep Learning models to improve the current metrics provided by traditional machine learning (ML) methods.\nDeveloped data-driven solutions using statistical modeling and traditional ML techniques.\nDocumented research activities, experiments, and modeling findings.\n Built a Python-based script for separating good quality signals from the whole dataset with precision of 90%.',
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
