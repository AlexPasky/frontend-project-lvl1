import readlineSync from 'readline-sync';

// const readlineSync = require('readline-sync');
// Wait for user's response.
const getUserName = () => {
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

export default getUserName;
