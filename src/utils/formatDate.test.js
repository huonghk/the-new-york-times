import formatDate from './formatDate';

// TODO
// Handle format with specified timezone
it('format date', () => {
  expect(formatDate('2018-12-05T05:47:15+00:00')).toEqual(
    'December 5, 2018',
  );
});
