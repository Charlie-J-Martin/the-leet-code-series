# Concatenation of Array

### Brief

Given an integer array `nums` of length `n`, you want to create an array `ans` of length 2n where `ans[i] == nums[i]` and `ans[i + n] == nums[i]` for `0 <= i < n (0-indexed)`.

Specifically, `ans` is the concatenation of two nums arrays.

Return the array `ans`.

Example 1:

```
Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]
```

Example 2:

```
Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]
```

### Solution

Spread

```
const getConcatenation = (nums: number[]): number[] => {
    return [...nums , ...nums];
};
```

#### Description

- Return a new array using the spread operator to join the original array of `nums` twice to form one array.

#### Time Complexity

`O(n)`

The time complexity of the given function `getConcatenation` is `O(n)`, where `n` is the length of the input array nums.

In the function, the spread operator `(...)` is used twice to concatenate nums with itself. The spread operator creates a new array by copying the elements from the original array.

The time complexity of the spread operator is proportional to the length of the array it spreads. Therefore, spreading nums twice takes `O(n)` time, where n is the length of nums. Since there are no other loops or operations in the function, the overall time complexity is `O(n)`.

It's worth noting that the space complexity of this function is also `O(n)` because it creates a new array of size 2n by concatenating nums with itself using the spread operator.

#### Other Potential Solutions

- Concat

#### Link

https://leetcode.com/problems/concatenation-of-array/description/
