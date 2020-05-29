#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import even from '../src/even.js';

console.log('Welcome to the Brain Games!');
const userName1 = userName();
console.log(`Hi ${userName1} !`);

const gameEven = () => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName1} !`);
      return;
    }
    const rnd = Math.floor((Math.random() * 101) + 1);
    console.log('Answer "yes" if the number is even, otherwise answer "no". ');
    const answer1 = readlineSync.question(`${rnd} : `);
    console.log(`Your answer: ${answer1}`);
    if (even(rnd) === true && answer1 === 'Yes') {
      console.log('Correct!');
    } else if (even(rnd) !== true && answer1 === 'No') {
      console.log('Correct!');
    } else if (answer1 === 'Yes') {
      console.log(`${answer1} is wrong answer ;(. Correct answer was "no".`);
      return;
    } else if (answer1 === 'No') {
      console.log(`${answer1} is wrong answer ;(. Correct answer was "Yes".`);
      return;
    } else {
      console.log(`${answer1} is wrong answer ;(. Correct answer was "Yes".`);
      return;
    }
  }
};

gameEven();
