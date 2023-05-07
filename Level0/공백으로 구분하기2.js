// answer 01
function solution(my_string) {
  return my_string.trim().split(/\s+/);
}

// answer 02
function solution(my_string) {
  return my_string.split(" ").filter((v) => v);
}

// answer 03
function solution(my_string) {
  return my_string.trim().split(/ +/);
}

// answer 04
function solution(my_string) {
  return my_string.match(/[^\s]+/g);
}
