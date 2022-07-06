// 입력되는 달(month)에 따라 각 달에 며칠이 있는지 보여주는 함수를 만들려고 합니다.

// 각 조건에 해당하는 알맞은 값을 입력해주세요.

function days(month) {
	if(Number(month)%2===0 && Number(month)!==8 && Number(month)!==2) {
		console.log(30);
  } else if (Number(month)===2) {
  console.log(28);
	} else {
    console.log(31);
  }
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