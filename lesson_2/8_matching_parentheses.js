function isBalanced(string) {
  let counter = 0;
  
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] === '(') {
      counter  += 1;
    } else if (string[i] === ')') {
      counter -= 1;
    }
    
    if (counter < 0) return false;
  }
  
  return counter === 0;
}

function isBalanced(string) {
  let parentheses
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false