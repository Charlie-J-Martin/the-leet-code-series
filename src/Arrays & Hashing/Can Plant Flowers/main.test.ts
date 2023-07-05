import { canPlaceFlowers } from './main';

describe('canPlaceFlowers', () => {
  it('should return true when there are enough empty adjacent spots', () => {
    const flowerbed = [0, 0, 0, 0, 0];
    const n = 2;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return false when there are not enough empty adjacent spots', () => {
    const flowerbed = [0, 0, 1, 0, 0];
    const n = 2;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return true when there are enough empty spots at the beginning', () => {
    const flowerbed = [0, 0, 1, 1, 0];
    const n = 1;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return true when there are enough empty spots at the end', () => {
    const flowerbed = [0, 1, 1, 0, 0];
    const n = 1;
    expect(canPlaceFlowers(flowerbed, n)).toBe(true);
  });

  it('should return false when the flowerbed is empty and n is positive', () => {
    const flowerbed: number[] = [];
    const n = 1;
    expect(canPlaceFlowers(flowerbed, n)).toBe(false);
  });
});
