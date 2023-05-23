export const isAnagram = (s: string, t: string): boolean => {
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) !== -1) {
      t = t.slice(0, t.indexOf(s[i])) + t.slice(t.indexOf(s[i]) + 1);
    } else {
      return false;
    }
  }
  if (t.length === 0) {
    return true;
  }
  return false;
};
