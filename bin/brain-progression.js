import readline from "readline-sync";
import { getRandomNumber } from "../src/index.js";

export const progression = (name) => {
  console.log("What number is missing in the progression?");
  let i = 0;
  while (i < 3) {
    i += 1;
    let lengthArray = getRandomArbitrary(5, 10);
    let counter = getRandomNumber(5);
    let start = getRandomNumber(20);
    let array = [];

    array.push(start);
    for (let i = 1; i <= lengthArray; i += 1) {
      array.push(array[i - 1] + counter);
    }
    let delIndex = getRandomNumber(lengthArray);
    let result = array[delIndex];
    array[delIndex] = "..";

    console.log(`Question: ${array.toString()}`);
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
