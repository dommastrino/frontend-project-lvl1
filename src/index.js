import readline from "readline-sync";
import askName from "../src/cli.js";

export const getRandomNumber = (number) => {
  const run = Math.floor(Math.random() * number);
  return run;
};
export const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
export const getUserAnswer = (question) => {
  console.log(`Question: ${question}`);
  return readline.question("Your answer: ");
};

export const initGame = (startGame) => {
  let name = askName();
  let i = 0;
  while (i < 3) {
    i += 1;
    let result = startGame();
    if (result.answer == result.input.toLowerCase()) {
      console.log("Correct!");
    } else {
      console.log(
        `'${result.input}' is wrong answer ;(. Correct answer was '${result.answer}'.`
      );
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
