import tseslint from 'typescript-eslint';

import plugin from './eslint/plugin/index.js';
import { useIgnoreFile } from './eslint/utils/use-ignore-file.js';

export default tseslint.config(
  useIgnoreFile('.gitignore', import.meta),
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
