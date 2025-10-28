# 🚀 5分钟部署到 GitHub Pages

## 第一步：确认仓库名

你的仓库名是什么？

- ✅ 如果是 `username.github.io` → 直接跳到第二步
- ⚠️ 如果不是（比如 `my-blog`）→ 需要修改 `vite.config.js`

```javascript
// vite.config.js
export default defineConfig({
  // ...
  base: '/my-blog/',  // 改成你的仓库名
})
```

## 第二步：启用 GitHub Pages

1. 进入你的 GitHub 仓库
2. 点击 **Settings（设置）**
3. 左侧菜单找到 **Pages**
4. 在 **Source** 下拉菜单选择：**GitHub Actions**

## 第三步：设置权限

1. 还是在 Settings 页面
2. 左侧菜单找到 **Actions** → **General**
3. 滚动到 **Workflow permissions**
4. 选择 **Read and write permissions**
5. 勾选 **Allow GitHub Actions to create and approve pull requests**
6. 点击 **Save**

## 第四步：推送代码

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

## 第五步：等待部署

1. 进入仓库的 **Actions** 标签
2. 看到 "Deploy to GitHub Pages" 工作流正在运行
3. 等待绿色✓（大约2-3分钟）

## 第六步：访问网站

- 如果仓库名是 `username.github.io`：
  - 访问：`https://username.github.io`

- 如果仓库名不是：
  - 访问：`https://username.github.io/repo-name`

## ⚠️ 常见问题

### 1. Actions 没有运行？

检查 `.github/workflows/deploy.yml` 文件是否存在并已推送。

### 2. 页面404？

- 确认 GitHub Pages 已启用
- 检查 Settings > Pages 中显示的URL
- 等待几分钟让 DNS 传播

### 3. 页面空白？

按 F12 打开开发者工具，查看 Console 是否有错误：
- 如果显示资源404，检查 `vite.config.js` 的 `base` 配置
- 如果有 JavaScript 错误，查看错误信息

### 4. 刷新页面404？

已经添加了 `404.html` 重定向脚本，应该会自动处理。
如果还是有问题，清除浏览器缓存重试。

## 🔧 手动构建测试

如果想先本地测试构建结果：

```bash
# 构建
npm run build

# 预览（会在本地启动服务器）
npm run preview
```

访问显示的地址（通常是 http://localhost:4173）

## 📝 更新网站

以后更新网站很简单：

```bash
# 修改内容（比如添加新文章）
# 编辑 src/data/posts.js

# 提交并推送
git add .
git commit -m "Add new post"
git push
```

GitHub Actions 会自动构建和部署！

---

## ✅ 部署成功标志

- ✅ Actions 标签显示绿色✓
- ✅ Settings > Pages 显示绿色提示"Your site is live at..."
- ✅ 访问URL能看到网站
- ✅ 刷新页面不会404
- ✅ 所有路由都正常工作

---

**就这么简单！** 🎉

有问题查看详细文档：`DEPLOY_GUIDE.md`



