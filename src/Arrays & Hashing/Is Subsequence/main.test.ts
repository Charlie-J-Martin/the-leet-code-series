import { isSubsequence } from './main';

describe('isSubsequence', () => {
  it('should return true when s is a subsequence of t', () => {
    const s = 'abc';
    const t = 'abcdefg';
    expect(isSubsequence(s, t)).toBe(true);
  });

  it('should return false when s is not a subsequence of t', () => {
    const s = 'xyz';
    const t = 'abcdefg';
    expect(isSubsequence(s, t)).toBe(false);
  });

  it('should return true when s is an empty string', () => {
    const s = '';
    const t = 'abcdefg';
    expect(isSubsequence(s, t)).toBe(true);
  });
});
