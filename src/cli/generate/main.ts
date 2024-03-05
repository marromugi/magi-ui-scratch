import path from "path";

import kleur from "kleur";
import yargs from "yargs";

import { generateCss, generateTypes } from "@/system";

const args = yargs
  .command(
    "generate",
    "generate types and styles from defined tokens",
  )
  .options({
    "out-style": {
      type: "string",
      describe: "Set outDir for style",
      demandOption: true,
      default: "./",
    },
  })
  .options({
    "out-type": {
      type: "string",
      describe: "Set outDir dir for type",
      demandOption: true,
      default: "./",
    },
  })
  .options({
    file: {
      type: "string",
      describe: "Set config file path",
      demandOption: true,
      alias: "f",
      default: "./magi.config.ts",
    },
  })
  .alias({
    h: "help",
    f: "file",
  })
  .parseSync();

const main = async () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const { default: tokens } = require(
    path.resolve(__dirname, args.file),
  );

  if (!tokens) {
    throw new Error(
      `${kleur.red("Failed to retrieve tokens from the config file. Please verify the config file path!")}`,
    );
  }

  await generateTypes(
    tokens,
    path.resolve(__dirname, args["out-type"]),
  );
  await generateCss(
    tokens,
    path.resolve(__dirname, args["out-style"]),
  );

  console.log(
    kleur.green("✨ Token files has generated successfully!"),
  );
};

main();
