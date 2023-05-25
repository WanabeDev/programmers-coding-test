// My Answer 01
function solution(my_string, queries) {
  queries.forEach(([start, end]) => {
    my_string =
      my_string.slice(0, start) +
      [...my_string]
        .slice(start, end + 1)
        .reverse()
        .join("") +
      my_string.slice(end + 1);
  });

  return str;
}
/*



*/
/* Another Approach 01(splice로 반전시켜야할 부분을 제거 후 changeStr로 대체) */
function solution(my_string, queries) {
  let str = my_string.split("");
  queries.forEach(([start, end]) => {
    const changeStr = str.slice(start, end + 1);
    str.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return str.join("");
}
