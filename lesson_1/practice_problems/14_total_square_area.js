// function totalArea(arr) {
//   arr.reduce((total, current) => {
//     total += current[0] + current[1];
//   }, 0)
// }


function totalArea(arr) {
  return arr.map(side => side[0] * side[1]).reduce((sum, area) => sum + area, 0);
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalArea(rectangles));    // 141

/*
-iterate through each subarray
-calculate the area
-add it to a running total of area
*/

//-----------------------------------------------------------------------------

function totalSquareArea (arr) {
  let squares = arr.filter(sides => sides[0] === sides[1]);
  let squareAreas = squares.map(sides => sides[0] * sides[1]);
  return squareAreas.reduce((sum, area) => sum + area);
}

let rectangles2 = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

console.log(totalSquareArea(rectangles2));    // 121

/*
-filter to only squares
-map squares to area
-reduce areas to single value
*/