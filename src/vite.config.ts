import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/components': resolve(import.meta.dirname, 'components'),
      '@/modules': resolve(import.meta.dirname, 'modules'),
      '@/services': resolve(import.meta.dirname, 'services'),
      '@/utils': resolve(import.meta.dirname, 'utils'),
      '@/styles': resolve(import.meta.dirname, 'styles'),
      '@/hooks': resolve(import.meta.dirname, 'hooks'),
      '@/contexts': resolve(import.meta.dirname, 'contexts'),
      '@/configs': resolve(import.meta.dirname, 'configs'),
      '@/containers': resolve(import.meta.dirname, 'containers'),
      '@/routes': resolve(import.meta.dirname, 'routes'),
    },
  },
  build: {
    sourcemap: true,
  },
});