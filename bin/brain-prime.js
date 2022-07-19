import { getRandomNumber, questionWithAnswer } from "../src/utils.js";

export const findPrimeNumber = () => {
  let i = 0;
  while (i < 3) {
    i += 1;
    let number = getRandomNumber(200);
    let input = questionWithAnswer(number);
    let flag = true;
    for (let i = 2; i < number; i += 1) {
      if (number % i == 0) {
        flag = false;
        break;
      }
    }
    let answer = flag ? "yes" : "no";
    if (
      (flag && input.toUpperCase() === "YES") ||
      (!flag && input.toUpperCase() === "NO")
    ) {
      console.log("Correct!");
    } else {
      return [input, answer];
    }
  }
};
