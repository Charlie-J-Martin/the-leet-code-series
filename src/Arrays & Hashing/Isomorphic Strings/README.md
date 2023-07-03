# Isomorphic Strings

### Brief
Given two strings `s` and `t`, determine if they are isomorphic.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

```
Input: s = "egg", t = "add"
Output: true
```

Example 2:
```
Input: s = "foo", t = "bar"
Output: false
```

Example 3:
```
Input: s = "paper", t = "title"
Output: true
```

### Solution
```
export const isIsomorphic = (s: string, t: string): boolean => {
  let isIsomorphic = false;
  const letterSMap = new Map();
  const letterTMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const letterS = s[i];
    const letterT = t[i];

    if (letterSMap.has(letterS)) {
      if (letterSMap.get(letterS) !== letterT) {
        return isIsomorphic;
      }
    }

    if (letterTMap.has(letterT)) {
      if (letterTMap.get(letterT) !== letterS) {
        return isIsomorphic;
      }
    }

    letterSMap.set(letterS, letterT);
    letterTMap.set(letterT, letterS);
  }
  isIsomorphic = true;
  return isIsomorphic;
};
```

#### Description
- Firstly, create a variable called `isIsomorphic` which is initialised to `false`.
- We want to create two `Maps` which will hold our mappings for both `s` and `t`.
- We then create a loop which will loop through each letter in `s`.
Within this loop:
- We initialise a variable to hold each of the current letters in the words; `s` and `t` respectively.
- Then we need to check if the current letter of `s` is included in the `letterSMap`. Then we need to check that the current letter `s` has the same mapping for letter `t`.
If this isn't true then we can return `false` as the word is not Isomorphic as two characters may map to the same character.
- We then apply the same to the word `t`. This is because for a word `s` to be isomorphic with the `t`, `t` has to be isomorphic with `s`.
- Then the letters are not present within the map object then we set the `key` and `values` respectively.
- After the loop has run sucessfully we then set `isIsomorphic` to `true` as none of the `if` statements have bailed out.
- This is then `returned`

#### Time Complexity
`O(n)`

The time complexity of this code is `O(n)`, where `n` is the length of the input strings `s` and `t`.

The code uses a `for` loop that iterates over the characters of the strings `s` and `t`. Since the loop runs `s.length` times, the time complexity is directly proportional to the length of the input strings.

Inside the loop, the code performs constant-time operations such as map lookups and map insertions, which do not depend on the input size. Therefore, they do not contribute to the overall time complexity.

In conclusion, the time complexity of this code is `O(n)`, where n is the length of the input strings.

#### Other Potential Solutions

#### Link
https://leetcode.com/problems/isomorphic-strings
