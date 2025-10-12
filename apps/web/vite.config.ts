/// <reference types="vitest" />
import path from 'path';

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
  preview: {
    port: 4173,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: './coverage',
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      exclude: [
        '**/{.turbo,coverage,dist,node_modules}/**',
        'src/**/*.d.ts',
        'src/**/index.{js,jsx,ts,tsx}',
        'src/{main.tsx,setupTests.ts}',
        'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
        'src/**/*.mock.{js,ts}',
        '**/{vite,eslint}.config.{js,ts}',
      ],
    },
  },
});
