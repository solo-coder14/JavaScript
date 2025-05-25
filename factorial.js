const memo = {};

function factorial(n) {
    if (n < 0) return "Undefined";
    if (n === 0 || n === 1) return 1;
    if (memo[n]) return memo[n]; // Return cached result if available
    
    memo[n] = n * factorial(n - 1);
    return memo[n];
}

let n = 224;
console.log(factorial(n)); // 9.33262154439441e+157