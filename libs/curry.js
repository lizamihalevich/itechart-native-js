const curry = function(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func(...args);
    }

    return function(...args2) {
      return curried(...args, ...args2);
    };
  };
};

export default curry;
