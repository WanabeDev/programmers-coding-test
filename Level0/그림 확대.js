/* My Answer 01 */
function solution(picture, k) {
  let result = [];
  const pic = [...picture];

  // picture의 폭을 k배 만큼 sizeUp
  for (let i = 0; i < pic.length; i++) {
    const sizeUp = pic[i]
      .split("")
      .map((char) => char.repeat(k))
      .join("");
    // picture의 높이를 k배 만큼 sizeUp
    for (let j = 0; j < k; j++) {
      result.push(sizeUp);
    }
  }

  return result;
}
/*



*/
/* Another Approach 01 */
function solution(picture, k) {
  var answer = [];

  picture.forEach((line) => {
    // reduce와 repeat를 활용하여 폭을 k배 만큼 sizeUp
    const expanded = [...line].reduce((acc, cur) => acc + cur.repeat(k), "");

    // fof를 활용하여 높이를 k배 만큼 sizeUp
    for (let i = 0; i < k; i++) answer.push(expanded);
  });

  return answer;
}
/*



*/
/* Another Approach 02 */
function solution(picture, k) {
  let ans = [];

  // picture를 순회하며 폭을 k만큼 sizeUp 한 결과를 k만큼 길이 sizeUp하여 push
  for (let p of picture)
    ans.push(
      ...Array(k).fill(
        p
          .split("")
          .map((v) => v.repeat(k))
          .join("")
      )
    );

  return ans;
}
