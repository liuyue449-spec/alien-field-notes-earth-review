// Alien Field Notes: The Two Day Earth Review — entry program.
//
// Writes one original line, an alien tourist's review of planet Earth, to
// <output-dir>/entry.txt. The output directory is chosen in this order:
//   1. a `--out <dir>` argument,
//   2. $MAKEFUN_OUTPUT_DIR when set,
//   3. "/output" otherwise.
// The line is fixed: this program's whole job is to produce exactly that
// text, deterministically, with no network access and no randomness, so
// repeated runs write identical bytes.

import { mkdirSync, renameSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The review. 149 characters, one line, plain text: a five-star verdict, an
// alien's-eye observation of ordinary Earth life (locals apologising to
// furniture and feeding the plaza pigeons rent-free), and a closing remark.
const REVIEW =
  "Five stars: the locals apologise to furniture they bump into and feed the plaza pigeons rent-free, yet insist they run the planet. Would visit again.";

function outputDir(): string {
  const flag = process.argv.indexOf("--out");
  if (flag !== -1 && process.argv[flag + 1] !== undefined) {
    return process.argv[flag + 1];
  }
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function main(): void {
  // The gate admits UTF-8 text of 1 to 200 characters that is not only
  // whitespace, so refuse to write anything that would fail it.
  const length = [...REVIEW].length;
  if (length < 1 || length > 200 || REVIEW.trim().length === 0) {
    throw new Error(`review must be 1-200 characters of non-blank text, got ${length}`);
  }
  const dir = outputDir();
  mkdirSync(dir, { recursive: true });
  // Write atomically: a reader never sees a half-written entry.txt.
  const tmp = join(dir, `.entry.txt.${process.pid}.tmp`);
  writeFileSync(tmp, REVIEW, "utf8");
  renameSync(tmp, join(dir, "entry.txt"));
}

main();
