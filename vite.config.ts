import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'
import viteSvgIcons from 'vite-plugin-svg-icons'

const resolve = (dir: string): string => path.resolve(__dirname, dir)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), 'src/icons')],
      symbolId: 'icon-[dir]-[name]',
    }),
    viteCompression({
      verbose: true,
      disable: false,
      // threshold: 10240, // 设置体积大于多少才会被压缩，默认全部压缩
      algorithm: 'gzip',
      ext: '.gz',
    }),
    styleImport({
      // vant 按需加载样式
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style/less`,
        },
      ],
    }),
  ],
  base: './',
  resolve: {
    alias: [
      { find: /^~/, replacement: '' }, // 处理vant中less 导入'~'报错情况。
      { find: '@', replacement: resolve('src') },
    ],
  },
  css: {
    preprocessorOptions: {
      less: {
        // 开启less变量以及引入自定义theme文件覆盖vant默认样式。
        javascriptEnabled: true,
        modifyVars: {
          hack: `true; @import "${resolve('src/style/theme.less')}";`,
        },
      },
      scss: {
        // 全局scss自动引入mixin和var
        additionalData: `
          @import "${resolve('src/style/mixin.scss')}";
          @import "${resolve('src/style/var.scss')}";
        `,
      },
    },
  },
  clearScreen: false, // vite是否清屏
  // esbuild: {}, // 视情况是否需要jsx https://cn.vitejs.dev/config/#esbuild
  server: {
    // host: '127.0.0.1',
    port: 4000,
    open: true, // 启动服务后是否自动打开浏览器并打开应用程序
    // cors: true, // 为开发服务器配置CORS
    proxy: {
      // 代理 https://cn.vitejs.dev/config/#server-proxy
      '/proxy': {
        target: 'https://test',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/proxy/, ''),
        headers: {
          origin: 'https://origin.com',
        },
      },
    },
  },
  build: {
    target: 'es2015',
    terserOptions: {
      compress: {
        drop_console: process.env.NODE_ENV === 'production' ? true : false,
        drop_debugger: process.env.NODE_ENV === 'production' ? true : false,
      },
    },
  },
})
