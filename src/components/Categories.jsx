import React, { useState } from 'react';
import './Categories.css';
import { categories } from '../data/categories';

function Categories({ posts, onSelectPost, onCategorySelect, theme, t = (key) => key }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        onCategorySelect(categoryId);
    };

    const getCategoryCount = (categoryId) => {
        return posts.filter(post => post.categoryId === categoryId).length;
    };

    const filteredPosts = selectedCategory
        ? posts.filter(post => post.categoryId === selectedCategory)
        : [];

    return (
        <div className={`categories ${theme}`}>
            <div className="categories-container">
                <div className="categories-header">
                    <h2>{t('categories.title')}</h2>
                    <p className="subtitle">{t('categories.subtitle')}</p>
                </div>

                <div className="categories-grid">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className={`category-card ${selectedCategory === category.id ? 'active' : ''}`}
                            onClick={() => handleCategoryClick(category.id)}
                        >
                            <div className="category-icon">{category.icon}</div>
                            <h3>{category.name}</h3>
                            <p className="category-desc">{category.description}</p>
                            <div className="category-count">
                                {getCategoryCount(category.id)} {t('categories.articles')}
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCategory && (
                    <div className="category-posts">
                        <div className="category-posts-header">
                            <h3>
                                {categories.find(c => c.id === selectedCategory)?.name} 文章
                            </h3>
                            <button
                                className="clear-filter"
                                onClick={() => setSelectedCategory(null)}
                            >
                                {t('categories.clearFilter')}
                            </button>
                        </div>

                        <div className="posts-list">
                            {filteredPosts.map((post) => (
                                <article
                                    key={post.id}
                                    className="post-item"
                                    onClick={() => onSelectPost(post)}
                                >
                                    <div className="post-item-image">
                                        <img src={post.image} alt={post.title} />
                                    </div>
                                    <div className="post-item-content">
                                        <h4>{post.title}</h4>
                                        <p className="post-item-excerpt">{post.excerpt}</p>
                                        <div className="post-item-meta">
                                            <span>📅 {post.date}</span>
                                            <span>⏱️ {post.readTime}</span>
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Categories;
