#!/usr/bin/env node
import getUserName from '../src/getUserName.js';

console.log('Welcome to the Brain Games!');
const userName1 = getUserName();
// Выводим на экран
console.log(`Hi ${userName1} !`);
