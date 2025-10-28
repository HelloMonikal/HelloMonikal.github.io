/**
 * 国际化配置
 * 支持中文和英文
 */

export const translations = {
    zh: {
        // 导航
        nav: {
            blog: '博客',
            categories: '分类',
            tags: '标签',
            about: '关于作者',
            links: '链接',
            search: '搜索'
        },

        // 首页
        home: {
            title: '最新文章',
            subtitle: '分享技术、生活与思考',
            readMore: '阅读全文',
            backToList: '返回文章列表'
        },

        // 分类
        categories: {
            title: '文章分类',
            subtitle: '探索不同领域的知识',
            articles: '篇文章',
            clearFilter: '清除筛选'
        },

        // 标签
        tags: {
            title: '标签云',
            subtitle: '按标签浏览文章',
            articles: '篇文章'
        },

        // 搜索
        search: {
            placeholder: '搜索文章...',
            noResults: '未找到相关文章',
            results: '个结果',
            searching: '搜索中...'
        },

        // 关于
        about: {
            title: '关于作者',
            bio: '个人简介',
            skills: '技术栈',
            interests: '兴趣爱好',
            contact: '联系方式'
        },

        // 链接
        links: {
            title: '友情链接',
            subtitle: '收藏的优质网站和资源'
        },

        // 页脚
        footer: {
            builtWith: '用 ❤️ 和 React 构建'
        },

        // 其他
        readTime: '分钟',
        date: '发布于',
        category: '分类',
        relatedPosts: '相关文章'
    },

    en: {
        // Navigation
        nav: {
            blog: 'Blog',
            categories: 'Categories',
            tags: 'Tags',
            about: 'About',
            links: 'Links',
            search: 'Search'
        },

        // Home
        home: {
            title: 'Latest Posts',
            subtitle: 'Sharing tech, life and thoughts',
            readMore: 'Read More',
            backToList: 'Back to List'
        },

        // Categories
        categories: {
            title: 'Categories',
            subtitle: 'Explore different topics',
            articles: 'articles',
            clearFilter: 'Clear Filter'
        },

        // Tags
        tags: {
            title: 'Tag Cloud',
            subtitle: 'Browse articles by tags',
            articles: 'articles'
        },

        // Search
        search: {
            placeholder: 'Search articles...',
            noResults: 'No articles found',
            results: 'results',
            searching: 'Searching...'
        },

        // About
        about: {
            title: 'About Me',
            bio: 'Biography',
            skills: 'Skills',
            interests: 'Interests',
            contact: 'Contact'
        },

        // Links
        links: {
            title: 'Links',
            subtitle: 'Curated websites and resources'
        },

        // Footer
        footer: {
            builtWith: 'Built with ❤️ and React'
        },

        // Others
        readTime: 'min read',
        date: 'Published on',
        category: 'Category',
        relatedPosts: 'Related Posts'
    }
};

export const getTranslation = (lang, key) => {
    const keys = key.split('.');
    let value = translations[lang];

    for (const k of keys) {
        value = value?.[k];
    }

    return value || key;
};



