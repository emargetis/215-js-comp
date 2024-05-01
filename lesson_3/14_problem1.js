/*
Problem: write a function that cleans up phone number, if possible, and returns said phone number
-input: string containing digits and other characters
-output: a phone number string of 10 digits
-explicit rules:
  -ignore all non digit characters
  -if the phone number is less than 10 digits return a bad number
  -if the phone number is 10 digits assume its a good number
  -if the phone number is 11 digits, it is good if the first digit is a 1, otherwise bad
    - if it is good, trim off the 1 from the front
  -if a phone number is bad, return a string of 10 0s
-implicit rules:
  -there are no negative numbers and even if there were, the leading negative dash would get eliminated 
-question:
  -input 
    -validation
      -how should we handle lack of argument? return null
      -how should we handle empty strings? like other strings
      -how should we handle other data types? for instance a 10 digit number? return null
    -can input have letters? how should they be handled? yes, like other characters
    -how should we handle leading 0s? just like any other digit
  -output:
    -should the output be a string if the phonen number is valid? yes
    -shoudl the string be formatted in any way? no just string of 10 digits
Examples: test cases below
Data structures: string
Algo:
-perform validation on input
  -check to make sure parameter is not undefined
  -check to make sure parameter is a string type
-replace all non-digits with nothing and store as a new string
-check the length of the new string to see if its either 10 or 11 digits
  -if not return 0000...
  -if so do nothing
-if its eleven length
  -check first digit
    -if 1 remove
    -if something other than 1 then return 0000...
-return string of 10 digits

*/

function phoneCleaner(inputStr) {
  if (inputStr === undefined) return null;
  if (typeof inputStr !== 'string') return null;
  
  let digitStr = inputStr.replace(/[^0-9]/g,'');
  
  if (digitStr.length === 10) {
    return digitStr;
  } else if (digitStr.length < 10 || digitStr.length > 11) {
    return '0000000000';
  } else {
    if (digitStr[0] === '1') {
      return digitStr.slice(1);
    }
    return '0000000000';
  }
}

console.log(phoneCleaner()); // null
console.log(phoneCleaner(9729880843)); // null
console.log(phoneCleaner(['9729880843'])); // null
console.log(phoneCleaner('')); // 0000000000
console.log(phoneCleaner('729880843')); // 0000000000
console.log(phoneCleaner('29729880843')); // 0000000000
console.log(phoneCleaner('19729880843')); // 9729880843
console.log(phoneCleaner('97298808a43')); // 9729880843
console.log(phoneCleaner('0729880843')); // 0729880843
console.log(phoneCleaner('9729880843')); // 9729880843
console.log(phoneCleaner('972-988-0843')); // 9729880843
console.log(phoneCleaner('(972) 988-0843')); // 9729880843
console.log(phoneCleaner('(97. 2) 9 8.8-08@43')); // 9729880843
console.log(phoneCleaner('9729880840')); // 9729880843


