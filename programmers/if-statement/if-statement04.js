// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.

function days (month) {
  if(month===1 || month===3 || month===5 || month===7 || month===8 || month===10 || month===12) {
    return 31
  } else if(month===2){
    return 28
  } else if(month===4 || month===6 || month===9 || month===11){
    return 30
  }
}


//  ** 객체 이용하는 방법


const monthList = {
  1:31,
  2:28,
  3:31,
  4:30,
  5:31,
  6:30,
  7:31,
  8:31,
  9:30,
  10:31,
  11:30,
  12:31
}

function days (month) {
  return monthList[month]
}
days(1); // 31
days(2); // 28
days(4); // 30
days(8); // 31

// 1월 : 31일
// 2월 : 28일
// 3월 : 31일
// 4월 : 30일
// 5월 : 31일
// 6월 : 30일
// 7월 : 31일
// 8월 : 31일
// 9월 : 30일
// 10월 : 31일
// 11월 : 30일
// 12월 : 31일