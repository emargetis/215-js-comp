/*
Problem: given an array of strings, return the k distinct value 
-input: an integer k, which represents the count of distinct string we are looking for
-output: string which is an element in the array or a blank string
-explicit rules:
  - distinct string is a string that is only present once in the array
  - if there are fewer than k distinct strings, return ""
  - the result string is the onle encountered earliest in the array
-implicit rules:
-questions:
  - earliest means we are iterating upward in index (left to right)
  - does capitalization matter? yes
  - do blank strings count as a distinct value? yes
  - inputs:
    - validate that first argument is always array and second argument is always integer? yes
    - do we need to validate for negative integer? yes
    - do we need to validate for empty array?  yes
    - how should we handle blank spots in the array? Is that cause for error? no, just skip over them
    - do we need to validate that the array contains all strings? yes
    - how should we handle bad inputs? set to default value or return null? return null
Examples / test cases: see below
Data structure:
- stick with array
Algo:
-validate that integer is:
  -actually an integer
  -positive integer not including 0
-validate that array is:
  -actually an array
  -longer than length 0
  -only contains strings or blank spots
-start a counter for distinct values and set to 0
-iterate through array from left to right
  - for each value, check to see if it is distinct
    - scan through array and see if there is another value that is equal to it, using filter and the length of return value being greater than 1
  - if value is unique, add one to the the distinct counter
  - check if counter is equal to the supplied integer
    - if so, return the current value in the array
    - if not, continue to next iteration
- if we reach end of array, return empty string
*/

function distinctString(arr, int) {
  if (!Number.isInteger(int) | int < 1) return null;
  if (!Array.isArray(arr) | arr.length < 1) return null;
  if (arr.some(ele => typeof ele !== "string")) return null;
  if (Object.values(arr).length !== arr.length) return null;
  
  let distinctCounter = 0;
  
  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr.filter(ele => ele === arr[idx]).length > 1) continue;
    
    distinctCounter += 1;
    
    if (distinctCounter === int) return arr[idx];
  }
  
  return "";
}


console.log(distinctString(["d","b","c","b","c","a"], 2)); // "a" | happy path
console.log(distinctString(["d"], 2)); // "" | out of range
console.log(distinctString(["c","b","C","a"], 3)); // "C" | capitalization
console.log(distinctString([""], 1)); // "" | blank strings
console.log(distinctString(2, ["c","b","c","a"])); // null | verify argument type
console.log(distinctString(["d","b","c","b","c","a"], -2)); // null | negative integer
console.log(distinctString([], 1)); // null | negative integer
console.log(distinctString([,,"c","b","c","a"], 2)); // null | blank spots in array
console.log(distinctString(["d", 2,"c","b","c","a"], 2)); // null | array contains only strings

