import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { version } from "../package.json";
import {
  addHandler,
  listHandler,
  purgeHandler,
  removeHandler,
  runHandler,
} from "./cmd";
import { SCRIPT_NAME } from "./consts";
import { store } from "./store";

await store.init();

yargs(hideBin(process.argv))
  .scriptName(SCRIPT_NAME)
  .strictCommands()
  .demandCommand(1)
  .recommendCommands()
  .command("add", "Add a new command to the store", {}, addHandler)
  .command("list", "List all stored commands", {}, listHandler)
  .command("purge", "Remove all stored commands", {}, purgeHandler)
  .command(
    "run [name]",
    "Run a stored command",
    (yargs) => {
      return yargs.positional("name", {
        describe: "The name of the stored command",
        type: "string",
      });
    },
    (argv) => runHandler(argv.name)
  )
  .command(
    "remove [name]",
    "Remove a stored command",
    (yargs) => {
      return yargs.positional("name", {
        describe: "The name of the stored command",
        type: "string",
      });
    },
    (argv) => removeHandler(argv.name)
  )
  .help()
  .alias("h", "help")
  .version(version)
  .alias("v", "version")
  .parse();
