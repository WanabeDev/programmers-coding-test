/* My Answer 01(for를 이용하여 c번째 인덱스부터 m의 간격으로 문자를 push) */
function solution(my_string, m, c) {
  let result = [];
  for (let i = c - 1; i < my_string.length; i += m) {
    result.push(my_string[i]);
  }
  return result.join("");
}

/* Another approach 01(match와 정규표현식을 활용하여 m길이의 문자열을 추출한 후, c-1인덱스의 문자를 추출) */
const solution = (s, m, c) =>
  s
    .match(new RegExp(`.{${m}}`, "g")) //["ihrh","bakr","fpnd","oplj","hygc"]
    .map((v) => v[c - 1]) //["h","a","p","p","y"]
    .join("");

/* Another approach 02(reduce를 이용하여 일정간격 m에 해당하는 문자를 추출) */
function solution(my_string, m, c) {
  return Array.from(my_string).reduce((word, v, i) => {
    return (i % m) + 1 === c ? word + v : word;
  }, "");
}
