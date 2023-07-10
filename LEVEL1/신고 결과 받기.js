/* ✨ My Answer 01 ✨ */
function solution(id_list, report, k) {
  const uniqueReport = Array.from(new Set(report)); // 중복 제거된 신고 목록
  const result = Array(id_list.length).fill(0); // 결과 배열 초기화
  const idMap = new Map(id_list.map((id) => [id, []])); // 회원별 신고자 등록을 위한 맵
  const reportMap = new Map(); // 인물 별 신고 회수 기록을 위한 맵

  uniqueReport.forEach((entry) => {
    const [key, value] = entry.split(" ");
    if (idMap.has(key)) {
      idMap.get(key).push(value); // 회원별 신고자 등록
      reportMap.set(value, (reportMap.get(value) || 0) + 1); // 인물 별 신고 회수 기록
    }
  });

  const reported = Array.from(reportMap.entries()) // k번 이상 신고된 인물 필터링
    .filter(([key, value]) => value >= k)
    .map(([key]) => key);

  if (reported.length < 1) {
    return result; // k번 이상 신고된 인물이 없는 경우 결과 배열 반환
  } else {
    idMap.forEach((values, key) => {
      const filteredVal = values.filter((value) => reported.includes(value));
      idMap.set(key, filteredVal); // k번 이상 신고된 인물 필터링하여 업데이트
    });

    return Array.from(idMap.values(), (arr) => arr.length); // 결과 배열 반환
  }
}
/* 



*/
/* ⭐️ Another Approach 01 ⭐️ */
function solution(id_list, report, k) {
  // 중복 제거된 신고 목록을 이차원 배열로 변환
  let reports = [...new Set(report)].map((a) => {
    return a.split(" ");
  });

  // 신고된 횟수 기록
  let counts = new Map();
  for (const bad of reports) {
    counts.set(bad[1], counts.get(bad[1]) + 1 || 1);
  }

  // k번 이상 신고된 인물 기록
  let good = new Map();
  for (const report of reports) {
    if (counts.get(report[1]) >= k) {
      good.set(report[0], good.get(report[0]) + 1 || 1);
    }
  }

  let answer = id_list.map((a) => good.get(a) || 0); // 결과 배열 생성
  return answer; // 결과 배열 반환
}
