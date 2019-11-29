const map = (arr, callback) => {
  if (!Array.isArray(arr)) {
    throw new Error('You should pass an array');
  }

  const newArr = [];

  for (const [index, value] of Object.entries(arr)) {
    newArr.push(callback(value, index, arr));
  }

  return newArr;
};

export default map;
