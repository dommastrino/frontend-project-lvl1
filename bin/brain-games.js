#!/usr/bin/env node
/* eslint no-console: "error" */

import readline from "readline-sync";
import { parityCheck } from "../bin/brain-even.js";
import { calculator } from "../bin/brain-calc.js";
import { getGreatestCommonDivisor } from "../bin/brain-gcd.js";
import { progression } from "../bin/brain-progression.js";
import { findPrimeNumber } from "../bin/brain-prime.js";

export const startGames = (name) => {
  let games = [
    "Parity Check",
    "Calculator",
    "NOD",
    "Arithmetic progression",
    "Prime number",
  ];
  let input = readline.keyInSelect(games, "What game?");
  let wrongAnswer = "";
  let i = 0;
  switch (input) {
    case 0:
      console.log('Answer "yes" if the number is even, otherwise answer "no".');
      wrongAnswer = parityCheck();
      break;
    case 1:
      console.log("What is the result of the expression?");
      wrongAnswer = calculator();
      break;
    case 2:
      console.log("Find the greatest common divisor of given numbers.");
      wrongAnswer = getGreatestCommonDivisor();
      break;
    case 3:
      console.log("What number is missing in the progression?");
      wrongAnswer = progression();
      break;
    case 4:
      console.log(
        'Answer "yes" if given number is prime. Otherwise answer "no".'
      );
      wrongAnswer = findPrimeNumber();
      break;
    default:
      break;
  }
  if (wrongAnswer.length > 0) {
    console.log(
      `${wrongAnswer[0]} is wrong answer ;(. Correct answer was '${wrongAnswer[1]}'. Let's try again, ${name}!`
    );
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};
