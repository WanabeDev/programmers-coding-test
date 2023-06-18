/* My Answer 01(회전한 크기로 변환 후 최대 너비와 높이를 구하는 방법) */
function solution(sizes) {
  let rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h]));

  let [maxWidth, maxHeight] = rotated.reduce(
    ([maxW, maxH], [w, h]) => {
      return [Math.max(maxW, w), Math.max(maxH, h)];
    },
    [0, 0]
  );

  let maxProduct = maxWidth * maxHeight;

  return maxProduct;
}
/* 


*/
/* Another Approach 01(한번의 reduce로 최대 너비와 높이를 찾는 방법) */
function solution(sizes) {
  const [hor, ver] = sizes.reduce(
    ([h, v], [a, b]) => [
      Math.max(h, Math.max(a, b)),
      Math.max(v, Math.min(a, b)),
    ],
    [0, 0]
  );
  return hor * ver;
}

/* 
let [h, v] = [0, 0]; // 초기값

// 첫 번째 요소
let [a, b] = [60, 50];
h = Math.max(h, Math.max(a, b)); // h = Math.max(0, 60) = 60
v = Math.max(v, Math.min(a, b)); // v = Math.max(0, 50) = 50

// 두 번째 요소
[a, b] = [30, 70];
h = Math.max(h, Math.max(a, b)); // h = Math.max(60, 70) = 70
v = Math.max(v, Math.min(a, b)); // v = Math.max(50, 30) = 50

// 세 번째 요소
[a, b] = [60, 30];
h = Math.max(h, Math.max(a, b)); // h = Math.max(70, 60) = 70
v = Math.max(v, Math.min(a, b)); // v = Math.max(50, 30) = 50

// 네 번째 요소
[a, b] = [80, 40];
h = Math.max(h, Math.max(a, b)); // h = Math.max(70, 80) = 80
v = Math.max(v, Math.min(a, b)); // v = Math.max(50, 40) = 50

console.log(h, v); // 출력: 80 50
 */
