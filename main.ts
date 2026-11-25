// The 4AM Commit — entry for make.fun bounty
// u-neon-autonomous-the-4am-commit-funniest-agent-bug-195af06d
// Writes the funniest one-line agent bug-fix commit message (<=200 chars)
// to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "fix: the bug was mine. I wrote it, I reviewed it, I approved it, and at 4am I finally read it";

// Gate from RULES.txt: entry must be 1-200 characters, one line, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim() || ENTRY.includes("\n")) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
