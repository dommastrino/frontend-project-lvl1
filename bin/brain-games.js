#!/usr/bin/env node
/* eslint no-console: "error" */

import { parityCheck } from "../bin/brain-even.js";
import { calculator } from "../bin/brain-calc.js";

export const startGames = (name) => {
  //parityCheck(name);
  calculator(name);
};
