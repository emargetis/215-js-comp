function myMap(array, func) {
  let resultArray = [];
  
  for (let i = 0; i < array.length; i += 1) {
    resultArray.push(func(array[i], i, array));
  }
  
  return resultArray;
}

let plusOne = n => n + 1;
myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]