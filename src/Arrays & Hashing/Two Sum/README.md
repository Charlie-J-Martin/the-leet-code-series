# Two Sum

### Brief

Given an array of integers `nums` and an integer `target`, return indices of the two numbers such that they add up to `target`.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

### Solution

HashMap - 2 Passes

```
const twoSum = (nums: number[], target: number): number[] => {
  let hashMap = new Map()
  for(let i = 0; i < nums.length; i++){
    hashMap.set(nums[i], i)
  };

  for(let i = 0; i < nums.length; i++){
    const complement = target - nums[i];
    if(hashMap.has(complement) && hashMap.get(complement) !== i){
      return [i, hashMap.get(complement)]
    }
  }
};

```

#### Description

- Initialise a `hashMap`.
- Loop through all elements and store the numbers and their index positions within the `hashMap`.
- Loop through all elements again.
- Calculate the `complement` (value required to satisfy the conditions required).
- Check if `complement` exists in the `hashMap` and check that the `complement` is not the current `index` position. (As we can not use the same elements more than once).
- If the `if` condition is met then return the current `index` and the index of the `complement`.

#### Time Complexity

`O(n)`

The function uses a hash map to store the numbers from the nums array along with their corresponding indices. The first for loop has a complexity of `O(n)` because it iterates through the nums array and performs a constant time operation of inserting each number and its index into the hash map.

The second for loop also has a complexity of `O(n)` because it iterates through the nums array once again. Within each iteration, it performs constant time operations such as calculating the complement, checking if the complement exists in the hash map, and retrieving the index from the hash map.

Since the two loops are not nested, but rather executed sequentially, the overall time complexity is `O(n)`.

#### Other Potential Solutions

- Brute Force - Linear Search
- Hash Map - 1 Pass

#### Link

https://leetcode.com/problems/two-sum/description/
