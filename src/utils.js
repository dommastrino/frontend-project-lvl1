import readline from "readline-sync";

export const getRandomNumber = (number) => {
  const run = Math.floor(Math.random() * number);
  return run;
};
export const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export const questionWithAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readline.question("Your answer: ");
};
