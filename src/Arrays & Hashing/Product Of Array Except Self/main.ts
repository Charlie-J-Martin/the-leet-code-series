export const productExceptSelf = (nums: number[]) => {
  const result = [];
  let leftProductMultiplier = 1;
  let rightProductMultiplier = 1;

  // 1st Pass - Calculate products of elements to the left of each element
  for (let i = 0; i < nums.length; i++) {
    result[i] = leftProductMultiplier;
    leftProductMultiplier *= nums[i];
  }

  // 2nd Pass - Multiply the products with the products of elements to the right
  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= rightProductMultiplier;
    rightProductMultiplier *= nums[i];
  }
  return result;
};
