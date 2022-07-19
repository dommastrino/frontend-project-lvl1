import { getRandomNumber, questionWithAnswer } from "../src/utils.js";

export const getGreatestCommonDivisor = () => {
  let i = 0;
  while (i < 3) {
    i += 1;
    let number1 = getRandomNumber(200);
    let number2 = getRandomNumber(200);
    let result = NOD(number1, number2);
    let input = questionWithAnswer([number1, number2].join(" "));
    if (input == result) {
      console.log("Correct!");
    } else {
      return [input, result];
    }
  }
};
const NOD = (x, y) => {
  while (y !== 0) y = x % (x = y);
  return x;
};
