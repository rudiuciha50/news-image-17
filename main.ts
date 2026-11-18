// News image entry for make.fun news-image-20261117
// Copies the pre-built news summary image to the output directory.
import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const OUT = process.env.MAKEFUN_OUTPUT_DIR || '/output';
mkdirSync(OUT, { recursive: true });
copyFileSync(join(HERE, 'entry.png'), join(OUT, 'entry.png'));
