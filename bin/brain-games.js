#!/usr/bin/env node
/* eslint no-console: "error" */
import askName from "../src/cli.js";
import { startGames } from "../src/index.js";

console.log("Welcome to the Brain Games!");
let name = askName();
startGames(name);
