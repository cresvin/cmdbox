import { confirm } from "@topcli/prompts";
import { writeFile } from "node:fs/promises";
import { STORE_FILE_PATH } from "../consts";

export const handler = async () => {
  try {
    const purge = await confirm("Purge command store?", { initial: false });
    if (!purge) return;
    await writeFile(STORE_FILE_PATH, "[]", "utf8");
    console.log("Command store cleared");
  } catch (err) {
    console.error(err);
  }
};
