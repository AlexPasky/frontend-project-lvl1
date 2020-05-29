const gcd = (num1, num2) => {
  if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 <= 0 || num2 <= 0) {
    return false;
  }
  let nod = 0;
  if (num1 > num2) {
    nod = num1;
  } else {
    nod = num2;
  }
  while (nod >= 1) {
    if (Number.isInteger(num1 / nod) && Number.isInteger(num2 / nod)) {
      return nod;
    }
    nod -= 1;
  }
  return nod;
};

export default gcd;
