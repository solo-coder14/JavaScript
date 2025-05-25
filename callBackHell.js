//https://www.youtube.com/watch?v=d3jXofmQm44&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=13

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("dataID: " + dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000)
}
// We dont want this synchronus
// getData(1)
// getData(2)
// getData(3)
console.log("getting next data1....")
getData(1, () => {
    console.log("getting next data2....")
    getData(2, ()=>{
    console.log("getting next data3....")
        getData(3);
    });
});
