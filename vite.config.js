import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path"

// https://vitejs.dev/config/
export default defineConfig({
  base:'/2022f2eWeek3/',
  plugins: [vue()],
  resolve:{
    alias:{
      "@": resolve(__dirname, "src"),
      "@c": resolve(__dirname, "src/components"),
      '/images': 'src/assets/images',
    }
  }
})
