import { getRandomNumber, getUserAnswer } from '../utils.js';
import initGame from '../index.js';

const plusminusumn = () => {
  const array = ['+', '-', '*'];
  const rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

const getResult = (number1, operator, number2) => {
  let result = 0;
  switch (operator) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      break;
  }
  return result;
};

export const startCalculator = () => {
  const operator = plusminusumn();
  const number1 = getRandomNumber(200);
  const number2 = getRandomNumber(200);
  const answer = getResult(number1, operator, number2).toString();
  const input = getUserAnswer([number1, operator, number2].join(' '));
  return { answer, input };
};

export const launch = () => {
  initGame(startCalculator, 'What is the result of the expression?');
};
