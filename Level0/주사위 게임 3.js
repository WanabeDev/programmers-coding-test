/* Wrong Answer 01(6,29,38 테스트를 통과하지 못한 코드🚫) */
function solution(a, b, c, d) {
  // 매개변수들을 배열로 변환
  const dices = [a, b, c, d];
  // 하나 이상 중복되는 주사위값을 배열 형태로 구하는 코드
  const dup = dices.reduce((acc, v, i, arr) => {
    if (arr.indexOf(v) !== i && acc.indexOf(v) === -1) {
      acc.push(v);
    }
    return acc;
  }, []);
  // duplicates를 통해 arr내에서 중복값의 개수를 구하는 코드
  const dupCount = dices.filter((item) => item === dup[0]).length;
  // 중복값을 제외한 나머지 정수를 구하는 코드
  const rest = dices.filter((item) => item !== dup[0]);

  //네 수가 같을 때
  if (dupCount === 4) {
    return 1111 * dices[0];
    //세 수가 같을 때 (📌dices[0]를 활용하면 [4,1,1,1]와 같이 rest값이 맨 앞에오는 경우를 대처하지 못함)
  } else if (dupCount === 3) {
    return Math.pow(10 * dices[0] + rest[0], 2);
    //두 수가 같을 때
  } else if (dupCount === 2) {
    //두 수를 제외한 나머지가 다를 때
    if (dup.length === 2) {
      return (dup[0] + dup[1]) * Math.abs(dup[0] - dup[1]);
      //두 수를 제외한 나머지가 같을 때
    } else if (dup.length === 1) {
      return rest[0] * rest[1];
    }
  } else {
    return Math.min(...dices);
  }
}
/*



*/
/* My Answer 01(최종 통과👍) */
function solution(a, b, c, d) {
  // 매개변수들을 배열로 변환
  const dices = [a, b, c, d];
  // 하나 이상 중복되는 주사위값을 배열 형태로 구하는 코드
  const dup = dices.reduce((acc, v, i, arr) => {
    if (arr.indexOf(v) !== i && acc.indexOf(v) === -1) {
      acc.push(v);
    }
    return acc;
  }, []);
  // duplicates를 통해 arr내에서 중복값의 개수를 구하는 코드
  const dupCount = dices.filter((item) => item === dup[0]).length;
  // 중복값을 제외한 나머지 정수를 구하는 코드
  const rest = dices.filter((item) => item !== dup[0]);

  //네 수가 같을 때
  if (dupCount === 4) {
    return 1111 * dices[0];
    //세 수가 같을 때(👍dices[0]를 dup[0]으로 수정)
  } else if (dupCount === 3) {
    return Math.pow(10 * dup[0] + rest[0], 2);
    //두 수가 같을 때
  } else if (dupCount === 2) {
    //두 수를 제외한 나머지가 다를 때
    if (dup.length === 2) {
      return (dup[0] + dup[1]) * Math.abs(dup[0] - dup[1]);
      //두 수를 제외한 나머지가 같을 때
    } else if (dup.length === 1) {
      return rest[0] * rest[1];
    }
  } else {
    return Math.min(...dices);
  }
}
/*



*/
/* My Answer 02(switch, case 활용) */
function solution(a, b, c, d) {
  const arr = [a, b, c, d];
  const dup = arr.reduce((acc, v, i, arr) => {
    if (arr.indexOf(v) !== i && acc.indexOf(v) === -1) {
      acc.push(v);
    }
    return acc;
  }, []);
  const dupCount = arr.filter((item) => item === dup[0]).length;
  const rest = arr.filter((item) => item !== dup[0]);

  switch (dupCount) {
    case 4:
      return 1111 * arr[0];
    case 3:
      return (10 * dup[0] + rest[0]) ** 2;
    case 2:
      if (dup.length === 2) {
        return (dup[0] + dup[1]) * Math.abs(dup[0] - dup[1]);
      } else if (dup.length === 1) {
        return rest[0] * rest[1];
      }
      break;
    default:
      return Math.min(...arr);
  }
}
/*



*/
/* Another Approach 01(map 자료구조 활용) */
function count(arr) {
  //숫자의 등장 횟수를 저장하는 Map 객체
  const counter = new Map();
  for (const num of arr) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }
  //등장 횟수에 따라 정렬된 숫자 배열
  const sortedByCnt = [...counter.keys()].sort(
    (a, b) => counter.get(b) - counter.get(a)
  );
  //가장 많이 등장하는 숫자
  const maxCnt = Math.max(...counter.values());
  return [sortedByCnt, maxCnt];
}

function solution(a, b, c, d) {
  const [arr, maxCnt] = count([a, b, c, d]); //arr:중복을 필터링한 나머지 maxCnt:중복되는 수
  const [p, q, r, s] = arr;
  if (arr.length === 1) {
    return p * 1111;
  }
  if (arr.length === 2) {
    return maxCnt === 2 ? (p + q) * Math.abs(p - q) : (10 * p + q) ** 2;
  }
  if (arr.length === 3) {
    return q * r;
  }
  return Math.min(p, q, r, s);
}
