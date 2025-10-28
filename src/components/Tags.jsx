import React, { useState, useMemo } from 'react';
import './Tags.css';

function Tags({ posts, onSelectPost, theme, t }) {
    const [selectedTag, setSelectedTag] = useState(null);

    // 统计所有标签及其文章数量
    const tagStats = useMemo(() => {
        const stats = {};
        posts.forEach(post => {
            post.tags.forEach(tag => {
                if (stats[tag]) {
                    stats[tag].count++;
                    stats[tag].posts.push(post);
                } else {
                    stats[tag] = {
                        count: 1,
                        posts: [post]
                    };
                }
            });
        });
        return Object.entries(stats)
            .map(([tag, data]) => ({ tag, ...data }))
            .sort((a, b) => b.count - a.count);
    }, [posts]);

    const filteredPosts = selectedTag
        ? tagStats.find(t => t.tag === selectedTag)?.posts || []
        : [];

    // 根据文章数量计算标签大小
    const getTagSize = (count) => {
        const maxCount = Math.max(...tagStats.map(t => t.count));
        const minSize = 0.9;
        const maxSize = 2.5;
        const size = minSize + (count / maxCount) * (maxSize - minSize);
        return `${size}rem`;
    };

    return (
        <div className={`tags-page ${theme}`}>
            <div className="tags-container">
                <div className="tags-header">
                    <h2>{t('tags.title')}</h2>
                    <p className="subtitle">{t('tags.subtitle')}</p>
                </div>

                <div className="tag-cloud">
                    {tagStats.map(({ tag, count }) => (
                        <button
                            key={tag}
                            className={`tag-cloud-item ${selectedTag === tag ? 'active' : ''}`}
                            style={{ fontSize: getTagSize(count) }}
                            onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                        >
                            #{tag}
                            <span className="tag-count">{count}</span>
                        </button>
                    ))}
                </div>

                {selectedTag && (
                    <div className="tag-posts">
                        <div className="tag-posts-header">
                            <h3>
                                #{selectedTag} ({filteredPosts.length} {t('tags.articles')})
                            </h3>
                            <button
                                className="clear-tag"
                                onClick={() => setSelectedTag(null)}
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
                                            <span className="post-category">{post.category}</span>
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

export default Tags;



