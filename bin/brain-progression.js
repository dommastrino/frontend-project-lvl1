import {
  getRandomNumber,
  getRandomArbitrary,
  questionWithAnswer,
} from "../src/utils.js";

export const progression = () => {
  let i = 0;
  while (i < 3) {
    i += 1;
    let lengthArray = getRandomArbitrary(5, 10);
    let counter = getRandomNumber(5);
    let start = getRandomNumber(20);
    let array = [];
    array.push(start);
    for (let i = 1; i <= lengthArray; i += 1) {
      array.push(array[i - 1] + counter);
    }
    let delIndex = getRandomNumber(lengthArray);
    let result = array[delIndex];
    array[delIndex] = "..";
    let input = questionWithAnswer(array.toString());
    if (input == result) {
      console.log("Correct!");
    } else {
      return [input, result];
    }
  }
};
