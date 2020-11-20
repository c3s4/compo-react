#!/usr/bin/env node
import * as yargs from "yargs";
// import { utilities } from "./commons";

import * as pkg from "../package.json";

console.log(`v${pkg.version} `);

yargs
  .scriptName("compo-react")
  // .commandDir("commands")
  .completion()
  .demandCommand()
  .help().argv;

// if (process.argv.length == 2) {
//   utilities.ConsoleWarn("Type brain-cli --help for show help");
// }
