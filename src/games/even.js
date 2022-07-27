import { getUserAnswer, getRandomNumber } from "../utils.js";
import { initGame } from "../index.js";

export const startEvenGame = () => {
  let number = getRandomNumber(200);
  let answer = isEven(number) ? "yes" : "no";
  let input = getUserAnswer(number);
  return { answer, input };
};

const isEven = (number) => number % 2 === 0;

export const launch = () => {
  initGame(
    startEvenGame,
    'Answer "yes" if the number is even, otherwise answer "no".'
  );
};
