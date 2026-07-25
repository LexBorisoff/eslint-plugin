import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { includeIgnoreFile, } from '@eslint/config-helpers';
export function useIgnoreFile(file, meta, options) {
    const __filename = fileURLToPath(meta.url);
    const __dirname = path.dirname(__filename);
    const gitignorePath = path.resolve(__dirname, file);
    return includeIgnoreFile(gitignorePath, options);
}
