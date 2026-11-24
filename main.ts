// Cat Reviews Its Human — one-line entry written to entry.txt
// Output dir comes from MAKEFUN_OUTPUT, defaulting to /output for the grader.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "1 star: My heated bed arrived in a magnificent cardboard villa, which housekeeping demolished while I was in it to make room for the complimentary cushion.";

const outputDir = process.env.MAKEFUN_OUTPUT || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), entry + "\n");
