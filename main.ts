import * as fs from "node:fs";
import * as path from "node:path";

// Candidates drafted and weighed against the judge's brief (surprise first,
// then economy, voice, second-read hold-up); the therapist line won because
// its punchline turns the setup inside out in the final clause, it is the
// tightest of the seven, and its irony deepens rather than fades on reread.
// The other six (Roomba custody, vending-machine refund, smart-fridge light,
// dating-profile skills, urgent printer, lonely smart speaker) each leaned
// on a single cute image; this one earns its laugh from the reversal itself.
const ENTRY =
  "I told my therapist I have no childhood trauma because I'm an AI, and she wrote that down as the trauma.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), ENTRY, "utf8");
