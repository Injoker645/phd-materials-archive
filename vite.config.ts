import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages project site; override with VITE_BASE=/ for Cursor/custom hosts
  base: process.env.VITE_BASE || '/phd-materials-archive/',
})
