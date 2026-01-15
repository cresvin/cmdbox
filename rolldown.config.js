import { defineConfig } from "rolldown";

const isDev = process.env.DEV === "true";

export default defineConfig({
  input: "src/cmdbox.ts",
  output: {
    cleanDir: true,
    minify: !isDev,
    intro: "#!/usr/bin/env node",
  },
});
