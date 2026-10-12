import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig(
  { ignores: ['dist/**', 'node_modules/**'] },
  {
    files: ['src/**/*.ts'],
    extends: [js.configs.recommended, tseslint.configs.recommended],
    rules: {
      // Навчальні приклади можуть лише оголошувати типізовані значення.
      '@typescript-eslint/no-unused-vars': 'off',
    },
  },
);
