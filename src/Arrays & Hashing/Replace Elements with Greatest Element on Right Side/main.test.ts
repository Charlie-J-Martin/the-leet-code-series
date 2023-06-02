import { replaceElements } from './main';

describe('replaceElements', () => {
  it('should return [-1] for an empty array', () => {
    expect(replaceElements([])).toEqual([-1]);
  });

  it('should replace elements correctly for a non-empty array', () => {
    expect(replaceElements([1, 2, 3, 4, 5])).toEqual([5, 5, 5, 5, -1]);
  });

  it('should replace elements correctly when the maximum value is at the end', () => {
    expect(replaceElements([1, 2, 3, 4, 5, 6])).toEqual([6, 6, 6, 6, 6, -1]);
  });
});
