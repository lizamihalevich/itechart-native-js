const map = (arr, callback) => {
  if (!Array.isArray(arr)) {
    throw new Error('You should pass an array');
  }

  let newArr = [];

  for (let value of arr) {
    newArr.push(callback(value));
  }

  return newArr;
};

export default map;
