import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Allow relocating the dep-optimization cache (default: node_modules/.vite)
  // via VITE_CACHE_DIR — handy for local dev when node_modules is read-only.
  cacheDir: process.env.VITE_CACHE_DIR || undefined,
  server: {
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
})
