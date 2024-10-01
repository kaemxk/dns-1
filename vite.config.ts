/// <reference types="vitest" />
import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

const PORT = 8000

const { NODE_ENV } = process.env
const isProduction = NODE_ENV === 'production'
const __API_URL__ = JSON.stringify(
  isProduction ? 'https://www.production-url.com' : 'http://localhost:4000/',
)
const isTest = NODE_ENV === 'test'

// https://vitejs.dev/config/
export default defineConfig({
  root: isTest ? '.' : './src',
  publicDir: isTest ? 'public' : '../public',
  server: { port: PORT },
  plugins: [react()],
  resolve: {
    alias: {
      '@/': path.resolve(__dirname, './src/'),
      '@/app': path.resolve(__dirname, './src/app'),
      '@/pages': path.resolve(__dirname, './src/pages'),
      '@/widgets': path.resolve(__dirname, './src/widgets'),
      '@/features': path.resolve(__dirname, './src/features'),
      '@/shared': path.resolve(__dirname, './src/shared'),
    },
  },
  define: {
    __API_URL__,
  },
  test: {
    environment: 'happy-dom',
    globals: true,
  },
})
