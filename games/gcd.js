import { getRandomNumber, getUserAnswer } from "../src/index.js";

export const getGreatestCommonDivisor = () => {
  let number1 = getRandomNumber(200);
  let number2 = getRandomNumber(200);
  let answer = NOD(number1, number2);
  let input = getUserAnswer([number1, number2].join(" "));
  return { answer, input };
};
const NOD = (x, y) => {
  while (y !== 0) y = x % (x = y);
  return x;
};
