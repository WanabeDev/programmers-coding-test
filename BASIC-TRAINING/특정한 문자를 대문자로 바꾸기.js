/* My Answer01(map활용) */
function solution(my_string, alp) {
  const result = [...my_string].map((v) => {
    if (v == alp) {
      return v.toUpperCase();
    } else {
      return v;
    }
  });
  return result.join("");
}
/* 



*/
/* My Answer02(for활용) */
function solution(my_string, alp) {
  let result = "";
  for (let i = 0; i < my_string.length; i++) {
    if (my_string[i] === alp) {
      result += my_string[i].toUpperCase();
    } else {
      result += my_string[i];
    }
  }
  return result;
}
/* 



*/
/* My Answer03(정규표현식 reduce 활용) */
function solution(my_string, alp) {
  return my_string.replace(new RegExp(alp, "ig"), alp.toUpperCase());
}
