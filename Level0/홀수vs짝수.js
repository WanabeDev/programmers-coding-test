function solution(num_list) {
  const result = num_list.reduce(
    (acc, cur, idx) => {
      if (idx % 2 === 0) {
        acc[1] += cur;
      } else {
        acc[0] += cur;
      }
      return acc;
    },
    [0, 0]
  );
  return Math.max(...result);
}
