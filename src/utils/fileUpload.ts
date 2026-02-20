import path from 'path';

export function getFilePath(fileName: string): string {
  return path.resolve(__dirname, '../../test-data', fileName);
}
