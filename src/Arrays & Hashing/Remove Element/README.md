# Contains Duplicate

### Brief

Given an integer array `nums`, return `true` if any value appears at least twice in the array, and return `false` if every element is distinct.

Example 1:

```
Input: nums = [1,2,3,1]
Output: true
```

Example 2:

```
Input: nums = [1,2,3,4]
Output: false
```

Example 3:

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
```

### Solution

Brute Force - Linear Search

```
export const containsDuplicate = (nums: number[]): boolean => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};
```

#### Description

Creating two loops. Loop `i` to loop through each element in the array, loop `j` to compare against. We start from `j = i + 1` as we don't want to compare the same element nor do we need to compare against elements that we have already checked.

#### Time Complexity

`O(n^2)`

The number of operations is proportional to the square of the size of the array, so its time complexity is `O(n^2)`

#### Other Potential Solutions

- Sort - HeapSort
- Hash Set
- Hash Set - Early Exit
