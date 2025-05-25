let nums = [2, 2, 1, 1, 1, 2, 2];
let arr = new Map();
for (let i = 0; i < nums.length; i++) {
    let newNum = nums[i];
    if (arr.get(newNum) == null) {
        arr.set(newNum, 0);
    }
    let value = arr.get(newNum);
    value++;
    arr.set(newNum, value);
}
let ans = 0;
arr.forEach((value, key) => {
    let maxNum = value;
    ans = Math.max(ans, maxNum)
})
arr.forEach((value, key) => {
    if (ans == value){
       console.log(key)
    }
})
