import { productExceptSelf } from './main';

describe('productExceptSelf', () => {
  it('should return the correct output for [1, 2, 3, 4]', () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });

  it('should return an empty array for an empty input', () => {
    expect(productExceptSelf([])).toEqual([]);
  });

  it('should return [1] for an input array with a single element', () => {
    expect(productExceptSelf([1])).toEqual([1]);
  });

  it('should return [0, 0, 0] for an input array with all zeroes', () => {
    expect(productExceptSelf([0, 0, 0])).toEqual([0, 0, 0]);
  });

  it('should return [120, 60, 40, 30, 24] for [1, 2, 3, 4, 5]', () => {
    expect(productExceptSelf([1, 2, 3, 4, 5])).toEqual([120, 60, 40, 30, 24]);
  });
});
