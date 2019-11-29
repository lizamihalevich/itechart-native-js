import myLib from '../../myLib';

describe('libs/forEach', () => {
  test('forEach add 1', () => {
    const mockCallback = jest.fn(x => x + 1);
    myLib.forEach([0, 1], mockCallback);

    expect(mockCallback.mock.calls.length).toBe(2);

    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    expect(mockCallback.mock.results[0].value).toBe(1);
    expect(mockCallback.mock.results[1].value).toBe(2);
  });

  test('forEach do squaring', () => {
    const mockCallback = jest.fn(x => x ** 2);
    myLib.forEach([1, 2, 3], mockCallback);

    expect(mockCallback.mock.results[0].value).toBe(1);
    expect(mockCallback.mock.results[1].value).toBe(4);
    expect(mockCallback.mock.results[2].value).toBe(9);
  });

  test('pass not an array throws error', () => {
    expect(() => {
      myLib.forEach(2, x => x + 1);
    }).toThrow('You should pass an array');
  });
});
