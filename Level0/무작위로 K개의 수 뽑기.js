/* 🚫 Wrong Answer 01(03, 16~18테스트 불통) */
function solution(arr, k) {
  const filtered = Array.from(new Set(arr));
  const len = filtered.length;

  if (len < k) {
    filtered.length = k;
    filtered.fill(-1, len, k);
  } else {
    return filtered.slice(0, k - len);
  }

  return filtered;
}
/*



*/
/* My Answer 01(순서 변형 가능성이 있는 set대신 filter를 사용하고 fill, slice 범위 수정) */
function solution(arr, k) {
  const filtered = arr.filter((v, i, a) => {
    return a.indexOf(v) === i;
  });
  const len = filtered.length;

  if (len < k) {
    filtered.length = k;
    filtered.fill(-1, len);
  } else {
    return filtered.slice(0, k);
  }

  return filtered;
}
/*



*/
/* Another Approach 01 */
function solution(arr, k) {
  const set = new Set(arr);
  return set.size < k
    ? [...set, ...Array(k - set.size).fill(-1)]
    : [...set].slice(0, k);
}

/*



*/
/* Another Approach 02 */
const solution = (a, k) => [...new Set(a), ...Array(k).fill(-1)].slice(0, k);
