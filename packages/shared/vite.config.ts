/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      outDir: 'dist/types',
      entryRoot: 'src',
    }),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        index: 'src/index.ts',
        components: 'src/components/index.ts',
      },
      name: 'shared',
      formats: ['es'],
      fileName: (_, entryName) => `${entryName}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    include: ['src/**/*.{test,spec}.{js,ts,jsx,tsx}'],
    coverage: {
      all: true,
      provider: 'v8',
      reporter: ['text', 'lcov', 'html'],
      reportsDirectory: 'coverage',
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
        'src/**/*.{test,spec}.{js,jsx,ts,tsx}',
        'src/**/*.mock.{js,ts}',
        '**/{vite,eslint}.config.{js,ts}',
        'src/setupTests.ts',
      ],
    },
  },
});
