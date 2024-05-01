/*
Problem: take a string and determin if you can spell the work using the blocks given
-input: string
-output: boolean (true if you can, false if you can't)
-rules:
  -the input word cannot use both letters from a block, only one
  -blocks are case insenstive
  -you can use the same letter twice
  -if string contains a non-alphabetic character return false
-questions:
  -can you use a the same letter twice? yes
  -argument validation:
    -how should we handle a blank argument? return false
    -how should we handle a nonstring data type for argument? return false;
    -how should we handle non alphabetic characters? return false
  
Examples: see below
Data structures: nested array for blocks, array for selected block letters
Algo:
-write blocks array
-perform validation using guard clauses:
  - check to make sure parameter is not undefined, return false if not
  - check to make sure parameter is a string type, return false if not
  - check to make sure parameter strind does not contain anything other than letters
-create a copy of the blocks array
-convert string to lower version
-declare a used array
-iterate through string from left to right
  -check to see if the block has the letter in it
    -set an empty variable equal to removal idx;
    -iterate through the block and see if the first or second element includes the string
      -if so, place the sought after letter in the used array and set 
      - check to see if removal idx is undefined, 
        -if not then remove block from block copy
        -continue to next iteration
      -if not, check the used array
        -use includes to see if the current letter is in the arrray
          -if not rturn false
          -if so continue to next iteration
-return true
*/

const blocks = [['B', 'O'], ['X','K'], ['D','Q'], ['C','P'], ['N', 'A'], ['G', 'T'], ['R', 'E'], ['F','S'], ['J','W'], ['H','U'], ['V','I'], ['L','Y'], ['Z','M']];

function isBlockWord(inStr) {
  if (inStr === undefined) return false;
  if (typeof inStr !== 'string') return false;
  if (inStr.match(/[^a-z]/gi)) return false;
  
  let blocksCopy = JSON.parse(JSON.stringify(blocks));
  
  let upperStr = inStr.toUpperCase();
  
  let usedLetters = [];
  
  for (let charIdx = 0; charIdx < upperStr.length; charIdx += 1) {

    let currentChar = upperStr[charIdx];
    
    let removalIdx;
    
    blocksCopy.forEach((block, idx) => {
      if (block[0] === currentChar) {
        removalIdx = idx;
        usedLetters.push(block[0]);
      } else if (block[1] === currentChar) {
        removalIdx = idx;
        usedLetters.push(block[1]);
      }
    });
    
    if (removalIdx !== undefined) {
      blocksCopy.splice(removalIdx, 1);
      continue;
    }
    
    if(usedLetters.includes(currentChar)) continue;
    
    return false;
  }
  
  return true;
}




console.log(isBlockWord()); //false
console.log(isBlockWord(['bat'])); //false
console.log(isBlockWord(23)); //false
console.log(isBlockWord('bat23')); //false

console.log(isBlockWord('BOT')); //false
console.log(isBlockWord('BEET')); //true
console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true