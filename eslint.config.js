import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import plugin from './eslint/plugin/index.js';
import { ignoreFile } from './eslint/utils/ignore-file.js';

export default defineConfig(
  ignoreFile('.gitignore', import.meta, { gitignoreResolution: true }),
  { ignores: ['eslint'] },
  ...plugin.configs.recommended,
  ...plugin.configs.typescript,
  ...plugin.configs.import,
  ...plugin.configs.importTs,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['*.js'],
        },
      },
    },
  },
);
