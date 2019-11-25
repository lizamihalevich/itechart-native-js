import myLib from './myLib';

//MAP
console.log(myLib.map([2, 5, 6], a => a * 2));
//TAKE
console.log(myLib.take([1, 2, 4], 1));
//SKIP
console.log(myLib.skip([1, 2, 3, 4, 5], 4));
// //REDUCE
console.log(myLib.reduce([1, 2, 3, 4], (a, b) => a + b, 0));
// //FILTER
console.log(myLib.filter(['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'], word => word.length > 6));
// //FOREACH
console.log(myLib.forEach([1, 2, 3, 4], (a) => console.log(a)));
console.log(myLib.chain([1, 2, 3]).take(2).skip(1).value());