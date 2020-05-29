const prg = () => {
  let rnd = Math.floor((Math.random() * 101) + 1);
  const result = [];
  // console.log(rnd, result);
  for (let i = 0; i < 10; i += 1) {
    result.push(rnd);
    rnd += 2;
  }
  return result;
};

// console.log(prg());

export default prg;
