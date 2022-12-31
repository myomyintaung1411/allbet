import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { VitePWA } from "vite-plugin-pwa";
//  import mkcert from'vite-plugin-mkcert'
 console.log(process.env.NODE_ENV,"lll")
export default defineConfig({
  productionSourceMap: false,
  drop_console: true,
  drop_debugger: true,
  plugins: [vue(),
      // mkcert(),
    VitePWA({
      mode: process.env.NODE_ENV == 'development' ? "development" : "production",
      strategies: 'injectManifest',
      srcDir: 'src',
      filename: 'sw.js',
      includeAssets:['favicon.ico','icons/apple-touch-icon.png','icons/icon-96x96.png'],
       scope: '/',
			 base: '/',
      immediate:true,
      manifest: {
        name: "博冠",
        description: "亚洲最好的在线赌场游戏",
        categories: ["casino", "online gambling", "baccarat"],
        theme_color: "#272c33",
        background_color: "#14171e",
        display: "standalone",
        display_override:["fullscreen,minimal-ui"],
        orientation:'portrait',
        // scope: "/",
         start_url: "/",
        id:'/',
        protocol_handlers: [
          {
            "protocol": "web+jngl",
            "url": '%s'
          },
          {
            "protocol": "web+jnglstore",
            "url": '%s'
          }
        ],
        icons: [
          {
            "src": "icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png",
           
          },
          {
            "src": "icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png",
           
          },
          {
            "src": "icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png",
           
          },
          {
            "src": "icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png",
           
          },
          {
            "src": "icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png",
           
          },
          {
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
           
          },
          {
            "src": "icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": 'maskable',
          },
          {
            "src": "icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
           
          },
          {
            "src": "icons/maskable_icon.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": 'maskable',
          }
        ],
        // shortcuts: [
        //   {
        //     name: "Home Page",
        //     short_name: "Home",
        //     description: "This is the home page of application",
        //     url: "/home",
        //     icons: [{ src: "icons/icon-192x192.png", sizes: "192x192" }],
        //   },
        //   {
        //     name: "Vip Page",
        //     short_name: "Vip",
        //     description: "This is the vip page of application",
        //     url: "/vip",
        //     icons: [{ src: "icons/icon-192x192.png", sizes: "192x192" }],
        //   }
        // ]
      },
      registerType: "autoUpdate",
      injectRegister: 'auto',
      
      devOptions: {
        enabled: true,
        type: 'module',
        navigateFallback: '/',

      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json,vue,txt,woff2,webmanifest}'],
        navigateFallback: null,

        sourcemap: true,
        cleanupOutdatedCaches:true
        
      },
    }),
  
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    open: false,
    https: false,
    hot: true,
    port:9000,
    proxy: {
      '/api': {
        //target: 'http://134.122.173.56:3195/',
       target: 'http://103.253.13.69:9630/',
      //target: 'http://192.168.1.10:9630/',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      },
      '/pay': {
        //target: 'http://134.122.173.56:3195/',
       target: 'http://103.253.13.69:9631/',
      //target: 'http://192.168.1.10:9631/',
        ws: true,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/pay/, '')
      }
    }
  },
  build: {
    minify: 'terser',
    terserOptions: {
        compress: {
            drop_console: true,
            drop_debugger: true,
        },
    },
    // rollupOptions: {
    //   output: {
    //     entryFileNames: "[name].js",
    //     assetFileNames: '[name][extname]'
    //   },
    // },


   chunkSizeWarningLimit: 1600,
},
})
