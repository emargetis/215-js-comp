/*
Problem: given a list of numbers in shorthand, return a list of the complete numbers
-input: string representing numbers list in shorthand
-output: array of numbers
-rules:
  - the numbers in the list are always increasing
  - the numbers in the input represent only the significant portion of the number
  - the numbers only increase by the smallest amount possible to fulfill the two rules above
  - shorthand ranges ranges are used to signify the list of significant portion of the numbers
  - the significant portion of the number is the number of digits that are represented 
    - 1 digit means we're aiming to get the 1s digit to match
    - 2 digits means we're aiming to get the 10s and the 1s digit to match
    - 3 digits means we're aiming to get the 100s and 10s and 1s digit to match
  - input validation:
    - do we need to make sure an argument is provided? if not, how to handle? return empty array
    - do we need to make sure the argument only contains digits - : .. and ,? yes, otherwise return empty array
    - do we need to make sure the string has a length of at least 1? yes, otherwise return empty array
-questions:
  - will we ever mix the separator types in the same string?
Examples: see below
DS: use arrays
Algo:
  - perform validation using guard clauses
    - check to make sure argument is provided
    - check to make sure argument type is a string
    - make sure argument only contains digits or the approved separators
    - make sure the string has a length of at least 1
  - separate argument into array using commas as delimiter
    - use regex that splits based on not a number, not multiple numbers divided by any of the following (repeatedly): -, :, ..
  - expand any ranges present in the list by adding them to a new array entirely
    - iterate through array from left to right
    - check to see if the value contains either a -, :, ..
      - if it does, then separate the digits based on the separator into a new list using match /d:d/ and store the value in a variable
        -iterate from left to right of the new list with the new number list
          - for each value, increment the from the starting digit (left of :) to the ending digit (right of :)
            - add the incremented digit to the expanded list
            - check to see if it ends with the digit to the right of :
            - if so, then stop incrementing
            - if not, then keep incrementing
      
  - iterate through the array from left to right and add appropriate starting digits to all digits in the array
*/


function shortHandList(inputStr) {
  if (invalidateInput(inputStr)) return [];
  
  let inputAsArr = inputStr.split(/\,\s*/);
  
  let expandedArray = expandArray(inputAsArr);
  
  return expandedArray;
}

function invalidateInput(str) {
  if (str === undefined) return true;
  if (typeof str !== "string") return true;
  if (str.length < 1) return true;
  if (str.match(/[^\d\,\-\:\. ]/g)) return true;
}

function expandArray(arr) {
  let finalArr = [];

  arr.forEach(ele => {
    if (ele.match(/(\-|\:|\.{2})/)) { //if a range
      addNextRangeOfDigits(finalArr, ele);
    } else { //if not a range
      addNextDigit(finalArr, ele);
    }
  });
  
  return finalArr;
}


function addNextDigit(finalArr, ele) {
  let currentNum = finalArr[finalArr.length - 1] || Number(ele);
  
  while (!(currentNum.toString().endsWith(ele))) {
    currentNum += 1;
  }
  
  finalArr.push(currentNum);
}

function addNextRangeOfDigits(finalArr, ele) {
  let rangeArr = ele.split(/\-|\:|\.{2}/);
  
  rangeArr.forEach((num, index, array) => {
    if (array[index + 1]) {
      let minNum = finalArr[finalArr.length - 1] || Number(num);
      
      //find first eligible value of range
      while (!(minNum.toString().endsWith(num))) {
        minNum += 1;
      }
      
      let rangeNum = minNum;
      
      while (!(rangeNum.toString().endsWith(array[index + 1]))) {
        if (!finalArr.includes(rangeNum)) {
          finalArr.push(rangeNum);
        }
        
        rangeNum += 1;
      }
      
      if (!finalArr.includes(rangeNum)) {
        finalArr.push(rangeNum);
      }
    }
  });
}


console.log(shortHandList()); // []
console.log(shortHandList("1, 3, 7, 2, 4, 1, a")); // []
console.log(shortHandList("1, 3, 7, 2, 4, 1, [")); // []
console.log(shortHandList("1, 3, 7, 2, 4, 1, [")); // []

console.log(shortHandList("1, 3, 7, 2, 4, 1")); // [1, 3, 7, 12, 14, 21]
console.log(shortHandList("1-3, 1-2")); // [1, 2, 3, 11, 12]
console.log(shortHandList("1:5:2")); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
console.log(shortHandList("104-2")); // [104, 105, ... , 112]
console.log(shortHandList("104-02")); // [104, 105, ..., 202]
console.log(shortHandList("545, 64:11")); // [545, 564, 565, ... , 611]