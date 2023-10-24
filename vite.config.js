import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '/src'),
      '@components': path.resolve(__dirname, '/src/components'),
      '@style': path.resolve(__dirname, '/src/style'),
      '@view': path.resolve(__dirname, '/src/view'),
      '@router': path.resolve(__dirname, '/src/router')
    }
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    host: true,
    // 代理端口
    port: 3001,
    // 自动打开浏览器
    // open: true,
    proxy: {
      "/api": {
        // 目标地址
        target: "http://127.0.0.1:3000",
        // 允许跨域
        changeOrigin: true,
        // 开启websockets代理
        ws: true,
        // 验证ssl证书
        secure: false,
        // pathRewrite: {
        //   '^/api': '/', // rewrite path
        // },
        // 重写path路径
        rewrite: (path) => path.replace(/^\/api/, "")
      }
    }
  }
})
