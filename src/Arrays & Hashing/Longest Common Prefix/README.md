# Longest Common Prefix

### Breif

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string `""`.

Example 1:

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### Solution

Brute Force - Linear Search

```
export const longestCommonPrefix = (strings: string[]): string => {
  let output = "";
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


```

#### Description

- Firstly initialise a variable called `output` which is used to store prefix that has been found.
- We then initialise a variable called `word` which is used to hold the first string in the array of strings. This will be the word that we compare every subsequent word with.
- Loop 1 - Looping through each character in the `word`.
- Loop 2 - While in loop 1, loop through each of character of each of the remaining elements in the strings array.
- If the currentChar of `word` is not equal to the current comparatorwords character then exit out of the loops by returning the current output.
- else we concat the current `output` string with the `currentChar` as it exists in all array elements.

#### Time Complexity

`O(n * m)`

The time complexity of the provided code is `O(n * m)`, where n is the number of strings in the strings array and m is the length of the shortest string in the array.

Here's the breakdown of the time complexity analysis:

- The outer loop iterates word.length times, which is proportional to the length of the shortest string in the strings array. This loop determines the number of iterations required to check each character in the common prefix.

- Within the outer loop, the inner loop iterates `(strings.length - 1)` times, which is the number of remaining strings to compare. This loop compares the current character in word with the corresponding character in each of the remaining strings.

- The comparison operation inside the inner loop has a constant time complexity, as it involves comparing two characters using the `!==` operator.

Therefore, the total number of comparisons performed by the algorithm is approximately `(n - 1) * m`, where `n` is the number of strings and `m` is the length of the shortest string.

As a result, the time complexity is `O(n * m)`, indicating a linear relationship between the input size and the number of operations required.

#### Other Potential Solutions

```
const longestCommonPrefix = (strings: string[]): string => {
if(!strings.length) return '';

for(let i = 0; i < strings[0].length; i++) {
        for(let s of strings) {
            if(s[i] !== strings[0][i]) return s.slice(0, i);
        }
    }
    return strings[0];
};
```

#### Link

https://leetcode.com/problems/longest-common-prefix/description/
