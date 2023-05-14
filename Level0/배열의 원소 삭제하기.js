// answer 01(해당 방식은 큰 배열을 처리할 경우 성능이 좋지 않을 수 있음)
function solution(arr, delete_list) {
  return arr.filter((v) => !delete_list.includes(v));
}

// answer 02(중복제거에 효율적인 set()생성자와 has()메소드를 사용)
function solution(arr, delete_list) {
  const set = new Set(delete_list);
  return arr.filter((v) => !set.has(v));
}
