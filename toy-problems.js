/* Make sure you do these last */

/*
Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14
*/

var numbers = [1, 2, 3, 4, 5];

var plusOneSum = function(numArray) {
    var newNumArray = numArray.slice();
    var sum = 0;
    for (var i = 0; i < newNumArray.length; i++) {
        newNumArray[i]++;
    }
    for (var j = 0; j < newNumArray.length; j++) {
        sum = sum + newNumArray[j];
    }
    return sum;
};

console.log(plusOneSum(numbers));


/*
Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]
*/
var numbers = [1, 2, [3, [4], 5, 6], [7, 8, 9], 10];
var newArray = [];
var flattenArray = function (inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === 'object') {
            flattenArray(inputArray[i]);
        } else if (typeof inputArray[i] === 'number') {
            newArray.push(inputArray[i]);
        }
    }
    return newArray;
};


console.log(flattenArray(numbers));


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/

var arr = ["a1", "a2", "a3", "aN", "b1", "b2", "b3", "bN", "c1", "c2", "c3", "cN"];

var reArrange = function(inputArr) {
    var newArray = [];
    for(var i = 0; i < inputArr.length; i++) {
        var strArray1 = inputArr[i].split('');
        for(var j = 0; j < inputArr.length; j++) {
            var strArray2 = inputArr[j].split('');
            if(newArray.length !== inputArr.length) {
                if(strArray1[1] === strArray2[1]) {
                    newArray.push(strArray2.join(''));
                }
            }
        }
    }
    
    return newArray;
};

console.log(reArrange(arr));

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/





/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/


/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/



/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
