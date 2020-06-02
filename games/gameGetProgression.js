import readlineSync from 'readline-sync';
import getProgressionOfNumber from '../src/getProgressionOfNumber.js';

const gameGetProgression = (userName) => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName} !`);
      return;
    }
    const arrayNumbersOfProgression = getProgressionOfNumber();
    const randomNumber = Math.floor((Math.random() * 10));
    const correctAnswer = arrayNumbersOfProgression[randomNumber];
    arrayNumbersOfProgression[randomNumber] = '..';
    const numbersOfProgressionStringType = arrayNumbersOfProgression.join(' ');
    console.log('What number is missing in the progression?');
    const answerFromUser = readlineSync.question(`Question: ${numbersOfProgressionStringType}     `);
    console.log(`Your answer: ${answerFromUser}`);
    const answerNumber = Number(answerFromUser);
    if (answerNumber === correctAnswer) {
      console.log('Correct!');
    } else if (answerNumber !== correctAnswer) {
      console.log(`${answerFromUser} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
  }
};

export default gameGetProgression;
