const definePrime = (num) => {
  if (num === 2) {
    return true;
  }
  let primeFlag = false;
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      primeFlag = false;
      i = num;
    } else if (primeFlag === true && num % i === 0) {
      primeFlag = true;
      return num;
    } else if (i < num) {
      primeFlag = true;
    }
  }
  if (primeFlag === true) {
    return 'Yes';
  }
  return 'No';
};

export default definePrime;
