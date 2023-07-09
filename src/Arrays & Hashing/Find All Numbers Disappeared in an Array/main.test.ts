import { findDisappearedNumbers } from './main';

describe('findDisappearedNumbers', () => {
  it('returns an empty array if all numbers from 1 to n are present in the input array', () => {
    expect(findDisappearedNumbers([1, 2, 3, 4, 5])).toEqual([]);
  });

  it('returns an array of missing numbers in ascending order', () => {
    expect(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([5, 6]);
  });

  it('returns an array of missing numbers when the input array contains duplicates', () => {
    expect(findDisappearedNumbers([1, 1, 1, 1, 1])).toEqual([2, 3, 4, 5]);
  });
});
