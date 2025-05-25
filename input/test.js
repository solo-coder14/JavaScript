const reader = require("stdin-reader");

async function main() {
    const line = parseInt(await reader.readline());
    for (let i = 0; i < line; i++) {
        const value = parseInt(await reader.readline());
        if (value % 2 == 0) {
            console.log("even");
        } else {
            console.log("odd");
        }
    }
}

main();