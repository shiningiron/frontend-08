export default function greetingLetDocPage () {
    let hi = true

   function greeting () {
       
       if(hi===true){
        document.getElementById("button").innerText = '반갑습니다'
        hi = false
       } else {
        document.getElementById("button").innerText = '안녕하세요'
        hi = true
       }
       
       
   }

    return (
        <button id='button' onClick={greeting}>안녕하세요</button>
    )
}