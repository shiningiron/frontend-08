import { useState } from "react"
export default function greetingStatePage () {

    const [greet,setGreet] = useState('안녕하세요')

    function greeting () {
        if(greet === "안녕하세요"){
            setGreet("반갑습니다")
        } else {
            setGreet("안녕하세요")
        }
        
    }


    return (
        <button onClick={greeting}>{greet}</button>
    )
}