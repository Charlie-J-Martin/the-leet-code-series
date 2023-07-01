# Pascal's Triangle

### Brief

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:

```
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
```

Example 2:

```
Input: numRows = 1
Output: [[1]]
```

### Solution

Brute Force - Linear Search

```
export const generate = (numRows: number): number[][] => {
    const output = [];
    if(numRows === 1){
        output.push([1]);
    };
    if(numRows >= 2){
        output.push([1]);
        output.push([1, 1]);
    };

    for(let i = 2; i < numRows; i++){
        const previousElements = output[i-1];
        const newElements = [1];
        for(let j = 0; j < previousElements.length - 1; j++){
            const element = previousElements[j] + previousElements[j+1]
            newElements.push(element);
        }
        newElements.push(1)
        output.push(newElements)
    }
    return output;
};
```

#### Description
- Firstly intialise a variable called `output` which is used to store our final result.
- The fact that we have to add the previous elements to calculate the next elements we need to state what the starting elements are. So we have an if check which will add the elements required if only `1` row is required.
- Additionally, we have an if check for when numRows are greater than or equal to 2. This is because we need access to the `2` row elements to calculate the remaining rows if required.
- `For` loop - intialised at `i = 2` as we have already created the first and second row in the output. We want to loop through for the number of times that are required for `numRows`.
- Within the for loop we intialise a variable called `previousElements` this is set to the `output[i-1]`. This variable will hold the previous elements in the array, which will need to calculate the `newElements`.
- Additionally, we intialise a variable called `newElements` which will be used to hold the calculated elements. We intialise this with a `[1]` as in Pascals triangle every row starts with a 1.
- We then intialise another `for` loop which will be used to calculate the `newElements`. This is intialised to `0` as we need to calculate the elements from the starting number in the array. E.g. `[1]` + `[1]`. It is worth noting that the loop is run until it has reached the second element in the `previousElements`. This is because we require two numbers to add together to form a new element.
- We then intialise and set a variable called `element` which is used to store the new calculate element. This is the current index `(j)` for the `previousElements` added to the current index plus one `(j + 1)`.
- The new element is then pushed to our `newElements` array.
- Once all the elements in the previousElements array have been looped through the loop then exits. Where we then push an additional `[1]` element to the `newElements` array as in Pascals triangle every row ends with a 1.


#### Time Complexity

`O(n^2)`

The code you provided generates Pascal's Triangle up to a specified number of rows. Let's analyze its time complexity line by line:

1. `const output = [];`: This initializes an empty array to store the rows of Pascal's Triangle. This operation takes constant time, so it does not affect the overall time complexity.

2. `if (numRows === 1) { output.push([1]); }`: If numRows is equal to 1, it means we only need to generate the first row of Pascal's Triangle, which is `[1]`. This operation takes constant time as we are pushing a single element to the output array.

3. `if (numRows >= 2) { output.push([1]); output.push([1, 1]); }`: If numRows is greater than or equal to 2, it means we need to generate at least the first two rows of Pascal's Triangle, which are `[1]` and `[1, 1]`. This operation also takes constant time as we are pushing two elements to the output array.

4. `for (let i = 2; i < numRows; i++) { ... }`: This loop iterates from 2 to numRows - 1 (exclusive), generating the remaining rows of Pascal's Triangle. The loop runs numRows - 2 times, so its time complexity is O(numRows).

5. Inside the loop:
- `const previousElements = output[i - 1];`: This retrieves the previous row of Pascal's Triangle from the output array. This operation takes constant time.
- `const newElements = [1];`: This initializes a new row with the first element set to 1. This operation takes constant time.
- `for (let j = 0; j < previousElements.length - 1; j++) { ... }`: This loop iterates over the elements of the previous row, excluding the last element. The loop runs previousElements.length - 1 times, which is roughly equal to the number of elements in the previous row. Therefore, its time complexity depends on the number of elements in the previous row, which can be approximated to O(i), where i is the row index.
- Inside the inner loop, `const element = previousElements[j] + previousElements[j + 1];` performs addition on two elements from the previous row. This operation takes constant time.
- `newElements.push(element);` pushes the calculated element to the new row. This
operation takes constant time.

Overall, the time complexity of the inner loop can be approximated to O(i), where i is the row index.

- `newElements.push(1);`: This adds the last element, which is always 1, to the new row. This operation takes constant time.
- `output.push(newElements);`: This adds the newly generated row to the output array. This operation takes constant time.
Therefore, the overall time complexity of the code can be approximated as follows:

`O(1) + O(1) + O(numRows) * (O(1) + O(i) * (O(1) + O(1))) = O(numRows^2)`

So, the time complexity of the code is quadratic, `O(numRows^2)`, where numRows is the number of rows of Pascal's Triangle to generate.

#### Other Potential Solutions
```
var generate = function(num) {

    const outerArray = [];
    // adding first two rows of pascals triangle
    if (num >= 2) {
      outerArray.push([1]);
      outerArray.push([1, 1]);
    } else {
      outerArray.push([1]);
    }

    // will  only run if we had number greater than 2
    if (num > 2) {
      for (let i = 2; i < num; i++) {
        let subArray = [];
         subArray.push(1);
        for (let j = 0; j < outerArray[i - 1].length - 1; j++) {
          subArray.push(outerArray[i - 1][j] + outerArray[i - 1][j + 1]);
        }
        subArray.push(1);
        outerArray.push(subArray);
      }
    }

    return outerArray;
 };
```

#### Link
https://leetcode.com/problems/pascals-triangle/description/
