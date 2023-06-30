export const longestCommonPrefix = (strings: string[]): string => {
  let output = '';
  const word = strings[0];

  for (let i = 0; i < word.length; i++) {
    const currentChar = word[i];

    for (let j = 1; j < strings.length; j++) {
      const comparatorWord = strings[j];
      const comparatorChar = comparatorWord[i];
      if (currentChar !== comparatorChar) {
        return output;
      }
    }
    output = output.concat(currentChar);
  }

  return output;
};
