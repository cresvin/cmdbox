import { store } from "../store";
import { formatCommand } from "../uitls";

export const handler = async () => {
  for (const cmd of await store.getCommands()) {
    console.log(`\n${formatCommand(cmd)}\n`);
  }
};
