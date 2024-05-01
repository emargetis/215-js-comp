function myOwnSome(array, func) {
  for (let i = 0; i < array.length; i += 1) {
    if (func(array[i], i, array)) {
      return true;
    }
  }
  
  return false;
}