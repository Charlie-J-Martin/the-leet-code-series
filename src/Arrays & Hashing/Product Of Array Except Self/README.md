# Product of Array Except Self

### Brief

Given an integer array `nums`, return an array answer such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

Example 1:

```
Input: nums = [1,2,3,4]
Output: [24,12,8,6]
```

Example 2:

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
```

### Solution

Array

```
const productExceptSelf = (nums) => {
    const result = [];
    let leftProductMultiplier = 1;
    let rightProductMultiplier = 1;

    // 1st Pass - Calculate products of elements to the left of each element
    for (let i = 0; i < nums.length; i++) {
        result[i] = leftProductMultiplier;
        leftProductMultiplier *= nums[i];
    }

    // 2nd Pass - Multiply the products with the products of elements to the right
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightProductMultiplier;
        rightProductMultiplier *= nums[i];
    }
    return result;
};
```

#### Description

- Initialise a `result` array which will be used to store the products of elements to the left of each element and then to store the final product of all elements excluding the current element.
- Create two variables called `leftProductMultiplier` and `rightProductMultiplier` which will be used as the initial multipliers.
- For loop - Looping from left to right to calculate the products to the left of each element.

Step By Step - Left to Right - Loop 1

```
result = []
leftProductMultiplier = 1
i = 0
nums[i] = 1
result[i] = leftProductMultiplier; = [1]
leftProductMultiplier *= nums[i]; = 1 * 1 = 1

```

Step By Step - Left to Right - Loop 2

```
result = [1]
leftProductMultiplier = 1
i = 1
nums[i] = 2
result[i] = leftProductMultiplier; = [1]
leftProductMultiplier *= nums[i]; = 1 * 2 = 2
```

Step By Step - Left to Right - Loop 3

```
result = [1, 1]
leftProductMultiplier = 2
i = 2
nums[i] = 3
result[i] = leftProductMultiplier; = [2]
leftProductMultiplier *= nums[i]; = 2 * 3 = 6
```

Step By Step - Left to Right - Loop 4

```
result = [1, 1, 2]
leftProductMultiplier = 6
i = 3
nums[i] = 4
result[i] = leftProductMultiplier; = [6]
leftProductMultiplier *= nums[i]; = 6 * 4 = 24
```

Step By Step - Left to Right - Output

```
result = [1, 1, 2, 6]
leftProductMultiplier = 24
```

Step By Step - Right to Left - Loop 1

```
result =  = [1, 1, 2, 6]
rightProductMultiplier = 1
i = 3
nums[i] = 4
result[i] *= rightProductMultiplier = 6 * 1 = 6
rightProductMultiplier *= nums[i] = 1 * 4 = 4
```

Step By Step - Right to Left - Loop 2

```
result =  = [1, 1, 2, 6]
rightProductMultiplier = 4
i = 2
nums[i] = 3
result[i] *= rightProductMultiplier = 2 * 4 = 8
rightProductMultiplier *= nums[i] = 4 * 3 = 12
```

Step By Step - Right to Left - Loop 3

```
result =  = [1, 1, 8, 6]
rightProductMultiplier = 12
i = 1
nums[i] = 2
result[i] *= rightProductMultiplier = 1 * 12 = 12
rightProductMultiplier *= nums[i] = 12 * 2 = 24
```

Step By Step - Right to Left - Loop 4

```
result =  = [1, 12, 8, 6]
rightProductMultiplier = 24
i = 0
nums[i] = 1
result[i] *= rightProductMultiplier = 1 * 24 = 24
rightProductMultiplier *= nums[i] = 24 * 1 = 24
```

Step By Step - Left to Right - Output

```
result = [24, 12, 8, 6]
rightProductMultiplier = 24
```

- Final result is then returned.

#### Time Complexity

`O(n)`
The time complexity of the given code is O(n), where n is the length of the input array nums.

The code consists of two passes over the input array. In the first pass, it calculates the products of elements to the left of each element and stores them in the result array. This pass has a time complexity of O(n) because it iterates through the nums array once.

In the second pass, it multiplies each element in the result array with the corresponding product of elements to the right. Again, this pass has a time complexity of O(n) because it also iterates through the nums array once, but in reverse order.

Since both passes have a time complexity of O(n) and there are no nested loops or other significant operations, the overall time complexity of the code is O(n).

#### Other Potential Solutions

- N/a

#### Link

https://leetcode.com/problems/product-of-array-except-self/description/
