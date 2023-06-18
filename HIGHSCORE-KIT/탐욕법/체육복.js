/* My Answer 01(학생별 체육복 개수를 체크하여 수업 참여가능 학생수를 구하는 방법) */
function solution(n, lost, reserve) {
  let clothes = Array(n).fill(1);

  //체육복을 잃어버린 사람과 여분을 가지고 있는 학생 체크
  lost.map((num) => (clothes[num - 1] = 0));
  reserve.map((num) => (clothes[num - 1] += 1));

  for (let i = 0; i < n; i++) {
    // 잃어버린 학생 앞 번호 학생에게 빌릴 때
    if (clothes[i] === 0 && clothes[i - 1] === 2) {
      clothes[i] = 1;
      clothes[i - 1] = 1;
      // 잃어버린 학생 뒷 번호 학생에게 빌릴 때
    } else if (clothes[i] === 0 && clothes[i + 1] === 2) {
      clothes[i] = 1;
      clothes[i + 1] = 1;
    }
  }

  return clothes.filter((c) => c > 0).length;
}
