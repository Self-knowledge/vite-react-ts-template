import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';
import reactPlugin from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: [
      'dist',
      '.prettierrc.cjs',
      'commitlint.config.cjs',
      'eslint.config.js',
      'lint-staged.config.cjs',
      'vite.config.ts',
    ],
  },
  {
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended,
      reactPlugin.configs.flat.recommended,
      reactPlugin.configs.flat['jsx-runtime'],
      importPlugin.flatConfigs.recommended,
      importPlugin.flatConfigs.typescript,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: tseslint.parser,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
            'type',
          ],
          'newlines-between': 'always',
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
        node: true,
      },
      'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
      react: {
        version: 'detect',
      },
    },
  },
  eslintConfigPrettier,
);
