/* 🚫 Wrong Answer 01(4,5,12테스트에서 시간초과 발생) 🚫 */
function solution(ingredient) {
  let gred = ingredient.join("");
  let burger = 0;

  while (true) {
    const recipePattern = gred.replace("1231", "");
    if (recipePattern === gred) {
      break;
    }
    gred = recipePattern;
    burger++;
  }

  return burger;
}
/* 



*/
/* ✨ My Answer 01 ✨ (stack 활용)*/
function solution(ingredient) {
  const stack = [];
  let burger = 0;

  // stack에 ingredient의 원소를 하나씩 push
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);

    // stack의 길이가 4이상이고 stack의 마지막 4개 요소를 문자열로 변환한 결과가 "1231"과 동일할 경우 while루프에 진입
    while (stack.length >= 4 && stack.slice(-4).join("") === "1231") {
      burger++; // 버거 개수 증가
      stack.splice(-4); // stack의 마지막 4개 요소를 제거
    }
  }

  return burger;
}

/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(ingredient) {
  let stk = [];
  let count = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stk.push(ingredient[i]);
    // 인덱스 값을 이용하여 stk의 마지막 4요소를 비교
    if (
      stk[stk.length - 1] === 1 &&
      stk[stk.length - 2] === 3 &&
      stk[stk.length - 3] === 2 &&
      stk[stk.length - 4] === 1
    ) {
      count++;
      stk.splice(-4);
    }
  }
  return count;
}
/* 



*/
/* ⭐️ Another Approach 02 ⭐️ */
function solution(ingredient) {
  let count = 0;

  // ingredient를 순회하며 4요소씩 비교
  for (let i = 0; i < ingredient.length; i++) {
    // 4요소가 일치할 경우
    if (ingredient.slice(i, i + 4).join("") === "1231") {
      count++;
      ingredient.splice(i, 4); // 일치하는 요소를 제거
      i -= 3; // 인덱스를 감소시켜 다시 탐색
    }
  }

  return count;
}
