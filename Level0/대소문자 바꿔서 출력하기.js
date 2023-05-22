// My Answer 01
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  console.log(
    [...str]
      .map((e) => (/[A-Z]/.test(e) ? e.toLowerCase() : e.toUpperCase()))
      .join("")
  );
});
