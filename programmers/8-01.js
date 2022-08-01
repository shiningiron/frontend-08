// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

const month = {
  1: 31,
  2: 29,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

const week = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];

function solution(a, b) {
  let answer = 0;
  for (i = 1; i < a; i++) {
    answer += month[i];
  }
  answer += b - 1;
  console.log(answer);

  return week[answer % 7];
}

// -------------------------------
function solution(a, b) {
  const answer = new Array(a).fill(1).reduce((acc, cur, i) => {
    const mn = cur + i;
    return (
      acc +
      (mn !== a
        ? // 이전 월수일 경우
          month[mn]
        : // 해당 월수일 경우(=a와 동일할 경우)
          b - 1)
    );
  }, 0);
  return week[answer % 7];
}

// ------------------------------

function solution(a, b) {
  const answer = new Date(2016, a - 1, b).getDay();
  return week[answer];

  return week[answer % 7];
}
