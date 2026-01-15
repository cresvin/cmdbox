import { confirm, select } from "@topcli/prompts";
import { execSync } from "node:child_process";
import { store } from "../store";

export const handler = async (name: string | undefined) => {
  const cmds = (await store.getCommands()).map((v) => v.name);
  if (cmds.length <= 0) {
    console.error("No commands stored yet");
    process.exit(1);
  }

  let _name: string;
  if (!name) _name = await select("Choose a command", { choices: cmds });
  else _name = name;

  const cmd = await store.findCommand(_name);

  console.log(`$ ${cmd.command}`);
  const run = await confirm("Execute this command?", { initial: true });
  if (run) execSync(cmd.command, { stdio: "inherit" });
};
