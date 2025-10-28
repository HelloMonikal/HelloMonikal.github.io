import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import './App.css';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogPost from './components/BlogPost';
import About from './components/About';
import Categories from './components/Categories';
import Links from './components/Links';
import Search from './components/Search';
import Tags from './components/Tags';

// 导入配置数据
import { posts as rawPosts } from './data/posts';
import { addSlugsToPost } from './utils/slug';
import { getTranslation } from './data/i18n';

// 为文章添加 slug
const posts = addSlugsToPost(rawPosts);

function AppContent() {
  const navigate = useNavigate();
  const [theme, setTheme] = useState('dark'); // 默认暗色主题
  const [language, setLanguage] = useState('zh'); // 默认中文

  // 从本地存储读取主题和语言设置
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const savedLang = localStorage.getItem('language') || 'zh';
    setTheme(savedTheme);
    setLanguage(savedLang);
  }, []);

  // 切换主题
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // 切换语言
  const toggleLanguage = () => {
    const newLang = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  // 翻译函数
  const t = (key) => getTranslation(language, key);

  // 处理文章选择
  const handleSelectPost = (post) => {
    navigate(`/post/${post.slug}`);
  };

  // 处理返回列表
  const handleBackToList = () => {
    navigate('/');
  };

  return (
    <div className={`app ${theme}`}>
      <Header
        theme={theme}
        toggleTheme={toggleTheme}
        language={language}
        toggleLanguage={toggleLanguage}
        t={t}
      />

      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>我的博客 - {t('home.title')}</title>
                  <meta name="description" content={t('home.subtitle')} />
                </Helmet>
                <BlogList
                  posts={posts}
                  onSelectPost={handleSelectPost}
                  theme={theme}
                  t={t}
                />
              </>
            }
          />

          <Route
            path="/post/:slug"
            element={
              <BlogPostWrapper
                posts={posts}
                onBack={handleBackToList}
                theme={theme}
                t={t}
              />
            }
          />

          <Route
            path="/categories"
            element={
              <>
                <Helmet>
                  <title>{t('categories.title')} - 我的博客</title>
                  <meta name="description" content={t('categories.subtitle')} />
                </Helmet>
                <Categories
                  posts={posts}
                  onSelectPost={handleSelectPost}
                  theme={theme}
                  t={t}
                />
              </>
            }
          />

          <Route
            path="/tags"
            element={
              <>
                <Helmet>
                  <title>{t('tags.title')} - 我的博客</title>
                  <meta name="description" content={t('tags.subtitle')} />
                </Helmet>
                <Tags
                  posts={posts}
                  onSelectPost={handleSelectPost}
                  theme={theme}
                  t={t}
                />
              </>
            }
          />

          <Route
            path="/search"
            element={
              <>
                <Helmet>
                  <title>{t('nav.search')} - 我的博客</title>
                  <meta name="description" content={t('search.placeholder')} />
                </Helmet>
                <Search
                  posts={posts}
                  onSelectPost={handleSelectPost}
                  theme={theme}
                  t={t}
                />
              </>
            }
          />

          <Route
            path="/about"
            element={
              <>
                <Helmet>
                  <title>{t('about.title')} - 我的博客</title>
                  <meta name="description" content="关于作者的个人信息" />
                </Helmet>
                <About theme={theme} t={t} />
              </>
            }
          />

          <Route
            path="/links"
            element={
              <>
                <Helmet>
                  <title>{t('links.title')} - 我的博客</title>
                  <meta name="description" content={t('links.subtitle')} />
                </Helmet>
                <Links theme={theme} t={t} />
              </>
            }
          />
        </Routes>
      </main>

      <footer className="footer">
        <p>© 2025 我的博客. {t('footer.builtWith')}</p>
      </footer>
    </div>
  );
}

// 文章详情包装组件
function BlogPostWrapper({ posts, onBack, theme, t }) {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="not-found" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2>文章未找到</h2>
        <button onClick={onBack} style={{ marginTop: '2rem' }}>
          返回首页
        </button>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - 我的博客</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta property="og:type" content="article" />
      </Helmet>
      <BlogPost post={post} onBack={onBack} theme={theme} t={t} />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <Router>
        <AppContent />
      </Router>
    </HelmetProvider>
  );
}

export default App;
