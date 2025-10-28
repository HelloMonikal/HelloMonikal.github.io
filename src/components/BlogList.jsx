import React from 'react';
import './BlogList.css';

function BlogList({ posts, onSelectPost, theme, t = (key) => key }) {
    return (
        <div className={`blog-list ${theme}`}>
            <div className="blog-container">
                <div className="blog-header">
                    <h2>{t('home.title')}</h2>
                    <p className="subtitle">{t('home.subtitle')}</p>
                </div>

                <div className="posts-grid">
                    {posts.map((post) => (
                        <article
                            key={post.id}
                            className="post-card"
                            onClick={() => onSelectPost(post)}
                        >
                            <div className="post-image">
                                <img src={post.image} alt={post.title} />
                                <div className="post-category">{post.category}</div>
                            </div>
                            <div className="post-content">
                                <h3>{post.title}</h3>
                                <p className="post-excerpt">{post.excerpt}</p>
                                <div className="post-meta">
                                    <span className="post-date">📅 {post.date}</span>
                                    <span className="post-read-time">⏱️ {post.readTime}</span>
                                </div>
                                <div className="post-tags">
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className="tag">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BlogList;
