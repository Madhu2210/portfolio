import { defineConfig, splitVendorChunkPlugin } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

export default defineConfig({
  plugins: [react(), splitVendorChunkPlugin(),
  ],
  include: ['esm-dep > cjs-dep', 'my-lib/components/**/*.vue'],
  build: {
    chunkSizeWarningLimit: 1600,
    reportCompressedSize: true,
    minify: true,
    cssMinify: true

  },
  server: {
    host: '127.0.0.1',
    port: 5000
  }
})
