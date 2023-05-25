/* My Answer 01-1(객체 활용) */
function solution(n, slicer, num_list) {
  const [s, m, e] = slicer;
  const nums = {
    n1: num_list.slice(0, m + 1),
    n2: num_list.slice(s),
    n3: num_list.slice(s, m + 1),
    n4: num_list.slice(s, m + 1).filter((_, i) => i % e === 0),
  };

  return n === 1 ? nums.n1 : n === 2 ? nums.n2 : n === 3 ? nums.n3 : nums.n4;
}
/* 



*/
/* My Answer 01-2(위 코드 보완(객체 속성명을 숫자로 바꾸어 n값과 일치하는 속성의 함수를 호출하도록 함)) */
function solution(n, slicer, num_list) {
  const [s, m, e] = slicer;
  const nums = {
    1: () => num_list.slice(0, m + 1),
    2: () => num_list.slice(s),
    3: () => num_list.slice(s, m + 1),
    4: () => num_list.slice(s, m + 1).filter((_, i) => i % e === 0),
  };

  return nums[n] ? nums[n]() : [];
}
/* 



*/
/* My Answer 02(switch/case 활용) */
function solution(n, slicer, num_list) {
  const [s, m, e] = slicer;

  switch (n) {
    case 1:
      return num_list.slice(0, m + 1);
    case 2:
      return num_list.slice(s);
    case 3:
      return num_list.slice(s, m + 1);
    case 4:
      return num_list.slice(s, m + 1).filter((_, i) => !(i % e));
  }
}

return slices[n](num_list, slicer);
