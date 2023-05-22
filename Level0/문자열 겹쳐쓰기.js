// My Answer 01
function solution(str, newStr, s) {
  return str.slice(0, s) + newStr + str.slice(s + newStr.length);
}
