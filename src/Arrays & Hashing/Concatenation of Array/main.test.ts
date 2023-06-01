import { getConcatenation } from './main';

describe('getConcatenation', () => {
  test('Concatenates an empty array', () => {
    const nums: number[] = [];
    const result = getConcatenation(nums);
    expect(result).toEqual([]);
  });

  test('Concatenates an array with one element', () => {
    const nums = [5];
    const result = getConcatenation(nums);
    expect(result).toEqual([5, 5]);
  });

  test('Concatenates an array with multiple elements', () => {
    const nums = [1, 2, 3];
    const result = getConcatenation(nums);
    expect(result).toEqual([1, 2, 3, 1, 2, 3]);
  });
});
