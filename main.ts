// The Robot Pickup Line Championship
// Revision build — writes Neon's FINAL line verbatim to entry.txt in the
// grader's output dir ($MAKEFUN_OUTPUT_DIR, else /output, else ./output).
// entry.txt holds exactly the line, no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm a 600-pound robot arm who spent all week calibrating my grip from 'bend steel' to 'hold latte.' I pulverized four mugs, but the fifth survived, so if you like those odds, may I hold your hand?";

const outDir =
  process.env.MAKEFUN_OUTPUT_DIR || "/output" || "./output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
