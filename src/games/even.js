import { getUserAnswer, getRandomNumber } from '../utils.js';
import initGame from '../index.js';

const isEven = number => number % 2 === 0;

export const startEvenGame = () => {
  const number = getRandomNumber(200);
  const answer = isEven(number) ? 'yes' : 'no';
  const input = getUserAnswer(number);
  return { answer, input };
};

export const launch = () => {
  initGame(startEvenGame, 'Answer "yes" if the number is even, otherwise answer "no".');
};
