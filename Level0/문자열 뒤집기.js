function solution(my_string, s, e) {
  const reverse = [...my_string.slice(s, e + 1)].reverse();
  return s !== e
    ? [...my_string.slice(0, s), ...reverse, ...my_string.slice(e + 1)].join("")
    : my_string;
}
