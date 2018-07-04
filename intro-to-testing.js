console.log('Starting tests!');

function add (a, b) {
  return a + b;
}

expect(add(3,5)).toBe(8);
expect(add(-3, 2)).toBeA('number');

function capitalizeWord (word) {
  if (!word || typeof word !== 'string') {
    word = '';
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Given chris expect Chris toBe
expect(capitalizeWord('chris')).toBe('Chris');

// Given chris expect type to be string toBeA
expect(capitalizeWord('chris')).toBeA('string');

// Given nothing expect '' toBe
expect(capitalizeWord()).toBe('')

console.log('All tests have passed!');
