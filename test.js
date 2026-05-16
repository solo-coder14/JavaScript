let str = "34 5 123"
strArray = str.split(" ")
let intergerArray = []

for (let s of strArray) {
  intergerArray.push(Number(s))
}

intergerArray.sort((a,b) => (a - b))
console.log(intergerArray)