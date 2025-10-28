# 📦 GitHub Pages 部署指南

## 🚀 方法一：使用 GitHub Actions（推荐）

### 1. 准备仓库

如果你的仓库名是 `username.github.io`：

- ✅ 访问地址将是：`https://username.github.io`

- ✅ `vite.config.js` 中的 `base: '/'` 已正确配置

如果仓库名不是 `username.github.io`（比如 `my-blog`）：

- 访问地址将是：`https://username.github.io/my-blog`

- 需要修改 `vite.config.js` 中的 `base: '/my-blog/'`

### 2. 启用 GitHub Pages

1. 进入仓库的 **Settings** > **Pages**

2. 在 **Source** 下选择：**GitHub Actions**

3. 保存设置

### 3. 推送代码

```bash

git add .

git commit -m "Add GitHub Actions deployment"

git push origin main

```

### 4. 查看部署

- 进入仓库的 **Actions** 标签

- 查看工作流运行状态

- 部署完成后，访问你的网站！

---

## 🔧 方法二：手动部署

如果不想用 GitHub Actions：

### 1. 构建项目

```bash
npm run build
```

### 2. 测试构建结果

```bash
npm run preview
```

访问 http://localhost:4173 测试

### 3. 部署到 GitHub Pages

#### 选项 A：使用 gh-pages 分支

```bash
# 安装 gh-pages
npm install -D gh-pages

# 添加部署脚本到 package.json
npm pkg set scripts.deploy="gh-pages -d dist"

# 部署
npm run deploy
```

然后在 **Settings** > **Pages** 中选择 `gh-pages` 分支。

#### 选项 B：推送到 main 分支的 /docs 目录

```bash
# 修改 vite.config.js
# outDir: 'docs'

npm run build
git add docs
git commit -m "Build for GitHub Pages"
git push
```

在 **Settings** > **Pages** 中选择 `main` 分支的 `/docs` 目录。

---

## ⚠️ 常见问题

### 1. 页面刷新后 404

**原因**：GitHub Pages 不支持客户端路由

**解决**：已添加 `404.html` 重定向脚本，会自动处理

### 2. 资源路径错误

**检查**：

- `vite.config.js` 中的 `base` 配置

- 如果是 `username.github.io` → `base: '/'`

- 如果是其他仓库名 → `base: '/repo-name/'`

### 3. 构建失败

**检查**：

- Node.js 版本（GitHub Actions 使用 Node 20）

- 依赖是否都已安装

- 查看 Actions 标签的错误日志

### 4. 空白页面

**检查浏览器控制台**：

1. 打开 F12 开发者工具

2. 查看 Console 标签是否有错误

3. 查看 Network 标签资源是否正确加载

---

## 🔐 权限设置

如果使用 GitHub Actions，需要确保：

1. **Settings** > **Actions** > **General**
2. 在 **Workflow permissions** 下
3. 选择 **Read and write permissions**
4. 勾选 **Allow GitHub Actions to create and approve pull requests**

---

## 📝 更新网站

每次推送到 main 分支，GitHub Actions 会自动构建和部署。

手动触发部署：

1. 进入 **Actions** 标签

2. 选择 **Deploy to GitHub Pages** 工作流

3. 点击 **Run workflow**

---

## 🎯 自定义域名（可选）

如果你有自己的域名：

### 1. 添加 CNAME 文件

在 `public/CNAME` 文件中写入你的域名：
```
yourdomain.com
```

### 2. 配置 DNS

在域名提供商处添加 DNS 记录：

```
类型      名称      值
A         @         185.199.108.153
A         @         185.199.109.153
A         @         185.199.110.153
A         @         185.199.111.153
CNAME     www       username.github.io
```

### 3. 在 GitHub 设置

**Settings** > **Pages** > **Custom domain** 输入你的域名

---

## ✅ 部署清单

- [ ] 确认仓库名和 `base` 配置一致

- [ ] 在 GitHub Settings 中启用 Pages

- [ ] 选择正确的部署源（GitHub Actions / 分支）

- [ ] 推送代码触发部署

- [ ] 查看 Actions 运行状态

- [ ] 访问网站测试

- [ ] 测试路由跳转（刷新页面不应 404）

---

## 📞 故障排除

### Actions 运行失败

```bash
# 本地测试构建
npm run build

# 检查依赖
npm ci
```

### 页面内容不更新

```bash
# 强制刷新浏览器
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)

# 或清除缓存后刷新
```

### 检查部署状态

访问：`https://username.github.io/your-repo` （如果不是 username.github.io 仓库）

---

🎉 **部署成功后，你的博客就上线了！**

记得：

- 每次 push 到 main 会自动部署

- 可以在 Actions 标签查看部署历史

- 使用自定义域名提升专业度



