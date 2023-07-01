import { removeElement, sort } from './main';

describe('removeElement', () => {
  it('should remove elements and return the count', () => {
    const nums1 = [3, 2, 2, 3];
    const val1 = 3;
    const expectedNums1 = [2, 2];
    const expectedLength1 = expectedNums1.length;
    const k1 = removeElement(nums1, val1);
    expect(k1).toBe(expectedLength1);
    sort(nums1, 0, k1);
    expect(nums1).toEqual(expectedNums1);

    const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
    const val2 = 2;
    const expectedNums2 = [0, 0, 1, 3, 4];
    const expectedLength2 = expectedNums2.length;
    const k2 = removeElement(nums2, val2);
    expect(k2).toBe(expectedLength2);
    sort(nums2, 0, k2);
    expect(nums2).toEqual(expectedNums2);
  });
});
