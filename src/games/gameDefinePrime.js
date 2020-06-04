import readlineSync from 'readline-sync';
import definePrime from '../definePrime.js';

const gameDefinePrime = (userName) => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName} !`);
      return;
    }
    const randomNumber = Math.floor((Math.random() * 101) + 1);
    const CorrectAnswer = definePrime(randomNumber);
    console.log(`Answer "yes" if given number ${randomNumber} is prime. Otherwise answer "no"`);
    const answerFromUser = readlineSync.question('Yes or No   ');
    console.log(`Your answer: ${answerFromUser}`);
    if (answerFromUser === CorrectAnswer) {
      console.log('Correct!');
    } else if (answerFromUser !== CorrectAnswer) {
      console.log(`${answerFromUser} is wrong answer ;(. Correct answer was ${CorrectAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
  }
};

export default gameDefinePrime;
