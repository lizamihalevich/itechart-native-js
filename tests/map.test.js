import myLib from '../myLib';

test('doubling an array', () => {
  expect(myLib.map([1, 2, 3], a => a * 2)).toEqual([2, 4, 6]);
});

test('squaring an array', () => {
  expect(myLib.map([1, 2, 3], a => a ** 2)).toEqual([1, 4, 9]);
});

test('mapping an empty array', () => {
  expect(myLib.map([], a => Math.sqrt(a))).toEqual([]);
});

test('pass not an array throws error', () => {
  expect(() => {
    myLib.map(1, a => a * 2);
  }).toThrow();
});
