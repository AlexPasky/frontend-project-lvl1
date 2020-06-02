const generatePrime = () => {
  let primeFlag = false;
  let randomNumber = 3;
  while (primeFlag === false) {
    randomNumber = Math.floor((Math.random() * 101) + 1);
    for (let i = 2; i < randomNumber; i += 1) {
      if (randomNumber % i === 0) {
        primeFlag = false;
        i = randomNumber;
      } else if (primeFlag === true && randomNumber % i === 0) {
        primeFlag = true;
        return randomNumber;
      } else if (i < randomNumber) {
        primeFlag = true;
      }
    }
  }
  return randomNumber;
};

export default generatePrime;
