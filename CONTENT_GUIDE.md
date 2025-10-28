# 📝 博客内容管理指南

本博客采用类似 Jekyll 的内容管理方式，所有可自定义的内容都存放在独立的配置文件中，方便更新维护。

## 📁 内容存储位置

```

src/

├── data/ # 所有配置数据

│ ├── posts.js # 博客文章

│ ├── categories.js # 分类配置

│ ├── links.js # 友情链接

│ └── author.js # 作者信息

└── posts/ # Markdown 文章（可选，未来扩展）

```

## ✍️ 如何添加新文章

### 方法一：编辑 `/src/data/posts.js`

1. 打开 `src/data/posts.js`

2. 在 `posts` 数组中添加新对象：

```javascript

{

  id: 15, // 递增的唯一 ID

  title: '你的文章标题',

  excerpt: '文章摘要，显示在卡片上...',

  content: `完整的文章内容。

可以使用多个段落，用空行分隔。

每个 \n 会创建新段落。`,

  category: '前端', // 必须匹配 categories.js 中的 name

  categoryId: 'frontend', // 必须匹配 categories.js 中的 id

  tags: ['标签1', '标签2', '标签3'],

  date: '2025-10-28', // 格式：YYYY-MM-DD

  readTime: '10 分钟',

  image: 'https://images.unsplash.com/photo-xxx?w=800&h=400&fit=crop'

}

```

3. 保存文件，页面会自动更新

### 文章字段说明

| 字段 | 类型 | 必填 | 说明 |

|------|------|------|------|

| id | Number | ✅ | 唯一标识符，建议递增 |

| title | String | ✅ | 文章标题 |

| excerpt | String | ✅ | 摘要，显示在文章卡片上 |

| content | String | ✅ | 完整内容，使用 `\n` 分段 |

| category | String | ✅ | 分类名称（显示用） |

| categoryId | String | ✅ | 分类 ID（必须匹配 categories.js） |

| tags | Array | ✅ | 标签数组 |

| date | String | ✅ | 发布日期，格式：YYYY-MM-DD |

| readTime | String | ✅ | 预计阅读时间，如："10 分钟" |

| image | String | ✅ | 文章配图 URL |

### 推荐免费图片网站

- **Unsplash**: https://unsplash.com/ （高质量免费图片）

- **Pexels**: https://www.pexels.com/ （免费商用图片）

- **Pixabay**: https://pixabay.com/ （免费图片和视频）

图片 URL 格式建议：

```

https://images.unsplash.com/photo-xxxxx?w=800&h=400&fit=crop

```

## 🗂️ 如何添加新分类

编辑 `src/data/categories.js`：

```javascript

{

  id: 'new-category', // 唯一 ID，用于文章关联

  name: '新分类', // 显示名称

  icon: '🎯', // Emoji 图标

  description: '分类描述'

}

```

## 🔗 如何添加友情链接

编辑 `src/data/links.js`：

```javascript

{

  category: '新分组',

  items: [

    {

      name: '网站名称',

      url: 'https://example.com',

      description: '网站描述',

      icon: '🔗'

    }

  ]

}

```

## 👤 如何更新作者信息

编辑 `src/data/author.js`：

```javascript

export const author = {

  name: '你的名字',

  avatar: '👨‍💻', // 可以是 emoji 或图片 URL

  tagline: '个人标语',

  bio: `个人简介内容...`,

  skills: ['技能1', '技能2', ...],

  interests: [

    { icon: '💡', text: '兴趣描述' }

  ],

  contacts: [

    {

      icon: '📧',

      label: 'Email',

      value: 'your.email@example.com',

      link: 'mailto:your.email@example.com'

    }

  ]

}

```

## 🎨 自定义头像

### 使用 Emoji

```javascript

avatar: '👨‍💻'

```

### 使用图片 URL

```javascript

avatar: 'https://your-avatar-url.com/avatar.jpg'

```

需要同时更新 `About.jsx` 中的显示逻辑。

## 📊 内容统计

当前博客包含：

- ✅ 14 篇示例文章

- ✅ 5 个分类

- ✅ 16 个友情链接

- ✅ 完整的作者信息

## 🚀 快速开始

1. **添加第一篇文章**：

   - 打开 `src/data/posts.js`

   - 复制一篇示例文章

   - 修改内容

   - 保存

2. **修改作者信息**：

   - 打开 `src/data/author.js`

   - 更新你的个人信息

   - 保存

3. **添加友情链接**：

   - 打开 `src/data/links.js`

   - 在相应分组添加链接

   - 保存

## ⚡ 提示

1. **文章 ID 必须唯一**：建议按递增顺序分配

2. **分类 ID 必须匹配**：文章的 `categoryId` 必须存在于 `categories.js`

3. **日期格式统一**：使用 `YYYY-MM-DD` 格式

4. **图片尺寸建议**：800x400 像素，保持 2:1 比例

5. **内容分段**：使用 `\n\n` 创建段落间隔

## 🔮 未来扩展

计划支持的功能：

- [ ] Markdown 文件支持（放在 `/src/posts` 目录）

- [ ] Front Matter 元数据解析

- [ ] 自动生成文章摘要

- [ ] 标签页面

- [ ] 文章搜索功能

- [ ] RSS 订阅

## ❓ 常见问题

**Q: 修改后页面没有更新？**

A: Vite 支持热更新，保存后应自动刷新。如果没有，请手动刷新浏览器。

**Q: 如何删除示例文章？**

A: 在 `posts.js` 中删除对应的对象即可。

**Q: 能否使用 Markdown 格式？**

A: 当前版本使用纯文本。如需 Markdown 支持，需要安装 `react-markdown` 库。

**Q: 文章排序规则？**

A: 当前按数组顺序显示。可以根据 `date` 字段排序。

---

💡 **提示**：所有修改都会立即生效，无需重启开发服务器！



