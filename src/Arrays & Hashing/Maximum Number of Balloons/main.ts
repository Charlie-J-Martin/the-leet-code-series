export const maxNumberOfBalloons = (text: string): number => {
  const hashMap = new Map();

  for (let i = 0; i < text.length; i++) {
    if (hashMap.get(text[i])) {
      hashMap.set(text[i], hashMap.get(text[i]) + 1);
    } else {
      hashMap.set(text[i], 1);
    }
  }

  const keyWord = 'balloon';
  let freqOfKeyWord = 0;

  for (let i = 0; i < keyWord.length; i++) {
    if (!hashMap.get(keyWord[i])) {
      return freqOfKeyWord;
    }

    if (hashMap.get(keyWord[i])) {
      if (hashMap.get(keyWord[i]) === 1) {
        hashMap.delete(keyWord[i]);
      } else {
        hashMap.set(keyWord[i], hashMap.get(keyWord[i]) - 1);
      }
    }

    if (keyWord[i] === 'n') {
      i = -1;
      freqOfKeyWord++;
    }
  }

  return freqOfKeyWord;
};
