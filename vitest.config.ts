import { defineConfig } from 'vitest/config';
import react from 'next/babel';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
