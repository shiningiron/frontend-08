// num을 입력받아 1부터 num까지의 숫자 중 홀수로 구성된 문자열을 만들어야 합니다.
// num이 5일 경우에는 "135"입니다.

function makeOdd(num) {
	let str = '';
    for(let i = 1; i <= num; i=i+2){
        str = str + i;
    }
    return str;
}


// function makeOdd(num) {
//     let answer =''
//     for(let i = 1; i<=num; i++){
//       if(i%2===1) answer += i
//     }
//     return answer;
//   }
  