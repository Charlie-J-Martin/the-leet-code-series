import { nextGreaterElement } from './main';

describe('nextGreaterElement', () => {
  test('returns the next greater element when nums1 and nums2 have matching elements', () => {
    const nums1: number[] = [4, 1, 2];
    const nums2: number[] = [1, 3, 4, 2];
    const result = nextGreaterElement(nums1, nums2);
    expect(result).toEqual([-1,3,-1]);
  });

  test('returns the next greater element when nums2 has greater elements', () => {
    const nums1: number[] = [2,4];
    const nums2: number[] = [1,2,3,4];
    const result = nextGreaterElement(nums1, nums2);
    expect(result).toEqual([3,-1]);
  });

  test('returns the next greater element when nums2 has greater elements', () => {
    const nums1: number[] = [1,3,5,2,4];
    const nums2: number[] = [6,5,4,3,2,1,7];
    const result = nextGreaterElement(nums1, nums2);
    expect(result).toEqual([7,7,7,7,7]);
  });
});
