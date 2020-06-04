#!/usr/bin/env node

import getUserName from '../src/getUserName.js';
import gameGetProgression from '../src/games/gameGetProgression.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hello ${userName} !`);

gameGetProgression(userName);
