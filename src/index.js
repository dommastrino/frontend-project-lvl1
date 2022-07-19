import askName from "../src/cli.js";
import { startGames } from "../bin/brain-games.js";

console.log("Welcome to the Brain Games!");
let name = askName();
startGames(name);
