#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';
import prg from '../src/prg.js';

console.log('Welcome to the Brain Games!');
const userName1 = userName();
console.log(`Hello ${userName1} !`);

const gamePrg = () => {
  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations  ${userName1} !`);
      return;
    }
    const arr = prg();
    const rnd2 = Math.floor((Math.random() * 10));
    const answer = arr[rnd2];
    arr[rnd2] = '..';
    const arrStr = arr.join(' ');
    console.log('What number is missing in the progression?');
    const answer1 = readlineSync.question(`Question: ${arrStr}     `);
    console.log(`Your answer: ${answer1}`);
    const answerNumber = Number(answer1);
    if (answerNumber === answer) {
      console.log('Correct!');
    } else if (answerNumber !== answer) {
      console.log(`${answer1} is wrong answer ;(. Correct answer was ${answer}. \nLet's try again, ${userName1}!`);
      return;
    }
  }
};

gamePrg();
