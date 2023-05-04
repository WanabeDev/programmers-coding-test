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
  const sum = Number(input[0]) + Number(input[1]);
  console.log(`${input[0]} + ${input[1]} = ${sum}`);
});

// answer 02
const readline = require("readline");
const rl = readline
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", function (line) {
    const [a, b] = line.split(" ");
    console.log(a, "+", b, "=", Number(a) + Number(b));
  });
