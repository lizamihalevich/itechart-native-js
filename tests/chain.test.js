import myLib from '../myLib';

test('chaining is working', () => {
  expect(
    myLib
      .chain([1, 2, 3, 4])
      .take(3)
      .skip(1)
      .value(),
  ).toEqual([2, 3]);
});
