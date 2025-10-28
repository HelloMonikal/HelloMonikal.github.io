/**
 * Slug 生成工具
 * 将文章标题转换为 URL 友好的 slug
 */

// 拼音映射表（常用汉字）
const pinyinMap = {
    '前端': 'frontend',
    '后端': 'backend',
    '数据': 'data',
    '分析': 'analysis',
    '机器学习': 'machine-learning',
    '深度学习': 'deep-learning',
    '人工智能': 'artificial-intelligence',
    '文学': 'literature',
    '技术': 'tech',
    '指南': 'guide',
    '实战': 'practice',
    '最佳': 'best',
    '优化': 'optimization',
    '性能': 'performance',
    '设计': 'design',
    '开发': 'development'
};

/**
 * 生成 slug
 * @param {string} title - 文章标题
 * @param {number} id - 文章 ID（作为后备）
 * @returns {string} - URL slug
 */
export function generateSlug(title, id) {
    if (!title) return `post-${id}`;

    let slug = title.toLowerCase();

    // 替换常用中文词汇为拼音/英文
    Object.entries(pinyinMap).forEach(([cn, pinyin]) => {
        slug = slug.replace(new RegExp(cn, 'g'), pinyin);
    });

    // 移除剩余的中文字符
    slug = slug.replace(/[\u4e00-\u9fa5]/g, '');

    // 替换空格和特殊字符为连字符
    slug = slug
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_]+/g, '-')
        .replace(/-+/g, '-')
        .trim()
        .replace(/^-+|-+$/g, '');

    // 如果 slug 为空或太短，使用 ID
    if (!slug || slug.length < 3) {
        slug = `post-${id}`;
    }

    return slug;
}

/**
 * 从 posts 数组生成带 slug 的新数组
 */
export function addSlugsToPost(posts) {
    return posts.map(post => ({
        ...post,
        slug: post.slug || generateSlug(post.title, post.id)
    }));
}



