const getProgressionOfNumber = () => {
  let randomNumber = Math.floor((Math.random() * 101) + 1);
  const result = [];
  // console.log(randomNumber, result);
  for (let i = 0; i < 10; i += 1) {
    result.push(randomNumber);
    randomNumber += 2;
  }
  return result;
};

export default getProgressionOfNumber;
