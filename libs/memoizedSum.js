import memoize from './memoize';

const sum = (a, b) => a + b;

const memoizedSum = memoize(sum);

export default memoizedSum;
