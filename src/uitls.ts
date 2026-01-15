import { access } from "node:fs/promises";
import type { Command } from "./types";

export const fileExists = async (filePath: string) => {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
};

export const formatCommand = (cmd: Command) =>
  `Name\t\t${cmd.name}
Description\t${cmd.description ? cmd.description : "empty"}
Command\t\t${cmd.command}`;
