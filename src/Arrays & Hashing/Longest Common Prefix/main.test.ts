import { longestCommonPrefix } from './main';

describe('longestCommonPrefix', () => {

  test('returns the entire word when there is only one word in the input array', () => {
    const strings = ['apple'];
    const result = longestCommonPrefix(strings);
    expect(result).toBe('apple');
  });

  test('returns the longest common prefix when it exists', () => {
    const strings = ['apple', 'application', 'applet'];
    const result = longestCommonPrefix(strings);
    expect(result).toBe('appl');
  });

  test('returns an empty string when there is no common prefix', () => {
    const strings = ['apple', 'banana', 'cherry'];
    const result = longestCommonPrefix(strings);
    expect(result).toBe('');
  });

  test('handles strings with different lengths correctly', () => {
    const strings = ['apple', 'applause', 'apply'];
    const result = longestCommonPrefix(strings);
    expect(result).toBe('appl');
  });
});
