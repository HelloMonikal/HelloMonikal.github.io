# 📖 我的博客

一个基于 React + Vite 构建的现代化个人博客，采用 Apple 设计风格。

## ✨ 特性

- 🎨 **Apple 风格设计** - 简洁优雅的界面

- 🌓 **深色模式** - 默认暗色主题，一键切换

- 🌏 **多语言支持** - 中英文切换

- 🔗 **完整路由** - 可分享的文章链接

- 🔍 **实时搜索** - 智能搜索文章内容

- 🏷️ **标签系统** - 标签云可视化

- 📱 **响应式布局** - 完美适配各种设备

- 🗂️ **分类系统** - 支持文章分类浏览

- 📊 **SEO 优化** - 完整的 meta 标签和 sitemap

- ⚡ **快速加载** - Vite 构建，极速开发体验

- 📝 **易于管理** - 配置化内容管理

## 🚀 快速开始

### 安装依赖

```bash

npm install

```

### 启动开发服务器

```bash

npm run dev

```

访问 http://localhost:5173

### 构建生产版本

```bash

npm run build

```

### 预览生产版本

```bash

npm preview

```

## 📁 项目结构

```

mypages/

├── src/

│ ├── components/ # React 组件

│ │ ├── Header.jsx # 导航栏

│ │ ├── BlogList.jsx # 文章列表

│ │ ├── BlogPost.jsx # 文章详情

│ │ ├── Categories.jsx # 分类页面

│ │ ├── Links.jsx # 链接页面

│ │ └── About.jsx # 关于页面

│ ├── data/ # 📌 内容配置（重要！）

│ │ ├── posts.js # 博客文章数据

│ │ ├── categories.js # 分类配置

│ │ ├── links.js # 友情链接

│ │ └── author.js # 作者信息

│ ├── posts/ # Markdown 文章（可选）

│ ├── App.jsx # 主应用组件

│ ├── App.css # 应用样式

│ ├── index.css # 全局样式

│ └── main.jsx # 入口文件

├── public/ # 静态资源

├── CONTENT_GUIDE.md # 📖 内容管理详细指南

└── README.md # 项目说明

```

## 📝 内容管理

### 快速修改内容

所有可自定义内容都在 `src/data/` 目录下：

1. **添加文章** → 编辑 `src/data/posts.js`

2. **修改分类** → 编辑 `src/data/categories.js`

3. **更新链接** → 编辑 `src/data/links.js`

4. **修改个人信息** → 编辑 `src/data/author.js`

### 详细指南

查看 [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) 获取完整的内容管理指南。

## 🎨 主题定制

### 切换主题

点击右上角的 🌙/☀️ 按钮即可切换主题。主题偏好会保存在浏览器本地存储中。

### 自定义颜色

编辑 `src/index.css` 中的 CSS 变量：

```css

:root {

  --color-accent: #007aff; /* 主色调 */

  /* 其他颜色变量... */

}

```

## 📊 当前内容

- ✅ 14 篇示例文章

- ✅ 5 个分类（前端、后端、AI、数据分析、文学）

- ✅ 16 个友情链接

- ✅ 完整的作者信息

## 🛠️ 技术栈

- **框架**: React 19

- **路由**: React Router 6

- **SEO**: React Helmet Async

- **搜索**: Fuse.js

- **构建工具**: Vite 7

- **样式**: CSS3

- **Markdown**: React Markdown + Gray Matter（预留）

- **部署**: 静态站点托管

## 📦 部署

### Vercel

```bash

npm run build

# 上传 dist 目录到 Vercel

```

### Netlify

```bash

npm run build

# 上传 dist 目录到 Netlify

```

### GitHub Pages

```bash

npm run build

# 将 dist 目录推送到 gh-pages 分支

```

## 🎉 已实现功能

- [x] 完整路由系统

- [x] 文章搜索功能

- [x] 标签云页面

- [x] 多语言支持

- [x] SEO 优化

- [x] 暗色主题默认

## 🔮 未来计划

- [ ] Markdown 文件自动加载

- [ ] RSS 订阅生成

- [ ] 评论系统集成

- [ ] 阅读统计

- [ ] 文章推荐算法

- [ ] PWA 支持

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**提示**：开始使用前，请先阅读 [CONTENT_GUIDE.md](./CONTENT_GUIDE.md) 了解如何管理博客内容。

