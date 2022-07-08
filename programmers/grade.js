// 입력되는 score에 따라 알맞은 등급을 적어야 합니다.

// 100~90 → "A"

// 89~80 → "B"

// 79~70 → "C"

// 69~60 → "D"

// 59점 이하는 "F"

// 100점 초과나 0점 미만은 "잘못된 점수입니다"라는 문구를 띄워주세요.


// function grade(score) {
//     if(score<0 || score>100){
//       return "잘못된 점수입니다"
//     } 
//     if(score<=100 && score>=90){
//       return "A"
//     } else if(score<=89 && score>=80){
//       return "B"
//     } else if(score<=79 && score>=70){
//       return "C"
//     } else if(score<=69 && score>=60){
//       return "D"
//     } else{
//       return "F"
//     }
//   }

function grade(score) {
    if(score<0 || score>100) return "잘못된 점수입니다"

    let answer = ''
    if(score >= 90){
        // 100 99 98 97 96 95 94 93 92 91 90
        answer = 'A'
    } else if(score >= 80){
        // 89 88 87 86 ... 80
        answer = 'B'
    } else if(score >= 70){
        // 79 78 77 ... 70
        answer = 'C'
    } else if(score >= 60){
        // 69 68 67 ... 60
        answer = 'D'
    } else {
        answer = 'F'
    }
    return answer
}