const determinationGcd = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 <= 0 || num2 <= 0) {
    return false;
  }
  let gcd = 0;
  if (num1 > num2) {
    gcd = num1;
  } else {
    gcd = num2;
  }
  while (gcd >= 1) {
    if (Number.isInteger(num1 / gcd) && Number.isInteger(num2 / gcd)) {
      return gcd;
    }
    gcd -= 1;
  }
  return gcd;
};

export default determinationGcd;
