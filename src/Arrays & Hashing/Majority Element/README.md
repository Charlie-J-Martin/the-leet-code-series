# Majority Element

### Brief
Given an array `nums` of size `n`, return the majority element.

The majority element is the element that appears more than `⌊n / 2⌋` times. You may assume that the majority element always exists in the array.



Example 1:

```
Input: nums = [3,2,3]
Output: 3
```

Example 2:
```
Input: nums = [2,2,1,1,1,2,2]
Output: 2
```

### Solution
```
const majorityElement = (nums: number[]): number => {
    const numsFrequencyMapping: Record<number, number> = {};
    const majorityValue = Math.ceil(nums.length / 2)

    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i];
        if(numsFrequencyMapping[currentNumber]) {
            numsFrequencyMapping[currentNumber]++;
        } else {
            numsFrequencyMapping[currentNumber] = 1;
        }
    }

    for (const key in numsFrequencyMapping) {
        const value = numsFrequencyMapping[key];
        if (value >= majorityValue) {
            return +key
        }
    }
};
```

#### Description
- Firstly, we create a key value pair mapping object called `numsFrequencyMapping` which will be used to keep track of the numbers in the array and how often they occur.
- We find what the `majorityValue` is which we will use later to find what element in the array occurs the same amount or greater than the `majorityValue`.
- Basic for loop which will be is used to check if the current number exists in the mapping object:
- Firstly, we create a `currentNumber` variable which will be used to hold the current number within the loop.
- We then check if the `currentNumber` has been stored within the `numsFrequencyMapping`. If it has already then we increase the count by one.
- If it hasn't we create a new key with the `currentNumber` and set the value to `1` as its initial value.

- We then loop through all the keys checking the values that they have.
- If the value is greater than or equal to the `majorityValue` we then return that key, converting the key back to a number.


#### Time Complexity
`O(n)`
The time complexity of the provided code is `O(n)`, where n is the length of the `nums` array.

The code consists of two parts: the first part loops through the `nums` array to create a frequency mapping, and the second part loops through the `numsFrequencyMapping` object to find the majority element.

The first loop has a time complexity of `O(n)` because it iterates through each element in the `nums` array exactly once. The operations performed inside the loop, such as accessing `nums[i]` and updating the `numsFrequencyMapping` object, take constant time.

The second loop iterates through the key-value pairs in the `numsFrequencyMapping` object. The number of key-value pairs is determined by the number of unique elements in the `nums` array. In the worst case, where all elements in `nums` are unique, the loop would iterate through all n elements in the `numsFrequencyMapping` object. Thus, the time complexity of the second loop is also `O(n)`.

Since the two loops are independent and executed sequentially, the overall time complexity of the code is `O(n)` + `O(n)`, which simplifies to `O(n)`.

Therefore, the time complexity of the provided code is `O(n)`, where n is the length of the `nums` array.

#### Other Potential Solutions

#### Link
https://leetcode.com/problems/can-place-flowers/description/
