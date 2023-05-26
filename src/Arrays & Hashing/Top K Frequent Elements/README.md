# Top K Frequent Elements
### Brief

Given an integer array `nums` and an integer `k`, return the `k` most frequent elements. You may return the answer in any order.

Example 1:

```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```

Example 2:

```
Input: nums = [1], k = 1
Output: [1]
```

Example 3:

```
Input: strs = [3,1,1,2,3], k = 2
Output: [1,3]
```

### Solution

HashMap - Sort

```
const topKFrequent = (nums: number[], k: number): number[] => {
    const hashMap = new Map();

    // Storing the frequency per value into a hashMap
    for (let i = 0; i < nums.length; i++) {
        if (hashMap.has(nums[i])) {
            hashMap.set(nums[i], hashMap.get(nums[i]) + 1);
        } else {
            hashMap.set(nums[i], 1);
        }
    }

    // Sorting the hashMap values based on value - Highest to lowest
    const entries = [...hashMap.entries()];
    const sortedEntries = entries.sort((a, b) => b[1] - a[1]);
    const sortedHashMap = new Map(sortedEntries);

    const kElements = [];
    // Looping through the number elements needed
    for (const [key] of sortedHashMap) {
        kElements.push(key);
        if (kElements.length === k) {
            break;
        }
    }
    return kElements;
};
```

#### Description
- Initialise a `hashMap` that will be used to store the frequency of numbers that occur.
- Loop through the `nums` array.
- If the `hashMap` contains the current value then we want to add one to the count.
- If the `hashMap` does not contain the current value, then we want to add a new key of the current number and set the count to one.
- We then sort through the `hashMap` ordering by the values highest to lowest.
- We have to convert the `hashMap` to an array in order to sort it.
- We then have to create a new `hashMap` with the sorted array.
- Initialise a variable called `kElements` that will hold our elements.
- Loop through the `keys` in our `sortedHashMap` and push the current `key` in the iteration.
- If statement to check that we have the required amount of elements `k`.
- Return `k` elements.

#### Time Complexity
`O(n log n)`

The time complexity of the code is O(n log n), where n is the length of the input array nums.

1. Creating and populating the hashMap takes O(n) time. This involves iterating through the nums array once and performing constant-time operations for each element.

2. Sorting the hashMap values takes O(m log m) time, where m is the number of unique elements in the nums array. In the worst case, m can be equal to n, resulting in a time complexity of O(n log n). This step involves converting the hashMap to an array of entries, sorting them based on their values, and creating a new sorted hashMap.

3. Building the kElements array takes O(m) time, where m is the number of unique elements in the nums array. In the worst case, m can be equal to n, resulting in a time complexity of O(n). This step involves iterating through the sorted hashMap and adding the keys to the kElements array until the desired number of elements k is reached.

Therefore, the overall time complexity is dominated by the sorting step, resulting in O(n log n) complexity.

#### Other Potential Solutions

- HashMap - Sort
- Set - Frequency Counter

#### Link
https://leetcode.com/problems/top-k-frequent-elements/
