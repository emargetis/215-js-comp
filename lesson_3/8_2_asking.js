/*
Problem:
-input: array of integers
-output: integer representing the third greatest number or greatest number
-explicit rules:
  - if the third largest number does not exist, return the greatest number
  - you CANNOT sort the array
-implicit rules:
-questions:
  - what happens if argument is not supplied? return null
  - what happens if argument is not an array? return nul
  - what happens if array is empty? return null
  - what happens if the array contains any elements which are not integers? return null
  - what happens if the array contains sparse elements? return null
  - can the array contain negative numbers? yes, no issues
  - is it okay to mutate the original array? yes
  - how should i handle repeated values? made an assumption, but they are equal to the largest
Examples: see below
Data structure: array
Algorithm:
- validate that array meets criteria
  - check that there is an argument (paramenter is not undefined)
  - check that parameter is array data type
  - check that array length is greater than 0
  - check that array contains all integers
  - check that array does not contain sparse elements
- find greatest value in the array using Math.max and spread syntax for array
- set counter to 1
- remove all values equal to filter
- iterate until length of array is greater than 0
  - check that array has length > 0
    - if so, continue
    - if not, return the greatest overall value
  - find the current maximum in the array
  - filter the array to remove all values that are equal to current maximum
  - increment counter
  - if counter is equal to 3 then return the current maximum value
  - check to make sure array still has elements
*/

function thirdMax(arr) {
  if (arr === undefined) return null;
  if (!Array.isArray(arr)) return null;
  if (arr.length < 1) return null;
  if (arr.some(ele => !Number.isInteger(ele))) return null;
  if (arr.length !== Object.keys(arr).length) return null;
  
  let globalMax = Math.max(...arr);
  let maxCounter = 1;
  arr = arr.filter(ele => ele !== globalMax);
  
  while (arr.length > 0) {
    let currentMax = Math.max(...arr);
    arr = arr.filter(ele => ele !== currentMax);
    maxCounter += 1;
    if (maxCounter === 3) return currentMax;
  }
  
  return globalMax;
}

console.log(thirdMax([3, 2, 1])); // 1
console.log(thirdMax()) // null
console.log(thirdMax(2)) // null
console.log(thirdMax("hi")) // null
console.log(thirdMax([])) // null
console.log(thirdMax([3, 'hi', 1])); // null
console.log(thirdMax([3,, 2, 1])); // null
console.log(thirdMax([-3, 2, 1, -4])); // -3
console.log(thirdMax([3, 2, 1, 3, 2, 1, 3, 2, 1, 0])); // 1
console.log(thirdMax([3, 2])); // 3
console.log(thirdMax([1, 1, 1, 1])); // 1



