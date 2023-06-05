/* My Answer 01 */
function solution(my_strings, parts) {
  var partsArr = [];
  for (let i = 0; i < parts.length; i++) {
    let [start, end] = parts[i];
    let word = my_strings[i];
    partsArr.push(word.slice(start, end + 1));
  }
  return partsArr.join("");
}
/* 



*/
/* My Answer 02 */
function solution(my_strings, parts) {
  return parts
    .map(([s, e], i) => {
      return my_strings[i].slice(s, e + 1);
    })
    .join("");
}
