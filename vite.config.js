import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';



export default defineConfig({
  plugins: [react(), tailwindcss(), viteCompression()],
  build: {
    target: 'esnext',
    minify: 'esbuild',
    chunkSizeWarningLimit: 1500,
    modulePreload: { polyfill: false },
    manualChunks(id) {
      if (id.includes('node_modules')) {
        if (
          id.includes('three') ||
          id.includes('@react-three/fiber') ||
          id.includes('@react-three/drei')
        ) return 'three-bundle';

        if (
          id.includes('postprocessing') ||
          id.includes('@react-three/postprocessing')
        ) return 'postprocessing-bundle';

        if (id.includes('gsap')) return 'gsap-bundle';

        return 'vendor';
      }
    },
  },
});


