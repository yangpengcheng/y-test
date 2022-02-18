import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const {resolve} = require('path')
import PurgeCSS from 'purgecss'
// const purgecss = new PurgeCSS().purge('./purgecss.config.js')
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }]
  },
  hmr: { overlay: false },
  plugins: [vue(),PurgeCSS],
  server:{
    proxy:{
      '/api': 'http://localhost:5000/',
    }
  }
})
