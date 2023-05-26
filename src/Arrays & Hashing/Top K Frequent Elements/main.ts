export const topKFrequent = (nums: number[], k: number): number[] => {
  const hashMap: Map<number, number> = new Map();

  // Storing the frequency per value into a hashMap
  for (let i = 0; i < nums.length; i++) {
    if (hashMap.has(nums[i])) {
      hashMap.set(nums[i], hashMap.get(nums[i])! + 1);
    } else {
      hashMap.set(nums[i], 1);
    }
  }

  // Sorting the hashMap values based on value - Highest to lowest
  const entries: [number, number][] = [...hashMap.entries()];
  const sortedEntries: [number, number][] = entries.sort((a, b) => b[1] - a[1]);
  const sortedHashMap: Map<number, number> = new Map(sortedEntries);

  const kElements: number[] = [];
  // Looping through the number elements needed
  for (const [key] of sortedHashMap) {
    if (kElements.length === k) {
      break;
    }
    kElements.push(key);
  }
  return kElements;
};
