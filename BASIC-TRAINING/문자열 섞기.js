/* My Answer 01 */
function solution(str1, str2) {
  return [...str1].reduce((acc, char, i) => acc + char + str2[i], "");
}
/* 



*/
/* My Answer 02 */
function solution(str1, str2) {
  let mixed = "";
  let i = 0;
  while (str1[i] || str2[i]) {
    if (str1[i]) mixed += str1[i];
    if (str2[i]) mixed += str2[i];
    i++;
  }
  return mixed;
}
/* 



*/
/* My Answer 03 */
function solution(str1, str2) {
  var mixed = "";
  for (let i = 0; i < str1.length; i++) {
    if (i < str1.length) mixed += str1[i];
    if (i < str2.length) mixed += str2[i];
  }
  return mixed;
}
/* 




*/
/* My Answer 04 */
function solution(str1, str2) {
  return [...str1].map((x, idx) => x + str2[idx]).join("");
}
