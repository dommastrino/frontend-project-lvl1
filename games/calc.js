import { getRandomNumber, getUserAnswer } from "../src/index.js";

export const calculator = () => {
  let operator = plusminusumn();
  const number1 = getRandomNumber(200);
  let number2 = getRandomNumber(200);
  let answer = getResult(number1, operator, number2).toString();
  let input = getUserAnswer([number1, operator, number2].join(" "));
  return { answer, input };
};
const plusminusumn = () => {
  const array = ["+", "-", "*"];
  var rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

const getResult = (number1, operator, number2) => {
  switch (operator) {
    case "+":
      return number1 + number2;
    case "-":
      return number1 - number2;
    case "*":
      return number1 * number2;
    default:
      return;
  }
};
