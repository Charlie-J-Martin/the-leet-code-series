import { wordPattern } from './main';

describe('wordPattern', () => {
  it('should return true if the pattern matches the string', () => {
    expect(wordPattern('abba', 'dog cat cat dog')).toBe(true);
  });

  it('should return false if the pattern does not match the string', () => {
    expect(wordPattern('abba', 'dog cat cat fish')).toBe(false);
  });

  it('should return false if the pattern and string have different lengths', () => {
    expect(wordPattern('abba', 'dog cat cat')).toBe(false);
  });
});
