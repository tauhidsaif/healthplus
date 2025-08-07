// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    allowedHosts: ['787f761ab7be.ngrok-free.app'] // ✅ Allow all external hosts (use ONLY in dev)
    
  }
})
