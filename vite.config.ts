import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      '@': '/src'
    }
  },
  server: {
    open: true,
    host: 'localhost',
    port: 9000,
    proxy:{
      '/api': {
        target: 'http://backend.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  },
})
