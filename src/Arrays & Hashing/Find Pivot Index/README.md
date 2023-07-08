# Find Pivot Index

### Brief

Given an array of integers `nums`, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is `0` because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return `-1`.

Example 1:

```
Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
```

Example 2:

```
Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
```

Example 3:

```
Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
```

### Solution

```
const calculateLeftSum = (leftElements: number[]) => leftElements.reduce(((acc, curr) => acc + curr), 0)
const calculateRightSum = (rightElements: number[]) => rightElements.reduce(((acc, curr) => acc + curr), 0)

const pivotIndex = (nums: number[]): number => {
    for(let pivotIndex = 0; pivotIndex < nums.length; pivotIndex++){
        const leftElements = nums.slice(0, pivotIndex)
        const rightElements = nums.slice(pivotIndex + 1, nums.length)
        const leftSum = calculateLeftSum(leftElements)
        const rightSum = calculateRightSum(rightElements)
        if(leftSum === rightSum) {
            return pivotIndex
        }
    }
    return -1
};
```

#### Description

- We create two functions that are used to calculate the sum of the left elements and right elements around the current pivot. This is using a simple reduce.
- The main function consists of a for loop that iterates over the `nums` array using `i` as the `pivotIndex`.
- Using the `pivotIndex` we then slice the `leftElements` and the `rightElements` which are then used to calculate the left and right sums.
- If the left and the right elements are equal then we return the current `pivotIndex`.
- Else we return `-1`.

#### Time Complexity

` O(n^2)`
The time complexity of the provided code is `O(n^2)`, where n is the length of the input array nums.

The code iterates over each index of the nums array using a for loop, resulting in `O(n)` iterations. Inside the loop, the slice method is used to extract the left and right elements, which has a time complexity of `O(n)` in the worst case. Additionally, the reduce method is called twice for each pivot index, resulting in `O(n)` operations each time.

Therefore, the overall time complexity of the code is `O(n) (iterations) * O(n) (slicing) * O(n) (reduce) = O(n^2)`.

#### Other Potential Solutions

`O(n)`

```
const pivotIndex = (nums: number[]): number => {
    const arraySum = nums.reduce((a, b) => a + b);
    let partialSum = 0;
    let pivotIndex = -1;
    for (let i = 0; i < nums.length && pivotIndex === -1; i++) {
        const rightSum = arraySum - partialSum - nums[i];
        if (partialSum === rightSum) {
            pivotIndex = i;
        }
        partialSum += nums[i];
    }
    return pivotIndex;
};

```

#### Link

https://leetcode.com/problems/find-pivot-index/description/
