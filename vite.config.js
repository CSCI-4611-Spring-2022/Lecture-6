import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    open: true,
    port: 8080
  },
  preview: {
    open: true
  }
})