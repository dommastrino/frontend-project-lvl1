import { getRandomNumber } from '../utils.js';
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
  const number = getRandomNumber(1, 200);
  const strForInput = number;
  const answer = isPrimeNumber(number) ? 'yes' : 'no';
  return { strForInput, answer };
};

export const launch = () => {
  initGame(findPrimeNumber, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};
