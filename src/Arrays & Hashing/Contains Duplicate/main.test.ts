import { containsDuplicate } from './main';

describe('Contains Duplicate', () => {
  test('returns true when array contains duplicate numbers', () => {
    const nums = [1, 2, 3, 4, 5, 2];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('returns false when array does not contain any duplicates', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(containsDuplicate(nums)).toBe(false);
  });

  test('returns true when array contains multiple occurrences of the same number', () => {
    const nums = [1, 2, 3, 3, 4, 5];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('returns true when array contains negative numbers as duplicates', () => {
    const nums = [1, -2, 3, 4, -2, 5];
    expect(containsDuplicate(nums)).toBe(true);
  });

  test('returns false when array is empty', () => {
    const nums: number[] = [];
    expect(containsDuplicate(nums)).toBe(false);
  });
});
