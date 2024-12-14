import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html'
      }
    }
  },
  assetsInclude: ['**/*.gif', '**/*.wav'],
  publicDir: 'public'
});