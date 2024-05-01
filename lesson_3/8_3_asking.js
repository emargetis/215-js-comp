/*
Problem: given a string, write out all prime numbers present in substring
-input: string that contains letters, digits and symbols
-output: an array that contains all prime numbers present
-explicit rules:
  -add all prime numbers contained in the string
-implicit rules:
  - a prime number is an integer that is only divisible by itself and 1
  - numbers with decimal places are not allowed
  - numbers can be multiple digits in length and the end if demarcated by a non-digit character
  - if there are only numbers, treat as one long number
-questions:
  -input
    - are we to assume that all numbers are separated by some other character? yes
    - are the characters both letters and symbols? yes
    - can the string include whitespace? how should we treat it? like any other separator
    - how should we handle negative numbers? are they represented with a preceding '-'? don't include
    -validation:
      -what happens if extra arguments are supplied? ignore them
      -what happens if no arguments are supplied? return null
      -what happens if argument is not a string? return null
      -what happns if if string is blank? return null
  -output
    - should the elements be number type or string of numbers? number type
    - what happens if string contains no digits? return empty array
    - do we need to worry about exiting early for efficiency purposes? No
Examples: see below
Data structure: string then array
Algorithm:
  -perform validation:
    -check that argument is supplied (parameter is not null)
    -check that argument is a string
    -check that string is not empty
  -split the string into array of digits using match and regex
  -iterate through arragy from left to right
    -check to see if number is prime
      - iterate from 2 to one less than the number and divide the number by each idx
        - if index is divisible (number%idx === 0) then return false
        - continue to next iteration
      - if we reach this point then return true
*/

function primeNumberPrinter(input) {
  if (input === undefined) return null;
  if (typeof input !== 'string') return null;
  if (input.length < 1) return null;
  
  let numArray = input.match(/[0-9]+/g);
  
  if (!numArray) return null; 
  
  return numArray.filter(num => {
    if (num < 2) return false;
    
    for (let div = 2; div < num; div += 1) {
      if (num % div === 0) return false;
    }
    
    return true;
  });
}


console.log(primeNumberPrinter("a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter("a4bc2k13d", "a4bc2k13d")); // [2, 13]
console.log(primeNumberPrinter()); // null
console.log(primeNumberPrinter(454)); // null
console.log(primeNumberPrinter(true)); // null
console.log(primeNumberPrinter("")); // null
console.log(primeNumberPrinter("abc")); // []
console.log(primeNumberPrinter(" a4b!2_13 d")); // [2, 13]
console.log(primeNumberPrinter(" a4b!2_13 d233k-3")); // [2, 13]
