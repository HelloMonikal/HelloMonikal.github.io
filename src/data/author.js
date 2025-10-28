/**
 * 作者信息配置
 * 
 * 直接修改下面的信息即可更新"关于作者"页面
 */

export const author = {
    // 基本信息
    name: '杜修贤',
    avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31m9jaesrli005paf3ev178offm3uvc8?imageView2/2/w/540/format/webp|imageMogr2/strip2', // 可以是 emoji 或图片 URL
    tagline: '热爱编程 · 持续学习 · 分享知识',

    // 个人简介
    bio: `这是杜修贤的博客，只要github不倒闭，它或许就能一直存在着`,

    // 技术栈
    skills: [
        'React',
        'JavaScript',
        'TypeScript',
        'Node.js',
        'Python',
        'SQL',
        'MongoDB',
        'Pandas',
        'CSS/SCSS',
        'Git',
        'Docker'
    ],

    // 兴趣爱好
    interests: [
        { icon: '💡', text: '探索新技术和框架' },
        { icon: '📚', text: '阅读技术书籍和文学作品' },
        { icon: '✍️', text: '写作和分享技术博客' },
        { icon: '🤖', text: '研究人工智能和机器学习' },
        { icon: '📊', text: '数据可视化和分析' },
        { icon: '🎮', text: '偶尔玩玩游戏放松' }
    ],

    // 联系方式
    contacts: [
        {
            icon: '📧',
            label: 'Email',
            value: 'dxx9710@163.com',
            link: 'mailto:dxx9710@163.com'
        },
        {
            icon: '💻',
            label: 'GitHub',
            value: 'GitHub',
            link: 'https://github.com/hellomonikal'
        },
        {
            icon: '🐦',
            label: 'Twitter',
            value: 'Twitter',
            link: ''
        }
    ]
};

export default author;


