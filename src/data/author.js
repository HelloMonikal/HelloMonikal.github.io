/**
 * 作者信息配置
 * 
 * 直接修改下面的信息即可更新"关于作者"页面
 */

export const author = {
    // 基本信息
    name: '杜修贤',
    avatar: 'https://sns-avatar-qc.xhscdn.com/avatar/1040g2jo31m9jaesrli005paf3ev178offm3uvc8?imageView2/2/w/540/format/webp|imageMogr2/strip2', // 可以是 emoji 或图片 URL
    tagline: '我喜欢探索、创造、睡觉和不费力气的其他事情',

    // 个人简介
    bio: `这是杜修贤的博客，只要github不倒闭，它或许就能一直存在着`,

    // 技术栈
    skills: [
        'React',
        'JavaScript',
        'Python',
        'Node.js',
        'SQL',
        'MongoDB',
        'Pandas',
        'CSS/SCSS',
        'Git',
        'Docker'
    ],

    // 兴趣爱好
    interests: [
        { icon: '💡', text: '学点新技术' },
        { icon: '📚', text: '阅读小说' },
        { icon: '✍️', text: '写点有的没的' },
        { icon: '🤖', text: '关于AI' },
        { icon: '📊', text: '数据分析' },
        { icon: '🎮', text: '玩游戏' }
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
            icon: '☎️',
            label: 'phone',
            value: '+86 15881008532',
            link: 'tel:+8615881008532'
        }
    ]
};

export default author;


