import { getUserAnswer, getRandomNumber } from "../src/index.js";

export const startGame = () => {
  let number = getRandomNumber(200);
  let answer = isEven(number) ? "yes" : "no";
  let input = getUserAnswer(number);
  return { answer, input };
};

const isEven = (number) => number % 2 === 0;
