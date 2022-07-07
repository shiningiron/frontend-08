// str은 무작위 숫자인 문자열입니다.  해당 문자열에서 가장 큰 수를 구하는 함수를 만들어야 합니다.
// 만약 str에 "12345"가 들어온다면 "5"를 나타내야 합니다.

// function bigNum(str) {
// 	let biggest = 0;
//     let a;
//     let b;
//     for(let i = 0; i < str.length; i++){
//         a = Number(str[i])
//         b = Number(str[i+1]);
//         if(biggest > a){
//            biggest = biggest
//         } else {
//             biggest = Number(a);
//         }
//     }
//     return biggest;
// }

// function bigNum(str) {
// 	let biggest = Number(str[0]);
//  for(let i = 1; i < str.length; i++){
//    if(Number(str[i]) > biggest) {
//      biggest = Number(str[i])
//    }
//  }
//   return biggest
// }

function bigNum(str) {
    let biggest;
    let num = []
    let a = str.split("")
      for (let i = 0; i < a.length; i++){
      num.push(Number(a[i]))
    }
    biggest = Math.max(...num)
    return biggest
  }