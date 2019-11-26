import myLib from '../myLib';

test('filtering words bigger than 6 symbols', () => {
  expect(
    myLib.filter(
      [
        'spray',
        'limit',
        'elite',
        'exuberant',
        'destruction',
        'present',
      ],
      word => word.length > 6,
    ),
  ).toEqual(['exuberant', 'destruction', 'present']);
});
