# ⚠️ 紧急修复：GitHub Pages 显示 README 而不是网站

## 问题原因

GitHub Pages 当前设置为直接从分支部署，而不是使用 GitHub Actions。

## ✅ 解决步骤

### 1. 检查 GitHub Actions 是否运行

1. 进入你的仓库：https://github.com/hellomonikal/hellomonikal.github.io
2. 点击 **Actions** 标签
3. 查看是否有 "Deploy to GitHub Pages" 工作流

**如果看到工作流**：
- ✅ 查看是否成功（绿色✓）
- ❌ 如果失败（红色✗），点击查看错误

**如果没有看到任何工作流**：
- 说明 `.github/workflows/deploy.yml` 文件没有被推送
- 或者 Actions 没有启用

### 2. 修改 GitHub Pages 设置

**这是最关键的一步！**

1. 进入仓库的 **Settings（设置）**
2. 左侧菜单找到 **Pages**
3. 在 **Source（构建和部署）** 部分：
   - ⚠️ 如果当前显示 "Deploy from a branch"
   - ✅ 改为：**GitHub Actions**

![修改前](可能显示: Deploy from a branch / main / root)
![修改后](应该显示: GitHub Actions)

4. 保存后会自动触发部署

### 3. 等待重新部署

修改设置后：
1. 回到 **Actions** 标签
2. 应该看到新的工作流开始运行
3. 等待完成（约2-3分钟）

### 4. 访问网站

部署成功后，访问：https://hellomonikal.github.io

现在应该看到你的 React 博客了！

---

## 🔍 如果还是不行

### 检查 Actions 权限

1. **Settings** > **Actions** > **General**
2. 滚动到 **Workflow permissions**
3. 选择：**Read and write permissions**
4. 勾选：**Allow GitHub Actions to create and approve pull requests**
5. 点击 **Save**

### 手动触发部署

如果 Actions 没有自动运行：

1. 确认 `.github/workflows/deploy.yml` 文件存在
2. 进入 **Actions** 标签
3. 左侧选择 "Deploy to GitHub Pages"
4. 点击右侧 **Run workflow** 按钮
5. 选择 main 分支
6. 点击 **Run workflow**

### 检查工作流文件

确保这个文件存在并已推送：
```
.github/workflows/deploy.yml
```

如果没有，重新推送：
```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions workflow"
git push origin main
```

---

## 📸 正确配置截图参考

### Settings > Pages 应该显示：

```
Build and deployment
├── Source: GitHub Actions
└── 下方显示可用的工作流
```

**不应该是**：
```
Build and deployment
├── Source: Deploy from a branch
├── Branch: main
└── Folder: / (root)
```

---

## ✅ 成功标志

- ✅ Actions 标签有绿色✓的工作流
- ✅ Settings > Pages 显示 "Your site is live at https://hellomonikal.github.io"
- ✅ 访问网址看到的是 React 应用，不是 README

---

## 🆘 还是不行？

检查以下文件是否存在：

```bash
# 检查工作流文件
ls -la .github/workflows/deploy.yml

# 检查是否已提交
git log --oneline --all | grep -i deploy
```

如果文件不存在或未提交，执行：

```bash
git add .
git commit -m "Add GitHub Actions deployment"
git push origin main
```

然后重复步骤2（修改 Pages 设置）。

