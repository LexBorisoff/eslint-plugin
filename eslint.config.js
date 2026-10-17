import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';

import configs from './eslint/configs/index.js';
import { ignoreFile } from './eslint/utils/ignore-file.js';

export default defineConfig(
  ignoreFile('.gitignore', import.meta, { gitignoreResolution: true }),
  { ignores: ['eslint'] },
  ...configs.recommended,
  ...configs.typescript,
  ...configs.import,
  ...configs.importTs,
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
