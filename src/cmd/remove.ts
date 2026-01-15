import { confirm, select } from "@topcli/prompts";
import { store } from "../store";
import { formatCommand } from "../uitls";

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

  console.log(formatCommand(cmd));
  const remove = await confirm("Remove this command?", { initial: true });
  if (remove) {
    await store.removeCommand(_name);
    console.log("Command removed");
  }
};
