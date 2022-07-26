/* eslint no-console: "error" */
import readline from "readline-sync";

const askName = () => {
  console.log("Welcome to the Brain Games!");
  var input = readline.question("May I have your name? ");
  console.log(`Hello, ${input}!`);
  return input;
};
export default askName;
