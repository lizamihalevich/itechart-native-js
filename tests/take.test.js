import myLib from '../myLib';

test('take 1 element in array', () => {
  expect(myLib.take([1, 2, 3, 4, 5], 1)).toEqual([1]);
});

test('take 2 elements in array', () => {
  expect(myLib.take([1, 2, 3, 4, 5], 2)).toEqual([1, 2]);
});

test('take all elements in array', () => {
  expect(myLib.take([1, 2, 3, 4, 5], 5)).toEqual([1, 2, 3, 4, 5]);
});

test('take zero elements in array', () => {
  expect(myLib.take([1, 2, 3, 4, 5], 0)).toEqual([]);
});

test('take more elements than array length', () => {
  expect(myLib.take([1, 2, 3, 4, 5], 10)).toEqual([1, 2, 3, 4, 5]);
});

test('take 6 elements from array', () => {
  expect(myLib.take([1, 2, 3, 4, 5], 6)).toEqual([1, 2, 3, 4, 5]);
});

test('take some elements from empty array', () => {
  expect(myLib.take([], 10)).toEqual([]);
});

test('pass negative value throws error', () => {
  expect(() => {
    myLib.take([1, 2], -1);
  }).toThrow();
});

test('pass not an array throws error', () => {
  expect(() => {
    myLib.take(2, 1);
  }).toThrow();
});
