export const replaceElements = (arr: number[]): number[] => {
  let max = 0;
  let ans = [-1];

  arr = arr.reverse();

  for (let i = 0; i < arr.length - 1; i++) {
      max = Math.max(max, arr[i]);
      ans[i + 1] = max;
  }

  return ans.reverse();
};
