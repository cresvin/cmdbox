import { question, required } from "@topcli/prompts";
import { store } from "../store";

export const handler = async () => {
  const cmds = await store.getCommands();

  let name: string;
  while (true) {
    name = await question("Name?", {
      validators: [required()],
    });

    if (cmds.some((cmd) => cmd.name === name.trim())) {
      console.log(`Command "${name.trim()}" already exists`);
    } else break;
  }

  const description = await question("Description?");

  const command = await question("Command?", {
    validators: [required()],
  });

  await store.addCommand({
    name: name.trim(),
    description: description.trim(),
    command: command.trim(),
  });

  console.log("Command has been added");
};
