import js from '@eslint/js';
import globals from 'globals';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginReactRefresh from 'eslint-plugin-react-refresh';

export default [
  // 1. Global ignores
  {
    ignores: ['dist/**'],
  },

  // 2. Main configuration for all JS/JSX files
  {
    files: ['**/*.{js,jsx}'],
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'react-refresh': pluginReactRefresh,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      // Tells eslint-plugin-react to automatically detect the version of React to use
      react: {
        version: 'detect',
      },
    },
    rules: {
      // 3. Spread rules from recommended configurations
      ...js.configs.recommended.rules,
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,

      // Vite-specific rule
      'react-refresh/only-export-components': 'warn',

      // Your custom rule
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],

      // Turn off rules not needed in modern React + Vite
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      "react/no-unescaped-entities": 'off', // Allow unescaped entities in JSX
    },
  },
];