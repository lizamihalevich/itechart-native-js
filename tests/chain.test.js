import myLib from '../myLib';

test('chaining is working with take and skip', () => {
  expect(
    myLib
      .chain([1, 2, 3, 4])
      .take(3)
      .skip(1)
      .value(),
  ).toEqual([2, 3]);
});

test('chaining is working with other functions too', () => {
  expect(
    myLib
      .chain([1, 2, 3, 4])
      .map(n => n * 2)
      .reduce((a, b) => a + b, 0)
      .value(),
  ).toEqual(20);
});

test('chaining is working with another order', () => {
  expect(
    myLib
      .chain([1, 2, 3, 4])
      .skip(3)
      .reduce((a, b) => a + b, 0)
      .value(),
  ).toEqual(4);
});

test('chaining is working with another order', () => {
  expect(
    myLib
      .chain([1, 2, 3, 4])
      .filter(n => n % 2 === 0)
      .skip(1)
      .map(n => n * 2)
      .value(),
  ).toEqual([8]);
});

test('chaining empty array', () => {
  expect(
    myLib
      .chain([])
      .map(n => n * 2)
      .reduce((a, b) => a + b, 0)
      .value(),
  ).toEqual(0);
});

test('pass not an array throws error', () => {
  expect(() => {
    myLib
      .chain(1)
      .take(3)
      .skip(1)
      .value();
  }).toThrow();
});
