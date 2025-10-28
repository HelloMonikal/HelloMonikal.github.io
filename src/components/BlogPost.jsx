import React from 'react';
import './BlogPost.css';

function BlogPost({ post, onBack, theme, t = (key) => key }) {
    return (
        <div className={`blog-post ${theme}`}>
            <div className="post-container">
                <button className="back-button" onClick={onBack}>
                    ← {t('home.backToList')}
                </button>

                <article className="post-article">
                    <header className="post-header">
                        <div className="post-category-badge">{post.category}</div>
                        <h1>{post.title}</h1>
                        <div className="post-meta-info">
                            <span>📅 {post.date}</span>
                            <span>⏱️ {post.readTime}</span>
                        </div>
                    </header>

                    <div className="post-image-full">
                        <img src={post.image} alt={post.title} />
                    </div>

                    <div className="post-body">
                        {post.content.split('\n').map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>

                    <footer className="post-footer">
                        <div className="post-tags-full">
                            {post.tags.map((tag, index) => (
                                <span key={index} className="tag">#{tag}</span>
                            ))}
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    );
}

export default BlogPost;
