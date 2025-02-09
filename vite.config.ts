import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["07b8-2402-800-620e-64aa-5949-e0c5-3847-6159.ngrok-free.app"]
  }
})
