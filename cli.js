import readlineSync from 'readline-sync';

const readlineSync = require('readline-sync');
// Wait for user's response.
const userName = readlineSync.question('May I have your name? ');

export default userName;