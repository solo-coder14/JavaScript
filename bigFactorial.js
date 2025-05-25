let n = 1000;
const MOD = 1000000007;

// let ans = 1;
// for (let i = 1; i <= n; i++){
//     ans *= i;
//     ans %= MOD;
// }
// console.log(ans)

let arr = []
arr.push(1)

function bigFactorial(n){
    if (n == 0) return 1;

    let res = (n  *  bigFactorial(n - 1) ) % MOD;
    arr.push(res);
    return arr[n];
}
console.log(bigFactorial(n))
console.log(arr)