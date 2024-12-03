import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { includeIgnoreFile, type FlatConfig } from '@eslint/compat';

export function useIgnoreFile(file: string, meta: ImportMeta): FlatConfig {
  const __filename = fileURLToPath(meta.url);
  const __dirname = path.dirname(__filename);
  const gitignorePath = path.resolve(__dirname, file);
  return includeIgnoreFile(gitignorePath);
}
