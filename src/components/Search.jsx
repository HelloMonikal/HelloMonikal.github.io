import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import './Search.css';

function Search({ posts, onSelectPost, theme, t }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isSearching, setIsSearching] = useState(false);

    // 配置 Fuse.js 搜索选项
    const fuseOptions = {
        keys: [
            { name: 'title', weight: 0.5 },
            { name: 'excerpt', weight: 0.3 },
            { name: 'tags', weight: 0.2 }
        ],
        threshold: 0.3,
        includeScore: true
    };

    const fuse = new Fuse(posts, fuseOptions);

    useEffect(() => {
        if (query.trim()) {
            setIsSearching(true);
            // 模拟搜索延迟，实际使用中可以去掉
            const timer = setTimeout(() => {
                const searchResults = fuse.search(query);
                setResults(searchResults.map(result => result.item));
                setIsSearching(false);
            }, 200);

            return () => clearTimeout(timer);
        } else {
            setResults([]);
            setIsSearching(false);
        }
    }, [query]);

    return (
        <div className={`search-page ${theme}`}>
            <div className="search-container">
                <div className="search-header">
                    <h2>{t('search.title')}</h2>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder={t('search.placeholder')}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="search-input"
                            autoFocus
                        />
                        {query && (
                            <button
                                className="clear-search"
                                onClick={() => setQuery('')}
                                aria-label="Clear search"
                            >
                                ✕
                            </button>
                        )}
                    </div>
                </div>

                <div className="search-results">
                    {isSearching && (
                        <div className="search-status">{t('search.searching')}</div>
                    )}

                    {!isSearching && query && results.length === 0 && (
                        <div className="search-status">{t('search.noResults')}</div>
                    )}

                    {!isSearching && results.length > 0 && (
                        <>
                            <div className="search-count">
                                {results.length} {t('search.results')}
                            </div>
                            <div className="results-list">
                                {results.map((post) => (
                                    <article
                                        key={post.id}
                                        className="result-item"
                                        onClick={() => onSelectPost(post)}
                                    >
                                        <div className="result-image">
                                            <img src={post.image} alt={post.title} />
                                        </div>
                                        <div className="result-content">
                                            <h3>{post.title}</h3>
                                            <p className="result-excerpt">{post.excerpt}</p>
                                            <div className="result-meta">
                                                <span className="result-category">{post.category}</span>
                                                <span className="result-date">📅 {post.date}</span>
                                                <span className="result-read-time">⏱️ {post.readTime}</span>
                                            </div>
                                            <div className="result-tags">
                                                {post.tags.map((tag, index) => (
                                                    <span key={index} className="tag">#{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;



