import readline from 'readline-sync';

const askName = () => {
  console.log('Welcome to the Brain Games!');
  const input = readline.question('May I have your name? ');
  console.log(`Hello, ${input}!`);
  return input;
};
export default askName;
