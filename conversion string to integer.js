// let s = "abbaca";

// let array = new Array(s.length).fill(0);

// Array.from(s).forEach((item, index) => {
//     let num = s.charCodeAt(index) - 'a'.charCodeAt(0)
//     array[num]++;
// });

// console.log(array)





function stringToIntArray(str) {
    const result = [];
    for (let i = 0; i < str.length; i++) {
        // Convert each character to integer and push to array
        const num = parseInt(str[i], 10);
        
        // Check if conversion was successful (not NaN)
        if (!isNaN(num)) {
            result.push(num);
        }
    }
    return result;
}

// Example usage:
const inputString = "123a45b6";
const outputArray = stringToIntArray(inputString);
console.log(outputArray); // Output: [1, 2, 3, 4, 5, 6]





let s = "011101";
let arr = []
Array.from(s).forEach((item, index)=>{
    let num = parseInt(item);
    arr.push(num)
})

console.log(arr)

                