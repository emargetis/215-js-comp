/*
Problem: take a 2d araray, flatten it, remove duplicates 
-input: 2d array
-output: 1d arrary
-explicit rules:
  -numbers and number strings are duplicates if they are the same, keep the one that comes first
-implict rules:
  -keep the original format
  -empty array should return a new array
-questions:
  -validation:
    -outer array:
      - can the outer array contain anything other than inner arrays? If not what do we do? no, if it does then return null
      - what if no array is provided? return null
      - can the array be sparsely populated? no return null
      - what do we do with extra arguments? ignore them
    -inner array:
      - can the inner arrays contain anything other than numbers and strings? how do we handle? return null
      - can the inner arrays be sparsely populated? no return null
      - does numbers include integers and non-intengers? includes both
    - should we mutate the original array for output or return a new one? new one
  -explicit rules:
    -the one that comes first means the one with the lower index, i.e. the leftmost one? yes
Examples: see below
Data structure: 
Algo:
  -Perform vaidation:
    -outer
      -check to make sure argument is supplied
      -check to make sure argument is an array
      -check to make sure every element in outer array is an array
      -check to make sure outer array is not sparsely populated
    -loop through elements of outer array to perform validation of inner arrays
      -check to make sure each element in every inner array is a number or string
      -check to make sure inner arrays are not sparsely populated
  -declare a return array
  -loop through each element of the outer array, which is every inner array
    -loop through each element of inner array
      -check to see if element is already in the return array (both number and string form by converting every element to a string for check)
        -if not, add element to array
        -if so, move to the next iteration
  -return the return array
*/

function flattenAndUnique(inputArr) {
  //outer array validation
  if(inputArr === undefined) return null;
  if(!Array.isArray(inputArr)) return null;
  if(inputArr.some(ele => !Array.isArray(ele))) return null;
  if(inputArr.length !== Object.keys(inputArr).length) return null;
  
  //inner array validation
  for (let idx = 0; idx < inputArr.length; idx += 1) {
    if (inputArr[idx].some(ele => {
      return typeof ele !== 'string' && typeof ele !== 'number';
    })) return null;
    
    if(inputArr[idx].length !== Object.keys(inputArr[idx]).length) return null;
  }
  
  let flatArray = [];
  
  inputArr.forEach(subArray => {
    subArray.forEach(ele => {
      if(!(flatArray.includes(ele.toString()) 
           || flatArray.includes(Number(ele))
           )
        ) {
        flatArray.push(ele);
      }
    });
  });
  
  return flatArray;
}

//outer array validtion
console.log(flattenAndUnique()); // null
console.log(flattenAndUnique(["hi", [1, 2, 3]])); // null
console.log(flattenAndUnique([[1, 2, 3], ,[4, 5, 'a']])); // null

//inner array validation
console.log(flattenAndUnique([[1, 2, 3, []]])); // null
console.log(flattenAndUnique([[1, 2, 3], [4, 5,, 'a']])); // null

console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']], [[1, 2, 3], ['3', 4, 5, 'z']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([])); // []
console.log(flattenAndUnique([[1, 2, 3], ['3', 4, 5, 'a']])); // [1, 2, 3, 4, 5, 'a']
console.log(flattenAndUnique([[1, 2, NaN]])); // [1, 2, 3]
console.log(flattenAndUnique([[1, 2, NaN], ['NaN', 4, 5, 'a']])); // [1, 2, NaN, 4, 5, 'a']