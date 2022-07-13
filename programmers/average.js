

// function solution(arr) {
//     let sum = 0;
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i]
//     }
//     return sum / arr.length
// }

function solution(arr) {
  
    const sum = arr.reduce((cu, el)=> {
      console.log(cu, el)
        return cu+el
    }, 0)
    return sum / arr.length
 }