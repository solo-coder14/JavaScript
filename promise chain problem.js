function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("dataID: " + dataId);
            resolve("successful")
            // reject("error")
        }, 5000)
    })
}

async function getAllData(){
    console.log("Getting next data1....")
    await getData(1);
    console.log("Getting next data2....")
    await getData(2);
    console.log("Getting next data3....")
    await getData(3);
    console.log("Getting next data4....")
    await getData(4);
}

getAllData();