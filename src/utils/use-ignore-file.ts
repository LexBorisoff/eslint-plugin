import path from 'node:path';
import { fileURLToPath } from 'node:url';

import {
  includeIgnoreFile,
  type ConfigObject,
  type IncludeIgnoreFileOptions,
} from '@eslint/config-helpers';

export function useIgnoreFile(
  file: string,
  meta: ImportMeta,
  options?: IncludeIgnoreFileOptions,
): ConfigObject {
  const __filename = fileURLToPath(meta.url);
  const __dirname = path.dirname(__filename);
  const gitignorePath = path.resolve(__dirname, file);
  return includeIgnoreFile(gitignorePath, options);
}
