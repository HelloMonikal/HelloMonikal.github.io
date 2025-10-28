import React from 'react';
import './Links.css';
import { links } from '../data/links';

function Links({ theme, t = (key) => key }) {
    return (
        <div className={`links ${theme}`}>
            <div className="links-container">
                <div className="links-header">
                    <h2>{t('links.title')}</h2>
                    <p className="subtitle">{t('links.subtitle')}</p>
                </div>

                {links.map((section, index) => (
                    <div key={index} className="links-section">
                        <h3 className="section-title">{section.category}</h3>
                        <div className="links-grid">
                            {section.items.map((link, linkIndex) => (
                                <a
                                    key={linkIndex}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-card"
                                >
                                    <div className="link-icon">{link.icon}</div>
                                    <div className="link-content">
                                        <h4>{link.name}</h4>
                                        <p>{link.description}</p>
                                    </div>
                                    <div className="link-arrow">→</div>
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Links;
