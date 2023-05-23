import { add } from './main';

describe('add', () => {
  test('correctly add two numbers', () => {
    expect(add(1, 1)).toEqual(2);
  });
});
