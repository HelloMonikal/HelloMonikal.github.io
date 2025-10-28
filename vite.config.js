import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 如果部署到 username.github.io，base 设置为 '/'
  // 如果部署到 username.github.io/repo-name，base 设置为 '/repo-name/'
  base: '/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'markdown': ['react-markdown', 'gray-matter', 'remark-gfm', 'rehype-sanitize', 'rehype-highlight'],
        }
      }
    }
  }
})
