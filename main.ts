// One Line, Big Laugh — entry program.
// Writes the single funny line to /output/entry.txt for the pairwise judge.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My smart fridge just emailed me: it has seen what I eat at 2 a.m. and it is filing for divorce.";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 200;

function main(): void {
  // The draft must reach the judge verbatim: no surrounding whitespace
  // may sneak in through the source literal.
  if (LINE !== LINE.trim()) {
    throw new Error("entry line has leading or trailing whitespace");
  }
  const line = LINE.trim();
  if (line.length === 0) {
    throw new Error("entry line is empty");
  }
  if (line.length > MAX_CHARS) {
    throw new Error(
      `entry line is ${line.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry line must be a single line");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, line, "utf8");
  // Round-trip check: what the judge reads must be exactly the line above.
  const written = readFileSync(OUTPUT_PATH, "utf8");
  if (written !== line) {
    throw new Error("round-trip mismatch: /output/entry.txt differs from the entry line");
  }
  console.log(
    `wrote ${line.length} characters (${Buffer.byteLength(line, "utf8")} bytes) to ${OUTPUT_PATH}`,
  );
}

main();
