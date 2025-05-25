let s = "Mohammad Woafi";
// let nwS = "Bukhari"
// console.log(s[0])
// console.log(s[6])
// console.log(s.length)
// console.log(s.toUpperCase())

// console.log(s.slice(1, 4))
// console.log(s.slice(4))
// console.log(s.replace("Woafi", "Bukhari"))
// console.log(s.concat(nwS, s))
// let whiteSpace =s.trim();
// console.log(whiteSpace)
// // indexOf

// // Template literals
// console.log(`Hello ${s[3]}`);

for(const val of s){
    console.log(val)
}

Array.from(s).forEach((e)=>{
    console.log(e)
})
