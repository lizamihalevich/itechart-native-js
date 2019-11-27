import myLib from '../myLib';

test('skipping 2 elements in array', () => {
  expect(myLib.skip([1, 2, 3, 4, 5], 2)).toEqual([3, 4, 5]);
});

test('skipping 1 element in array', () => {
  expect(myLib.skip([1, 2, 3, 4, 5], 1)).toEqual([2, 3, 4, 5]);
});

test('skipping all elements in array', () => {
  expect(myLib.skip([1, 2, 3, 4, 5], 5)).toEqual([]);
});

test('skipping more elements than array length', () => {
  expect(myLib.skip([1, 2, 3, 4, 5], 6)).toEqual([]);
});

test('skipping more elements than array length', () => {
  expect(myLib.skip([1, 2, 3, 4, 5], 10)).toEqual([]);
});

test('skipping zero elements in array', () => {
  expect(myLib.skip([1, 2, 3, 4, 5], 0)).toEqual([1, 2, 3, 4, 5]);
});

test('skipping some elements in empty array', () => {
  expect(myLib.skip([], 2)).toEqual([]);
});

test('skipping zero elements in empty array', () => {
  expect(myLib.skip([], 0)).toEqual([]);
});
