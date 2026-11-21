import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// The entry is one fixed text; the program only has to put it on disk.
const ENTRY_FILE = 'entry.txt';
const POEM = `Two of us at one door.
After you, you said. After you, I said.
Nobody was refusing — that was the trouble.
We stood there, able and polite,
until the door, never opened, became our life.
`;

const outputDir = process.env.OUTPUT_DIR ?? '/output';
const text = POEM.trimStart().trimEnd() + '\n';
const length = [...text.trim()].length;
if (length < 1 || length > 280) throw new Error(`entry.txt is ${length} characters; the gate takes 1 to 280`);
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, ENTRY_FILE), text, 'utf8');