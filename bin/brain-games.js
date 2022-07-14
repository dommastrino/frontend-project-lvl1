#!/usr/bin/env node
/* eslint no-console: "error" */
import { askName } from "../src/cli.js";
import { parityCheck } from "../bin/brain-even.js";

console.log("Welcome to the Brain Games!");
let name = askName();
parityCheck(name);
