const constructPropertyFromArgs = (fn, args) => {
  let propToCheck = [];
  propToCheck = propToCheck.concat(fn.name, args);
  return propToCheck.join('|');
};

const memoize = fn => {
  const cache = {};
  return (...args) => {
    const propToCheck = constructPropertyFromArgs(fn, args);
    if (propToCheck in cache) {
      console.log('Fetching from cache');
      return cache[propToCheck];
    }
    console.log('Calculating result');
    const result = fn(...args);
    cache[propToCheck] = result;
    return result;
  };
};

export default memoize;
