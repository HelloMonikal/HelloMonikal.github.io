/**
 * 友情链接配置
 * 
 * 如何添加新链接：
 * 1. 在对应的 category 下的 items 数组中添加新对象
 * 2. 设置 name、url、description、icon
 * 3. 也可以添加新的 category
 */

export const links = [
    {
        category: '开发工具',
        items: [
            {
                name: 'GitHub',
                url: 'https://github.com',
                description: '全球最大的代码托管平台',
                icon: '💻'
            },
            {
                name: 'VS Code',
                url: 'https://code.visualstudio.com',
                description: '强大的代码编辑器',
                icon: '📝'
            },
            {
                name: 'Stack Overflow',
                url: 'https://stackoverflow.com',
                description: '开发者问答社区',
                icon: '❓'
            },
            {
                name: 'CodePen',
                url: 'https://codepen.io',
                description: '前端代码在线编辑器',
                icon: '🎨'
            }
        ]
    },
    {
        category: '学习资源',
        items: [
            {
                name: 'MDN Web Docs',
                url: 'https://developer.mozilla.org',
                description: 'Web 开发权威文档',
                icon: '📚'
            },
            {
                name: 'freeCodeCamp',
                url: 'https://www.freecodecamp.org',
                description: '免费编程学习平台',
                icon: '🎓'
            },
            {
                name: 'LeetCode',
                url: 'https://leetcode.com',
                description: '算法练习平台',
                icon: '🧩'
            },
            {
                name: 'Coursera',
                url: 'https://www.coursera.org',
                description: '在线课程平台',
                icon: '🎯'
            }
        ]
    },
    {
        category: '设计灵感',
        items: [
            {
                name: 'Dribbble',
                url: 'https://dribbble.com',
                description: '设计师作品展示平台',
                icon: '🎨'
            },
            {
                name: 'Behance',
                url: 'https://www.behance.net',
                description: 'Adobe 设计作品平台',
                icon: '🖼️'
            },
            {
                name: 'Awwwards',
                url: 'https://www.awwwards.com',
                description: 'Web 设计奖项平台',
                icon: '🏆'
            },
            {
                name: 'UI Movement',
                url: 'https://uimovement.com',
                description: 'UI 设计灵感库',
                icon: '✨'
            }
        ]
    },
    {
        category: '友情链接',
        items: [
            {
                name: '示例博客 1',
                url: '#',
                description: '技术博客示例',
                icon: '🔗'
            },
            {
                name: '示例博客 2',
                url: '#',
                description: '开发者博客',
                icon: '🔗'
            },
            {
                name: '示例博客 3',
                url: '#',
                description: '设计师博客',
                icon: '🔗'
            },
            {
                name: '示例博客 4',
                url: '#',
                description: '全栈工程师博客',
                icon: '🔗'
            }
        ]
    }
];



