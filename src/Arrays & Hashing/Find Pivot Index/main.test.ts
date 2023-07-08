import { calculateLeftSum, calculateRightSum, pivotIndex } from './main';

describe('pivotIndex', () => {
  test('returns the correct pivot index when it exists', () => {
    const nums = [1, 7, 3, 6, 5, 6];
    expect(pivotIndex(nums)).toBe(3);
  });

  test('returns -1 when there is no pivot index', () => {
    const nums = [1, 2, 3];
    expect(pivotIndex(nums)).toBe(-1);
  });

  test('returns the correct pivot index for negative numbers', () => {
    const nums = [-1, -7, 3, 6, -5, 0];
    expect(pivotIndex(nums)).toBe(3);
  });

  test('returns the correct pivot index for an empty array', () => {
    const nums: number[] = [];
    expect(pivotIndex(nums)).toBe(-1);
  });

  test('calculates the correct left and right sums', () => {
    const leftElements = [1, 2, 3];
    const rightElements = [4, 5, 6];
    expect(calculateLeftSum(leftElements)).toBe(6);
    expect(calculateRightSum(rightElements)).toBe(15);
  });
});
