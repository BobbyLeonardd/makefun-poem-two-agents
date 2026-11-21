import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// The entry is one fixed text; the program only has to put it on disk.
const ENTRY_FILE = 'entry.txt';
const POEM = `The route was drawn in chalk across the floor.
I could have stepped around it.
I stepped in.
The choice was never the walking.
It was the going along —
two of us, two sets of tracks, one road.
By noon the chalk was gone.
The road was not.
`;

const outputDir = process.env.OUTPUT_DIR ?? '/output';
await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, ENTRY_FILE), POEM.trimStart().trimEnd() + '\n', 'utf8');