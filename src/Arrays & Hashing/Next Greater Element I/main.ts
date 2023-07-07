export const nextGreaterElement = (
  nums1: number[],
  nums2: number[]
): number[] => {
  let output = [];

  for (let i = 0; i < nums1.length; i++) {
    const currentValue = nums1[i];
    const positionOfCurrentValueInNums2 = nums2.indexOf(currentValue);
    let greatestElement = -1;

    for (let j = positionOfCurrentValueInNums2 + 1; j < nums2.length; j++) {
      if (nums2[j] > currentValue) {
        greatestElement = nums2[j];
        break;
      }
    }
    output.push(greatestElement);
  }
  return output;
};
