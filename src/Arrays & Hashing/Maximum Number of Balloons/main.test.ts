import { maxNumberOfBalloons } from './main';

describe('maxNumberOfBalloons', () => {
  it('returns 0 when given an empty string', () => {
    expect(maxNumberOfBalloons('')).toBe(0);
  });

  it('returns 0 when the text does not contain any letters from "balloon"', () => {
    expect(maxNumberOfBalloons('abcdefg')).toBe(0);
  });

  it('returns 1 when the text contains a single occurrence of "balloon"', () => {
    expect(maxNumberOfBalloons('balloon')).toBe(1);
  });

  it('returns the correct number when the text contains multiple occurrences of "balloon"', () => {
    expect(maxNumberOfBalloons('balloonballoonballoon')).toBe(3);
  });

  it('ignores extra characters in the text', () => {
    expect(maxNumberOfBalloons('aballnoblacoon')).toBe(1);
  });
  it('ignores extra characters in the text', () => {
    expect(maxNumberOfBalloons('baasdfblooasdfalllnoasdfon')).toBe(2);
  });
});
