/* answer 01(직관적인 방법) */
function solution(arr1, arr2) {
  if (arr1.length > arr2.length) {
    return 1;
  } else if (arr1.length === arr2.length) {
    const sumArr1 = arr1.reduce((acc, curr) => acc + curr, 0);
    const sumArr2 = arr2.reduce((acc, curr) => acc + curr, 0);
    return sumArr1 > sumArr2 ? 1 : sumArr1 === sumArr2 ? 0 : -1;
  } else {
    return -1;
  }
}

/* answer 02(다항연산자를 통해 01의 과정을 간소화) */
function solution(arr1, arr2) {
  if (arr1.length === arr2.length) {
    const sumArr1 = arr1.reduce((acc, curr) => acc + curr, 0);
    const sumArr2 = arr2.reduce((acc, curr) => acc + curr, 0);
    return sumArr1 > sumArr2 ? 1 : sumArr1 === sumArr2 ? 0 : -1;
  } else {
    return arr1.length > arr2.length ? 1 : -1;
  }
}

/* answer 03(양수, 음수를 판별하는 Math.sign를 이용하여 과정 간소화) */
function solution(arr1, arr2) {
  const sumArr1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sumArr2 = arr2.reduce((acc, curr) => acc + curr, 0);
  return arr1.length === arr2.length
    ? Math.sign(sumArr1 - sumArr2)
    : Math.sign(arr1.length - arr2.length);
}

/* answer 03(03의 과정 간소화) */
function solution(arr1, arr2) {
  const sumArr1 = arr1.reduce((acc, curr) => acc + curr, 0);
  const sumArr2 = arr2.reduce((acc, curr) => acc + curr, 0);
  const arrLengthDiff = arr1.length - arr2.length;
  return arrLengthDiff === 0
    ? Math.sign(sumArr1 - sumArr2)
    : Math.sign(arrLengthDiff);
}
