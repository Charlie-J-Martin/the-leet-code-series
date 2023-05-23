# Valid Anagram

### Brief

Given two strings `s` and `t`, return `true` if `t` is an anagram of `s`, and `false` otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

```
Input: s = "anagram", t = "nagaram"
Output: true
```

Example 2:

```
Input: s = "rat", t = "car"
Output: false
```

### Solution

Brute Force - Linear Search

```
export const isAnagram = (s: string, t: string): boolean => {
  for (let i = 0; i < s.length; i++) {
    if (t.indexOf(s[i]) !== -1) {
      t =
        t.slice(0, t.indexOf(s[i])) +
        t.slice(t.indexOf(s[i]) + 1);
    } else {
      return false;
    }
  }
  if (t.length === 0) {
    return true;
  }
  return false;
};

```

#### Description

Loop through every letter in `s`. If the current letter of `s` exists anywhere in `t` then remove the current letter of `s` from `t` so that all we're left with is either no letters (making the word `t` an anagram of the word `s`). If there are any remaining letters in `t` then we don't have an anagram.

#### Time Complexity

`O(n^2)`

The main factor contributing to the time complexity is the indexOf method used within the for loop. The indexOf method has a time complexity of O(n), as it iterates through the string nonOriginalString to find the index of a character. Therefore, since the indexOf and slice operations are nested within each other, the overall time complexity becomes `O(n^2)`.

#### Other Potential Solutions

- Sort - HeapSort
- Hash Map - Frequency Counter

#### Link

https://leetcode.com/problems/valid-anagram/description/
