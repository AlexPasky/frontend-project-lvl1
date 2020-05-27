import readlineSync from 'readline-sync';

// const readlineSync = require('readline-sync');
// Wait for user's response.
const userName = () => {
  const userName1 = readlineSync.question('May I have your name? ');
  return userName1;
};

export default userName;
