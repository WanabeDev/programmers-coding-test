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
