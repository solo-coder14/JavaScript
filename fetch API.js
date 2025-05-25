// turtorial: https://www.youtube.com/watch?v=CyGodpqcid4&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=14

const url = fetch("https://dog.ceo/api/breeds/image/random");

async function getResult() {
    let result = await url;
    // console.log(result);
    // console.log(result.status);
    let data = await result.json();
    console.log(data);
    // console.log(data.message);
}

getResult();