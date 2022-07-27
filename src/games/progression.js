import {
  getRandomNumber,
  getRandomArbitrary,
  getUserAnswer,
} from "../utils.js";
import { initGame } from "../index.js";

export const startProgressionGame = () => {
  let lengthArray = getRandomArbitrary(5, 10);
  let counter = getRandomNumber(5);
  let start = getRandomNumber(20);
  let array = generateArr(counter, lengthArray, start);
  let delIndex = getRandomNumber(lengthArray);
  let answer = array[delIndex];
  array[delIndex] = "..";
  let input = getUserAnswer(array.toString());
  return { answer, input };
};
const generateArr = (counter, lengthArray, start) => {
  let array = [];
  array.push(start);
  for (let i = 1; i <= lengthArray; i += 1) {
    array.push(array[i - 1] + counter);
  }
  return array;
};
export const launch = () => {
  initGame(startProgressionGame, "What number is missing in the progression?");
};
