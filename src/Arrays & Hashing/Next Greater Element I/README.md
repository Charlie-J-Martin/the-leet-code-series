# Next Greater Element I

### Brief

The next greater element of some element `x` in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays `nums1` and `nums2`, where `nums1` is a subset of `nums2`.

For each `0 <= i < nums1.length`, find the index `j` such that `nums1[i] == nums2[j]` and determine the next greater element of `nums2[j]` in `nums2`. If there is no next greater element, then the answer for this query is `-1`.

Return an array `ans` of length `nums1.length` such that `ans[i]` is the next greater element as described above.

Example 1:

```
Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
Output: [-1,3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 4 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
- 1 is underlined in nums2 = [1,3,4,2]. The next greater element is 3.
- 2 is underlined in nums2 = [1,3,4,2]. There is no next greater element, so the answer is -1.
```

Example 2:

```
Input: nums1 = [2,4], nums2 = [1,2,3,4]
Output: [3,-1]
Explanation: The next greater element for each value of nums1 is as follows:
- 2 is underlined in nums2 = [1,2,3,4]. The next greater element is 3.
- 4 is underlined in nums2 = [1,2,3,4]. There is no next greater element, so the answer is -1.
```

### Solution

```
export const nextGreaterElement = (
  nums1: number[],
  nums2: number[]
): number[] => {
  let output = [];

  for (let i = 0; i < nums1.length; i++) {
    const currentValue = nums1[i];
    const positionOfCurrentValueInNums2 = nums2.indexOf(currentValue);
    let greatestElement = -1;

    for (let j = positionOfCurrentValueInNums2 + 1; j < nums2.length; j++) {
      if (nums2[j] > currentValue) {
        greatestElement = nums2[j];
        break;
      }
    }
    output.push(greatestElement);
  }
  return output;
};
```

#### Description

- Firstly, we create a variable called output that will be used to push and hold values to that are greater than the current element.
- For loop, iterating over nums1 elements.
- For each element in `nums1` we first find the current value. Represented by `currentValue` = `nums1[i]`.
- We then find the position of where the `currentValue` exist in `nums2` using `nums2.indexOf(currentValue)`.
- We set the `greatestElement` equal to `-1`, as this is the value we want to default to if there is no greater element.
- To find the `greatestElement` we then iterate over `nums2`:
- Iterating from the position of the current element in `nums2 + 1` so that we're iterating from the next element.
- If `nums2[j]` is greater than the `currentValue` then we set the `greatestElement` to `nums2[j]`
- We `break` out of this.
- Push the `greatestElement` to the output.
- Then return the output.

#### Time Complexity

`O(n * m)`
The time complexity of the provided code is `O(n * m)`, where `n` is the length of `nums1` and `m` is the length of `nums2`.

The outer loop iterates over the elements of `nums1`, which has a length of `n`. Within each iteration, the code performs an indexOf operation on `nums2` to find the position of the current value in `nums1`. This indexOf operation has a time complexity of `O(m)` since `nums2` has a length of `m`.

Then, the inner loop iterates from `positionOfCurrentValueInNums2 + 1` to the end of `nums2`, which has a length of `m`. In the worst case, the inner loop may iterate through all elements of `nums2`.

Overall, the code has a time complexity of `O(n * m)` because the outer loop runs `n` times, and within each iteration, the inner loop may run up to `m` times.

#### Other Potential Solutions

`O(n+m)`

```
var nextGreaterElement = function(nums1, nums2) {

    let nums1Idx = new Map(); {
        let idx = 0;
        for(const n of nums1)
            nums1Idx.set(n, idx++);
    }
    let res = [];
    for(let i = 0; i < nums1.length; i++)
        res.push(-1);

    let stack = [];
    for(let i = 0; i < nums2.length; i++) {
        let cur = nums2[i];

        // while stack is not empty and current is greater than the top of the stack
        while(stack.length > 0 && cur > stack[stack.length - 1]) {
            let val = stack.pop();
            let idx = nums1Idx.get(val);
            res[idx] = cur;
        }

        if(nums1Idx.has(cur))
            stack.push(cur);
    }

    return res;
};

```

#### Link

https://leetcode.com/problems/next-greater-element-i/
