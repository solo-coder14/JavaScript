// Creating BigInt using 'n' suffix
const big1 = 1234567890123456789012345678901234567890n;

// Creating BigInt using BigInt() function
const big2 = BigInt("9876543210987654321098765432109876543210");

// Normal number
const num = 9007199254740991; // Max safe integer in JavaScript (2^53 - 1)

console.log(big1); 
console.log(big2);
console.log(num + 1);      // 9007199254740992 (can lose precision after this)
console.log(BigInt(num) + 1n); // 9007199254740992n (safe with BigInt)
