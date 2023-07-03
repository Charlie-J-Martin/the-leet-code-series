export const isIsomorphic = (s: string, t: string): boolean => {
  let isIsomorphic = false;
  const letterSMap = new Map();
  const letterTMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const letterS = s[i];
    const letterT = t[i];

    if (letterSMap.has(letterS)) {
      if (letterSMap.get(letterS) !== letterT) {
        return isIsomorphic;
      }
    }

    if (letterTMap.has(letterT)) {
      if (letterTMap.get(letterT) !== letterS) {
        return isIsomorphic;
      }
    }

    letterSMap.set(letterS, letterT);
    letterTMap.set(letterT, letterS);
  }
  isIsomorphic = true;
  return isIsomorphic;
};
