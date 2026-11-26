// Writes one absurd terms-of-service clause to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const clause =
  "By using this service, you irrevocably assign to us one (1) kidney, to be selected at our sole discretion and collected without notice during scheduled maintenance.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", clause, "utf8");
