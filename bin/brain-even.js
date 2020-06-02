#!/usr/bin/env node
import getUserName from '../src/getUserName.js';
import gameCheckParity from '../games/gameCheckParity.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log(`Hi ${userName} !`);

gameCheckParity(userName);
