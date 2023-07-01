export const removeElement = (nums: number[], val: number): number => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

export const sort = (nums: number[], start: number, end: number) => {
  // Implementation of sorting function
  // You can replace this with any sorting algorithm of your choice
  nums.splice(start, end - start, ...nums.slice(start, end).sort());
};
