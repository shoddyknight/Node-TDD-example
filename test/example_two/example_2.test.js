import exampleTwoEntryPoint from '../../src/example_two/example_2';

describe('when both x and y are strings', () => {
  describe('and x and y are different words', () => {
    const x = 'Hello';

    const y = 'World';

    test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
  });

  describe('and x and y are the same word', () => {
    const word = 'bird';

    const x = word;

    const y = word;

    test('it should return true', () => expect(exampleTwoEntryPoint(x, y)).toBe(true));
  });
});

describe('when both x and y are numbers', () => {
  describe('and x and y are different numbers', () => {
    const x = 42;

    const y = 7315;

    test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
  });

  describe('and x and y are the same number', () => {
    const number = 42;

    const x = number;

    const y = number;

    test('it should return true', () => expect(exampleTwoEntryPoint(x, y)).toBe(true));
  });
});

describe('when x is a string and y is a number', () => {
  const x = '2';

  const y = 2;

  test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
});

describe('when x is a number and x is a string', () => {
  const x = 4;

  const y = 'Sixty';

  test('it should return false', () => expect(exampleTwoEntryPoint(x, y)).toBe(false));
});
