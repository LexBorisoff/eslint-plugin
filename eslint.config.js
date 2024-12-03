import tseslint from 'typescript-eslint';

import plugin from './eslint/plugin/index.js';
import { ignoreFile } from './eslint/utils/ignore-file.js';

export default tseslint.config(
  ignoreFile('.gitignore', import.meta),
  { ignores: ['eslint'] },
  plugin.configs.recommended,
  plugin.configs.typescript,
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
