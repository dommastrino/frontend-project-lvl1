import {
  getRandomNumber,
  getRandomArbitrary,
  getUserAnswer,
} from '../utils.js';
import { initGame } from '../index.js';

const generateArr = (counter, lengthArray, start) => {
  const array = [];
  array.push(start);
  for (let i = 1; i <= lengthArray; i += 1) {
    array.push(array[i - 1] + counter);
  }
  return array;
};

export const startProgressionGame = () => {
  const lengthArray = getRandomArbitrary(5, 10);
  const counter = getRandomNumber(5);
  const start = getRandomNumber(20);
  const array = generateArr(counter, lengthArray, start);
  const delIndex = getRandomNumber(lengthArray);
  const answer = array[delIndex];
  array[delIndex] = '..';
  const input = getUserAnswer(array.join(' '));
  return { answer, input };
};

export const launch = () => {
  initGame(startProgressionGame, 'What number is missing in the progression?');
};
