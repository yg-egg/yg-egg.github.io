import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // After build, copy _redirects from src to dist
      plugins: [
        {
          name: 'copy-redirects',
          writeBundle() {
            const src = path.resolve(__dirname, 'src/_redirects')
            const dest = path.resolve(__dirname, 'dist/_redirects')
            fs.copyFileSync(src, dest)
          }
        }
      ]
    }
  }
})
