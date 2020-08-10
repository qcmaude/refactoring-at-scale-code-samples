const searchFaster = require('./searchFaster.js');

test('finds a name present in the list', () => {
	expect(searchFaster('Luke Skywalker', ['C3P0', 'Chewbacca', 'Darth Vader', 'Han Solo', 'Leia Organa', 'Luke Skywalker', 'Obi-Wan Kenobi', 'R2D2', 'Yoda'])).toBe(5);
});

test('returns -1 if name not present in list', () => {
	expect(searchFaster('Luke Skywalker', ['C3P0', 'Chebacca', 'Han Solo', 'R2D2']));
});