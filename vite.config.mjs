import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: './src/main.jsx'
      },
      output: {
        entryFileNames: 'react-components.js',
        chunkFileNames: 'react-components-[hash].js',
        assetFileNames: 'react-components.[ext]'
      }
    }
  }
})