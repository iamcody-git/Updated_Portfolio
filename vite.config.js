
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: "/codyportfolio/",
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true // Enable source maps for debugging, remove if not needed
  },
})
