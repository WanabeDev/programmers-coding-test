// answer 01
function solution(myString) {
  return myString
    .replace(/a/g, "A")
    .replace(/[b-zB-Z]/g, (v) => v.toLowerCase());
}

// answer 02
function solution(myString) {
  return myString.toLowerCase().replaceAll("a", "A");
}
