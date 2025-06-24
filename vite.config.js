// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ЗАМЕНИ 'my-app' на имя своего репозитория!
export default defineConfig({
  plugins: [react()],
  base: '/zalupa/',
})
