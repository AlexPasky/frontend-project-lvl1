#!/usr/bin/env node
import getUserName from '../src/getUserName.js';
import gameCalculator from '../src/games/gameCalculator.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello ${userName} !`);

gameCalculator(userName);
