/* My Answer 01-1(forEach 활용) */
function solution(arr, query) {
  query.forEach((e, i) => {
    if (i % 2 === 0) {
      arr.splice(e + 1);
    } else {
      arr.splice(0, e);
    }
  });
  return arr;
}
/* 


*/
/* My Answer 01-2(원본 arr이 변경되지 않도록 스프레드 연산자 활용) */
function solution(arr, query) {
  let result = [...arr];
  query.forEach((e, i) => {
    if (i % 2 === 0) {
      result.splice(e + 1);
    } else {
      result.splice(0, e);
    }
  });
  return result;
}
/* 


*/
/* My Answer 02(reduce 활용하여 코드 축약) */
function solution(arr, query) {
  return query.reduce((acc, e, i) => {
    if (i % 2 === 0) {
      return acc.slice(0, e + 1);
    } else {
      return acc.slice(e);
    }
  }, arr.slice());
}
