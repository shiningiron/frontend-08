// 프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// 제한 조건
// phone_number는 길이 4 이상, 20이하인 문자열입니다.


function solution(phone_number) {
    let answer = '';
    for ( i = 0; i < phone_number.length; i++){
        if(i<phone_number.length-4){
            //뒷 네자리르 제외한 앞의 번호들은 *로 표시
            answer += '*'
        } else {
            //뒷 네자리르 넣어준다
            answer += phone_number[i] // answer = answer + phone_number[i]
        }
    }
    console.log(answer)
    return answer;
}

-------------

// function solution(phone_number) {
//     let answer = '';
//     answer += answer.padStart(phone_number.length-4,'*')//길이 값
//     answer += phone_number.slice(phone_number.length-4, phone_number.length)//index 값
//     return answer
// }