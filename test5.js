function firstfunc(){
    let a = 0;
    function secondFunc(a){
        return a++;
    }

    let newA = secondFunc(a);
    return newA;
}

console.log(firstfunc())
console.log(firstfunc())