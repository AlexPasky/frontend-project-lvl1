const primeGenerator = () => {
  let primeFlag = false;
  let rnd = 3;
  while (primeFlag === false) {
    rnd = Math.floor((Math.random() * 101) + 1);
    for (let i = 2; i < rnd; i += 1) {
      if (rnd % i === 0) {
        primeFlag = false;
        i = rnd;
      } else if (primeFlag === true && rnd % i === 0) {
        primeFlag = true;
        return rnd;
      } else if (i < rnd) {
        primeFlag = true;
      }
    }
  }
  return rnd;
};

console.log(primeGenerator());

export default primeGenerator;
