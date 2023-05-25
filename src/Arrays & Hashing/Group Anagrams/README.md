# Group Anagrams

### Brief

Given an array of strings `strs`, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

Example 2:

```
Input: strs = [""]
Output: [[""]]
```

Example 3:

```
Input: strs = ["a"]
Output: [["a"]]
```

### Solution

HashMap - Sort

```
const groupAnagrams = (strs: string[]): string[][] => {
    const hashMap = new Map();

    for(let i = 0; i < strs.length; i++){
        const current = strs[i].split('').sort().join('');
        if(hashMap.has(current)){
            const existingValue = hashMap.get(current);
            existingValue.push(strs[i])
        } else {
            hashMap.set(current, [strs[i]])
        }
    }

    const arr = [];
    for(let key of hashMap.keys()){
        const value = hashMap.get(key);
        arr.push(value);
    };

    return arr;
};
```

#### Description
- Initialise a hashMap. Which will be used to store our keys (of letters) and our value of all the words that contain the keys (of letters).
- Loop through each string:
- Split the current string into separate letters, sort the letters so that they are in alphabetical order, then join the letters together to form the current value.
- Check if the current string exists in the hashMap:
- If it doesn't then we want to setup a new key with the value current and a value of an array with the string in question.
- If it does exist then we want to add to the current key with the additional value of string. We do this by get the current value and then pushing the new value to it.
- After we have looped from the string array and created the hashMap we then create a new const of `arr` which will be used as our returned array.
- We then loop through the keys within the hashMap and push the value of each key to the array. To form an array of string arrays.
- This is then returned.

#### Time Complexity

`O(m * log(m))`

1. Initializing the `hashMap` takes constant time, so it can be ignored. `O(1)`
2. The first for loop iterates over each string in the `strs` array. Since there are `n` strings in total, the time complexity of this loop is `O(n)`.
3. Inside the loop, the current string `strs[i]` is split into an array of characters, sorted, and then joined back into a string. These operations take `O(m * log(m))` time, where `m` is the length of the current string.
4. Checking if `hashMap` has a key and accessing its value both take constant time on average, so they can be ignored. `O(1)`
5. If the key exists in `hashMap`, the current string is appended to the existing value. This operation takes constant time. `O(1)`
6. If the key doesn't exist in `hashMap`, a new key-value pair is added to the map. This operation takes constant time. `O(1)`
7. After the first loop, arr is initialized as an empty array, which takes constant time.
8. The second for...of loop iterates over each key in `hashMap`. Since there can be at most `n` keys in `hashMap`, the time complexity of this loop is `O(n)`.
9. Inside the loop, the value corresponding to the current key is retrieved from `hashMap`, and it is pushed into the `arr` array. These operations take constant time. `O(1)`
10. Finally, `arr` is returned, which takes constant time. `O(1)`

#### Other Potential Solutions

- HashMap - HeapSort
- HashMap
- Linear Search - Brute Force

#### Link
https://leetcode.com/problems/group-anagrams/

