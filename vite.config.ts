import { defineConfig as defineViteConfig } from 'vite';
import { defineConfig as defineVitestConfig, mergeConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

const viteConfig = defineViteConfig({
  plugins: [react()],
});

const vitestConfig = defineVitestConfig({
  test: {
    environment: 'node',
    include: ['tests/**/*.test.ts'],
  },
});

export default mergeConfig(viteConfig, vitestConfig);
