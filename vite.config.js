import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import spa from 'vite-plugin-spa-fallback';

export default defineConfig({
  plugins: [react(), spa()],
  base: '/gym-pool-website/', // <- твій підшлях на GitHub Pages
});
