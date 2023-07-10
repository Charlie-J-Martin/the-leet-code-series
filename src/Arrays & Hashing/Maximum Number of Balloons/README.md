# Maximum Number of Balloons

### Brief

Given a string `text`, you want to use the characters of `text` to form as many instances of the word "balloon" as possible.

You can use each character in `text` at most once. Return the maximum number of instances that can be formed.

Example 1:

```
Input: text = "nlaebolko"
Output: 1
```

Example 2:

```
Input: text = "loonbalxballpoon"
Output: 2
```

Example 3:

```
Input: text = "leetcode"
Output: 0
```

### Solution

```
const maxNumberOfBalloons = (text: string): number => {
    const hashMap = new Map()

    for(let i = 0; i < text.length; i++){
        if(hashMap.get(text[i])){
            hashMap.set(text[i], hashMap.get(text[i]) + 1);
        } else {
            hashMap.set(text[i], 1);
        };
    };

    const keyWord = "balloon";
    let freqOfKeyWord = 0;

    for(let i = 0; i < keyWord.length; i++){

        if(!hashMap.get(keyWord[i])){
            return freqOfKeyWord;
        };

        if(hashMap.get(keyWord[i])){
            if(hashMap.get(keyWord[i]) === 1){
                hashMap.delete(keyWord[i])
            } else {
                hashMap.set(keyWord[i], hashMap.get(keyWord[i]) - 1);
            }
        }

        if(keyWord[i] === 'n'){
            i = -1;
            freqOfKeyWord++;
        };
    }
};
```

#### Description

- Firstly, create a map which will be used to hold all of the key value pairs of the letters and the frequency.
- Created a `keyWord` const of `balloon`, which is the the word we're trying to create.
- initialise `freqOfKeyWord` for the number of times the `keyWord` has been created.
- For loop iterating over the `keyWord`:
- First checks to see if the current letter in the keyWord exists in our map. If not then return the current `freqOfKeyWord`.
- If the current `keyWord` does exist then check to see if it is the only letter remaining, if so we delete the letter from the map. If it isn't then we decrease the count of the letter in the map.
- We then check if the current letter we're looping through is `n` and if so we set `i` to `-1` to start the loop again. At the same time we increment the `freqOfKeyWord` by 1.

#### Time Complexity

`O(n)`

The time complexity of the given code is `O(n)`, where `n` is the length of the input text.

In the first loop, the code iterates over each character in the input text, which has a time complexity of `O(n)`.

In the second loop, the code iterates over each character in the keyWord string, which has a constant length of 7. Therefore, the second loop has a constant time complexity of `O(1)`.

Overall, the dominant factor for the time complexity is the first loop, making the time complexity of the code `O(n)`.

#### Other Potential Solutions

```
var maxNumberOfBalloons = function(text) {

    const  balloonCach = {};
    const ballonSet = new Set(text.split(''));

    for (const char of text) {
      if (!ballonSet.has(char)) continue;

        const count = ((balloonCach[char] ?? 0) + 1)
        balloonCach[char] = count;
    }

    let min = Math.min(balloonCach['b'],
                        balloonCach['a'],
                        balloonCach['n'],
                        Math.floor(balloonCach['l']/2),
                        Math.floor(balloonCach['o']/2));

    return min ? min : 0;
};
```

#### Link

https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
