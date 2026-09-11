import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'spa-github-pages-fallback',
      closeBundle() {
        const indexHtml = resolve(__dirname, 'dist/index.html')
        copyFileSync(indexHtml, resolve(__dirname, 'dist/404.html'))
      },
    },
  ],
})
