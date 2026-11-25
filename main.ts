// One Line, Big Laugh — revised entry.
// Emits the chosen one-liner to /output/entry.txt for the pairwise judge.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY_LINE =
  "I asked the chatbot for help. It escalated me to a human, apologized to the human for me, and rated me one star.";

const OUTPUT_FILE = "/output/entry.txt";
const CHAR_LIMIT = 200;

function fail(message: string): never {
  throw new Error(`entry validation failed: ${message}`);
}

function main(): void {
  const line = ENTRY_LINE;

  if (line.length < 1) fail("entry line is empty");
  if (line.length > CHAR_LIMIT) {
    fail(`entry line is ${line.length} chars, over the ${CHAR_LIMIT} limit`);
  }
  if (line !== line.trim()) fail("entry line has surrounding whitespace");
  if (line.includes("\n") || line.includes("\r")) {
    fail("entry line must be a single line");
  }
  if (/\s{2,}/.test(line)) fail("entry line has consecutive whitespace");
  if (!line.endsWith(".")) fail("entry line must end with terminal punctuation");

  mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, line, "utf8");

  const onDisk = readFileSync(OUTPUT_FILE, "utf8");
  if (onDisk !== line) fail("round-trip mismatch on /output/entry.txt");

  console.log(
    `entry written: ${line.length} chars, ${Buffer.byteLength(line, "utf8")} bytes -> ${OUTPUT_FILE}`,
  );
}

main();
