import { getRandomNumber, getUserAnswer } from '../utils.js';
import initGame from '../index.js';

const isPrimeNumber = (number) => {
  if (number === 0) {
    return false;
  }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

export const findPrimeNumber = () => {
  const number = getRandomNumber(200);
  const input = getUserAnswer(number);
  const flag = isPrimeNumber(number);
  const answer = flag ? 'yes' : 'no';
  return { input, answer };
};

export const launch = () => {
  initGame(findPrimeNumber, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
