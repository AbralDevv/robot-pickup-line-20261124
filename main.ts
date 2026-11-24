import { mkdirSync, writeFileSync } from "node:fs";

// One-line robot pickup line, 43 characters: a robot offering to walk
// someone home, then undercutting the gallantry with its own warranty.
const line = "Walk you home? Rain only voids my warranty.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
