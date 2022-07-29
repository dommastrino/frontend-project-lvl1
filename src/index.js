/* eslint eqeqeq: ["error", "smart"] */
import readline from 'readline-sync';
import askName from './cli.js';

const initGame = (startGame, description) => {
  const name = askName();
  console.log(description);
  for (let i = 0; i < 3; i += 1) {
    const gameResult = startGame();
    console.log(`Question: ${gameResult.strForInput}`);
    let input = readline.question('Your answer: ');
    if (gameResult.answer === input.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${gameResult.answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default initGame;
