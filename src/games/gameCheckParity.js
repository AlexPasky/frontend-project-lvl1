import readlineSync from 'readline-sync';
import checkParity from '../checkParity.js';
import getUserName from '../getUserName.js';

const gameCheckParity = () => {
  const userName = getUserName();
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName} !`);
      return;
    }
    const randomNumber = Math.floor((Math.random() * 101) + 1);
    console.log('Answer "yes" if the number is even, otherwise answer "no". ');
    const answerFromUser = readlineSync.question(`${randomNumber} : `);
    console.log(`Your answer: ${answerFromUser}`);
    if (checkParity(randomNumber) === true && answerFromUser === 'Yes') {
      console.log('Correct!');
    } else if (checkParity(randomNumber) !== true && answerFromUser === 'No') {
      console.log('Correct!');
    } else if (answerFromUser === 'Yes') {
      console.log(`${answerFromUser} is wrong answer ;(. Correct answer was "no".`);
      return;
    } else if (answerFromUser === 'No') {
      console.log(`${answerFromUser} is wrong answer ;(. Correct answer was "Yes".`);
      return;
    } else {
      console.log(`${answerFromUser} is wrong answer ;(. Correct answer was "Yes".`);
      return;
    }
  }
};

export default gameCheckParity;
