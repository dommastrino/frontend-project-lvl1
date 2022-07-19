import readline from "readline-sync";
import { getRandomNumber } from "../src/utils.js";

export const getGreatestCommonDivisor = (name) => {
  console.log("Find the greatest common divisor of given numbers.");
  let i = 0;
  while (i < 3) {
    i += 1;
    let number1 = getRandomNumber(200);
    let number2 = getRandomNumber(200);
    console.log(`Question: ${number1} ${number2}`);
    let result = NOD(number1, number2);
    let input = readline.question("Your answer: ");
    if (input == result) {
      console.log("Correct!");
    } else {
      console.log(
        `${input} is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`
      );
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
const NOD = (x, y) => {
  while (y !== 0) y = x % (x = y);
  return x;
};
