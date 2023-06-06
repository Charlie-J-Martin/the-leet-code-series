import { lengthOfLastWord } from './main';


describe('lengthOfLastWord', () => {
  test('returns 0 for an empty string', () => {
    const result = lengthOfLastWord('');
    expect(result).toBe(0);
  });

  test('returns the length of the last word in a sentence', () => {
    const result = lengthOfLastWord('Hello world');
    expect(result).toBe(5);
  });

  test('ignores leading and trailing whitespaces', () => {
    const result = lengthOfLastWord('  Hello  ');
    expect(result).toBe(5);
  });
});
