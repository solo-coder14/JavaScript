function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("dataID: " + dataId);
            resolve("successful")
            // reject("error")
        }, 5000)
    })
}
console.log("getting next data1....")
getData(1)
    .then((res) => {
        console.log("getting next data2....")
        return getData(2);
    })
    .then((res) => {
        console.log(res);
    });