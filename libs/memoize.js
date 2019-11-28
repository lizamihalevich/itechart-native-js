const memoize = fn => {
  const cache = {};

  return (...args) => {
    const n = args.join('.');

    if (n in cache) {
      return cache[n];
    }

    const result = fn(...args);
    cache[n] = result;
    return result;
  };
};

export default memoize;
