const forEach = (arr, callback) => {
  if (!Array.isArray(arr)) {
    throw new Error('You should pass an array');
  }

  for (const [index, value] of Object.entries(arr)) {
    callback(value, index, arr);
  }
};

export default forEach;
