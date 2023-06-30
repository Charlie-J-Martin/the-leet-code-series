# Is Subsequence

### Breif

Given two strings `s` and `t`, return `true` if `s` is a subsequence of `t`, or `false` otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "`ace`" is a subsequence of "`abcde`" while "`aec`" is not).

Example 1:

```
Input: s = "abc", t = "ahbgdc"
Output: true
```

Example 2:

```
Input: s = "axc", t = "ahbgdc"
Output: false
```

### Solution

Brute Force - Linear Search

```
export const isSubsequence = (s: string, t: string): boolean => {
  let j = 0;

  for (let i = 0; i < t.length; i++) {
    if (s[j] === t[i]) {
      j++;
    }
  }

  if (j === s.length) {
    return true;
  }
  return false;
};

```

#### Description
- Firstly intialise a variable `j` that will be used to track whether or not all characters in `s` are present in `t`.
- Loop through all elements of `t` and for each element we check the current letter of `s[j]` is the same as `t[i]`.
- If this is the same then we want to increment the variable of `j` as we have found a letter of `s` in `t`.
- Once all characters in `t` have been iterated over, we then want to check if the variable of `j` is the same length of `s`.
- If `j` is the same length of `s` we know that `s` is a subsequence of `t` and return `true`. If the length is not equal then we can return `false`.

#### Time Complexity

`O(n)`
- This algorithm is of `O(n)` where `n` is the length of value that we're iterating over, in which there is a constant time for performing a comparison of the current value of `t` and `s`.


#### Other Potential Solutions

#### Link
https://leetcode.com/problems/is-subsequence/description/
