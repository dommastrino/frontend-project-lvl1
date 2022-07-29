/* eslint-disable no-param-reassign */
import { getRandomNumber } from '../utils.js';
import initGame from '../index.js';

const NOD = (num1, num2) => {
  while (num2 !== 0) num2 = num1 % (num1 = num2);
  return num1;
};

export const startGCD = () => {
  const number1 = getRandomNumber(1, 200);
  const number2 = getRandomNumber(1, 200);
  const answer = NOD(number1, number2).toString();
  const strForInput = [number1, number2].join(' ').toString();
  return { answer, strForInput };
};

export const launch = () => {
  initGame(startGCD, 'Find the greatest common divisor of given numbers.');
};
