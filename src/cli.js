/* eslint no-console: "error" */
import readline from "readline-sync";

export const askName = () => {
  var input = readline.question("May I have your name? ");
  console.log(`Hello, ${input}!`);
  return input;
};
