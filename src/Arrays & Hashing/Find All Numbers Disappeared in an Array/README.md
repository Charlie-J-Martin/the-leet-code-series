# Find All Numbers Disappeared in an Array

### Brief

Given an array `nums` of `n` integers where `nums[i]` is in the range `[1, n]`, return an array of all the integers in the range `[1, n]` that do not appear in `nums`.

Example 1:

```
Input: nums = [4,3,2,7,8,2,3,1]
Output: [5,6]
```

Example 2:

```
Input: nums = [1,1]
Output: [2]
```

### Solution

```
const findDisappearedNumbers = (nums: number[]): number[] => {
    const hashSet = new Set();
    for(let i = 1; i <= nums.length; i++){
        if(!hashSet.has(i)){
            hashSet.add(i)
        }
    }

    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i]
        if(hashSet.has(currentNumber)){
            hashSet.delete(currentNumber)
        }
    }
    const output = Array.from(hashSet) as number[];
    return output;
};
```

#### Description

- Firstly, we initialise a hashSet which will be used to hold the values of the range `[1, n]`.
- For loop to store all the values between `[1, n]`.
- Additional for loop which will then check if the current number in `nums` is present in our set. If it is then we want to delete it.
- Once the for loop is done we convert the remaining numbers in the set to an array.

#### Time Complexity

`O(n)`

The time complexity of the provided code is `O(n)`, where n is the length of the input array nums. Let's break down the code and analyze the time complexity of each section:

1. Creating the hashSet: This operation takes `O(1)` time since it does not depend on the size of the input array.

2. First loop: The loop iterates from 1 to nums.length, which has a time complexity of `O(n)` because it depends on the length of the input array.

3. Adding elements to hashSet: The add() operation in a Set has an average time complexity of `O(1)`. In the worst case, when there are no hash collisions, the time complexity is `O(1)` for each addition operation. Therefore, the overall time complexity of adding elements to the hashSet in the first loop is `O(n)` since it iterates nums.length times.

4. Second loop: The loop iterates over each element in nums, which has a time complexity of `O(n)` because it depends on the length of the input array.

5. Checking and deleting elements from hashSet: Both the has() and delete() operations in a Set have an average time complexity of `O(1)`. In the worst case, when there are no hash collisions, the time complexity is `O(1)` for each check and deletion operation. Therefore, the overall time complexity of checking and deleting elements from the hashSet in the second loop is `O(n)` since it iterates nums.length times.

6. Creating the output array using Array.from(): This operation takes `O(m)` time, where m is the number of elements in the hashSet. In the worst case, when all elements from 1 to n are missing in nums, the hashSet will contain n elements, resulting in a time complexity of `O(n)` for creating the output array.

Overall, the dominant factor in the time complexity is the size of the input array nums. Thus, the time complexity of the code is `O(n)`.

#### Other Potential Solutions

#### Link

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
