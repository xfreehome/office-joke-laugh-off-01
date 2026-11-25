// Entry for the make.fun "One-Line Office Joke Laugh-Off" bounty.
// Writes one single-line office joke (1-200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "I finally finished the spreadsheet that tracks all my spreadsheets, and my boss asked me to add it to the spreadsheet.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
