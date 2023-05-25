export const groupAnagrams = (strs: string[]): string[][] => {
  const hashMap = new Map();

  for (let i = 0; i < strs.length; i++) {
    const current = strs[i].split('').sort().join('');
    if (hashMap.has(current)) {
      const existingValue = hashMap.get(current);
      existingValue.push(strs[i]);
    } else {
      hashMap.set(current, [strs[i]]);
    }
  }

  const arr = [];
  for (let key of hashMap.keys()) {
    const value = hashMap.get(key);
    arr.push(value);
  }

  return arr;
};
