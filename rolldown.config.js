import { defineConfig } from "rolldown";

export default defineConfig({
  input: "src/cmdbox.ts",
  output: {
    cleanDir: true,
    intro: "#!/usr/bin/env node",
  },
  external: /^[^./]/,
});
