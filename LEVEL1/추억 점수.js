/* ✨ My Answer 01 ✨ */
function solution(name, yearning, photo) {
  const result = [];
  const map = new Map();
  // photo배열 내에서 name에 없는 이름을 필터링
  const filtered = photo.map((names) =>
    names.filter((n) => name.some((item) => item === n))
  );

  // name과 yearning를 매핑
  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }

  // filtered내의 이름들을 점수로 환산하여 합산
  filtered.forEach((names) => {
    result.push(
      names.length > 0 ? names.reduce((a, n) => +a + map.get(n), "") : 0
    );
  });

  return result;
}
/* 



*/
/* ✨ My Answer 02 ✨ */
function solution(name, yearning, photo) {
  let map = new Map();

  // name 배열과 yearning 배열을 map에 매핑
  for (let i = 0; i < name.length; i++) {
    map.set(name[i], yearning[i]);
  }

  let result = [];

  // 사진별 추억 점수를 계산하여 result에 저장
  for (let i = 0; i < photo.length; i++) {
    let score = 0;

    for (let j = 0; j < photo[i].length; j++) {
      const person = photo[i][j];

      if (map.has(person)) {
        score += map.get(person);
      }
    }

    result.push(score);
  }

  return result;
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(name, yearning, photo) {
  // photo 배열을 순회하면서 각 요소에 대해 처리하여 새로운 배열을 반환
  return photo.map(
    (v) =>
      v.reduce(
        (
          a,
          c // v 배열의 요소를 누적하여 처리하여 결과 값을 반환
        ) => (a += yearning[name.indexOf(c)] ?? 0),
        0
      ) // name 배열에서 c의 인덱스를 찾아 yearning 배열의 해당 인덱스 값과 누적하여 합산
  );
}
