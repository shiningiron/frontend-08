// function solution(n) {
//     let answer = n
//     for(let i = 1; i <= n/2; i++){
//         if(n%i === 0) answer += i
//     }
//     return answer
// }

function solution(n) {
    const answer = new Array(n).fill(1).reduce((cu, el, i) => {
        let num = el + i
        return n % num === 0 ? cu+num : cu
    },0)
    
    return answer
    
   }