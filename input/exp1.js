const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Number: ", main);

function main (value) {
  const variable = parseInt(value);
  console.log(variable);
  rl.close();
}