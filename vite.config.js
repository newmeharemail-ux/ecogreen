import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { copyFileSync } from 'fs'

function copy404() {
  return {
    name: 'copy-404',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    }
  }
}

export default defineConfig({
  plugins: [react(), copy404()],
  base: '/ecogreen/',
})
