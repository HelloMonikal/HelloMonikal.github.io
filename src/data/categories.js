/**
 * 博客分类配置
 * 
 * 如何添加新分类：
 * 1. 在 categories 数组中添加新对象
 * 2. 设置唯一的 id（用于文章关联）
 * 3. 设置 name（显示名称）、icon（图标）、description（描述）
 */

export const categories = [
    {
        id: 'backend',
        name: '后端',
        icon: '⚙️',
        description: '服务器开发、数据库、API设计'
    },
    {
        id: 'frontend',
        name: '前端',
        icon: '🎨',
        description: 'Web开发、UI/UX、框架技术'
    },
    {
        id: 'ai',
        name: 'AI',
        icon: '🤖',
        description: '人工智能、机器学习、深度学习'
    },
    {
        id: 'data',
        name: '统计与数据分析',
        icon: '📊',
        description: '数据挖掘、可视化、统计建模'
    },
    {
        id: 'literature',
        name: '文学',
        icon: '📚',
        description: '阅读笔记、文学评论、写作分享'
    }
];



