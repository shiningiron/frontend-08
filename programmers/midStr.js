function solution(s) {
  
    const center = Math.floor(s.length / 2)
    const answer = s.length % 2 !== 0
    ? s[center]
    :  s.slice(center-1, center+1)
    return answer
    }