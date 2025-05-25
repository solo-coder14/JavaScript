// let promise = new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     resolve("successful")
// })

// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("dataID: " + dataId);
//             resolve("successful")
//             // reject("error")
//             if (getNextData) {
//                 getNextData();
//             }
//         }, 5000)
//     })
// }

// getData(1);





// const getPromise = () =>{ 
//     return new Promise((resolve, reject)=>{
//     console.log("I am a promise");
//     // resolve("successful")
//     reject("error")   
// });
// };

// let promise = getPromise();

// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });
// promise.catch((err)=>{
//     console.log("promise rejected", err);
// })





function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success 1")
        }, 4000)
    })
}
function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("success 2")
        }, 4000)
    })
}


// console.log("fetching data1.....")
// let p1 = asyncFunc1();
// p1.then((res)=>{
//     console.log(res);
// })
// console.log("fetching data2.....")
// let p2 = asyncFunc2();
// p2.then((res)=>{
//     console.log(res);
// })


// promise chain
console.log("fetching data1.....")
let p1 = asyncFunc1();
p1.then((res) => {
    console.log(res);
    console.log("fetching data2.....")
    let p2 = asyncFunc2();
    p2.then((res) => {
        console.log(res);
    })
})