# Can Plant Flowers

### Brief

You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return true if `n` new flowers can be planted in the `flowerbed` without violating the no-adjacent-flowers rule and `false` otherwise.

Example 1:

```
Input: flowerbed = [1,0,0,0,1], n = 1
Output: true
```

Example 2:

```
Input: flowerbed = [1,0,0,0,1], n = 2
Output: false
```

### Solution

```
export const canPlaceFlowers = (flowerbed: number[], n: number): boolean => {
    let numberOfFlowers = 0;
    for(let i = 0; i < flowerbed.length; i++){
        if(flowerbed[i-1] !== 1 && flowerbed[i+1] !== 1 && flowerbed[i] === 0){
            numberOfFlowers++;
            i++;
        };
    }
    return numberOfFlowers >= n ? true : false;
};
```

#### Description

- Firstly, create a variable called `numberOfFlowers` which will be used to track the number of flowers that can be planted within the flowerbed. We will use this to check if `n` number of flowers can be planted or not.
- For loop through the `flowerbed` and check if:
- The previous element is not `1`.
- The next element is not `1`.
- The current element is `0`.
- If those conditions are met then we increment the `numberOfFlowers` count.
- We also increment the index by `1` as we want to skip over the next element as we know that this index cannot have flowers planted.
- Once all elements have be iterated over we then check if `numberOfFlowers` is greater than or equal to `n` and use a ternary operator accordingly.

#### Time Complexity

`O(n)`
The time complexity of the given code is O(n), where n is the length of the flowerbed array.

The code iterates through the flowerbed array using a for loop, which runs for the entire length of the array (flowerbed.length). Within each iteration, a constant number of operations are performed to check the adjacent elements and the current element.

Therefore, the time complexity is linearly proportional to the size of the flowerbed array, making it O(n).

#### Other Potential Solutions

#### Link

https://leetcode.com/problems/can-place-flowers/description/
