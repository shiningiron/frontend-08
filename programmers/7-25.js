// 임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
// n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.

function solution(n) {
  let answer = -1;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      answer = i + 1;
      return answer * answer;
    }
  }
  return answer;
}

// --------------------------------------

function solution(n) {
  let answer = -1;
  for (let i = 1; i * i <= n; i++) {
    if (i * i === n) {
      // answer = i+1
      // return answer * answer
      return (i + 1) ** 2;
    }
  }
  return answer;
}

// -------------------------------------

function solution(n) {
  let sqrt = Math.sqrt(n);
  if (Number.isInteger(sqrt)) {
    // return (sqrt+1)**2
    return Math.pow(sqrt + 1, 2);
  } else {
    return -1;
  }
}
