function compareVersions(version1, version2) {
  if (version1.match(/(^\.|\.$|[^.0-9]|\.\.)/g)) return null;
  if (version2.match(/(^\.|\.$|[^.0-9]|\.\.)/g)) return null;

  let v1Array = version1.split('.');
  let v2Array = version2.split('.');
  
  let maxLength = v1Array.length > v2Array.length ? v1Array.length : v2Array.length;
  
  if (v1Array.length < maxLength) {
    for (let idx = 0; idx < maxLength; idx += 1) {
      if(!v1Array[idx]) v1Array[idx] = '0';
    }
  } else if (v2Array.length < maxLength) {
    for (let idx = 0; idx < maxLength; idx += 1) {
      if(!v2Array[idx]) v2Array[idx] = '0';
    }
  }
  
  for (let idx = 0; idx < maxLength; idx += 1) {
    if (v1Array[idx] > v2Array[idx]) {
      return 1;
    } else if (v1Array[idx] < v2Array[idx]) {
      return -1;
    }
  }
  
  return 0;
}


console.log(compareVersions('13.37.1', '13.37'));

console.log(['13.37.1', '0.1', '1', '1.1', '1.2', '1.2.0.0', '1.18.2', '13.37'].sort(compareVersions));

console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

