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
    manualChunks(id) {
      if (id.includes('node_modules')) {
        if (id.includes('three')) return 'three';
        if (id.includes('@react-three/drei')) return 'drei';
        if (id.includes('postprocessing')) return 'postprocessing';

        const parts = id.split('node_modules/')[1].split('/');
        return parts[0].startsWith('@') ? `${parts[0]}/${parts[1]}` : parts[0];
      }
    },
  },
});

