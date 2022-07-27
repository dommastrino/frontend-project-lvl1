import askName from "../src/cli.js";

export const initGame = (startGame, description) => {
  console.log(description);
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
