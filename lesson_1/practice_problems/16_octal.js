function octalToDecimal(numberString) {
  let digitsRev = numberString.split('').reverse();
  return digitsRev.reduce((sum, digit, idx) => sum + digit * 8 ** idx, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

/*
- split string into an array
- reverse array
- use reduce with the index value to iterate upward through the string and multiply the digit by increasing powers of 8
*/