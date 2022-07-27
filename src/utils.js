import readline from 'readline-sync';

export const getRandomNumber = (number) => {
  const run = Math.floor(Math.random() * number);
  return run;
};
export const getRandomArbitrary = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

export const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readline.question('Your answer: ');
};
