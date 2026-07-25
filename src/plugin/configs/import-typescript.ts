import { defineConfig } from 'eslint/config';
import importPlugin from 'eslint-plugin-import';

export default defineConfig(importPlugin.flatConfigs.typescript, {
  name: '@lexjs/eslint-plugin/import-typescript',
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
});
