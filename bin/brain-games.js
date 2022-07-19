#!/usr/bin/env node
/* eslint no-console: "error" */

import { parityCheck } from "../bin/brain-even.js";
import { calculator } from "../bin/brain-calc.js";
import { getGreatestCommonDivisor } from "../bin/brain-gcd.js";
import { progression } from "../bin/brain-progression.js";
import { findPrimeNumber } from "../bin/brain-prime.js";

export const startGames = (name) => {
  //parityCheck(name);
  //calculator(name);
  //getGreatestCommonDivisor(name);
  progression(name);
  //findPrimeNumber(name);
};
