import readline from "readline-sync";
import { getRandomNumber, questionWithAnswer } from "../src/utils.js";

export const calculator = () => {
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
    let input = questionWithAnswer([number1, operator, number2].join(" "));
    if (input == result) {
      console.log("Correct!");
    } else {
      return [input, result];
    }
  }
};
const plusminusumn = () => {
  const array = ["+", "-", "*"];
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};
