let arr = [1, 3, 4, 5, 6, 7, 8, 9, 10]
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[i]**2);
// }

// console.log(newArr)

// arr.map((e) => {
//     console.log(e)
// }
// )

//  let newArr = arr.map((e)=>{
//     return e**2
//  })

//  console.log(newArr)

// const greaterThanSeven = (e) => {
//     if (e > 7) {
//         return true
//     }
//     return false;
// }
// console.log(arr.filter(greaterThanSeven))
// let newArr = arr.filter((value, i) => i != 1 )
// console.log(newArr)



const red = (acc, value, key) => {
    return acc + value
}
console.log(arr.reduce(red))

// let v = Array.from("harry")
// console.log(v[1])
