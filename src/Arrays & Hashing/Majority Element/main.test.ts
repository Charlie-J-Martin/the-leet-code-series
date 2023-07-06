import { majorityElement } from './main';

describe('majorityElement', () => {
  it('should return the majority element when it exists', () => {
    const nums = [2, 3, 2, 3, 2, 2, 2];
    expect(majorityElement(nums)).toBe(2);
  });

  it('should return 0 when there is no majority element', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(majorityElement(nums)).toBe(0);
  });

  it('should return the only element when the array contains only one element', () => {
    const nums = [5];
    expect(majorityElement(nums)).toBe(5);
  });
});
