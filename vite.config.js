import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
    base: "/portfolio-website/", // ← change to your repo name
  plugins: [react()],
})