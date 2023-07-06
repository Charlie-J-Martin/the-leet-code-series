export const majorityElement = (nums: number[]): number => {
  const numsFrequencyMapping: Record<number, number> = {};
  const majorityValue = Math.ceil(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    if (numsFrequencyMapping[currentNumber]) {
      numsFrequencyMapping[currentNumber]++;
    } else {
      numsFrequencyMapping[currentNumber] = 1;
    }
  }

  for (const key in numsFrequencyMapping) {
    const value = numsFrequencyMapping[key];
    if (value >= majorityValue) {
      return +key;
    }
  }
  return 0;
};
