#!/usr/bin/env node
import getUserName from '../src/getUserName.js';
import gameDefinePrime from '../games/gameDefinePrime.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello ${userName} !`);

gameDefinePrime(userName);
