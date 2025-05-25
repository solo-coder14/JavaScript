function calc(x) {
    return 3 * x * x + 2 * x + 4;
}

function binarySearchForValue(k) {
    const a = [];
    // for (let i = 0; i <= 10; i++) {
    //     a[i] = calc(i);
    // }

    let l = 0, r = 10;
    let ans = -1;

    while (l <= r) {
        const mid = Math.floor((l + r) / 2);

        if (calc(mid) >= k) {
            ans = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return ans;
}

const k = 80;
const result = binarySearchForValue(k);
console.log(result);

