import { getRandomNumber, questionWithAnswer } from "../src/utils.js";

export const parityCheck = () => {
  let i = 0;
  while (i < 3) {
    i += 1;
    let number = getRandomNumber(200);
    let input = questionWithAnswer(number);
    let answer = number % 2 == 0 ? "yes" : "no";
    if (
      (number % 2 == 0 && input.toUpperCase() === "YES") ||
      (number % 2 != 0 && input.toUpperCase() === "NO")
    ) {
      console.log("Correct!");
    } else {
      return [input, answer];
    }
  }
};
