import memoize from './memoize';

const sum = (a, b) => a + b;

const memoizedSum = memoize(sum, 2);

export default memoizedSum;
