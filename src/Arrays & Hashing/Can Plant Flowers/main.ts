export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
  let numberOfFlowers = 0;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i - 1] !== 1 &&
      flowerbed[i + 1] !== 1 &&
      flowerbed[i] === 0
    ) {
      numberOfFlowers++;
      i++;
    }
  }
  return numberOfFlowers >= n ? true : false;
};
