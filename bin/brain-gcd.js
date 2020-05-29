#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import gcd from '../src/gcd.js';

console.log('Welcome to the Brain Games!');
const userName1 = userName();
console.log(`Hello ${userName1} !`);

const gameGcd = () => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName1} !`);
      return;
    }
    const rnd1 = Math.floor((Math.random() * 101) + 1);
    const rnd2 = Math.floor((Math.random() * 101) + 1);
    console.log('Find the greatest common divisor of given numbers.');
    const answer1 = readlineSync.question(`Question: ${rnd1}   ${rnd2}     `);
    console.log(`Your answer: ${answer1}`);
    const answer = gcd(rnd1, rnd2);
    const answerNumber = Number(answer1);
    if (answerNumber === answer) {
      console.log('Correct!');
    } else if (answerNumber !== answer) {
      console.log(`${answer1} is wrong answer ;(. Correct answer was ${answer}. \nLet's try again, ${userName1}!`);
      return;
    }
  }
};

gameGcd();
