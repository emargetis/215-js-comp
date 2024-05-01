function myReduce(array, func, initial) {
  let accum;
  let index;
  
  if (initial) {
    accum = initial;
    index = 0;
  } else {
    accum = array[0];
    index = 1;
  }
  
  for (let i = index; i < array.length; i += 1) {
    accum = func(accum, array[i]);
  }
  
  return accum;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49

//LS Solution
function myReduce(array, func, initial) {
  let value;
  let index;

  if (initial === undefined) {
    value = array[0];
    index = 1;
  } else {
    value = initial;
    index = 0;
  }

  array.slice(index).forEach(element => value = func(value, element));
  return value;
}