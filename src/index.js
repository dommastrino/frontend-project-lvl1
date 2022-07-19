import askName from "../src/cli.js";
import { startGames } from "../bin/brain-games.js";

console.log("Welcome to the Brain Games!");
let name = askName();
startGames(name);

export const getRandomNumber = (number) => {
  const run = Math.floor(Math.random() * number);
  return run;
};
export const getRandomArbitrary = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
