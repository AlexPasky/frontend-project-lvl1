#!/usr/bin/env node

import userName from '../src/cli.js';

console.log('Welcome to the Brain Games!');

const userName1 = userName();
console.log('Hi ' + userName1 + '!');
