/*
Problem: use the luhn formula to verify if a number is valid or not
-input: a number (string or number)
-output: boolean
-explicit rules:
  -luhn test
    -moving from right to left, double the value of every second digit
    -if the value of that digit is 10 or more, subtract 9
    -add all the digits together
    -if sum of digits is divisible by 10 then it is valid, otherwise not valid
-implicit rules:
  -trim out any spaces
-questions:
  -input
      -validation
      -how we should we handle lack of argument? return false
      -do we need to validate that the input is a string? return false if not string
      -how should we handle numbers that have other characters mixed in between? return false
      -is there a a preferred length of string or minimum? nope
  -output
    -is boolean okay? yes
Examples: see below
Data structures: string to do some regex cleaning then convert to array
Algo:
-perform validation with guard clauses:
  -check to make sure parameter is not undefined
  -check to make sure type of parameter is string
  -check to make sure paramater only contains digits and strings using regex.test or string.match
-remove spaces from the string
-convert string into an array
-create a switch variable that determines whether we should double or not and set to false
-create an empty array that will store every other digit being doubled
-iterate backwards through array
  -convert digit to number
  -check to see if we need to double value based on the switch variable
    -if the switch is true then double value it
      -if the doubled value is greater than 10, subtract 9 and push result to empty array
      -else push result to empty array
    -if the switch value is false then don't double value but still push result to empty array
-sum the digits of the empty result array and store as variable
-divide variable by 10 using mod and if result is === 0 then return true, else false
  
*/

function isValidLuhn(inputStr) {
  if (inputStr === undefined) return false;
  if (!(typeof inputStr === 'string')) return false;
  
  let inputArr = inputStr.replace(/\D/g, '').split('');
  let double = false;
  let resultArr = [];
  
  for (let idx = inputArr.length - 1; idx >= 0; idx -= 1) {
    let currentDigit = Number(inputArr[idx]);
    
    if (double) {
      if ((currentDigit * 2) > 9) {
        resultArr.unshift((currentDigit * 2) - 9);
      } else {
        resultArr.unshift(currentDigit * 2);
      }  
    } else if (!double) {
      resultArr.unshift(currentDigit);
    }
    
    double = !double;
  }
  
  let total = resultArr.reduce((sum, num) => sum + num);
  
  return (total % 10) === 0;
}


console.log(isValidLuhn()); //false
console.log(isValidLuhn(2323200577663554)); //false
console.log(isValidLuhn("a2323 2005 7766 3554")); //true
console.log(isValidLuhn("2323 200a5 7766 3554")); //true
console.log(isValidLuhn("2323200577663554")); //true
console.log(isValidLuhn("2323 2005 7766 3554")); //true
console.log(isValidLuhn("2323 2005 7766.3554")); //true
console.log(isValidLuhn("8763")); //true
console.log(isValidLuhn("1111")); //false



// function makeValid(inputStr) {
//   if (isValidLuhn(inputStr)) return inputStr.replace(/\D/g, '');
  
//   let inputArr = inputStr.replace(/\D/g, '').split('');
//   let double = true;
//   let resultArr = [];
  
//   for (let idx = inputArr.length - 1; idx >= 0; idx -= 1) {
//     let currentDigit = Number(inputArr[idx]);
    
//     if (double) {
//       if ((currentDigit * 2) > 9) {
//         resultArr.unshift((currentDigit * 2) - 9);
//       } else {
//         resultArr.unshift(currentDigit * 2);
//       }  
//     } else if (!double) {
//       resultArr.unshift(currentDigit);
//     }
    
//     double = !double;
//   }
  
//   let total = resultArr.reduce((sum, num) => sum + num);
  
//   let nextDigit = 10 - (total % 10);
  
//   return inputStr + nextDigit.toString();
  
// }

// console.log(makeValid("2323 200a5 7766 355")); //"2323 200a5 7766 3554"
// console.log(makeValid("876")); //"8763"
// console.log(makeValid("1111")); // "11114" 