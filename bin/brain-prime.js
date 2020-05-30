#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import prime from '../src/prime.js';

console.log('Welcome to the Brain Games!');
const userName1 = userName();
console.log(`Hello ${userName1} !`);

const gamePrime = () => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName1} !`);
      return;
    }
    const rnd = Math.floor((Math.random() * 101) + 1);
    const answer = prime(rnd);
    console.log(`Answer "yes" if given number ${rnd} is prime. Otherwise answer "no"`);
    const answer1 = readlineSync.question('Yes or No   ');
    console.log(`Your answer: ${answer1}`);
    if (answer1 === answer) {
      console.log('Correct!');
    } else if (answer1 !== answer) {
      console.log(`${answer1} is wrong answer ;(. Correct answer was ${answer}. \nLet's try again, ${userName1}!`);
      return;
    }
  }
};

gamePrime();
