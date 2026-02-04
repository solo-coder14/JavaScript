function curryfunction(a){
    return function(b){
        const multi = a * b
        return function(c){
            return res = multi * c
        }
    }
}

console.log(curryfunction(2)(3)(2))

// const str1 = "hello"
// const str2 = "world12323"

// let max;
// if(str1.length > str2.length){
//     max = str1.length
// }else{
//     max = str2.length
// }

// // console.log(max)

// function merge(){
//     let res = "";
//     for(let i=0; i<max; i++){
//         if (i<str1.length){
//         res+= str1[i];
//         }
//         if (i<str2.length){
//         res+= str2[i];
//         }
        
//     }
//     console.log(res)
// }
// merge()




// let a = 10;

// function test() {
//   console.log(a);
//   let a = 20;
// }

// test();