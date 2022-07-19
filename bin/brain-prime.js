import readline from "readline-sync";
import { getRandomNumber } from "../src/index.js";

export const findPrimeNumber = (name) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  let i = 0;
  while (i < 3) {
    i += 1;
    let number = getRandomNumber();
    console.log(`Question: ${number}`);
    let input = readline.question("Your answer: ");
    if (number % 1 === 0 && number % number === 0) {
      if (input.toUpperCase() === "YES") {
        console.log("Correct!");
      } else {
        console.log(
          `${input} is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${name}!`
        );
        return;
      }
    }
    if (number % 1 != 0 && number % number != 0) {
      if (input.toUpperCase() === "NO") {
        console.log("Correct!");
      } else {
        console.log(
          `${input} is wrong answer ;(. Correct answer was 'no'. Let's try again, ${name}!`
        );
        return;
      }
    }
  }
  console.log(`Congratulations, ${name}!`);
};
