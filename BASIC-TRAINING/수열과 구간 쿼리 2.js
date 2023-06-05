/* My Answer 01 */
function solution(arr, queries) {
  let result = [];
  for (const [s, e, k] of queries) {
    // arr에서 [s-e]범위의 부분배열을 생성후 filter를 이용하여 k보다 큰 값들만 남김)
    const filtered = arr.slice(s, e + 1).filter((num) => num > k);
    // filtered가 비어있으면 -1, 비어있지 않으면 부분배열내 최소값을 result에 push
    result.push(filtered.length > 0 ? Math.min(...filtered) : -1);
  }
  return result;
}
/* 



*/
/* Another Approach 01(map을 사용하여 arr를 순회하며 각 쿼리 범위 내에서 k보다 크면서 가장 작은 값을 찾음) */
function solution(arr, queries) {
  return queries.map(([s, e, k]) => {
    let result = -1;
    for (let i = s; i <= e; i += 1) {
      const v = arr[i];
      if (v <= k) continue;
      result = result === -1 ? v : Math.min(result, v);
    }
    return result;
  });
}
/* 



*/
/* Another Approach 02(map을 사용하여 각 쿼리 범위 내에서 k보다 큰 값을 filter로 필터링, sort로 정렬하여 작은값을 반환) */
function solution(arr, queries) {
  return queries.map(
    ([s, e, k]) =>
      arr
        .slice(s, e + 1)
        .filter((n) => n > k)
        .sort((a, b) => a - b)[0] || -1
  );
}
/* 



*/
/* Another Approach 03(각 쿼리 범위 내 k보다 큰 값이 있으면 그중 최소값을 tempMax에 추가하고 없을경우 -1을 추가) */
function solution(arr, queries) {
  let answer = [];
  for (let i = 0; i < queries.length; i++) {
    const [s, e, k] = queries[i];
    let tempMax = Infinity;
    for (let j = s; j <= e; j++)
      if (arr[j] > k) tempMax = Math.min(tempMax, arr[j]);
    if (tempMax === Infinity) tempMax = -1;
    answer.push(tempMax);
  }
  return answer;
}
