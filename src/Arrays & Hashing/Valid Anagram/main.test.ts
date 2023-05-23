import { isAnagram } from './main';

test('Empty strings are anagrams', () => {
  expect(isAnagram('', '')).toBe(true);
});

test('Anagrams with lowercase letters', () => {
  expect(isAnagram('listen', 'silent')).toBe(true);
});

test('Non-anagrams with lowercase letters', () => {
  expect(isAnagram('hello', 'world')).toBe(false);
});

test('Anagrams with uppercase letters', () => {
  expect(isAnagram('LISTEN', 'SILENT')).toBe(true);
});

test('Non-anagrams with uppercase letters', () => {
  expect(isAnagram('HELLO', 'WORLD')).toBe(false);
});
