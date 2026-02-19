import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/loveclick-brief/",
  build: {
    outDir: "docs",
  },
})
