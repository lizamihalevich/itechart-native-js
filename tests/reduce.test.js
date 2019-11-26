import myLib from '../myLib';

test('reducing an array into sum', () => {
  expect(myLib.reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
});
