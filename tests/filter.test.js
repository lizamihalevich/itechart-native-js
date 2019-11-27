import myLib from '../myLib';

test('filtering words bigger than 6 symbols', () => {
  expect(
    myLib.filter(
      ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'],
      word => word.length > 6,
    ),
  ).toEqual(['exuberant', 'destruction', 'present']);
});

test('filtering an array of numbers', () => {
  expect(myLib.filter([1, 2, 3, 4, 5], num => num % 2 === 0)).toEqual([2, 4]);
});

test('filtering an empty array of numbers', () => {
  expect(myLib.filter([], num => num % 2 === 0)).toEqual([]);
});

test('pass not an array throws error', () => {
  expect(() => {
    myLib.filter(1, a => a > 2);
  }).toThrow();
});
