import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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