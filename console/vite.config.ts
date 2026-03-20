import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const consoleSrc = path.resolve(import.meta.dirname, '../node_modules/@pikku/console/src')

export default defineConfig({
  plugins: [react()],
  base: '/console/',
  resolve: {
    alias: {
      '@': consoleSrc,
      crypto: path.resolve(consoleSrc, 'polyfills/crypto.ts'),
    },
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
})
