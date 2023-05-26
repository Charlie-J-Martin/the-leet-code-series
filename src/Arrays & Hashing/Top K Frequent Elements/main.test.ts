import { topKFrequent } from './main';

describe('topKFrequent', () => {
  it('returns the top k frequent elements in descending order', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 2;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([1, 2]);
  });

  it('returns the single most frequent element when k is 1', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 1;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([1]);
  });

  it('returns an empty array when k is 0', () => {
    const nums = [1, 1, 1, 2, 2, 3];
    const k = 0;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([]);
  });

  it('returns an empty array when the input array is empty', () => {
    const nums: number[] = [];
    const k = 3;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([]);
  });

  it('returns all unique elements when k is greater than the number of unique elements', () => {
    const nums = [1, 1, 2, 2, 3, 3, 4, 4];
    const k = 5;
    const result = topKFrequent(nums, k);
    expect(result).toEqual([1, 2, 3, 4]);
  });
});
