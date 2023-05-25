import { groupAnagrams } from './main';

describe('groupAnagrams', () => {
  test('groups anagrams from multiple strings', () => {
    const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
    const output = [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']];
    expect(groupAnagrams(input)).toEqual(output);
  });
  test('groups empty strings successfully', () => {
    const input = [''];
    const output = [['']];
    expect(groupAnagrams(input)).toEqual(output);
  });
  test('groups individual words successfully', () => {
    const input = ['a'];
    const output = [['a']];
    expect(groupAnagrams(input)).toEqual(output);
  });
});
