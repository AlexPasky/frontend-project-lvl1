import readlineSync from 'readline-sync';
import getUserName from '../getUserName.js';

const gameCalculator = () => {
  const userName = getUserName();
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName} !`);
      return;
    }
    const randomNumber1 = Math.floor((Math.random() * 101) + 1);
    const randomNumber2 = Math.floor((Math.random() * 101) + 1);
    console.log('What is the result of the expression?');
    const answerFromUser = readlineSync.question(`Question: ${randomNumber1} + ${randomNumber2}  = `);
    console.log(`Your answer: ${answerFromUser}`);
    const correctAnswer = randomNumber1 + randomNumber2;
    const answerFromUserNumberType = Number(answerFromUser);
    if (answerFromUserNumberType === correctAnswer) {
      console.log('Correct!');
    } else if (answerFromUserNumberType !== correctAnswer) {
      console.log(`${answerFromUser} is wrong answer ;(. Correct answer was ${correctAnswer}. \nLet's try again, ${userName}!`);
      return;
    }
  }
};

export default gameCalculator;
