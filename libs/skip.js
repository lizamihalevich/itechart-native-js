const skip = (arr, n) => {
  if (!Array.isArray(arr)) {
    throw new Error('You should pass an array');
  }

  if (n < 0) {
    throw new Error('You should pass positive number');
  }

  return arr.slice(n);
};

export default skip;
