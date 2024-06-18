/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config https://vitest.dev/config
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: '.vitest/setup',
    include: ['**/test.{ts,tsx}']
  },
  server: {
    port: 3000,
    proxy: {
      '/images': {
        target: 'https://res.cloudinary.com/duqsmyp5w/image/upload/v1712304689',
        changeOrigin: true
        // secure: false
        // rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/musics': {
        target: 'https://res.cloudinary.com/duqsmyp5w/video/upload/v1712305099',
        changeOrigin: true
        // secure: false
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
