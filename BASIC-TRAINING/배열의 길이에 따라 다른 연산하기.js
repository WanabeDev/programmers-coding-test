/* answer01(map, if활용) */
function solution(arr, n) {
  const lenOdd = arr.map((v, i) => {
    if (i % 2 === 0) {
      return v + n;
    } else {
      return v;
    }
  });
  const lenEven = arr.map((v, i) => {
    if (i % 2 !== 0) {
      return v + n;
    } else {
      return v;
    }
  });
  return arr.length % 2 !== 0 ? lenOdd : lenEven;
}

/* answer02(map, 3항 연산자, XOR연산자(^) 활용) */
function solution(arr, n) {
  return arr.map((v, i) => (arr.length % 2 ^ i % 2 ? v + n : v));
}

/* answer03(map, 3항 연산자, !== 활용) */
function solution(arr, n) {
  return arr.map((v, i) => (arr.length % 2 !== i % 2 ? v + n : v));
}
