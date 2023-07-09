export const findDisappearedNumbers = (nums: number[]): number[] => {
  const hashSet = new Set();
  for (let i = 1; i <= nums.length; i++) {
    if (!hashSet.has(i)) {
      hashSet.add(i);
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (hashSet.has(currentNumber)) {
      hashSet.delete(currentNumber);
    }
  }
  const output = Array.from(hashSet) as number[];
  return output;
};
