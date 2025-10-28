import React from 'react';
import './About.css';
import { author } from '../data/author';

function About({ theme, t = (key) => key }) {
    return (
        <div className={`about ${theme}`}>
            <div className="about-container">
                <div className="about-card">
                    <div className="about-header">
                        <div className="avatar">
                            <div className="avatar-placeholder">{author.avatar}</div>
                        </div>
                        <h1>{t('about.title')}</h1>
                        <p className="tagline">{author.tagline}</p>
                    </div>

                    <div className="about-content">
                        <section className="about-section">
                            <h2>🎯 个人简介</h2>
                            <p>{author.bio}</p>
                        </section>

                        <section className="about-section">
                            <h2>💻 技术栈</h2>
                            <div className="skills">
                                {author.skills.map((skill, index) => (
                                    <span key={index} className="skill">{skill}</span>
                                ))}
                            </div>
                        </section>

                        <section className="about-section">
                            <h2>🌟 兴趣爱好</h2>
                            <ul className="interests">
                                {author.interests.map((interest, index) => (
                                    <li key={index}>{interest.icon} {interest.text}</li>
                                ))}
                            </ul>
                        </section>

                        <section className="about-section">
                            <h2>📫 联系方式</h2>
                            <div className="contact">
                                {author.contacts.map((contact, index) => (
                                    <a
                                        key={index}
                                        href={contact.link}
                                        className="contact-link"
                                        target={contact.link.startsWith('http') ? '_blank' : undefined}
                                        rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    >
                                        {contact.icon} {contact.value}
                                    </a>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
