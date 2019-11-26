const reduce = (arr, callback, initialVal) => {
  if (!Array.isArray(arr)) {
    throw new Error('You should pass an array');
  }

  let accumulator = initialVal;

  for (let [index, value] of Object.entries(arr)) {
    if (!accumulator) {
      accumulator = value;
    } else {
      accumulator = callback(accumulator, value, index, arr);
    }
  }

  return accumulator;
};

export default reduce;
