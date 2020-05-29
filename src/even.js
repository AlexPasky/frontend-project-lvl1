const even = (num) => {
  if (typeof num !== 'number' || num <= 0) {
    return false;
  }
  if (num % 2 !== 1) {
    return true;
  }
  return false;
};
console.log(even('jjh'));

export default even;
