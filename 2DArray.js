// let array2D = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
let rows = 4;
let cols = 4;
let array2D = new Array(rows);

for (let i = 0; i < rows; i++) {
  array2D[i] = new Array(cols);
}

// Initialize with values
for (let i = 0; i < rows; i++) {
  for (let j = 0; j < cols; j++) {
    array2D[i][j] = i * cols + j + 1;
  }
}

console.log(array2D);
// Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

