
// function matrixVectorMultiplication(n, m, arr1, arr2) {
//   // Create result array
//   let c = new Array(n).fill(0);

//   // Perform matrix-vector multiplication
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < m; j++) {
//         c[i] += arr1[i][j] * arr2[j];
//     }
//   }

//   // Return the result
//   return c;
// }


// function main() {
//   // Example input (replaces cin in C++)
//   const n = 3;  // Number of rows in matrix arr1
//   const m = 2;  // Number of columns in matrix arr1

//   // Initialize arr1 (n×m matrix)
//   const arr1 = [
//     [1, 2],
//     [3, 4],
//     [5, 6]
//   ];

//   // Initialize arr2 (m-length vector)
//   const arr2 = [7, 8];

//   // Perform the calculation
//   const result = matrixVectorMultiplication(n, m, arr1, arr2);

//   // Output the result (replaces cout in C++)
//   for (let i = 0; i < n; i++) {
//     console.log(result[i]);
//   }
// }

// // Run the program
// main();





function matrixMultiplication(n, m, p, arr1, arr2) {
    // n = rows in arr1
    // m = columns in arr1 and rows in arr2
    // p = columns in arr2
    
    // Create result matrix (n×p)
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
      result[i] = new Array(p).fill(0);
    }
  
    // Perform matrix-matrix multiplication
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < p; j++) {
        for (let k = 0; k < m; k++) {
          result[i][j] += arr1[i][k] * arr2[k][j];
        }
      }
    }
  
    return result;
  }
  
  function main() {
    // Matrix dimensions
    const n = 3;  // Rows in arr1
    const m = 2;  // Columns in arr1, rows in arr2
    const p = 2;  // Columns in arr2
  
    // Initialize arr1 (3×2 matrix)
    const arr1 = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];
  
    // Initialize arr2 (2×2 matrix)
    const arr2 = [
      [7, 8],
      [5, 3]
    ];
  
    // Perform the calculation
    const result = matrixMultiplication(n, m, p, arr1, arr2);
  
    // Output the result
    for (let i = 0; i < n; i++) {
      console.log(result[i].join(' '));
    }
  }
  
  // Run the program
  main();