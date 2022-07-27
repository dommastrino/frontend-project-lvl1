/* eslint eqeqeq: ["error", "smart"] */
import askName from './cli.js';

const initGame = (startGame, description) => {
  const name = askName();
  console.log(description);
  let i = 0;
  while (i < 3) {
    i += 1;
    const result = startGame();
    if (result.answer == result.input.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${result.input}' is wrong answer ;(. Correct answer was '${result.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default initGame;
