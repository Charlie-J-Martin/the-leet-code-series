import { twoSum } from './main';

test('Returns the indices of two numbers that sum up to the target', () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const expected = [0, 1]; // Indices of numbers 2 and 7 that sum up to 9
  expect(twoSum(nums, target)).toEqual(expected);
});

test('Returns the correct indices when the target is negative', () => {
  const nums = [-1, -2, -3, -4, -5];
  const target = -8;
  const expected = [2, 4]; // Indices of numbers -3 and -5 that sum up to -8
  expect(twoSum(nums, target)).toEqual(expected);
});

test('Returns the correct indices when the target is zero', () => {
  const nums = [-1, 0, 1];
  const target = 0;
  const expected = [0, 2]; // Indices of numbers -1 and 1 that sum up to 0
  expect(twoSum(nums, target)).toEqual(expected);
});

test('Returns the indices of two numbers that sum up to the target', () => {
  const nums = [3, 3];
  const target = 6;
  const expected = [0, 1]; // Indices of numbers 3 and 3 that sum up to 6
  expect(twoSum(nums, target)).toEqual(expected);
});
