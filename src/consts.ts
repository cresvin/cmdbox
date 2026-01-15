import os from "node:os";
import path from "node:path";

export const STORE_FILE_PATH = path.join(os.homedir(), ".cmdbox");
export const SCRIPT_NAME = "cmdbox";
