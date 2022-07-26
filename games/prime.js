import { getRandomNumber, getUserAnswer } from "../src/index.js";

export const findPrimeNumber = () => {
  let number = getRandomNumber(200);
  let input = getUserAnswer(number);
  let flag = isPrimeNumber(number);
  let answer = flag ? "yes" : "no";
  return { input, answer };
};
const isPrimeNumber = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};
