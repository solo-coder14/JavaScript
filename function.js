function funName(parameter) {
    console.log(parameter + "Hello World!")
    console.log(parameter + "First Program!")
    console.log("Hello World! First Program!" + parameter)
    console.log(parameter + "Life is beautiful!")
}
funName("Done")



function sum(a, b, c = 3){
    return a + b + c;
}

console.log(sum(1, 2));



const func1 = (x) => {
    console.log("An arrow function. The value of X is " + x);
}

func1(55);