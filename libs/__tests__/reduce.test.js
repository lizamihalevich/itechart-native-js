import myLib from '../../myLib';

describe('libs/reduce', () => {
  test('reducing an array into sum', () => {
    expect(myLib.reduce([1, 2, 3, 4], (a, b) => a + b, 0)).toBe(10);
  });

  test('reducing an array into sum without initial value', () => {
    expect(myLib.reduce([1, 2, 3, 4], (a, b) => a + b)).toBe(10);
  });

  test('reducing an array into sum with nonzero initial value', () => {
    expect(myLib.reduce([1, 2, 3, 4], (a, b) => a + b, 2)).toBe(12);
  });

  test('reducing an empty array into sum', () => {
    expect(myLib.reduce([], (a, b) => a + b, 0)).toBe(0);
  });

  test('pass not an array throws error', () => {
    expect(() => {
      myLib.reduce(1, (a, b) => a + b, 0);
    }).toThrow();
  });
});
