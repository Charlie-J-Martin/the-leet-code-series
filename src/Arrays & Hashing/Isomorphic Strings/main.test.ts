import { isIsomorphic } from './main';

describe('isIsomorphic', () => {
  it('returns true for isomorphic strings', () => {
    expect(isIsomorphic('egg', 'add')).toBe(true);
    expect(isIsomorphic('paper', 'title')).toBe(true);
    expect(isIsomorphic('foo', 'bar')).toBe(false);
  });

  it('returns false for non-isomorphic strings', () => {
    expect(isIsomorphic('egg', 'aaa')).toBe(false);
  });

  it('returns true for empty strings', () => {
    expect(isIsomorphic('', '')).toBe(true);
  });

  it('returns true for single-character strings', () => {
    expect(isIsomorphic('a', 'a')).toBe(true);
    expect(isIsomorphic('x', 'y')).toBe(true);
  });
});
