import { readFile, writeFile } from "node:fs/promises";
import { STORE_FILE_PATH } from "./consts";
import type { Command } from "./types";
import { fileExists } from "./uitls";

const createStoreFile = async () => {
  try {
    await writeFile(STORE_FILE_PATH, JSON.stringify([]), "utf8");
  } catch (err) {
    console.error(err);
  }
};

const readStoreFile = async () => {
  try {
    return await readFile(STORE_FILE_PATH, "utf8");
  } catch (err) {
    throw err;
  }
};

export const store = {
  init: async function () {
    if (await fileExists(STORE_FILE_PATH)) return;
    await createStoreFile();
  },
  getCommands: async function () {
    const storeContent = await readStoreFile();
    const parsedStore = JSON.parse(storeContent) as Command[];
    return parsedStore;
  },
  findCommand: async function (name: string) {
    const cmds = await this.getCommands();
    const result = cmds.find((v) => v.name === name);
    if (!result) {
      console.error(`Command "${name}" does not exist`);
      process.exit(1);
    }
    return result;
  },
  addCommand: async function (cmd: Command) {
    try {
      const cmds = await this.getCommands();
      const result = [cmd, ...cmds];
      await writeFile(STORE_FILE_PATH, JSON.stringify(result, null, 2), "utf8");
    } catch (err) {
      console.error(err);
    }
  },
  removeCommand: async function (name: string) {
    try {
      const cmds = await this.getCommands();
      const result = cmds.filter((v) => v.name !== name);
      await writeFile(STORE_FILE_PATH, JSON.stringify(result, null, 2));
    } catch (err) {
      console.error(err);
    }
  },
};
