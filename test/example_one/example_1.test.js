import exampleOneEntryPoint from '../../src/example_one/example_1';

describe('when supplied with an event with a name in camelCase', () => {
  const event = {
    name: 'TimKnight',
    someData: true,
  };

  test('it should format the name into All Caps and return a copy of the event', () => {
    const actual = exampleOneEntryPoint({ event });

    // Should be a new event object returned rather than mutating the original
    expect(actual)
      .not.toBe(event);

    expect(actual)
      .toMatchObject({
        name: 'TIMKNIGHT',
        someData: true,
      });
  });
});

describe('when supplied with an event with a name in lower case with a space', () => {
  const event = {
    name: 'tim knight',
    someData: true,
  };

  test('it should format the name into All Caps and return a copy of the event', () => {
    const actual = exampleOneEntryPoint({ event });

    // Should be a new event object returned rather than mutating the original
    expect(actual)
      .not.toBe(event);

    expect(actual)
      .toMatchObject({
        name: 'TIM KNIGHT',
        someData: true,
      });
  });
});

describe('when supplied with an event without a name defined', () => {
  const event = {
    someData: true,
  };

  test('it should return an empty string in the copy of the object', () => {
    const actual = exampleOneEntryPoint({ event });

    // Should be a new event object returned rather than mutating the original
    expect(actual)
      .not.toBe(event);

    expect(actual)
      .toMatchObject({
        name: '',
        someData: true,
      });
  });
});

describe('when supplied with an event containing a null name', () => {
  const event = {
    name: null,
    someData: true,
  };

  test('it should return an empty string in the copy of the object', () => {
    const actual = exampleOneEntryPoint({ event });

    // Should be a new event object returned rather than mutating the original
    expect(actual)
      .not.toBe(event);

    expect(actual)
      .toMatchObject({
        name: '',
        someData: true,
      });
  });
});
