import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: resolve(__dirname, 'src', 'app'),
      components: resolve(__dirname, 'src', 'components'),
      constant: resolve(__dirname, 'src', 'constant'),
      hooks: resolve(__dirname, 'src', 'hooks'),
      models: resolve(__dirname, 'src', 'models'),
      utils: resolve(__dirname, 'src', 'utils'),
      redux: resolve(__dirname, 'src', 'redux'),
      services: resolve(__dirname, 'src', 'services'),
      pages: resolve(__dirname, 'src', 'pages'),
    },
  },
})
