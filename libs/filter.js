const filter = (arr, callback) => {
  if (!Array.isArray(arr)) {
    throw new Error('You should pass an array');
  }

  let newArr = [];

  for (let [index, value] of Object.entries(arr)) {
    if (callback(value, index, arr)) {
      newArr.push(value);
    }
  }

  return newArr;
};

export default filter;
