import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/izhtech/',
  plugins: [react()],
  build: {
    outDir: 'build', // This sets the output directory to 'build'
  },
})