import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import './Header.css';

function Header({ theme, toggleTheme, language, toggleLanguage, t }) {
    const location = useLocation();

    const isActive = (path) => {
        if (path === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(path);
    };

    return (
        <header className={`header ${theme}`}>
            <div className="header-content">
                <div className="logo-section">
                    <Link to="/" className="logo">
                        {siteConfig.title}
                    </Link>
                </div>

                <nav className="nav">
                    <Link
                        to="/"
                        className={isActive('/') ? 'active' : ''}
                    >
                        {t('nav.blog')}
                    </Link>
                    <Link
                        to="/categories"
                        className={isActive('/categories') ? 'active' : ''}
                    >
                        {t('nav.categories')}
                    </Link>
                    <Link
                        to="/tags"
                        className={isActive('/tags') ? 'active' : ''}
                    >
                        {t('nav.tags')}
                    </Link>
                    <Link
                        to="/search"
                        className={isActive('/search') ? 'active' : ''}
                    >
                        {t('nav.search')}
                    </Link>
                    <Link
                        to="/about"
                        className={isActive('/about') ? 'active' : ''}
                    >
                        {t('nav.about')}
                    </Link>
                    <Link
                        to="/links"
                        className={isActive('/links') ? 'active' : ''}
                    >
                        {t('nav.links')}
                    </Link>
                </nav>

                <div className="header-actions">
                    <button
                        className="lang-toggle"
                        onClick={toggleLanguage}
                        aria-label="Toggle language"
                        title={language === 'zh' ? 'Switch to English' : '切换到中文'}
                    >
                        {language === 'zh' ? 'EN' : '中'}
                    </button>
                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                    >
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Header;
