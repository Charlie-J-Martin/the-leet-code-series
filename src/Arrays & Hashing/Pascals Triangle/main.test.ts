import { generate } from './main';

describe('generate', () => {
  test('should return an empty array for numRows = 0', () => {
    expect(generate(0)).toEqual([]);
  });

  test('should return the first row [1] for numRows = 1', () => {
    expect(generate(1)).toEqual([[1]]);
  });

  test('should return the first two rows [[1], [1, 1]] for numRows = 2', () => {
    expect(generate(2)).toEqual([[1], [1, 1]]);
  });

  test("should return the first five rows of Pascal's Triangle", () => {
    expect(generate(5)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });

  test("should return the first ten rows of Pascal's Triangle", () => {
    expect(generate(10)).toEqual([
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
      [1, 5, 10, 10, 5, 1],
      [1, 6, 15, 20, 15, 6, 1],
      [1, 7, 21, 35, 35, 21, 7, 1],
      [1, 8, 28, 56, 70, 56, 28, 8, 1],
      [1, 9, 36, 84, 126, 126, 84, 36, 9, 1],
    ]);
  });
});
