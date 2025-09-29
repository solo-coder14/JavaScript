let arr = [1, 2, 3, 4, 5, 6, 7]
for (let i = 0, j = arr.length - 1; i < j; i++, j--){
    let temp = arr[i];
    arr[i] = arr[j]
    arr[j] = temp
}
console.log(arr.join(", "))



// let arr2 = [1, 2, 3, 4, 5];
// for (let i = arr2.length - 1; i >= 0; i--){
//     console.log(arr2[i] + "")
// }

let arr2 = [1, 2, 3, 4, 5];
for (let i = arr2.length - 1; i >= 0; i--) {
    process.stdout.write(arr2[i] + " ");
}
process.stdout.write("\n");