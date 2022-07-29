import getRandomNumber from '../utils.js';
import initGame from '../index.js';

const getRandomOperator = () => {
  const operatorArray = ['+', '-', '*'];
  const index = Math.floor(Math.random() * operatorArray.length);
  return operatorArray[index];
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
  const operator = getRandomOperator();
  const number1 = getRandomNumber(1, 200);
  const number2 = getRandomNumber(1, 200);
  const answer = getResult(number1, operator, number2).toString();
  const strForInput = [number1, operator, number2].join(' ');
  return { answer, strForInput };
};

export const launch = () => {
  initGame(startCalculator, 'What is the result of the expression?');
};
