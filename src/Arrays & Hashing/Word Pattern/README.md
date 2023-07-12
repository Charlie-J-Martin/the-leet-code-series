# Word Pattern

### Brief

Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in `pattern` and a non-empty word in `s`.

Example 1:

```
Input: pattern = "abba", s = "dog cat cat dog"
Output: true
```

Example 2:

```
Input: pattern = "abba", s = "dog cat cat fish"
Output: false
```

Example 3:

```
Input: pattern = "aaaa", s = "dog cat cat dog"
Output: false
```

### Solution

```
const wordPattern = (pattern: string, s: string): boolean => {
    let output = false;
    const sArray = s.split(' ');
    const patternMap = new Map();
    const sMap = new Map();

    if(pattern.length !== sArray.length){
        return output;
    }

    for (let i = 0; i < pattern.length; i++) {
        if (patternMap.has(pattern[i])) {
            if (patternMap.get(pattern[i]) !== sArray[i]) {
                return output;
            }
        }

        if (sMap.has(sArray[i])) {
            if (sMap.get(sArray[i]) !== pattern[i]) {
                return output;
            }
        }

        patternMap.set(pattern[i], sArray[i]);
        sMap.set(sArray[i], pattern[i]);
    }

    output = true;
    return output;
};

```

#### Description

- Split out the `s` string into an array called `sArray`.
- Initialise two Maps which will be used to hold the mapping of pattern letters to s elements and vice versa.
- For loop:
- Checking if the `patternMap` has the current `pattern[i]`, if it does we check that the value is equal to the current element in the `sArray`. If it is not then the pattern does not match.
- We then apply the same logic to the a `sMap` checking the current `s[i]`.
- If both have passed the if statement we then set the mapping in the `patternMap` and `sMap` to the relevant output.
- If the for loop iterates over all value sucessfully then we can set `output` to `true` and return `output`.

#### Time Complexity

`O(n)`
The time complexity of this code is `O(n)`, where `n` is the length of the pattern or the number of words in the string `s`.

The code iterates over the pattern string and the sArray (created by splitting the input string `s`). The loop runs for the length of the pattern, so it has a time complexity of `O(n)`.

Within the loop, the code performs operations such as checking if a character or word exists in a map, retrieving values from the map, and setting values in the map. These operations have an average time complexity of `O(1)` for a map data structure.

Therefore, the overall time complexity of the code is `O(n)`, where `n` is the length of the pattern or the number of words in the string `s`.

#### Other Potential Solutions

```
// time coplexity O(n)
// space complexity O(n)

var wordPattern = function(pattern, s) {

s = s.split(' ');

if(s.length !== pattern.length) return false;

wordToChar = new Map();
charToWord = new Map();

for(let i = 0; i < pattern.length; i++) {
    wordToChar.set(s[i], pattern[i]);
    charToWord.set(pattern[i], s[i]);
};


for(let i = 0; i < pattern.length; i++)  {
    if(charToWord.get(pattern[i]) !== s[i] || pattern[i] !== wordToChar.get(s[i])) {
        return false;
    }
}

return true;
};

```

#### Link

https://leetcode.com/problems/word-pattern
