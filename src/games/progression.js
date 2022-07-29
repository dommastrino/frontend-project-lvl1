import { getRandomNumber } from '../utils.js';
import initGame from '../index.js';

const getProgressionArray = (counter, arrLength, startElem) => {
  const array = [];
  array.push(startElem);
  for (let i = 1; i <= arrLength; i += 1) {
    array.push(array[i - 1] + counter);
  }
  return array;
};

export const startProgressionGame = () => {
  const arrLength = getRandomNumber(5, 10);
  const counter = getRandomNumber(1, 5);
  const startElem = getRandomNumber(1, 20);
  const array = getProgressionArray(counter, arrLength, startElem);
  const delElemIndex = getRandomNumber(1, arrLength);
  const answer = array[delElemIndex].toString();
  array[delElemIndex] = '..';
  const strForInput = array.join(' ').toString();
  return { answer, strForInput };
};

export const launch = () => {
  initGame(startProgressionGame, 'What number is missing in the progression?');
};
