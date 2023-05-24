export const twoSum = (nums: number[], target: number): number[] => {
  let hashMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    hashMap.set(nums[i], i);
  }

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hashMap.has(complement) && hashMap.get(complement) !== i) {
      return [i, hashMap.get(complement)];
    }
  }
  return [];
};
