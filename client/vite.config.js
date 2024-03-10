import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// Change proxy so that both frontend and backend runs on the same port 3000
export default defineConfig({
  server:{
    proxy:{
      '/api':{
        target: 'http://localhost:3000',
        secure: false,
      },
    },
  },
  plugins: [react()],
})
