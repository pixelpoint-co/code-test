import { unstable_vitePlugin as remix } from '@remix-run/dev'
import morgan from 'morgan'
import path from 'path'
import { remixDevTools } from 'remix-development-tools/vite'
import { defineConfig, type ViteDevServer } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'
import remixConfig from './remix.config'

export default defineConfig({
  plugins: [
    morganPlugin(),
    svgr({
      svgrOptions: {
        dimensions: false,
        svgoConfig: {
          js2svg: {
            indent: 2, // string with spaces or number of spaces. 4 by default
            pretty: true, // boolean, false by default
          },
          plugins: ['prefixIds'],
        },
      },
    }),
    remix(remixConfig),
    remixDevTools(),
    tsconfigPaths(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './@'),
      '~': path.resolve(__dirname, './app'),
    },
  },
})

function morganPlugin() {
  return {
    name: 'morgan-plugin',
    configureServer(server: ViteDevServer) {
      return () => {
        server.middlewares.use(morgan('tiny'))
      }
    },
  }
}
