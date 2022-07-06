import { useState } from "react";

export default function TokenStatePage () {

    const [tokenNum,setTokenNum] = useState("000000")

    function token (){
        setTokenNum(String(Math.floor( Math.random() *1000000)).padStart(6,"0"))
    }

    return (
        <>
            <div>{tokenNum}</div>
            <button onClick={token}>인증번호 전송</button>
        </>
    )
}