// answer 01
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  n = Number(input[0]);
  console.log(n % 2 === 0 ? `${n} is even` : `${n} is odd`);
});

// answer 02
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const result = Number(line) % 2 ? "odd" : "even";
    console.log(line, "is", result);
  });
