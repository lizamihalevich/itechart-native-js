import myLib from '../myLib';

test('skipping elements in array', () => {
  expect(myLib.skip([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
});
