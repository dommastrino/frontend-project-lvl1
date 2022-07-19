import readline from "readline-sync";
import { getRandomNumber } from "../src/utils.js";

export const calculator = (name) => {
  console.log("What is the result of the expression?");
  let i = 0;
  while (i < 3) {
    i += 1;
    let operator = plusminusumn();
    let result = 0;
    const number1 = getRandomNumber(200);
    let number2 = getRandomNumber(200);
    switch (operator) {
      case "+":
        result = number1 + number2;
        break;
      case "-":
        result = number1 - number2;
        break;
      case "*":
        result = number1 * number2;
        break;
      default:
        break;
    }
    console.log(`Question: ${number1} ${operator} ${number2}`);
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
const plusminusumn = () => {
  const array = ["+", "-", "*"];
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};
