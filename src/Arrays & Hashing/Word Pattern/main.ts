export const wordPattern = (pattern: string, s: string): boolean => {
  let output = false;
  const sArray = s.split(' ');
  const patternMap = new Map();
  const sMap = new Map();

  if (pattern.length !== sArray.length) {
    return output;
  }

  for (let i = 0; i < pattern.length; i++) {
    if (patternMap.has(pattern[i])) {
      if (patternMap.get(pattern[i]) !== sArray[i]) {
        return output;
      }
    }

    if (sMap.has(sArray[i])) {
      if (sMap.get(sArray[i]) !== pattern[i]) {
        return output;
      }
    }

    patternMap.set(pattern[i], sArray[i]);
    sMap.set(sArray[i], pattern[i]);
  }

  output = true;
  return output;
};
