# 🚀 快速入门指南

## 欢迎使用全新博客系统！

你的博客现在已经升级到了功能完整的现代化版本！

## 🎉 新功能一览

### 1. 完整的路由系统

现在每个页面都有自己的 URL：

- 首页：`http://localhost:5173/`

- 文章详情：`http://localhost:5173/post/react-19-features`

- 分类：`http://localhost:5173/categories`

- 标签：`http://localhost:5173/tags`

- 搜索：`http://localhost:5173/search`

- 关于：`http://localhost:5173/about`

- 链接：`http://localhost:5173/links`

**好处**：

- ✅ 可以直接分享文章链接给朋友

- ✅ 支持浏览器前进/后退按钮

- ✅ 更好的 SEO（搜索引擎优化）

### 2. 实时搜索功能 🔍

- 在导航栏点击"搜索"

- 输入关键词即时搜索

- 支持搜索标题、摘要和标签

- 智能模糊匹配

**试试看**：搜索 "React" 或 "数据分析"

### 3. 标签云系统 🏷️

- 点击导航栏的"标签"

- 查看所有文章标签

- 标签大小反映文章数量

- 点击标签筛选相关文章

### 4. 中英文切换 🌏

- 右上角点击 "EN/中" 按钮

- 一键切换界面语言

- 设置会自动保存

### 5. 默认暗色主题 🌙

- 启动就是暗色主题，更护眼

- 右上角点击 🌙/☀️ 切换主题

- 主题偏好自动保存

## 🎯 如何使用

### 添加新文章

1. 打开 `src/data/posts.js`

2. 添加新文章对象：

```javascript

{

  id: 15, // 递增ID

  title: '我的新文章',

  excerpt: '文章摘要...',

  content: `文章完整内容...`,

  category: '前端',

  categoryId: 'frontend',

  tags: ['React', 'JavaScript'],

  date: '2025-10-28',

  readTime: '10 分钟',

  image: 'https://images.unsplash.com/...',

  slug: 'my-new-article' // 可选，不填会自动生成

}

```

3. 保存，自动刷新！

### 自定义语言文本

编辑 `src/data/i18n.js` 修改界面文字：

```javascript

export const translations = {

  zh: {

    nav: {

      blog: '博客', // 修改这里

      // ...

    }

  },

  en: {

    nav: {

      blog: 'Blog', // 和这里

      // ...

    }

  }

}

```

### 修改默认设置

在 `src/App.jsx` 中：

```javascript

// 修改默认主题（第 21 行）

const [theme, setTheme] = useState('dark'); // 'light' 或 'dark'

// 修改默认语言（第 22 行）

const [language, setLanguage] = useState('zh'); // 'zh' 或 'en'

```

## 🎨 界面导览

### 导航栏（Header）

```

我的博客 | 博客 | 分类 | 标签 | 搜索 | 关于作者 | 链接 | [EN] [🌙]

```

- **我的博客**：点击回到首页

- **博客**：文章列表

- **分类**：按分类浏览

- **标签**：标签云

- **搜索**：搜索文章

- **关于作者**：个人信息

- **链接**：友情链接

- **EN/中**：语言切换

- **🌙/☀️**：主题切换

### 首页

- 以卡片形式展示所有文章

- 点击卡片查看详情

- 显示分类、日期、阅读时间、标签

### 分类页

- 5个分类卡片

- 显示每个分类的文章数量

- 点击分类查看该分类下的所有文章

### 标签页

- 标签云展示

- 标签大小=文章数量

- 点击标签筛选文章

### 搜索页

- 实时搜索

- 按相关度排序

- 显示完整文章信息

## 📊 SEO 配置

### 更新网站信息

1. **更新域名**：

   - 编辑 `public/sitemap.xml`

   - 编辑 `public/robots.txt`

   - 将 `https://yourdomain.com` 改为你的域名

2. **文章 SEO**：

   每篇文章会自动设置：

   - `<title>` 标题

   - `<meta description>` 描述

   - Open Graph 标签（社交分享预览）

## 🔧 故障排除

### 页面刷新后 404？

**原因**：使用了 BrowserRouter

**解决**：部署时需要配置服务器重定向所有路由到 index.html

**Vercel/Netlify**：自动处理

**Nginx**：

```nginx

location / {

  try_files $uri $uri/ /index.html;

}

```

### 搜索不工作？

检查浏览器控制台是否有错误，确保 fuse.js 已安装

### 语言切换后还是中文？

刷新页面，或清除浏览器本地存储

## 📚 文件结构

```

src/

├── components/ # 所有组件

│ ├── Header.jsx # 导航栏（新增语言/主题切换）

│ ├── Search.jsx # 🆕 搜索页面

│ ├── Tags.jsx # 🆕 标签页面

│ └── ...

├── data/ # 数据配置

│ ├── posts.js # 文章数据

│ ├── i18n.js # 🆕 国际化配置

│ ├── categories.js # 分类配置

│ ├── links.js # 链接配置

│ └── author.js # 作者信息

├── utils/ # 🆕 工具函数

│ └── slug.js # Slug 生成

├── App.jsx # 主应用（新增路由）

└── main.jsx

```

## 🎯 下一步

1. **自定义你的信息**：

   - 修改 `src/data/author.js` 的作者信息

   - 更新 `src/data/posts.js` 的文章内容

2. **添加更多文章**：

   - 参考现有文章格式

   - 记得添加合适的标签和分类

3. **优化 SEO**：

   - 更新 sitemap.xml

   - 填写准确的 meta 描述

4. **部署上线**：

   - 运行 `npm run build`

   - 上传到 Vercel/Netlify

## 💡 小技巧

1. **快速导航**：

   - 使用键盘方向键浏览

   - 使用浏览器的快捷键

2. **搜索技巧**：

   - 搜索多个关键词会显示相关度最高的结果

   - 标签也会被搜索

3. **自定义 Slug**：

   - 在文章数据中添加 `slug` 字段

   - 使用有意义的英文单词，用 `-` 连接

## 📞 需要帮助？

查看这些文档：

- `README.md` - 项目说明

- `CONTENT_GUIDE.md` - 内容管理详细指南

- `UPGRADE_GUIDE.md` - 升级功能说明

---

🎉 **享受你的全新博客！开始写作吧！**



