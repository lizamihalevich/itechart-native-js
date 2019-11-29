import curry from './curry';

function sum(a, b, c) {
  return a + b + c;
}

const curriedSum = curry(sum);

export default curriedSum;
