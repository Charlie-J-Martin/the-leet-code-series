# Length of Last Word

### Brief
Given a string `s` consisting of words and spaces, return the length of the last word in the string.

A word is a maximal substring consisting of non-space characters only.

Example 1:

```
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
```

Example 2:

```
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.
```
Example 3:

```
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with length 6.
```

### Solution 1
- Brute Force
```
const replaceElements = (arr: number[]): number[] => {
    const newElements = [];
    let highestElement = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(highestElement < arr[j]){
                highestElement = arr[j];
            };
        };
        newElements.push(highestElement);
        highestElement = 0;
    }
    newElements[arr.length - 1] = -1;
    return newElements;
};
```
#### Description
- Initialise a new array called `newElements` which will be used to hold the `highestElement` to the right of the current index.
- Initialise a variable called `highestElement` which will be used to hold the current `highestElement` in the iteration.
- For loop to loop through each element.
- Nested for loop within the first loop to compare the `highestElement` with the current element. If this is true then we set the `highestElement` to that value.
- This loop then completes and we push the highest value to the `newElements` array.
- Set the `highestElement` back to 0.
- This continues until the first for loop has completed.
- We then replace the last value with `-1` as stated in the description.
- Finally we return `newElements`.

### Solution 2
- Reverse
```
const replaceElements = (arr: number[]): number[] => {
    let max = 0;
    let ans = [-1];

    arr = arr.reverse();

    for (let i = 0; i < arr.length - 1; i++) {
        max = Math.max(max, arr[i]);
        ans[i + 1] = max;
    }

    return ans.reverse();
};
```
#### Description
- First we initialise a `max` variable which we will use to store the highest element.
- Secondly, we initialise a `ans` array with the value of `[-1]` as this is the value that has to be at the end of the final result.
- We then reverse the original array. `[17,18,5,4,6,1]` becomes `[1,6,4,5,18,17]`.
- Loop through the reversed array starting at index `0` and iterating until we get to the length minus 1 as we want to disregard the first element in the original array as we are finding the greatest element to the right.
- The 1st iteration will set max and compare  first element with max.`max = -1 -> 1`.
- The 2nd iteration will set max and compare second element with max.`max = 1 -> 6`.
- The 3rd iteration will set max and compare second element with max.`max = 6 -> 4`.
- The 4th iteration will set max and compare second element with max.`max = 6 -> 5`.
- The 5th iteration will set max and compare second element with max.`max = 6 -> 18`.
- We do not compare the final element as we intend to reverse the array.
- we reverse the array to give us all the elements with Greatest Element on Right Side

#### Time Complexity
`O(n)`

The time complexity of the given code snippet can be analyzed as follows:

Reversing the array: The line arr = arr.reverse(); reverses the input array. The time complexity of the `reverse()` method is `O(n)`, where `n` is the length of the array.

Iterating over the array: The for loop iterates over the array from index 0 to arr.length - 1. Therefore, the loop will execute `n - 1` times, where `n` is the length of the array.

Within the loop, the following operations are performed:

Computing the maximum: The line `max = Math.max(max, arr[i])`; compares the current element with the current maximum. This operation has a constant time complexity of `O(1)`.
Assigning values to ans array: The line `ans[i + 1]` = max; assigns a value to the ans array at index i + 1. This operation also has a constant time complexity of `O(1)`.
Reversing the ans array: The line return `ans.reverse();` reverses the ans array before returning it. The time complexity of the reverse() method is `O(n)`, where n is the length of the array.

Overall, the dominant factor affecting the time complexity is the array reversal operations. Since both the input array and the ans array are reversed, the time complexity of the code can be approximated as `O(n)`, where n is the length of the input array.

#### Other Potential Solutions
- Backward - In-Place

#### Link
https://leetcode.com/problems/length-of-last-word/
