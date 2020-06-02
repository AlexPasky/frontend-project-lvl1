#!/usr/bin/env node
import getUserName from '../src/getUserName.js';
import gameDeterminationGcd from '../games/gameDeterminationGcd.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello ${userName} !`);

gameDeterminationGcd(userName);
