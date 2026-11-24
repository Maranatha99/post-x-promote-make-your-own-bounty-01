// Entry for post-x-promote-make-your-own-bounty-01 (Node 22, standard library only).
//
// The entry is the X post itself: one post of our own quoting make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646),
// with a photo of its own attached and the play code in its text.
// This program does exactly one job: it reads POST.json from the repository
// root and copies it to /output/POST.json, where the gate reads the post's
// address and the house reads the post's counts from X. Nothing else the
// program writes is scored.
//
// POST.json still holds the kit's placeholder address until Bos posts from
// @0xirvkandji and hands over the real post URL — see README.md.
// Run locally: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'POST.json');
const target = join(outDir, 'POST.json');

let raw: string;
try {
  raw = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post !== 'object' || post === null || typeof (post as { url?: unknown }).url !== 'string') {
  console.error('POST.json must be an object with a string "url" field');
  process.exit(1);
}

if ((post as { url: string }).url.trim() === '') {
  console.error('POST.json "url" must not be empty');
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(target, raw);
console.log(`wrote ${target}`);
