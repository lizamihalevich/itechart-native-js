import myLib from '../myLib';

test('doubling an array', () => {
  expect(myLib.map([1, 2, 3], a => a * 2)).toEqual([2, 4, 6]);
});
