import { getRandomNumber, getUserAnswer } from '../utils.js';
import { initGame } from '../index.js';

const plusminusumn = () => {
  const array = ['+', '-', '*'];
  let rand = Math.floor(Math.random() * array.length);
  return array[rand];
};

const getResult = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
  }
  return;
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
