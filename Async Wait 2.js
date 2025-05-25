// async function hello (){
//     console.log("hello")
// }

function api(){
    return new Promise((resolve, reject)=>{
       setTimeout(() => {
        console.log("weather data")
        resolve(200);
       }, 4000);
    });
}


async function getWeatherData() {
    try {
        const result = await api(); // Wait for the promise to resolve
        console.log("Result:", result); // Log the resolved value
    } catch (error) {
        console.error("Error:", error); // Handle any error
    }
}
getWeatherData()