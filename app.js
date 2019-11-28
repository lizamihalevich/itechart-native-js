import myLib from './myLib';

// MAP
console.log(myLib.map([3, 5, 6], a => a * 3));
// TAKE
console.log(myLib.take([1, 2, 4], 1));
// SKIP
console.log(myLib.skip([1, 2, 3, 4, 5], 4));
// //REDUCE
console.log(myLib.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// //FILTER
console.log(
  myLib.filter(
    ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
    word => word.length > 6,
  ),
);
// //FOREACH
console.log(myLib.forEach([1, 2, 3, 4], a => console.log(a)));

console.log(
  myLib
    .chain([1, 2, 3, 4])
    .take(3)
    .skip(1)
    .forEach(a => console.log(a))
    .value(),
);

console.log(myLib.memoizedSum(2, 42));
console.log(myLib.memoizedSum(24, 2));
console.log(myLib.memoizedSum(2, 4));
console.log(myLib.memoizedSum(2, 4));
console.log(myLib.memoizedSum(3, 4));
console.log(myLib.memoizedSum(3, 4));

console.log(myLib.curriedSum(1)(5)(1));
